import { motion } from "framer-motion";
import { Linkedin, Facebook, Instagram, MessageCircle } from "lucide-react";
import ownerPhoto from "@/assets/owner-photo.webp";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "20+", label: "Años" },
  { value: "61", label: "Reseñas ⭐5.0" },
  { value: "100%", label: "Compromiso" },
];

const AnimatedStat = ({ value, label }: { value: string; label: string }) => {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const numeric = parseInt(value.replace(/\D/g, ""));
          const suffix = value.replace(/[0-9]/g, "");
          let start = 0;
          const duration = 1500;
          const step = 16;
          const increment = numeric / (duration / step);

          const timer = setInterval(() => {
            start += increment;
            if (start >= numeric) {
              setDisplay(numeric + suffix);
              clearInterval(timer);
            } else {
              setDisplay(Math.floor(start) + suffix);
            }
          }, step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-2xl md:text-3xl text-navy">{display}</p>
      <p className="font-body text-sm text-steel mt-1">{label}</p>
    </div>
  );
};

const AboutSection = () => (
  <section id="nosotros" className="bg-soft-gray py-20 md:py-28">
    <div className="container mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
      {/* Photo */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative">
          <div className="absolute -inset-3 border-2 border-gold rounded-lg" />
          <img
            src={ownerPhoto}
            alt="Maximiliano Paletto — CEO de MJP Estudio Contable"
            className="relative rounded-lg w-72 md:w-80 lg:w-96 object-cover aspect-[3/4]"
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <span className="font-body text-sm uppercase tracking-[0.2em] text-gold font-bold">
          Quiénes Somos
        </span>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mt-3">
          Maximiliano Paletto
        </h2>
        <p className="font-body text-steel mt-1 text-lg">
          CEO & Contador Principal — MJP Estudio Contable
        </p>

        <div className="flex gap-3 mt-4">
          <a
            href="https://www.linkedin.com/in/maximiliano-paletto-9264a22a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gold hover:brightness-125 transition"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://www.facebook.com/EstudioMJP/?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gold hover:brightness-125 transition"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/estudiocontablemjp/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gold hover:brightness-125 transition"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/5493624385300"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gold hover:brightness-125 transition"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
        <p className="font-body text-foreground/80 mt-6 leading-relaxed">
          En Estudio MJP nos especializamos en brindar soluciones contables,
          impositivas, laborales y societarias a medida. Con más de 20 años de
          experiencia, ayudamos a pequeñas y medianas empresas a crecer de forma
          inteligente, protegiendo su patrimonio y optimizando sus recursos.
        </p>

        <div className="grid grid-cols-3 gap-4 mt-8">
          {stats.map((s) => (
            <AnimatedStat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
