import { Link } from "react-router-dom";
import logo from "@/assets/Logo_MJP_RGB sin fondo.webp";
import logoSm from "@/assets/Logo_MJP_RGB-sm.webp";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy py-12 md:py-16">
    <div className="container mx-auto text-center">
      <img
        src={logoSm}
        srcSet={`${logoSm} 400w, ${logo} 800w`}
        sizes="160px"
        alt="MJP Logo"
        width={160}
        height={120}
        loading="lazy"
        decoding="async"
        className="h-20 w-auto mx-auto brightness-0 invert mb-4"
      />
      <p className="font-display text-gold text-lg italic mb-6">Brindamos Soluciones</p>

      <nav className="flex flex-wrap justify-center gap-6 mb-8">
        {["Inicio", "Nosotros", "Servicios", "Opiniones", "FAQ", "Contacto"].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="font-body text-sm text-primary-foreground/60 hover:text-gold transition-colors uppercase tracking-wide"
          >
            {l}
          </a>
        ))}
      </nav>

      <div className="flex justify-center gap-4 mb-8">
        <a
          href="https://www.instagram.com/estudiocontablemjp/"
          aria-label="Instagram de Estudio MJP"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-gold hover:border-gold transition-colors"
        >
          <Instagram className="w-4 h-4" />
        </a>
        <a
          href="https://www.facebook.com/EstudioMJP/?locale=es_LA"
          aria-label="Facebook de Estudio MJP"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-gold hover:border-gold transition-colors"
        >
          <Facebook className="w-4 h-4" />
        </a>
        <a
          href="https://wa.me/5493624385300?text=Hola%2C%20me%20comunico%20desde%20su%20p%C3%A1gina%20web%20y%20quisiera%20hacer%20una%20consulta."
          aria-label="WhatsApp de Estudio MJP"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-gold hover:border-gold transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
      </div>

      <Link
        to="/politica-de-privacidad"
        className="font-body text-xs text-primary-foreground/70 hover:text-gold transition-colors block mb-4"
      >
        Política de Privacidad
      </Link>

      <p className="font-body text-xs text-primary-foreground/60">
        © 2026 M.J. Paletto & Asociados. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;