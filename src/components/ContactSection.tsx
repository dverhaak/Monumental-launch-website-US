import { useState, useEffect, useRef } from 'react';

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
  'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
  'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming',
];

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    state: '',
    projectType: '',
    message: '',
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // mailto fallback — replace with backend submission when available
    const subject = encodeURIComponent(`Monumental Inquiry — ${form.company}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nState: ${form.state}\nProject type: ${form.projectType}\n\n${form.message}`
    );
    window.location.href = `mailto:hello@monumental.co?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputClass =
    'w-full font-sans font-light text-sm text-foreground bg-transparent border-b border-border py-3 px-0 placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-200';

  return (
    <section id="contact" ref={sectionRef} className="border-t border-border py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left: heading */}
          <div className="animate-on-scroll">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-snug mb-6">
              Interested in bringing Monumental to your projects?
            </h2>
            <p className="font-sans font-light text-base text-muted-foreground leading-relaxed mb-8">
              We're speaking with US contractors now. Tell us about your work.
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-sans font-light text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Call us
                </p>
                <a 
                  href="tel:+31203086636" 
                  className="font-sans text-lg text-foreground hover:text-foreground/70 transition-colors duration-200"
                >
                  +31 20 30 86 636
                </a>
              </div>
              <div>
                <p className="font-sans font-light text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Email
                </p>
                <a 
                  href="mailto:hello@monumental.co" 
                  className="font-sans text-lg text-foreground hover:text-foreground/70 transition-colors duration-200"
                >
                  hello@monumental.co
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.15s' }}>
            {submitted ? (
              <div className="py-12">
                <p className="font-serif text-2xl text-foreground mb-3">Thank you.</p>
                <p className="font-sans font-light text-base text-muted-foreground">
                  We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    required
                    placeholder="Company"
                    className={inputClass}
                  />
                </div>
                <div>
                  <select
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    required
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    <option value="" disabled>State</option>
                    {US_STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    required
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    <option value="" disabled>Project type</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Infrastructure">Infrastructure</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project"
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="font-sans font-light text-sm text-background bg-foreground px-8 py-4 hover:bg-foreground/80 transition-colors duration-200 tracking-wide w-full md:w-auto"
                >
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
