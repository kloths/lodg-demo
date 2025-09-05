import CTAFooter from "@/components/cta-footer";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Why from "@/components/why";

export default function Home() {
  return (
    <>
      <Header className="bg-white" />
      <main>
        <Hero />
        <Why />
        <Features />
        <Pricing />
        <FAQ />
        <CTAFooter />
      </main>
      <Footer className="bg-white" />
    </>
  );
}
