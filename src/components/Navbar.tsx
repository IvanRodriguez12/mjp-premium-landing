import { useState, useEffect } from "react";
import logo from "@/assets/logo-mjp.webp";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

    useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full flex items-center justify-between py-4 md:py-4 px-2 md:px-16 lg:px-24">
        <a href="#inicio" className="flex-shrink-0">
          <div style={{ width: '100px', height: '32px', overflow: 'hidden' }}>
            <img
              src={logo}
              alt="MJP"
              className="transition-all duration-300 brightness-0 invert"
              style={{ 
                width: '110px', 
                maxWidth: 'none',
                marginTop: '-15px',
                marginLeft: '-2px'
              }}
            />
          </div>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-10 ml-auto">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative font-body text-sm tracking-wide uppercase transition-colors duration-300 pb-1 ${
                  activeSection === link.href.slice(1)
                    ? "text-gold"
                    : "text-primary-foreground/80 hover:text-gold"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-300 ease-out ${
                    activeSection === link.href.slice(1) ? "w-full" : "w-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary-foreground p-2 hover:opacity-70 transition-opacity duration-300"
          aria-label="Menú"
        >
          <div className="space-y-1.5 w-6 h-5 flex flex-col justify-center">
            <span className={`block w-full h-0.5 bg-current transition-all duration-500 ease-out origin-center ${menuOpen ? "rotate-45 translate-y-[10px]" : ""}`} />
            <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}`} />
            <span className={`block w-full h-0.5 bg-current transition-all duration-500 ease-out origin-center ${menuOpen ? "-rotate-45 -translate-y-[10px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy/98 backdrop-blur-md border-t border-gold/20 animate-in slide-in-from-top-2 duration-300">
          <ul className="flex flex-col items-center gap-6 py-8 px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-body text-base tracking-wide uppercase transition-all duration-300 hover:text-gold ${
                    activeSection === link.href.slice(1)
                      ? "text-gold font-semibold"
                      : "text-primary-foreground/80"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
    {/* Overlay backdrop */}
    {menuOpen && (
      <div 
        className="fixed inset-0 bg-black/40 z-40 md:hidden animate-in fade-in duration-300 cursor-pointer"
        onClick={() => setMenuOpen(false)}
        aria-label="Cerrar menú"
      />
    )}
    </>
  );
};

export default Navbar;
