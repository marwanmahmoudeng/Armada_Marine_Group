import { useEffect, useRef, useState } from "react";
import { GiIronHulledWarship } from "react-icons/gi";
export default function Hero() {
  const [offset, setOffset] = useState(0);
  const rafRef = useRef<number | null>(null);
  const secRef = useRef<HTMLElement | null>(null);

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      const headerOffset = 80;
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        headerOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const headerOffset = 80;
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        headerOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const onScroll = () => {
      if (prefersReduced) return;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const heroHeight =
          secRef.current?.offsetHeight ?? window.innerHeight;
        const y = Math.min(window.scrollY, heroHeight);
        setOffset(y);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const heroHeight =
    typeof window !== "undefined"
      ? secRef.current?.offsetHeight ?? window.innerHeight
      : 1;

  const progress = Math.min(offset / heroHeight, 1);
  const videoTranslate = progress * 40;
  const videoOpacity = 1 - progress * 0.35;
  const contentTranslate = progress * -12;
  const contentOpacity = 1 - progress * 0.25;

  return (
    <section
      ref={secRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy"
    >
      {/* Background Video */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          transform: `translateY(${videoTranslate}px)`,
          opacity: videoOpacity,
          transition: "opacity 120ms linear",
        }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/hero-ship.webm" type="video/webm" />
          <source src="/videos/hero-ship.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/90" />
        <div className="absolute inset-0 ring-1 ring-black/10 [box-shadow:inset_0_0_200px_rgba(0,0,0,0.55)]" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 sm:py-40 md:py-48 text-center"
        style={{
          transform: `translateY(${contentTranslate}px)`,
          opacity: contentOpacity,
          transition: "opacity 120ms linear",
        }}
      >
        {/* Small label */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="bg-gold/10 backdrop-blur-sm border border-gold/30 px-5 sm:px-6 py-2.5 rounded-corporate-lg inline-flex items-center space-x-2 shadow-corporate">
            <GiIronHulledWarship className="text-gold" size={20} />
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">
              Your Suez Canal Maritime Partner
            </span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
          Excellence in Maritime Supply
          <span className="block text-gold mt-2 sm:mt-3">
            & Technical Services
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 sm:mb-14 max-w-4xl mx-auto leading-relaxed">
          Armada Marine Group supports vessels across Egypt and the Suez Canal with premium spare parts,
          technical expertise, and emergency delivery services you can rely on.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center">
          <button
            onClick={scrollToServices}
            className="group bg-gold hover:bg-gold-dark text-navy font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-corporate-lg transition-all duration-300 shadow-corporate-lg hover:shadow-corporate-xl hover:scale-105 flex items-center justify-center space-x-2 w-full sm:w-auto text-base sm:text-lg"
          >
            <span>Explore Our Services</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>

          <button
            onClick={scrollToContact}
            className="bg-transparent border-2 border-gold/80 hover:bg-gold hover:text-navy text-gold font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-corporate-lg transition-all duration-300 w-full sm:w-auto text-base sm:text-lg shadow-corporate hover:shadow-corporate-lg"
          >
            Get a Quotation
          </button>
        </div>
      </div>
    </section>
  );
}
