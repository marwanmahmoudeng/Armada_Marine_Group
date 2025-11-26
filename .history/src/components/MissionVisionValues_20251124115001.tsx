import { Target, Eye, Heart, Shield, Clock, Award, Users } from "lucide-react";

export default function MissionVisionValues() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Honest, transparent business practices and commitment to ethical standards in all our operations.",
    },
    {
      icon: Award,
      title: "Reliability",
      description: "Consistent delivery of quality products and services that maritime professionals can depend on.",
    },
    {
      icon: Clock,
      title: "Time Efficiency",
      description: "Fast response and delivery, understanding that time is critical in maritime operations.",
    },
    {
      icon: Heart,
      title: "Technical Excellence",
      description: "Expertise-driven solutions and deep knowledge of marine engineering and equipment.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Dedicated support and personalized service tailored to each client's unique needs.",
    },
  ];

  return (
    <section id="mission" className="relative py-20 lg:py-24 overflow-hidden bg-navy">
      {/* TODO: replace with real image path: e.g. /images/mission-bg.jpg */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"%3E%3Crect fill="%23000000" width="1920" height="1080"/%3E%3C/svg%3E')`,
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy/90"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gold/20 text-gold px-4 py-2 rounded-corporate font-semibold text-sm mb-4">
            Our Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Mission, Vision & Values
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Guided by a clear purpose and unwavering commitment to excellence in every maritime service we provide.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-white/10 backdrop-blur-sm rounded-corporate-lg p-8 lg:p-10 border border-white/20 shadow-corporate-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-corporate bg-gold/20 flex items-center justify-center">
                <Target className="text-gold" size={32} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
              To deliver high-quality marine supplies and technical solutions with exceptional speed, reliability,
              and adherence to global standards. We are committed to being the most trusted partner for vessels
              operating in Egyptian waters and the Suez Canal region.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white/10 backdrop-blur-sm rounded-corporate-lg p-8 lg:p-10 border border-white/20 shadow-corporate-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-corporate bg-gold/20 flex items-center justify-center">
                <Eye className="text-gold" size={32} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
              To become the leading marine service provider in the Middle East and a globally recognized partner
              for maritime companies utilizing the Suez Canal route, known for innovation, reliability, and
              unmatched technical expertise.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
            Core Values That Drive Us
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white/5 backdrop-blur-sm rounded-corporate-lg p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300 hover:border-gold/30 group"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-corporate bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                      <Icon className="text-gold" size={28} />
                    </div>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 border border-gold/30 rounded-corporate-lg p-8 max-w-4xl mx-auto">
            <p className="text-white text-lg sm:text-xl leading-relaxed italic">
              "At AMG, we don't just supply parts — we build partnerships. Our values guide every decision,
              ensuring that when you choose us, you're choosing reliability, expertise, and a team that truly cares."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
