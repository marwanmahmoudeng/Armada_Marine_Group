import { useNavigate } from "react-router-dom";
import {
  Settings,
  Package,
  Shield,
  Search,
  CheckCircle2,
  Globe,
  Clock,
  Users,
  TrendingUp,
  Phone,
  BadgeCheck,
  FileCheck,
  Anchor,
  Wrench,
  Navigation2,
  Ship,
  Factory,
  Award,
  Target,
} from "lucide-react";
import MapContactSection from "./MapContactSection";

type EquipmentFeature = {
  icon: any;
  title: string;
  description: string;
};

type ProcessStep = {
  number: string;
  icon: any;
  title: string;
  description: string;
};

type BenefitItem = {
  icon: any;
  text: string;
};

export default function MarineEquipmentSourcing() {
  const navigate = useNavigate();

  const equipmentFeatures: EquipmentFeature[] = [
    {
      icon: Search,
      title: "Global Supplier Network",
      description:
        "Access to verified international suppliers and manufacturers of specialized marine equipment across all major maritime regions.",
    },
    {
      icon: BadgeCheck,
      title: "Quality Verification",
      description:
        "Rigorous quality control processes ensuring all equipment meets international maritime standards and OEM specifications.",
    },
    {
      icon: Package,
      title: "Wide Equipment Range",
      description:
        "Complete sourcing of machinery, safety equipment, deck hardware, navigation electronics, and technical instruments.",
    },
    {
      icon: FileCheck,
      title: "Documentation & Certification",
      description:
        "Full documentation support including certificates of origin, class approvals, and manufacturer warranties.",
    },
    {
      icon: TrendingUp,
      title: "Competitive Pricing",
      description:
        "Direct relationships with manufacturers and suppliers enable cost-effective pricing without compromising quality.",
    },
    {
      icon: Clock,
      title: "Efficient Delivery",
      description:
        "Coordinated logistics and shipping to Egyptian ports and vessels worldwide with reliable delivery timelines.",
    },
  ];

  const processSteps: ProcessStep[] = [
    {
      number: "01",
      icon: Search,
      title: "Requirement Analysis",
      description:
        "Detailed consultation to understand your equipment specifications, budget constraints, and delivery timeline requirements.",
    },
    {
      number: "02",
      icon: Globe,
      title: "Global Sourcing",
      description:
        "Identify and engage with verified suppliers worldwide, requesting quotations and verifying product authenticity.",
    },
    {
      number: "03",
      icon: BadgeCheck,
      title: "Quality Verification",
      description:
        "Thorough quality checks, documentation review, and compliance verification before finalizing procurement.",
    },
    {
      number: "04",
      icon: Package,
      title: "Logistics & Delivery",
      description:
        "Complete logistics coordination, customs clearance, and delivery to your specified port or vessel location.",
    },
  ];

  const benefits: BenefitItem[] = [
    {
      icon: Shield,
      text: "Verified suppliers with proven track records in maritime industry",
    },
    {
      icon: Award,
      text: "Authentic equipment with manufacturer warranties and certifications",
    },
    {
      icon: Globe2,
      text: "Worldwide sourcing network covering all major marine equipment manufacturers",
    },
    {
      icon: TrendingUp,
      text: "Competitive pricing through direct manufacturer relationships",
    },
    {
      icon: Users,
      text: "Expert technical team with deep maritime equipment knowledge",
    },
    {
      icon: CheckCircle2,
      text: "Complete documentation and compliance support throughout",
    },
  ];

  const scrollToContact = () => {
    navigate("/#contact");
  };

  const handleEquipmentInquiry = () => {
    window.location.href = "mailto:supply@armadamarine.com?subject=Equipment%20Sourcing%20Inquiry";
  };

  const handleContactSupplyDeskEmail = () => {
    window.location.href = "mailto:supply@armadamarine.com";
  };

  const handleContactSupplyDeskPhone = () => {
    window.location.href = "tel:+201019062754";
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        {/* TODO: Replace with real image: /images/equip-hero.jpg */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=2070')",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          {/* Label Chip */}
          <div className="inline-block bg-gold/20 backdrop-blur-sm border border-gold/30 text-gold px-5 py-2 rounded-corporate font-semibold text-sm mb-6">
            <Settings className="inline mr-2" size={16} />
            Global Supplier Network
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Marine Equipment Sourcing
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-10 leading-relaxed">
            Global sourcing of specialized marine equipment from verified suppliers with strict quality control and competitive pricing for all maritime requirements.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleEquipmentInquiry}
              className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy font-bold px-10 py-4 rounded-corporate-lg transition-all duration-300 shadow-corporate-lg hover:shadow-corporate-xl hover:scale-105 flex items-center justify-center gap-2"
            >
              <Search size={20} />
              Request Equipment Inquiry
            </button>
            <button
              onClick={handleContactSupplyDeskEmail}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-bold px-10 py-4 rounded-corporate-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Contact Supply Desk
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-corporate font-semibold text-sm mb-4">
                Our Expertise
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
                Trusted Global Equipment Sourcing
              </h2>

              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Armada Marine Group leverages a <strong className="text-navy">worldwide network of verified suppliers</strong> to source specialized marine equipment for vessels operating across Egyptian waters and internationally. Our procurement team has established relationships with leading manufacturers and authorized distributors worldwide.
                </p>

                <p className="text-lg">
                  We source a comprehensive range of equipment including <strong className="text-navy">main and auxiliary machinery, safety equipment, deck hardware, navigation electronics, communication systems, and technical instruments</strong>. Every item undergoes rigorous authentication and quality verification processes.
                </p>

                <p className="text-lg">
                  Our focus on <strong className="text-navy">authenticity and proper documentation</strong> ensures that all equipment meets international maritime standards, class society requirements, and manufacturer specifications. We provide complete certification packages including certificates of origin, class approvals, and warranties.
                </p>

                <p className="text-lg">
                  From initial consultation to final delivery, AMG manages the entire sourcing process with transparency and professionalism. Our technical team understands marine equipment specifications and ensures the right products reach you at competitive prices with reliable delivery timelines.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              {/* TODO: Replace with real image: /images/equip-overview.jpg */}
              <div className="rounded-corporate-lg overflow-hidden shadow-corporate-xl">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070"
                  alt="Marine equipment warehouse and sourcing"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-navy text-white p-6 rounded-corporate-lg shadow-corporate-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gold/20 rounded-corporate flex items-center justify-center">
                    <Factory className="text-gold" size={32} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gold">200+</div>
                    <div className="text-sm text-gray-300">Verified Suppliers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EQUIPMENT FEATURES SECTION */}
      <section className="py-20 lg:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-corporate font-semibold text-sm mb-4">
              Service Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
              Comprehensive Sourcing Solutions
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From global supplier networks to quality verification, our equipment sourcing services cover every aspect of marine procurement.
            </p>
          </div>

          {/* Grid of Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentFeatures.map((feature) => {
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

      {/* 4. PROCESS SECTION */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-corporate font-semibold text-sm mb-4">
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
              How Equipment Sourcing Works
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A proven 4-step process ensures authentic equipment, quality verification, and reliable delivery.
            </p>
          </div>

          {/* Timeline Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Line - Hidden on mobile */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-navy via-gold to-navy opacity-20"></div>

            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative">
                  {/* Step Card */}
                  <div className="bg-light rounded-corporate-lg p-6 h-full border-2 border-navy/10 hover:border-gold/50 transition-colors duration-300">
                    {/* Step Number Badge */}
                    <div className="relative inline-flex items-center justify-center w-16 h-16 bg-navy rounded-corporate mb-4 z-10">
                      <span className="text-2xl font-bold text-gold">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 bg-gold/20 rounded-corporate flex items-center justify-center mb-4">
                      <Icon className="text-navy" size={24} />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-navy mb-3">{step.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. EQUIPMENT GALLERY SECTION */}
      <section className="py-20 lg:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Wide Range of Marine Equipment
            </h2>
            <p className="text-lg text-gray-700">
              Professional sourcing of specialized equipment for all vessel types.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Equipment Image 1 */}
            {/* TODO: Replace with real images */}
            <div className="rounded-corporate-lg overflow-hidden shadow-corporate-lg hover:shadow-corporate-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070"
                alt="Marine machinery and engines"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <h4 className="font-bold text-navy flex items-center gap-2">
                  <Settings className="text-gold" size={20} />
                  Machinery & Engines
                </h4>
                <p className="text-sm text-gray-600">Main and auxiliary equipment</p>
              </div>
            </div>

            {/* Equipment Image 2 */}
            <div className="rounded-corporate-lg overflow-hidden shadow-corporate-lg hover:shadow-corporate-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=2070"
                alt="Navigation electronics and instruments"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <h4 className="font-bold text-navy flex items-center gap-2">
                  <Navigation2 className="text-gold" size={20} />
                  Navigation Systems
                </h4>
                <p className="text-sm text-gray-600">Electronics and instruments</p>
              </div>
            </div>

            {/* Equipment Image 3 */}
            <div className="rounded-corporate-lg overflow-hidden shadow-corporate-lg hover:shadow-corporate-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070"
                alt="Safety equipment and deck hardware"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <h4 className="font-bold text-navy flex items-center gap-2">
                  <Shield className="text-gold" size={20} />
                  Safety Equipment
                </h4>
                <p className="text-sm text-gray-600">Deck hardware and safety gear</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE AMG SECTION */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Title */}
            <div>
              <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-corporate font-semibold text-sm mb-4">
                Why Choose AMG
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
                Your Trusted Sourcing Partner
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                With extensive global networks and rigorous quality verification processes, AMG delivers authentic marine equipment at competitive prices with reliable service.
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
            Need Specialized Marine Equipment?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Our supply team is ready to source the equipment you need from verified global suppliers. Get in touch for detailed quotations.
          </p>

          <button
            onClick={handleEquipmentInquiry}
            className="bg-gold hover:bg-gold-light text-navy font-bold px-12 py-5 rounded-corporate-lg transition-all duration-300 shadow-corporate-xl hover:scale-105 text-lg"
          >
            Request Equipment Quote
          </button>

          {/* Quick Contact Info */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-300">
            <div className="flex items-center gap-2">
              <Phone className="text-gold" size={20} />
              <span className="font-medium">Supply Desk Available</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <Globe className="text-gold" size={20} />
              <span className="font-medium">Global Supplier Network</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <MapContactSection />
    </div>
  );
}
