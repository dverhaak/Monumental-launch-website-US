import { useEffect, useRef } from 'react';

const EditorialSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="border-t border-border py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="animate-on-scroll grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column */}
          <div className="lg:col-span-4">

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
              Construction is entering a new phase.
            </h2>
          </div>

          {/* Right column */}
          <div className="lg:col-span-8 space-y-8">
            <p className="font-sans font-light text-lg md:text-xl text-foreground leading-relaxed">
              The US construction market is under pressure. Labor is constrained, costs are rising, and timelines are extending. The skilled masonry workforce continues to shrink while demand for housing and infrastructure keeps on growing.
            </p>

            <p className="font-sans font-light text-lg md:text-xl text-foreground leading-relaxed">
              Monumental provides an autonomous solution for this. Robots take on additional construction work without requiring any changes to existing processes. They operate alongside your crew, maintaining quality and aesthetic standards while increasing output. The system has proven to be flexible, without lengthy setup or integration.
            </p>

            <p className="font-sans font-light text-lg md:text-xl text-foreground leading-relaxed">
              We’ve been operating across Europe since 2021, working on residential buildings and infrastructure projects. Our systems support a wide range of masonry bonds and detailing while maintaining the intended design.
            </p>

            <p className="font-sans font-light text-lg md:text-xl text-foreground leading-relaxed">
              We’re now bringing that experience to the US.
            </p>

            <div className="pt-4">
              <button
                onClick={scrollToContact}
                className="font-sans font-light text-base md:text-lg text-foreground px-8 py-4 border border-[#f74823] hover:rounded-br-[32px] transition-all duration-300 tracking-wide"
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;