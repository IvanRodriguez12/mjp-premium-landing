import { motion } from "framer-motion";
import { BarChart3, Coins, HardHat, Building2, ClipboardList, Search } from "lucide-react";

const services = [
  { icon: BarChart3, title: "Contabilidad General", desc: "Llevamos la contabilidad de tu empresa con precisión y transparencia total." },
  { icon: Coins, title: "Asesoramiento Impositivo", desc: "Optimizamos tu carga fiscal con estrategias legales y efectivas." },
  { icon: HardHat, title: "Liquidación de Sueldos y RRHH", desc: "Gestionamos nóminas, cargas sociales y todo lo laboral de tu equipo." },
  { icon: Building2, title: "Constitución de Sociedades", desc: "Te acompañamos en la creación y formalización de tu empresa." },
  { icon: ClipboardList, title: "Monotributo y Autónomos", desc: "Altas, recategorizaciones y asesoramiento continuo para independientes." },
  { icon: Search, title: "Auditoría y Control", desc: "Revisamos tus procesos para garantizar el cumplimiento normativo." },
];

const ServicesSection = () => (
  <section id="servicios" className="bg-background py-20 md:py-28">
    <div className="container mx-auto text-center">
      <span className="font-body text-sm uppercase tracking-[0.2em] text-gold font-bold">
        Lo Que Hacemos
      </span>
      <h2 className="font-display text-3xl md:text-4xl text-foreground mt-3 mb-12">
        Nuestros Servicios
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            className="group bg-card rounded-lg p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:bg-navy transition-all duration-400 cursor-default"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <s.icon className="w-10 h-10 text-gold mx-auto mb-4 group-hover:text-gold transition-colors" />
            <h3 className="font-display text-xl text-foreground group-hover:text-primary-foreground transition-colors">
              {s.title}
            </h3>
            <p className="font-body text-steel text-sm mt-2 group-hover:text-primary-foreground/70 transition-colors">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
