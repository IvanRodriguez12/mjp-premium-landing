import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Database, Share2, Trash2, Phone, ArrowLeft } from "lucide-react";
import logo from "@/assets/logo-mjp.png";

const sections = [
  {
    icon: Database,
    title: "Información que recopilamos",
    content:
      "A través de nuestro formulario de contacto, recopilamos nombre completo, dirección de correo electrónico y número de teléfono. Estos datos son proporcionados voluntariamente por el usuario al completar el formulario.",
  },
  {
    icon: Shield,
    title: "Uso de la información",
    content:
      "La información recopilada se utiliza únicamente para responder consultas. No utilizamos estos datos con fines comerciales ni publicitarios sin el consentimiento previo del usuario.",
  },
  {
    icon: Share2,
    title: "Compartición de datos",
    content:
      "No compartimos, vendemos ni cedemos datos personales a terceros bajo ninguna circunstancia. La información es tratada de forma confidencial y almacenada de manera segura.",
  },
  {
    icon: Trash2,
    title: "Eliminación de datos",
    content:
      "Podés solicitar la eliminación de tus datos personales en cualquier momento contactándonos. Procesaremos tu solicitud a la brevedad posible.",
  },
  {
    icon: Phone,
    title: "Contacto",
    content:
      "Si tenés preguntas sobre esta política o querés ejercer tus derechos sobre tus datos personales, contactanos por teléfono al 0362 438-5300 o visitanos en Saavedra 519, Resistencia, Chaco.",
  },
];

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    {/* Hero Header */}
    <div className="relative bg-navy py-5 overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative container mx-auto text-center">
        <Link to="/">
          <img
            src={logo}
            alt="MJP Logo"
            className="h-16 mx-auto brightness-0 invert mb-6"
          />
        </Link>
        <span className="font-body text-sm uppercase tracking-[0.2em] text-gold font-bold">
          Legal
        </span>
        <h1 className="font-display text-3xl md:text-5xl text-primary-foreground mt-3">
          Política de Privacidad
        </h1>
        <p className="font-body text-primary-foreground/60 mt-3 text-lg">
          Estudio Contable M.J. Paletto &amp; Asociados
        </p>
      </div>
    </div>

    {/* Content */}
    <div className="container mx-auto max-w-3xl py-10 md:py-14 px-6">
      <div className="space-y-4">
        {sections.map((s, i) => (
          <motion.div
            key={s.title}
            className="bg-card rounded-xl p-6 shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                <s.icon className="w-4 h-4 text-gold" />
              </div>
              <h2 className="font-display text-xl text-navy">
                {s.title}
              </h2>
            </div>
            <p className="font-body text-foreground/70 leading-relaxed">
              {s.content}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Back button */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-gold hover:brightness-125 font-semibold transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Volver al inicio
        </Link>
      </motion.div>
    </div>

    {/* Footer strip */}
    <div className="bg-navy py-6 text-center">
      <p className="font-body text-primary-foreground/40 text-sm">
        © 2026 M.J. Paletto &amp; Asociados. Todos los derechos reservados.
      </p>
    </div>
  </div>
);

export default PrivacyPolicy;