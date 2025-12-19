import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Index() {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
}
