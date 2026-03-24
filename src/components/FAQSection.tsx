import { useEffect, useRef, useState } from 'react';

const faqs = [
  {
    question: 'How does automated bricklaying work?',
    answer: 'Our robotic system uses advanced sensors and AI to precisely place bricks according to architectural plans. The robot works alongside human crews, handling the repetitive heavy lifting while skilled workers focus on complex tasks and quality control.',
  },
  {
    question: 'What types of projects can you handle?',
    answer: 'We work on residential, commercial, and infrastructure projects. From apartment buildings and standalone houses, to canal retaining walls and other infrastructure. Our technology adapts to various construction needs.',
  },
  {
    question: 'How much faster is automated bricklaying?',
    answer: 'Our systems typically operate 40% faster than traditional methods while maintaining consistent quality. Plus, we can work extended hours in optimal conditions, significantly reducing project timelines.',
  },
  {
    question: 'Do you replace human workers?',
    answer: 'No. Our technology augments skilled labor, not replaces it. We work alongside experienced masons and construction crews, allowing them to focus on skilled tasks while our robots handle repetitive work.',
  },
  {
    question: 'When will you be available in the US?',
    answer: 'We\'re currently in discussions with US contractors and preparing for our market entry. Contact us to learn more about partnership opportunities and project timelines.',
  },
  {
    question: 'What are the cost savings?',
    answer: 'Cost savings vary by project, but clients typically see 20-30% reduction in labor costs and faster completion times. We provide a detailed ROI analysis for each project during our consultation process.',
  },
];

const FAQSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="border-t border-border py-16 md:py-20 bg-muted/20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="animate-on-scroll mb-12">

          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Common questions
          </h2>
        </div>

        <div className="space-y-px bg-border">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="animate-on-scroll bg-background"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full text-left px-8 py-6 flex items-start justify-between gap-6 hover:bg-muted/20 transition-colors duration-200 group"
              >
                <span className="font-sans font-medium text-base text-foreground leading-relaxed">
                  {faq.question}
                </span>
                <span className="text-foreground text-sm flex-shrink-0 font-light transition-transform duration-200" style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  ▼
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-6 pt-2">
                  <p className="font-sans font-light text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
