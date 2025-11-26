import { useNavigate } from "react-router-dom";
import {
  Factory,
  Settings,
  TrendingUp,
  Users,
  Clock,
  CheckCircle2,
  Shield,
  Package,
  Target,
  Lightbulb,
  Phone,
  Mail,
  Wrench,
  Zap,
  Award,
  BarChart3,
  Cog,
  Box,
  Hammer,
  Cpu,
  CircuitBoard,
  Layers,
} from "lucide-react";
import MapContactSection from "./MapContactSection";
import background from "../assets/background_l.jfif";
import main from "../assets/main_l.png";
import one from "../assets/one_l.png";
import two from "../assets/two_l.png";
import three from "../assets/three_l.png";
type ManufacturingFeature = {
  icon: any;
  title: string;
  description: string;
};

type ObjectiveItem = {
  number: string;
  icon: any;
  title: string;
  description: string;
};

type BenefitItem = {
  icon: any;
  text: string;
};

export default function LocalManufacturingSolutions() {
  const navigate = useNavigate();

  const manufacturingFeatures: ManufacturingFeature[] = [
    {
      icon: Clock,
      title: "Reduced Lead Times",
      description:
        "Local production dramatically reduces delivery times for critical spare parts, minimizing vessel downtime and operational delays.",
    },
    {
      icon: TrendingUp,
      title: "Cost-Effective Supply",
      description:
        "Regional manufacturing enables competitive pricing by eliminating long-distance shipping costs and import complexities.",
    },
    {
      icon: Shield,
      title: "Quality Control",
      description:
        "Direct oversight of manufacturing processes ensures consistent quality standards and adherence to maritime specifications.",
    },
    {
      icon: Package,
      title: "Increased Availability",
      description:
        "On-demand production of critical components ensures continuous availability without reliance on distant suppliers.",
    },
    {
      icon: Users,
      title: "Local Employment",
      description:
        "Creating skilled manufacturing jobs in Egypt while building expertise in marine component production.",
    },
    {
      icon: Target,
      title: "Regional Industry Support",
      description:
        "Strengthening Egypt's maritime manufacturing capabilities and reducing regional dependence on imported parts.",
    },
  ];

  const objectives: ObjectiveItem[] = [
    {
      number: "01",
      icon: Lightbulb,
      title: "Facility Development",
      description:
        "Establishing modern manufacturing facilities equipped with precision machinery for marine component production.",
    },
    {
      number: "02",
      icon: Cog,
      title: "Technical Capabilities",
      description:
        "Building expertise in precision machining, fabrication, and quality control for marine-grade components.",
    },
    {
      number: "03",
      icon: Award,
      title: "Certification & Standards",
      description:
        "Achieving international maritime certifications and compliance with class society requirements.",
    },
    {
      number: "04",
      icon: BarChart3,
      title: "Regional Distribution",
      description:
        "Creating efficient distribution networks for locally manufactured parts across Egypt and the region.",
    },
  ];

  const benefits: BenefitItem[] = [
    {
      icon: Zap,
      text: "Faster response times for urgent spare parts requirements",
    },
    {
      icon: TrendingUp,
      text: "Competitive pricing through local production and reduced logistics",
    },
    {
      icon: Shield,
      text: "Quality assurance with direct manufacturing oversight",
    },
    {
      icon: Clock,
      text: "On-demand production reducing inventory and storage costs",
    },
    {
      icon: Users,
      text: "Supporting local economy and developing skilled workforce",
    },
    {
      icon: CheckCircle2,
      text: "Reduced dependence on international supply chains",
    },
  ];

  const scrollToContact = () => {
    navigate("/#contact");
  };

  const handleRegisterInterest = () => {
    window.location.href = "mailto:info@armadamarinegroup.com?subject=Local%20Manufacturing%20Inquiry";
  };

  const handleDiscussPartnership = () => {
    window.location.href = "mailto:info@armadamarinegroup.com?subject=Manufacturing%20Partnership%20Inquiry";
  };

  const handleContactEmail = () => {
    window.location.href = "mailto:info@armadamarinegroup.com";
  };

  const handleContactPhone = () => {
    window.location.href = "tel:+201019062754";
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        {/* TODO: Replace with real image: /images/local-mfg-hero.jpg */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          {/* Label Chip */}
          <div className="inline-block bg-gold/20 backdrop-blur-sm border border-gold/30 text-gold px-5 py-2 rounded-corporate font-semibold text-sm mb-6">
            <Factory className="inline mr-2" size={16} />
            Future Initiative
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Future: Local Manufacturing Solutions
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-10 leading-relaxed">
            Developing local manufacturing capabilities for marine components and parts to support faster, cost-effective supply in the regional maritime industry.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleRegisterInterest}
              className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy font-bold px-10 py-4 rounded-corporate-lg transition-all duration-300 shadow-corporate-lg hover:shadow-corporate-xl hover:scale-105 flex items-center justify-center gap-2"
            >
              <Lightbulb size={20} />
              Register Interest
            </button>
            <button
              onClick={handleDiscussPartnership}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-bold px-10 py-4 rounded-corporate-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Users size={20} />
              Discuss Partnership
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* 2. VISION & OBJECTIVES SECTION */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-corporate font-semibold text-sm mb-4">
                Our Vision
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
                Building Regional Manufacturing Capacity
              </h2>

              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Armada Marine Group is developing plans to establish <strong className="text-navy">local manufacturing capabilities</strong> in Egypt for marine components and spare parts. This strategic initiative aims to reduce dependence on international supply chains while creating faster, more reliable supply solutions for the regional maritime industry.
                </p>

                <p className="text-lg">
                  By building or partnering with <strong className="text-navy">modern manufacturing facilities</strong>, AMG will dramatically reduce lead times for critical spare parts, increase availability of essential components, and provide cost-effective alternatives to imported products. Local production enables rapid response to urgent vessel requirements.
                </p>

                <p className="text-lg">
                  This initiative supports <strong className="text-navy">local industry development and job creation</strong> while building Egypt's expertise in precision marine component manufacturing. We envision becoming a regional manufacturing hub serving vessels across the Mediterranean and Red Sea.
                </p>

                <p className="text-lg">
                  Through investment in technology, training, and quality systems, AMG aims to deliver <strong className="text-navy">marine-grade components</strong> that meet international standards while supporting Egypt's growing maritime sector.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              {/* TODO: Replace with real image: /images/local-mfg-vision.jpg */}
              <div className="rounded-corporate-lg overflow-hidden shadow-corporate-xl">
                <img
                  src={main}
                  alt="Local manufacturing facility vision"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-navy text-white p-6 rounded-corporate-lg shadow-corporate-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gold/20 rounded-corporate flex items-center justify-center">
                    <Lightbulb className="text-gold" size={32} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gold">2025+</div>
                    <div className="text-sm text-gray-300">Target Launch</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MANUFACTURING FEATURES SECTION */}
      <section className="py-20 lg:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-corporate font-semibold text-sm mb-4">
              Key Benefits
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
              Why Local Manufacturing Matters
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Regional manufacturing capabilities deliver faster response, better pricing, and stronger supply chain resilience for the maritime industry.
            </p>
          </div>

          {/* Grid of Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manufacturingFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group bg-white rounded-corporate-lg p-8 shadow-corporate hover:shadow-corporate-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200/50"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-navy to-navy-light rounded-corporate flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-gold" size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. OBJECTIVES / ROADMAP SECTION */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-corporate font-semibold text-sm mb-4">
              Strategic Roadmap
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
              Building Manufacturing Excellence
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A phased approach to developing world-class local manufacturing capabilities for marine components.
            </p>
          </div>

          {/* Timeline Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Line - Hidden on mobile */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-navy via-gold to-navy opacity-20"></div>

            {objectives.map((objective) => {
              const Icon = objective.icon;
              return (
                <div key={objective.title} className="relative">
                  {/* Step Card */}
                  <div className="bg-light rounded-corporate-lg p-6 h-full border-2 border-navy/10 hover:border-gold/50 transition-colors duration-300">
                    {/* Step Number Badge */}
                    <div className="relative inline-flex items-center justify-center w-16 h-16 bg-navy rounded-corporate mb-4 z-10">
                      <span className="text-2xl font-bold text-gold">{objective.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 bg-gold/20 rounded-corporate flex items-center justify-center mb-4">
                      <Icon className="text-navy" size={24} />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-navy mb-3">{objective.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{objective.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. MANUFACTURING CAPABILITIES GALLERY */}
      <section className="py-20 lg:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Planned Manufacturing Capabilities
            </h2>
            <p className="text-lg text-gray-700">
              Future production facilities for critical marine components and systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Capability Image 1 */}
            {/* TODO: Replace with real images */}
            <div className="rounded-corporate-lg overflow-hidden shadow-corporate-lg hover:shadow-corporate-xl transition-shadow duration-300">
              <img
                src={one}
                alt="Precision machining and components"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <h4 className="font-bold text-navy flex items-center gap-2">
                  <Cog className="text-gold" size={20} />
                  Precision Machining
                </h4>
                <p className="text-sm text-gray-600">CNC and specialized component production</p>
              </div>
            </div>

            {/* Capability Image 2 */}
            <div className="rounded-corporate-lg overflow-hidden shadow-corporate-lg hover:shadow-corporate-xl transition-shadow duration-300">
              <img
                src={two}
                alt="Fabrication and assembly"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <h4 className="font-bold text-navy flex items-center gap-2">
                  <Hammer className="text-gold" size={20} />
                  Fabrication & Assembly
                </h4>
                <p className="text-sm text-gray-600">Component fabrication and system integration</p>
              </div>
            </div>

            {/* Capability Image 3 */}
            <div className="rounded-corporate-lg overflow-hidden shadow-corporate-lg hover:shadow-corporate-xl transition-shadow duration-300">
              <img
                src={three}
                alt="Quality control and testing"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <h4 className="font-bold text-navy flex items-center gap-2">
                  <Shield className="text-gold" size={20} />
                  Quality Control
                </h4>
                <p className="text-sm text-gray-600">Testing and certification processes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY PARTNER WITH AMG SECTION */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Title */}
            <div>
              <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-corporate font-semibold text-sm mb-4">
                Partnership Opportunity
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
                Join Our Manufacturing Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                AMG welcomes partnerships with manufacturers, technology providers, and industry stakeholders to build Egypt's marine manufacturing capabilities.
              </p>
            </div>

            {/* Right: Benefits List */}
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.text}
                    className="flex items-start gap-4 bg-light p-5 rounded-corporate hover:shadow-corporate transition-shadow duration-300"
                  >
                    <div className="w-10 h-10 bg-navy rounded-corporate flex items-center justify-center flex-shrink-0">
                      <Icon className="text-gold" size={20} />
                    </div>
                    <p className="text-gray-700 font-medium leading-relaxed">{benefit.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="relative py-20 lg:py-24 bg-navy overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Interested in Local Manufacturing?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Register your interest or discuss partnership opportunities to be part of Egypt's marine manufacturing future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleRegisterInterest}
              className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy font-bold px-12 py-5 rounded-corporate-lg transition-all duration-300 shadow-corporate-xl hover:scale-105 text-lg"
            >
              Register Interest
            </button>
            <button
              onClick={handleDiscussPartnership}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-bold px-12 py-5 rounded-corporate-lg transition-all duration-300 text-lg"
            >
              Discuss Partnership
            </button>
          </div>

          {/* Quick Contact Info */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-300">
            <div className="flex items-center gap-2">
              <Phone className="text-gold" size={20} />
              <span className="font-medium">Contact Available</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <Factory className="text-gold" size={20} />
              <span className="font-medium">Future Initiative</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <MapContactSection />
    </div>
  );
}
