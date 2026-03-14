import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Download from "@/components/Download";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />

        {/* Banner */}
        <div className="w-full">
          <Image
            src="/banner.png"
            alt="ProMax TV Player Banner"
            width={1920}
            height={400}
            className="w-full object-cover"
            priority
          />
        </div>

        <Pricing />
        <Download />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
