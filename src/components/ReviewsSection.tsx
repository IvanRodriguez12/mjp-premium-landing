import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "María G.", initials: "MG", text: "Excelente servicio, son muy amables y te atienden re bien." },
  { name: "Carlos R.", initials: "CR", text: "Muy buena atención, muy cordiales y empáticos con nuestro caso." },
  { name: "Laura P.", initials: "LP", text: "Excelente atención, gracias al contador por su tiempo y dedicación." },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
    ))}
  </div>
);

const ReviewsSection = () => (
  <section id="opiniones" className="bg-soft-gray py-20 md:py-28">
    <div className="container mx-auto text-center">
      <span className="font-body text-sm uppercase tracking-[0.2em] text-amber-700 font-bold">
        Lo Que Dicen Nuestros Clientes
      </span>
      <h2 className="font-display text-3xl md:text-4xl text-foreground mt-3 mb-12">
        61 reseñas con 5.0 estrellas en Google
      </h2>

      <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            className="min-w-[280px] md:min-w-0 snap-center bg-card rounded-lg p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)] text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-primary-foreground font-body text-sm font-bold">
                {r.initials}
              </div>
              <div>
                <p className="font-body font-bold text-foreground text-sm">{r.name}</p>
                <Stars />
              </div>
            </div>
            <p className="font-body text-foreground/80 leading-relaxed">"{r.text}"</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <a
          href="https://www.google.com/maps/search/Estudio+MJP+Resistencia+Chaco"
          aria-label="Ver todas las reseñas de Estudio MJP en Google"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold text-accent-foreground font-body font-bold px-8 py-3.5 rounded-md text-sm uppercase tracking-wider hover:brightness-110 transition"
        >
          Ver todas las reseñas en Google
        </a>
      </div>
    </div>
  </section>
);

export default ReviewsSection;
