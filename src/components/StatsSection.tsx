import { useEffect, useRef } from 'react';

const stats = [
  {
    value: '50+',
    label: 'Projects Completed',
    description: 'Across Europe',
  },
  {
    value: '2M+',
    label: 'Bricks Laid',
    description: 'With precision automation',
  },
  {
    value: '40%',
    label: 'Faster',
    description: 'Than traditional methods',
  },
  {
    value: '24/7',
    label: 'Operation',
    description: 'Weather permitting',
  },
];

const StatsSection = () => {
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
    <section ref={sectionRef} className="border-t border-border py-16 md:py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="animate-on-scroll mb-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Building the future, one brick at a time
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="animate-on-scroll text-center"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="font-serif text-5xl md:text-6xl text-foreground mb-3">
                {stat.value}
              </div>
              <div className="font-sans font-medium text-sm text-foreground mb-2 tracking-wide">
                {stat.label}
              </div>
              <div className="font-sans font-light text-xs text-muted-foreground tracking-wide">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
