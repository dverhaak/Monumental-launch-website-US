const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <span className="font-serif text-sm text-foreground">Monumental</span>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 text-xs font-sans font-light text-muted-foreground">
          <a href="https://monumental.co" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            monumental.co
          </a>
          <span>© {new Date().getFullYear()} Monumental. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
