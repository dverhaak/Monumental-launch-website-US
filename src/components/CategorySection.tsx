import { useEffect, useRef } from 'react';

const CategorySection = () => {
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
    <section ref={sectionRef} className="border-t border-border py-16 md:py-20 bg-foreground">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="animate-on-scroll max-w-3xl">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-background leading-tight mb-10">
            The labor shortage isn't going away.
          </h2>
          <p className="font-sans font-light text-base md:text-lg text-background/60 leading-relaxed max-w-xl">
            The skilled masonry workforce in the US is shrinking. Monumental is the only company operating autonomous bricklaying robots at commercial scale. We're bringing that to the US.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
