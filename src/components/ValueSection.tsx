import { useEffect, useRef } from 'react';

const benefits = [
  {
    title: 'Precision & Consistency',
    description: 'Every brick placed with millimeter accuracy, ensuring structural integrity and aesthetic perfection throughout your project.',
  },
  {
    title: 'Reduced Labor Shortage Impact',
    description: 'Address the skilled labor shortage by augmenting your workforce with reliable automation that works alongside your team.',
  },
  {
    title: 'Faster Project Delivery',
    description: 'Complete projects up to 40% faster with extended operation hours and consistent productivity, rain or shine.',
  },
  {
    title: 'Enhanced Safety',
    description: 'Reduce workplace injuries by automating repetitive, physically demanding tasks while keeping skilled workers in supervisory roles.',
  },
  {
    title: 'Cost Predictability',
    description: 'Fixed automation costs provide better budget control compared to variable labor rates and overtime expenses.',
  },
  {
    title: 'Sustainable Building',
    description: 'Minimize material waste through precise placement and optimize resource usage for more sustainable construction.',
  },
];

const ValueSection = () => {
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
    <section ref={sectionRef} className="py-28 md:py-36 max-w-6xl mx-auto px-6 md:px-12">
      <div className="animate-on-scroll mb-16">
        <p className="font-sans font-light text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Why Monumental
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          The future of construction is automated
        </h2>
        <p className="font-sans font-light text-base text-muted-foreground max-w-2xl">
          Transform your construction projects with technology that delivers speed, precision, and reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {benefits.map((benefit, i) => (
          <div
            key={benefit.title}
            className="animate-on-scroll"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <h3 className="font-sans font-medium text-lg text-foreground mb-3 tracking-wide">
              {benefit.title}
            </h3>
            <p className="font-sans font-light text-sm text-muted-foreground leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueSection;
