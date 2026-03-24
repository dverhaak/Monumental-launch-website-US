import { useEffect, useRef } from 'react';
import standardsStrip from '@/assets/standards-strip.jpg';

const EuropeanSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="border-t border-border">
      {/* Photo strip */}
      <div className="w-full h-64 md:h-96 overflow-hidden">
        <img
          src={standardsStrip}
          alt="Monumental robot at work on a masonry site"
          loading="lazy"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Text block */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-28 md:py-36">
        <div className="max-w-2xl animate-on-scroll">
          <p className="font-sans font-light text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
            Standards
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-snug">
            Built to European standards
          </h2>
          <p className="font-sans font-light text-base md:text-lg text-muted-foreground leading-relaxed">
            European masonry requirements rank among the most demanding in the world. Monumental robots are certified and operating within those standards — on residential, commercial, and infrastructure projects. The work stands on its own.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EuropeanSection;
