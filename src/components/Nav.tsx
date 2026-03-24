const Nav = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full px-6 md:px-12 py-5 flex items-center justify-between border-b border-white/20">
        <span
          className="font-sans font-black text-white tracking-[0.2em] uppercase text-lg"
          style={{ fontStretch: 'condensed', letterSpacing: '0.18em' }}
        >
          MONUMENTAL
        </span>
        <button
  onClick={scrollToContact}
  className="font-sans font-light text-sm md:text-base text-white px-8 md:px-10 py-3 border border-white/30 hover:bg-white/10 transition-all duration-200 tracking-wide"
>
  Contact
</button>
      </div>
    </nav>
  );
};

export default Nav;
