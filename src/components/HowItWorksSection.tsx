import { useEffect, useRef } from 'react';

const steps = [
  {
    number: '01',
    headline: 'Works with standard materials.',
    body: 'The system works with existing masonry bonds, brick sizes, and mortar mixes. No changes to materials or methods.',
  },
  {
    number: '02',
    headline: 'Operates alongside your crew.',
    body: 'The robot works on active construction sites, next to your team, without interrupting ongoing work.',
  },
  {
    number: '03',
    headline: 'You pay for what gets built.',
    body: 'Pricing is tied to output, not equipment or idle time.',
  },
];

const HowItWorksSection = () => {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="border-t border-border py-16 md:py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="animate-on-scroll mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            How it works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`animate-on-scroll p-8 md:p-10 ${
                i !== 0 ? 'md:border-l md:border-border/50' : ''
              }`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <p className="font-sans font-light text-xs tracking-[0.2em] text-muted-foreground mb-8">
                {step.number}
              </p>
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-5 leading-snug">
                {step.headline}
              </h3>
              <p className="font-sans font-light text-sm text-muted-foreground leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;