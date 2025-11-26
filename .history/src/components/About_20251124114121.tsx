import { Ship, MapPin, Clock } from "lucide-react";
import { GiIronHulledWarship } from "react-icons/gi";
export default function About() {
  const stats = [
    { label: "Years of Expertise", value: "15+", icon: Clock },
    { label: "Vessels Supported", value: "800+", icon: Ship },
    { label: "Ports Covered", value: "12+", icon: GiIronHulledWarship },
    { label: "Response Time", value: "24/7", icon: MapPin },
  ];

  return (
    <section id="about" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-corporate font-semibold text-sm mb-4">
              About AMG
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              Your Trusted Marine Supply & Engineering Partner
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                Armada Marine Group (AMG) is a specialized marine supply and engineering company based in Egypt,
                providing reliable marine spare parts distribution, technical services, and ship support solutions
                for vessels crossing the Suez Canal.
              </p>
              <p>
                We combine deep industry expertise with rapid response capabilities and strategic location advantages
                to support shipowners, management companies, and maritime agencies with premium, time-critical services.
              </p>
              <p>
                Our commitment is simple: deliver high-quality marine supplies and technical solutions with speed,
                reliability, and adherence to global standards. Whether you need emergency spare parts, technical
                inspections, or on-board engineering support, AMG is your single point of contact.
              </p>
            </div>

            {/* Quick Highlights */}
            <div className="mt-8 p-6 bg-gradient-to-br from-navy/5 to-gold/5 rounded-corporate-lg border border-navy/10">
              <h3 className="text-lg font-bold text-navy mb-3">Why AMG?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gold font-bold mt-0.5">•</span>
                  <span>Led by a Marine Chief Engineer with extensive industry experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-bold mt-0.5">•</span>
                  <span>Strategic location in Alexandria with access to all Egyptian ports and Suez Canal anchorages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-bold mt-0.5">•</span>
                  <span>24/7 availability for emergency deliveries and technical support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-bold mt-0.5">•</span>
                  <span>Genuine OEM spare parts and verified supplier network</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Stats Card */}
          <div className="relative">
            {/* TODO: replace with real image path: e.g. /images/about-amg.jpg */}
            <div className="bg-gradient-to-br from-navy via-navy-light to-navy rounded-corporate-lg p-10 lg:p-12 shadow-corporate-xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
                AMG by the Numbers
              </h3>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="text-center">
                      <div className="flex justify-center mb-3">
                        <div className="w-14 h-14 rounded-corporate bg-gold/20 flex items-center justify-center">
                          <Icon className="text-gold" size={28} />
                        </div>
                      </div>
                      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold mb-2">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-300 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Additional Info */}
              <div className="mt-10 pt-8 border-t border-white/20 text-center">
                <p className="text-white/90 text-sm leading-relaxed">
                  Serving commercial container shipping, tanker & bulk carrier operators,
                  offshore support vessels, and ship management companies across the region.
                </p>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gold/10 rounded-corporate-lg -z-10"></div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 lg:mt-24">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4">
              Strategically Located in Alexandria
            </h3>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              AMG is strategically positioned in Alexandria, Egypt — providing rapid access to
              the Suez Canal and all major Egyptian ports for time-critical marine services.
            </p>
          </div>

          <div className="w-full rounded-corporate-lg overflow-hidden shadow-corporate-xl border border-gray-200 h-[400px] sm:h-[480px] lg:h-[560px]">
            <iframe
              title="Alexandria, Egypt - AMG Location"
              src="https://www.google.com/maps?q=Alexandria%20Egypt&z=13&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
