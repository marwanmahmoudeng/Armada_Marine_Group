import { CheckCircle } from "lucide-react";

export default function TechnicalCapabilities() {
  const capabilities = [
    {
      title: "Experienced Engineering Team",
      description: "Marine engineers with decades of combined experience in vessel operations and maintenance.",
    },
    {
      title: "MAN B&W & Wärtsilä Expertise",
      description: "Deep knowledge of major marine diesel engine systems, troubleshooting, and optimization.",
    },
    {
      title: "Alfa Laval Systems Specialists",
      description: "Expertise in separator systems, heat exchangers, and fuel conditioning equipment.",
    },
    {
      title: "Cylinder Lubrication Mastery",
      description: "Advanced understanding of cylinder lubrication systems and wear analysis for optimal performance.",
    },
    {
      title: "On-Board Troubleshooting",
      description: "Rapid diagnostics and problem-solving directly on vessels, minimizing downtime.",
    },
    {
      title: "Precision Measurements & Maintenance",
      description: "State-of-the-art tools for accurate measurements and preventive maintenance planning.",
    },
    {
      title: "Verified Suppliers Network",
      description: "Established relationships with OEM manufacturers and certified suppliers worldwide.",
    },
    {
      title: "Quality Control & Documentation",
      description: "Rigorous quality checks and comprehensive technical documentation for all supplied parts.",
    },
  ];

  return (
    <section id="capabilities" className="py-20 lg:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-corporate font-semibold text-sm mb-4">
            Technical Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6">
            Our Technical Capabilities
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            AMG combines engineering expertise with practical vessel experience to deliver technical solutions
            that meet the highest standards of the maritime industry.
          </p>
        </div>

        {/* TODO: replace with real image path: e.g. /images/technical-capabilities-bg.jpg */}
        <div className="bg-gradient-to-br from-navy via-navy-light to-navy rounded-corporate-lg p-10 lg:p-12 shadow-corporate-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                    <CheckCircle className="text-gold" size={18} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info Box */}
          <div className="mt-12 pt-10 border-t border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-gold mb-2">
                  50+
                </div>
                <div className="text-white/90 text-sm font-medium">
                  Certified Marine Engineers
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-gold mb-2">
                  200+
                </div>
                <div className="text-white/90 text-sm font-medium">
                  OEM Partnerships Worldwide
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-gold mb-2">
                  100%
                </div>
                <div className="text-white/90 text-sm font-medium">
                  Quality Assurance & Documentation
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Brands We Work With */}
        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-10">
            Brands & Systems We Support
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {["MAN B&W", "Wärtsilä", "Alfa Laval", "Mitsubishi", "Caterpillar", "More"].map((brand) => (
              <div
                key={brand}
                className="bg-white rounded-corporate-lg p-6 shadow-corporate text-center border border-gray-200/50 hover:shadow-corporate-lg hover:border-gold/30 transition-all duration-300"
              >
                <span className="text-navy font-bold text-sm">{brand}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">
              And many more leading marine equipment manufacturers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
