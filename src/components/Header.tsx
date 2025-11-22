import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/amg-logo.png";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "why-choose-us", label: "Why AMG" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // لو فتحتي المينيو على الموبايل وبعدين كبّرتي الشاشة → يقفل
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // منع scroll في الخلفية لما مينو الموبايل مفتوحة
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-navy/95 shadow-corporate-lg py-2.5"
        : "bg-navy/80 backdrop-blur-sm py-3"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* BRAND */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D4AF37] rounded-corporate"
            aria-label="Go to home"
          >
            <img
              src={logo}
              alt="Armada Marine Group logo"
              className="h-9 w-auto sm:h-10 md:h-12 transition-transform duration-300 group-hover:scale-[1.05]"
              loading="eager"
              decoding="async"
            />
            <span className="block text-white font-[Orbitron] text-sm md:text-base tracking-wide">
              ARMADA MARINE GROUP
            </span>

          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-corporate text-sm font-medium transition-all duration-200 ${activeSection === item.id
                  ? "bg-gold text-navy"
                  : "text-white hover:bg-navy-light/60"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* MOBILE TOGGLER */}
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="md:hidden text-white p-2 rounded-corporate hover:bg-navy-light/60 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-3 pb-3 border-t border-white/10">
            <div className="flex flex-col gap-2 pt-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-corporate text-sm font-medium transition-all duration-200 ${activeSection === item.id
                    ? "bg-gold text-navy"
                    : "text-white hover:bg-navy-light/70"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
