import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Solo trabajan con empresas grandes?",
    a: "No, nos especializamos en pequeñas y medianas empresas con potencial de crecimiento. Adaptamos nuestros servicios a cada cliente.",
  },
  {
    q: "¿Qué servicios incluye el asesoramiento contable?",
    a: "Incluye contabilidad general, liquidación de impuestos, sueldos, monotributo, autónomos y constitución de sociedades.",
  },
  {
    q: "¿Cómo es el proceso para comenzar?",
    a: "Simplemente contactanos por WhatsApp o completá el formulario. Coordinamos una reunión inicial sin costo para entender tu situación.",
  },
  {
    q: "¿Atienden de forma presencial y online?",
    a: "Sí, atendemos tanto en nuestra oficina en Saavedra 519, Resistencia, como de forma remota para clientes de todo el país.",
  },
  {
    q: "¿Qué pasa si tengo deudas con ARCA?",
    a: "Te asesoramos para regularizar tu situación de la forma más conveniente, evaluando planes de pago y opciones disponibles.",
  },
];

const FAQSection = () => (
  <section id="faq" className="bg-background py-28 md:py-36">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-body text-sm uppercase tracking-[0.2em] text-gold font-bold">
          FAQ
        </span>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mt-3">
          Preguntas Frecuentes
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="font-body font-semibold text-navy text-left hover:no-underline [&>svg]:text-gold [&>svg]:w-5 [&>svg]:h-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-foreground/70 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
