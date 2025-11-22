import { Settings, Wrench, FileSearch, Zap, Globe, Package, Factory } from "lucide-react";
import { Link } from "react-router-dom";

type Service = {
  icon: any;
  title: string;
  description: string;
  link?: string;
};

export default function Services() {
  const services: Service[] = [
    {
      icon: Package,
      title: "Marine Spare Parts Supply",
      description:
        "Comprehensive sourcing and supply of genuine and OEM spare parts for all major marine engine manufacturers. Fast, reliable delivery to vessels and ports across Egypt.",
      link: "/services/marine-spare-parts",
    },
    {
      icon: Wrench,
      title: "Ship Technical Support",
      description:
        "Expert on-site technical support for machinery troubleshooting, maintenance, and repairs. Our marine engineers provide professional assistance for all vessel types.",
    },
    {
      icon: FileSearch,
      title: "Engineering Inspections",
      description:
        "Thorough technical inspections and precision measurements for marine engines and equipment. Comprehensive reporting and recommendations for optimal performance.",
    },
    {
      icon: Zap,
      title: "Emergency Deliveries – Suez Canal",
      description:
        "24/7 emergency spare parts delivery to vessels transiting the Suez Canal. Strategic location enables rapid response for urgent maritime needs.",
    },
    {
      icon: Globe,
      title: "Import & Export Services",
      description:
        "Streamlined import and export of marine equipment, spare parts, and technical supplies. Full logistics coordination and customs clearance support.",
    },
    {
      icon: Settings,
      title: "Marine Equipment Sourcing",
      description:
        "Global network for sourcing specialized marine equipment from verified suppliers. Quality control and competitive pricing for all maritime requirements.",
    },
    {
      icon: Factory,
      title: "Future: Local Manufacturing Solutions",
      description:
        "Developing local manufacturing capabilities for marine components and parts. Innovation-driven approach to serve the regional maritime industry.",
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden bg-light py-20 lg:py-24">
      {/* TODO: replace with real image path: e.g. /images/services-bg.jpg */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-navy rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-corporate font-semibold text-sm mb-4">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6">
            Comprehensive Maritime Solutions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From spare parts supply to technical support and emergency deliveries, AMG provides
            end-to-end maritime services tailored to meet your operational needs across Egypt and the Suez Canal.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-corporate-lg p-8 shadow-corporate hover:shadow-corporate-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200/50"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-14 h-14 rounded-corporate bg-gradient-to-br from-navy to-navy-light flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-gold" size={26} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-navy mb-0 leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Small accent line */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  {service.link ? (
                    <Link
                      to={service.link}
                      className="flex items-center text-gold text-sm font-semibold group-hover:translate-x-1 transition-transform"
                    >
                      <span>Learn more</span>
                      <svg
                        className="w-4 h-4 ml-2"
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
                    </Link>
                  ) : (
                    <div className="flex items-center text-gold text-sm font-semibold group-hover:translate-x-1 transition-transform">
                      <span>Learn more</span>
                      <svg
                        className="w-4 h-4 ml-2"
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
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 text-lg mb-6">
            Need a custom solution or have specific maritime requirements?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                const headerOffset = 80;
                const y = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="bg-navy hover:bg-navy-light text-white font-bold px-10 py-4 rounded-corporate-lg transition-all duration-300 shadow-corporate-lg hover:shadow-corporate-xl hover:scale-105"
          >
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
