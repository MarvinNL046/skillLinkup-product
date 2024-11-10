import ButtonSignin from "@/components/ButtonSignin";
import Hero from "@/components/Hero";
import FeaturesGrid from "@/components/FeaturesGrid";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <header className="p-4 flex justify-end max-w-7xl mx-auto">
        <ButtonSignin text="Sign In" />
      </header>
      
      <main>
        <Hero />
        <FeaturesGrid />
        <Pricing />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </>
  );
}