import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  "Atención personalizada y dedicada",
  "Equipo de profesionales matriculados",
  "Soluciones para PyMEs en crecimiento",
  "Respuesta rápida y asesoramiento continuo",
];

const WhyChooseUs = () => (
  <section className="relative bg-navy py-20 md:py-28 overflow-hidden">
    {/* Diagonal pattern */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, white 40px, white 41px)`,
      }}
    />

    <div className="container mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
      <motion.blockquote
        className="font-display text-2xl md:text-3xl italic text-gold leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        "Brindamos soluciones reales para el crecimiento de tu negocio"
      </motion.blockquote>

      <motion.ul
        className="space-y-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {reasons.map((r) => (
          <li key={r} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
            <span className="font-body text-primary-foreground text-lg">{r}</span>
          </li>
        ))}
      </motion.ul>
    </div>
  </section>
);

export default WhyChooseUs;
