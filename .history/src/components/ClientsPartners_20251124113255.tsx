import { Ship, Anchor, Factory, Wrench, Building2, Globe, Award } from "lucide-react";

export default function ClientsPartners() {
  const clientTypes = [
    {
      icon: Ship,
      title: "Container Shipping Companies",
      description: "Global and regional container vessel operators requiring reliable spare parts and technical support.",
    },
    {
      icon: Anchor,
      title: "Tanker & Bulk Carrier Operators",
      description: "Oil tankers, chemical carriers, and bulk cargo vessel owners and management companies.",
    },
    {
      icon: Ship,
      title: "Container Vessel Operators",
      description: "Liner services and container shipping fleets transiting the Suez Canal region.",
    },
    {
      icon: Building2,
      title: "Offshore Support Vessels",
      description: "OSV operators, platform supply vessels, and offshore construction support ships.",
    },
    {
      icon: Anchor,
      title: "Tugboats & Port Service Vessels",
      description: "Harbor tugs, pilot boats, and port authority service vessels across Egyptian waters.",
    },
    {
      icon: Wrench,
      title: "Ship Management Companies",
      description: "Third-party ship managers overseeing technical operations for vessel owners.",
    },
    {
      icon: Factory,
      title: "Shipyards & Repair Yards",
      description: "Dry docks and shipyards requiring quality parts and technical consultancy services.",
    },
    {
      icon: Globe,
      title: "Global Marine Solution Providers",
      description: "International marine service companies seeking local partners in the Suez Canal region.",
    },
  ];

  const partnershipAreas = [
    "Heat Exchangers & Cooling Systems",
    "Purifiers & Separators",
    "Pumps & Compressors",
    "Boilers & Burner Systems",
    "Engine Spare Parts & Components",
    "Deck & Navigation Equipment",
  ];

  const partnershipReasons = [
    {
      icon: Award,
      title: "Strategic Suez Canal Location",
      description: "Unmatched proximity to one of the world's busiest maritime routes.",
    },
    {
      icon: Globe,
      title: "Proven Reliability & Track Record",
      description: "Years of consistent performance and satisfied customers across the region.",
    },
    {
      icon: Wrench,
      title: "Deep Engineering Expertise",
      description: "Technical knowledge backed by Marine Chief Engineer leadership.",
    },
  ];

  return (
    <section id="clients" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-corporate font-semibold text-sm mb-4">
            Clients & Partners
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6">
            Who We Serve
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            AMG proudly serves a diverse range of maritime clients, from global shipping companies
            to local port operators, all trusting us for quality, speed, and technical excellence.
          </p>
        </div>

        {/* Client Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {clientTypes.map((client, index) => {
            const Icon = client.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-light to-white rounded-corporate-lg p-6 shadow-corporate border border-gray-200/50 hover:shadow-corporate-lg hover:border-navy/20 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-corporate bg-navy/10 flex items-center justify-center">
                    <Icon className="text-navy" size={26} />
                  </div>
                </div>
                <h3 className="text-base font-bold text-navy mb-2 text-center leading-tight">
                  {client.title}
                </h3>
                <p className="text-gray-600 text-xs text-center leading-relaxed">
                  {client.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Strategic Partnerships */}
        <div className="bg-gradient-to-br from-navy/5 to-gold/5 rounded-corporate-lg p-10 lg:p-12 border border-navy/10">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              Current Strategic Focus
            </h3>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              AMG is actively building partnerships with leading global marine technology providers
              to expand our offerings and serve our clients with cutting-edge solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {partnershipAreas.map((area) => (
              <div
                key={area}
                className="bg-white rounded-corporate p-4 shadow-corporate text-center border border-gray-200/50 hover:border-gold/40 transition-all"
              >
                <span className="text-navy font-semibold text-xs block">
                  {area}
                </span>
              </div>
            ))}
          </div>

          {/* Why Partners Work With Us */}
          <div className="pt-10 border-t border-navy/10">
            <h4 className="text-xl sm:text-2xl font-bold text-navy text-center mb-8">
              Why Partners Work With AMG
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipReasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title} className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-corporate bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
                        <Icon className="text-gold" size={28} />
                      </div>
                    </div>
                    <h5 className="text-lg font-bold text-navy mb-2">
                      {reason.title}
                    </h5>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 text-lg mb-6">
            Interested in partnering with AMG or learning more about our client services?
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
            className="bg-gold hover:bg-gold-dark text-navy font-bold px-10 py-4 rounded-corporate-lg transition-all duration-300 shadow-corporate-lg hover:shadow-corporate-xl hover:scale-105"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
