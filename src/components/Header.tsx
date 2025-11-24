import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/amg-logo.png";

// ====================================================
// ACTIVE SECTION TYPE
// ====================================================
type Section = "home" | "services" | "about" | "why-choose-us" | "contact";

interface HeaderProps {
  activeSection: string; // We'll ignore this and use internal state
}

export default function Header({ activeSection }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  // ====================================================
  // LOCAL STATE: Track which section is active
  // ====================================================
  const [currentSection, setCurrentSection] = useState<Section>("home");

  // Refs for hover delays
  const openTimeoutRef = useRef<number | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  // Ref to prevent scroll detection from interfering with manual clicks
  const isManualScrollRef = useRef(false);

  const navItems: Array<{ id: Section; label: string; hasDropdown?: boolean }> = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services", hasDropdown: true },
    { id: "about", label: "About" },
    { id: "why-choose-us", label: "Why AMG" },
    { id: "contact", label: "Contact" },
  ];

  const serviceLinks = [
    { title: "Marine Spare Parts Supply", path: "/services/marine-spare-parts" },
    { title: "Ship Technical Support", path: "/services/ship-technical-support" },
    { title: "Engineering Inspections", path: "/services/engineering-inspections" },
    { title: "Emergency Deliveries – Suez Canal", path: "/services/emergency-deliveries" },
    { title: "Import & Export Services", path: "/services/import-export" },
    { title: "Marine Equipment Sourcing", path: "/services/marine-equipment-sourcing" },
    { title: "Future: Local Manufacturing", path: "/services/local-manufacturing" },
  ];

  // ====================================================
  // SIMPLE ACTIVE STATE LOGIC (ONLY ONE TAB HIGHLIGHTED)
  // ====================================================

  // When pathname changes, update active section
  useEffect(() => {
    if (pathname.startsWith("/services")) {
      // On any /services/* route → Services is active
      setCurrentSection("services");
    } else if (pathname === "/") {
      // On homepage → keep the section user clicked (or default to home)
      // Don't change currentSection unless user explicitly navigates away
    } else {
      // Any other route → default to home
      setCurrentSection("home");
    }
  }, [pathname]);

  // Helper function to check if a nav item is active
  const isNavItemActive = (itemId: Section): boolean => {
    // If on /services/* route, only Services tab is active
    if (pathname.startsWith("/services")) {
      return itemId === "services";
    }

    // Otherwise, use the currentSection state
    return currentSection === itemId;
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash navigation on mount and location change
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "") as Section;

      // Set active section based on hash
      if (["home", "services", "about", "why-choose-us", "contact"].includes(sectionId)) {
        setCurrentSection(sectionId);
      }

      // Disable scroll detection temporarily
      isManualScrollRef.current = true;

      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });

          // Re-enable scroll detection after smooth scroll completes
          setTimeout(() => {
            isManualScrollRef.current = false;
          }, 1000);
        }
      }, 100);
    }
  }, [location]);

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

  // ====================================================
  // SMOOTH DROPDOWN HOVER WITH DELAYS
  // ====================================================

  const handleDropdownMouseEnter = () => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    // Open dropdown after a small delay (200ms)
    openTimeoutRef.current = window.setTimeout(() => {
      setIsServicesDropdownOpen(true);
    }, 200);
  };

  const handleDropdownMouseLeave = () => {
    // Clear any pending open timeout
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = null;
    }

    // Close dropdown after a delay (300ms) to allow user to move to dropdown
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 300);
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  // ====================================================
  // SCROLLSPY: Simple scroll-based detection
  // ====================================================
  useEffect(() => {
    // Only run on homepage
    if (pathname !== "/") return;

    const handleScroll = () => {
      // Don't update if user just clicked a nav item
      if (isManualScrollRef.current) return;

      // Get current scroll position (add offset for header)
      const scrollPosition = window.scrollY + 100;

      // Define all sections and their corresponding navbar items
      // Sections not in navbar (mission, capabilities, clients) map to "about"
      const sectionMapping: Record<string, Section> = {
        "home": "home",
        "services": "services",
        "about": "about",
        "mission": "about",        // Mission belongs to about section
        "capabilities": "about",   // Capabilities belongs to about section
        "clients": "about",        // Clients belongs to about section
        "why-choose-us": "why-choose-us",
        "contact": "contact",
      };

      // Get all page sections in order
      const allSections = ["home", "services", "about", "mission", "capabilities", "clients", "why-choose-us", "contact"];

      let activeSection: Section = "home";

      // Find which section we're currently in
      for (let i = allSections.length - 1; i >= 0; i--) {
        const sectionId = allSections[i];
        const element = document.getElementById(sectionId);

        if (element) {
          const sectionTop = element.offsetTop;

          // If we've scrolled past this section, it's the active one
          if (scrollPosition >= sectionTop) {
            // Map to the corresponding navbar section
            activeSection = sectionMapping[sectionId] || "home";
            break;
          }
        }
      }

      setCurrentSection(activeSection);
    };

    // Initial check
    handleScroll();

    // Listen to scroll events (throttled for performance)
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [pathname]);

  const scrollToSection = (sectionId: Section) => {
    setIsMobileMenuOpen(false);

    // ====================================================
    // SET ACTIVE SECTION WHEN USER CLICKS
    // ====================================================
    setCurrentSection(sectionId);

    // Disable scroll detection temporarily to prevent interference
    isManualScrollRef.current = true;

    // Check if we're on the homepage
    const isOnHomePage = pathname === "/";

    if (isOnHomePage) {
      // If on homepage, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });

        // Re-enable scroll detection after smooth scroll completes (~800ms)
        setTimeout(() => {
          isManualScrollRef.current = false;
        }, 1000);
      }
    } else {
      // If on a service detail page, navigate to homepage with hash
      navigate(`/#${sectionId}`);
      // After navigation, scroll to the section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });

          // Re-enable scroll detection after smooth scroll completes
          setTimeout(() => {
            isManualScrollRef.current = false;
          }, 1000);
        }
      }, 100);
    }
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
            {navItems.map((item) => {
              const isActive = isNavItemActive(item.id);

              if (item.hasDropdown) {
                // Services dropdown with smooth hover delays
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`px-4 py-2 rounded-corporate text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                        isActive
                          ? "bg-gold text-navy"
                          : "text-white hover:bg-navy-light/60"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          isServicesDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu - Enhanced Styling */}
                    {isServicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-corporate-lg shadow-corporate-xl border border-gray-200/50 py-3 z-50 backdrop-blur-sm">
                        <div className="px-3 pb-2 mb-2 border-b border-gray-200">
                          <p className="text-xs font-semibold text-navy/60 uppercase tracking-wider">
                            Our Services
                          </p>
                        </div>
                        {serviceLinks.map((service) => {
                          const isCurrentService = pathname === service.path;
                          return (
                            <Link
                              key={service.path}
                              to={service.path}
                              className={`group block px-5 py-3 text-sm transition-all duration-200 ${
                                isCurrentService
                                  ? "bg-gold/15 text-gold font-semibold border-l-4 border-gold"
                                  : "text-gray-700 hover:bg-navy/5 hover:text-navy hover:translate-x-1 border-l-4 border-transparent"
                              }`}
                              onClick={() => {
                                setIsServicesDropdownOpen(false);
                                // Clear any pending timeouts when clicking a link
                                if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
                                if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                              }}
                            >
                              <span className="flex items-center justify-between">
                                <span>{service.title}</span>
                                {isCurrentService && (
                                  <span className="text-gold text-xs">●</span>
                                )}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              // Regular nav items
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-corporate text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gold text-navy"
                      : "text-white hover:bg-navy-light/60"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
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
              {navItems.map((item) => {
                const isActive = isNavItemActive(item.id);

                if (item.hasDropdown) {
                  // Services with dropdown in mobile
                  return (
                    <div key={item.id} className="flex flex-col">
                      <button
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        className={`w-full text-left px-4 py-3 rounded-corporate text-sm font-medium transition-all duration-200 flex items-center justify-between ${
                          isActive
                            ? "bg-gold text-navy"
                            : "text-white hover:bg-navy-light/70"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            isServicesDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Mobile dropdown items - Enhanced */}
                      {isServicesDropdownOpen && (
                        <div className="flex flex-col gap-1 mt-2 ml-4 pl-4 border-l-2 border-gold/40">
                          {serviceLinks.map((service) => {
                            const isCurrentService = pathname === service.path;
                            return (
                              <Link
                                key={service.path}
                                to={service.path}
                                className={`px-3 py-2.5 text-xs rounded-corporate transition-all duration-200 flex items-center justify-between ${
                                  isCurrentService
                                    ? "bg-gold text-navy font-semibold"
                                    : "text-gray-300 hover:text-white hover:bg-navy-light/50"
                                }`}
                                onClick={() => {
                                  setIsServicesDropdownOpen(false);
                                  setIsMobileMenuOpen(false);
                                }}
                              >
                                <span>{service.title}</span>
                                {isCurrentService && (
                                  <span className="text-navy text-xs">●</span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                // Regular nav items
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-corporate text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-gold text-navy"
                        : "text-white hover:bg-navy-light/70"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
