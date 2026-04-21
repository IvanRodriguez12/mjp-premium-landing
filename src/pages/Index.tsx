import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const ReviewsSection = lazy(() => import("@/components/ReviewsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

const Fallback = () => <div style={{ minHeight: 200 }} aria-hidden="true" />;

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <TrustBar />
    <Suspense fallback={<Fallback />}>
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <ReviewsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </Suspense>
  </>
);

export default Index;