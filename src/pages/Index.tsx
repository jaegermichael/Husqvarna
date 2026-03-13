import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection";
import LocationsSection from "@/components/LocationsSection";
import Footer from "@/components/Footer";
import { AnimatedCursor } from "@/components/AnimatedCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import LogoMarquee from "@/components/LogoMarquee";
import TestimonialsSection from "@/components/TestimonialsSection";
import { MessageCircle } from "lucide-react";
import ChatbotWidget from "@/components/ChatbotWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedCursor />
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <LogoMarquee />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ServicesSection />
      <LocationsSection />
      <Footer />

      <a
        href="https://wa.me/263772922615"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow"
      >
        <MessageCircle className="w-7 h-7" aria-hidden="true" />
      </a>

      <ChatbotWidget />
    </div>
  );
};

export default Index;
