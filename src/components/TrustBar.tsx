import { useEffect, useRef, useState } from "react";
import { Star, Calendar, Users, MapPin } from "lucide-react";

const items = [
  { icon: Star, value: 5.0, suffix: " en Google — 61 Opiniones", isDecimal: true },
  { icon: Calendar, value: 20, suffix: "+ Años de Experiencia", prefix: "Más de ", isDecimal: false },
  { icon: Users, value: 0, suffix: "Especialistas en PyMEs", label: true },
  { icon: MapPin, value: 0, suffix: "Resistencia, Chaco", label: true },
];

const AnimatedNumber = ({ target, isDecimal, duration = 2000 }: { target: number; isDecimal: boolean; duration?: number }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setVal(progress * target);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{isDecimal ? val.toFixed(1) : Math.round(val)}</span>;
};

const TrustBar = () => (
  <section className="bg-background py-10 md:py-14 border-b border-border">
    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <item.icon className="w-7 h-7 text-gold" />
          <p className="font-display text-lg md:text-xl text-foreground">
            {item.label ? (
              item.suffix
            ) : (
              <>
                {item.prefix}
                <AnimatedNumber target={item.value} isDecimal={item.isDecimal} />
                {item.suffix}
              </>
            )}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default TrustBar;
