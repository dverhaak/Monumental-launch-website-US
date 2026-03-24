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
          className="w-full h-full object-cover scale-110"
          style={{ objectPosition: "center 40%" }}
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Headline (BOTTOM LEFT) */}
      <div className="absolute bottom-48 left-6 md:left-12 lg:left-20 z-10 max-w-5xl">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-8xl text-white leading-[0.95]">
          Automated masonry
          <br />
          on construction sites
        </h1>
      </div>

      {/* Supporting text (BOTTOM RIGHT) */}
      <div className="absolute bottom-12 right-6 md:right-12 lg:right-20 z-10">
        <p className="font-sans font-light text-white/80 text-lg md:text-xl lg:text-6xl tracking-wide text-right leading-snug">
          Operating across Europe,
          <br />
          Now launching in the US.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;