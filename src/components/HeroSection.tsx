import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo-mjp.png";
import heroImg from "@/assets/office-hero.webp";

const HeroSection = () => {
  const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current && window.innerWidth >= 768) {
        const scrollY = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="inicio" className="relative h-screen overflow-hidden w-screen max-w-full">
      {/* Parallax BG */}
      <div
        ref={bgRef}
        className="absolute inset-0 -top-20 bottom-0 will-change-transform"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "130%",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/55" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 -translate-y-10 md:translate-y-0">
        <motion.img
          src={logo}
          alt="MJP Logo"
          className="h-32 md:h-44 mb-8 brightness-0 invert"
          style={{ width: '280px', height: 'auto' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground max-w-4xl leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Soluciones Contables para el Crecimiento de tu Negocio
        </motion.h1>
        <motion.p
          className="font-body text-primary-foreground/80 mt-4 md:mt-6 text-base md:text-lg max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Estudio Contable, Impositivo, Laboral y Societario en Resistencia, Chaco
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#contacto"
            className="bg-gold text-accent-foreground font-body font-bold px-8 py-3.5 rounded-md text-sm uppercase tracking-wider hover:brightness-110 transition-all duration-300"
          >
            Consultá Ahora
          </a>
          <a
            href="#servicios"
            className="border-2 border-primary-foreground text-primary-foreground font-body font-bold px-8 py-3.5 rounded-md text-sm uppercase tracking-wider hover:bg-primary-foreground/10 transition-all duration-300"
          >
            Conocé Nuestros Servicios
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
