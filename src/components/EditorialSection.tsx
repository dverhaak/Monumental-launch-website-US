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
              The US construction market is under pressure. Labor is constrained, costs are rising, and timelines are extending. The skilled masonry workforce continues to shrink while demand for housing and infrastructure grows.
            </p>

            <p className="font-sans font-light text-lg md:text-xl text-foreground leading-relaxed">
              Monumental offers an autonomous and future-proof solution. Our robots carry out production work without any process change, while ensuring quality and aesthetics. The robots are flexible and can be deployed 24/7 without lengthy preliminary processes.
            </p>

            <p className="font-sans font-light text-lg md:text-xl text-foreground leading-relaxed">
              We’ve been operating across Europe since 2021, working on residential buildings, infrastructure projects, and commercial developments. Our systems lay brick to architectural specifications, integrate with existing site workflows, and operate alongside construction teams.
            </p>

            <p className="font-sans font-light text-lg md:text-xl text-foreground leading-relaxed">
              We’re now bringing that experience to the US.
            </p>

            <div className="pt-4">
              <button
                onClick={scrollToContact}
                className="font-sans font-light text-base md:text-lg text-foreground px-8 py-4 border border-[#f74823] hover:bg-[#f74823]/5 transition-all duration-200 tracking-wide"
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