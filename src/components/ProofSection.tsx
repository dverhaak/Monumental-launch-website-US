import { useEffect, useRef } from 'react';
import projectAmsterdam from '@/assets/project-amsterdam.jpg';
import projectBussum from '@/assets/project-bussum.jpg';
import projectGouda from '@/assets/project-gouda.jpg';
import projectLondon from '@/assets/project-london.jpg';
import projectRotterdam from '@/assets/project-rotterdam.jpg';
import projectUtrecht from '@/assets/project-utrecht.jpg';

const projects = [
  {
    image: projectAmsterdam,
    name: 'Amstel Quay Residences',
    type: 'Residential',
    location: 'Amsterdam, NL',
    contractor: 'Dura Vermeer',
    flag: '🇳🇱',
  },
  {
    image: projectBussum,
    name: 'Hotel Bussum Zuid',
    type: 'Commercial',
    location: 'Bussum, NL',
    contractor: 'Heijmans',
    flag: '🇳🇱',
  },
  {
    image: projectGouda,
    name: 'Gouwestein Care Home',
    type: 'Residential',
    location: 'Gouda, NL',
    contractor: 'Van Wijnen',
    flag: '🇳🇱',
  },
  {
    image: projectLondon,
    name: 'Southgate Quarter',
    type: 'Commercial',
    location: 'London, UK',
    contractor: 'Galliford Try',
    flag: '🇬🇧',
  },
  {
    image: projectRotterdam,
    name: 'Merwe-Vierhavens Block',
    type: 'Mixed Use',
    location: 'Rotterdam, NL',
    contractor: 'BAM Bouw',
    flag: '🇳🇱',
  },
  {
    image: projectUtrecht,
    name: 'Leidsche Rijn Canal Wall',
    type: 'Infrastructure',
    location: 'Utrecht, NL',
    contractor: 'Strukton',
    flag: '🇳🇱',
  },
];

const ProofSection = () => {
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
    <section ref={sectionRef} className="py-16 md:py-20 max-w-6xl mx-auto px-6 md:px-12">
      <div className="animate-on-scroll mb-12">

        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">What we've built so far</h2>
        <p className="font-sans font-light text-base text-muted-foreground max-w-2xl">
          From residential developments to essential infrastructure, our automated bricklaying technology is transforming construction sites across Europe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, 6).map((project, i) => (
          <div
            key={project.name}
            className="animate-on-scroll bg-background group border border-border"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="overflow-hidden aspect-[4/3]">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-serif text-base text-foreground leading-snug">{project.name}</h3>
                <span className="text-lg ml-2 flex-shrink-0">{project.flag}</span>
              </div>
              <p className="font-sans font-light text-xs text-muted-foreground tracking-wide uppercase mb-1">
                {project.type} · {project.location}
              </p>
              <p className="font-sans font-light text-xs text-muted-foreground">
                {project.contractor}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12 animate-on-scroll">
        <button className="font-sans font-light text-sm text-foreground border border-border px-8 py-3 hover:bg-muted/20 transition-colors duration-200 tracking-wide">
          See the full list
        </button>
      </div>
    </section>
  );
};

export default ProofSection;
