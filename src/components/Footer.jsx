function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-neutral-950/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-neutral-400 sm:flex-row">
        <p>
          © {new Date().getFullYear()} Honeycomb Interactive. All rights reserved.
        </p>
        <nav className="flex items-center gap-6">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#learn-more" className="hover:text-white">Learn More</a>
          <a
            href="https://spline.design/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            Spline
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
