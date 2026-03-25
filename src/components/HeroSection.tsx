const HeroSection = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-[1.18] md:scale-[1.15] lg:scale-[1.12]"
          style={{ objectPosition: "center 28%" }}
        />
        <div className="absolute inset-0 bg-foreground/60" />
        {/* Bottom gradient to hide branding */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
      </div>

      {/* Headline (BOTTOM LEFT) */}
      <div className="absolute bottom-48 left-6 md:left-12 lg:left-20 z-10 max-w-5xl">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95]">
          Automated masonry
          <br />
          on construction sites
        </h1>
      </div>

      {/* Supporting text (BOTTOM RIGHT) */}
      <div className="absolute bottom-12 right-6 md:right-12 lg:right-20 z-10">
        <p className="font-sans font-light text-white/80 text-lg md:text-xl lg:text-4xl tracking-wide text-right leading-snug">
          Operating across Europe,
          <br />
          now launching in the US.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;