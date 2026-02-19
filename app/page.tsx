import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import RegistrationSection from "@/components/RegistrationSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemsSection />
      <BenefitsSection />
      <HowItWorksSection />
      <AboutSection />
      <FAQSection />
      <RegistrationSection />
    </main>
  );
}
