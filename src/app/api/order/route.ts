import { NextRequest, NextResponse } from "next/server";

interface OrderBody {
  name: string;
  email: string;
  whatsapp: string;
  country: string;
  packName: string;
  packPrice: number;
  packCodes: number;
}

function clientEmailHtml(data: OrderBody): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="background:#020617;color:#e2e8f0;font-family:Inter,sans-serif;margin:0;padding:0">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px">
    <div style="text-align:center;margin-bottom:32px">
      <h1 style="font-size:24px;font-weight:800;background:linear-gradient(to right,#f87171,#fb923c);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin:0">
        ProMax TV Player
      </h1>
      <p style="color:#94a3b8;margin-top:4px">Confirmation de commande</p>
    </div>
    <div style="background:#0f172a;border:1px solid #1e293b;border-radius:16px;padding:28px;margin-bottom:24px">
      <h2 style="color:#f1f5f9;font-size:18px;margin-top:0">Bonjour ${data.name},</h2>
      <p style="color:#94a3b8;line-height:1.6">
        Nous avons bien reçu votre commande pour le <strong style="color:#f1f5f9">${data.packName}</strong>.
        Notre équipe va traiter votre demande et vous envoyer votre code IPTV très prochainement.
      </p>
      <div style="background:#1e293b;border-radius:12px;padding:20px;margin:20px 0">
        <p style="margin:0 0 8px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.05em">Résumé de commande</p>
        <p style="margin:4px 0;color:#f1f5f9"><strong>Pack :</strong> ${data.packName}</p>
        <p style="margin:4px 0;color:#f1f5f9"><strong>Codes :</strong> ${data.packCodes} code${data.packCodes > 1 ? "s" : ""} IPTV 12 mois</p>
        <p style="margin:4px 0;color:#f87171;font-size:20px;font-weight:800">${data.packPrice}€</p>
      </div>
      <p style="color:#94a3b8;line-height:1.6;margin-bottom:0">
        Pour toute question, contactez-nous sur WhatsApp : <a href="https://wa.me/212667451586" style="color:#4ade80">+212 667-451586</a>
      </p>
    </div>
    <p style="color:#475569;font-size:12px;text-align:center">
      ⚠️ Vérifiez votre dossier spam si vous ne recevez pas notre email de suivi.<br>
      © 2025 ProMax TV Player · promax-tv-player.com
    </p>
  </div>
</body>
</html>`;
}

function adminEmailHtml(data: OrderBody): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<body style="background:#020617;color:#e2e8f0;font-family:sans-serif;padding:20px">
  <h2 style="color:#f87171">🛒 Nouvelle commande — ProMax TV Player</h2>
  <table style="width:100%;border-collapse:collapse">
    <tr><td style="padding:6px 0;color:#94a3b8">Nom</td><td style="color:#f1f5f9;font-weight:600">${data.name}</td></tr>
    <tr><td style="padding:6px 0;color:#94a3b8">Email</td><td style="color:#f1f5f9">${data.email}</td></tr>
    <tr><td style="padding:6px 0;color:#94a3b8">WhatsApp</td><td style="color:#4ade80">${data.whatsapp}</td></tr>
    <tr><td style="padding:6px 0;color:#94a3b8">Pays</td><td style="color:#f1f5f9">${data.country}</td></tr>
    <tr><td style="padding:6px 0;color:#94a3b8">Pack</td><td style="color:#f1f5f9;font-weight:600">${data.packName}</td></tr>
    <tr><td style="padding:6px 0;color:#94a3b8">Prix</td><td style="color:#fb923c;font-weight:800;font-size:18px">${data.packPrice}€</td></tr>
    <tr><td style="padding:6px 0;color:#94a3b8">Codes</td><td style="color:#f1f5f9">${data.packCodes}</td></tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const data: OrderBody = await req.json();

    const resendApiKey = process.env.RESEND_API_KEY;
    const adminEmail = process.env.ADMIN_EMAIL;
    const fromEmail = process.env.FROM_EMAIL;

    if (!resendApiKey || !adminEmail || !fromEmail) {
      // Return success even without env vars — don't break user experience
      return NextResponse.json({ success: true });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(resendApiKey);

    // Send client confirmation
    await resend.emails.send({
      from: `ProMax TV Player <${fromEmail}>`,
      to: data.email,
      subject: `✅ Confirmation de commande — ${data.packName}`,
      html: clientEmailHtml(data),
    });

    // Send admin notification
    await resend.emails.send({
      from: `ProMax TV Player <${fromEmail}>`,
      to: adminEmail,
      subject: `🛒 Nouvelle commande : ${data.packName} — ${data.name}`,
      html: adminEmailHtml(data),
    });

    return NextResponse.json({ success: true });
  } catch {
    // Always return success to avoid user-facing errors
    return NextResponse.json({ success: true });
  }
}
