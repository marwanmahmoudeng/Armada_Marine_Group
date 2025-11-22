import { Award, MapPin, Zap, Wrench, CheckCircle, Headphones, TrendingUp } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      number: "01",
      icon: Award,
      title: "Leadership by a Marine Chief Engineer",
      description:
        "AMG is led by an experienced Marine Chief Engineer who understands vessel operations from the engine room up. This leadership ensures technical accuracy, practical solutions, and industry credibility.",
    },
    {
      number: "02",
      icon: MapPin,
      title: "Strategic Location – Suez Canal Region",
      description:
        "Based in Alexandria with access to all Egyptian ports and Suez Canal anchorages, we provide unmatched proximity and rapid response for vessels in one of the world's busiest maritime corridors.",
    },
    {
      number: "03",
      icon: Zap,
      title: "Fast Response & 24/7 Availability",
      description:
        "Maritime emergencies don't wait. Our team is available around the clock for emergency deliveries, urgent technical support, and critical spare parts sourcing — minimizing downtime and delays.",
    },
    {
      number: "04",
      icon: Wrench,
      title: "Strong Technical Expertise",
      description:
        "From MAN B&W and Wärtsilä engines to Alfa Laval systems, our engineers bring deep technical knowledge and hands-on troubleshooting experience to every engagement.",
    },
    {
      number: "05",
      icon: CheckCircle,
      title: "Genuine & OEM Spare Parts",
      description:
        "We source only genuine OEM parts and work with verified suppliers worldwide. Quality control and proper documentation ensure reliability and compliance with all standards.",
    },
    {
      number: "06",
      icon: Headphones,
      title: "One Point of Contact",
      description:
        "Simplify your operations with a single, dedicated contact for all marine supply and technical service needs. No fragmented communication — just streamlined, responsive support.",
    },
    {
      number: "07",
      icon: TrendingUp,
      title: "Long-Term Vision & Partnerships",
      description:
        "AMG is building for the future, developing local manufacturing solutions and strategic partnerships with global marine technology providers to continuously expand our capabilities.",
    },
  ];

  return (
    <section id="why-choose-us" className="relative py-20 lg:py-24 bg-gradient-to-br from-light via-white to-light overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-navy rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gold/20 text-gold px-4 py-2 rounded-corporate font-semibold text-sm mb-4">
            The AMG Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6">
            Why Choose Armada Marine Group
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Seven compelling reasons why global maritime companies and local operators trust AMG
            for their marine supply and technical service needs.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="relative group bg-white rounded-corporate-lg p-8 lg:p-10 shadow-corporate hover:shadow-corporate-xl transition-all duration-300 border border-gray-200/50 hover:border-gold/40"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-14 h-14 rounded-corporate bg-gradient-to-br from-navy to-navy-light flex items-center justify-center shadow-corporate-lg">
                  <span className="text-gold font-bold text-lg">{reason.number}</span>
                </div>

                <div className="flex items-start gap-5 mt-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-corporate bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <Icon className="text-gold" size={30} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3 leading-tight">
                      {reason.title}
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-gradient-to-r from-navy via-navy-light to-navy rounded-corporate-lg p-10 lg:p-14 text-center shadow-corporate-xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the AMG Difference?
          </h3>
          <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of satisfied maritime clients who trust AMG for reliable service,
            technical expertise, and unmatched responsiveness in the Suez Canal region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const element = document.getElementById("services");
                if (element) {
                  const headerOffset = 80;
                  const y = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="bg-gold hover:bg-gold-dark text-navy font-bold px-10 py-4 rounded-corporate-lg transition-all duration-300 shadow-corporate-lg hover:shadow-corporate-xl hover:scale-105"
            >
              View Our Services
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  const headerOffset = 80;
                  const y = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="bg-transparent border-2 border-gold hover:bg-gold hover:text-navy text-gold font-bold px-10 py-4 rounded-corporate-lg transition-all duration-300"
            >
              Request a Quotation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
