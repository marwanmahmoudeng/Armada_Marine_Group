import { useNavigate } from "react-router-dom";
import {
  Wrench,
  Settings,
  Activity,
  AlertCircle,
  ClipboardCheck,
  Zap,
  Phone,
  CheckCircle2,
  Clock,
  Shield,
  Users,
  Award,
  Headphones,
  SearchCheck,
  Cog,
  FileCheck,
  TrendingUp,
} from "lucide-react";
import MapContactSection from "./MapContactSection";
import background from "../assets/background_ship.jfif";
import support from "../assets/support.png";
import diagnostics from "../assets/diagnostics.jfif";
import documentation from "../assets/documentation.jfif";
import repairs from "../assets/repairs.jfif";
type SupportCategory = {
  icon: any;
  title: string;
  description: string;
};

type WorkStep = {
  number: string;
  icon: any;
  title: string;
  description: string;
};

type BenefitItem = {
  icon: any;
  text: string;
};

export default function ShipTechnicalSupport() {
  const navigate = useNavigate();

  const supportCategories: SupportCategory[] = [
    {
      icon: SearchCheck,
      title: "On-Site Diagnostics",
      description:
        "Comprehensive machinery diagnostics and fault analysis by certified marine engineers at your vessel location.",
    },
    {
      icon: Wrench,
      title: "Maintenance & Repairs",
      description:
        "Expert maintenance services and emergency repairs for main engines, auxiliary systems, and deck machinery.",
    },
    {
      icon: Settings,
      title: "System Troubleshooting",
      description:
        "Advanced troubleshooting for electrical, hydraulic, pneumatic, and automation systems onboard.",
    },
    {
      icon: Cog,
      title: "Planned Maintenance Support",
      description:
        "Assistance with scheduled maintenance, overhauls, and classification society inspections.",
    },
    {
      icon: AlertCircle,
      title: "Emergency Response",
      description:
        "24/7 emergency technical support for critical machinery failures and urgent repairs at sea or port.",
    },
    {
      icon: FileCheck,
      title: "Technical Documentation",
      description:
        "Complete technical reports, spare parts recommendations, and maintenance planning documentation.",
    },
  ];

  const workSteps: WorkStep[] = [
    {
      number: "01",
      icon: Phone,
      title: "Initial Contact & Assessment",
      description:
        "Reach out via phone or email with your technical issue. Our engineers assess the situation remotely.",
    },
    {
      number: "02",
      icon: ClipboardCheck,
      title: "Mobilization & Dispatch",
      description:
        "Our technical team mobilizes with necessary tools and equipment to your vessel location.",
    },
    {
      number: "03",
      icon: Wrench,
      title: "On-Site Diagnostics & Repair",
      description:
        "Comprehensive on-site inspection, diagnosis, and execution of repairs with professional precision.",
    },
    {
      number: "04",
      icon: FileCheck,
      title: "Reporting & Follow-Up",
      description:
        "Detailed technical report with recommendations, spare parts list, and post-service support.",
    },
  ];

  const benefits: BenefitItem[] = [
    {
      icon: Clock,
      text: "24/7 emergency response for vessels at sea or in Egyptian ports",
    },
    {
      icon: Users,
      text: "Certified marine engineers with 15+ years industry experience",
    },
    {
      icon: Shield,
      text: "Expertise across all major marine engine brands and systems",
    },
    {
      icon: Zap,
      text: "Rapid mobilization to Suez Canal and all Egyptian ports",
    },
    {
      icon: Award,
      text: "Classification society approved inspection and reporting",
    },
    {
      icon: Headphones,
      text: "Ongoing remote technical support and consultation services",
    },
  ];

  const scrollToContact = () => {
    navigate("/#contact");
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image - Replace with actual image */}
        {/* TODO: Replace with real image: /images/ship-engine-room.jpg */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block bg-gold/20 backdrop-blur-sm border border-gold/30 text-gold px-5 py-2 rounded-corporate font-semibold text-sm mb-6">
            Expert Marine Engineering Support
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Ship Technical Support
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-10 leading-relaxed">
            Professional on-site technical assistance for machinery troubleshooting, maintenance, and repairs by certified marine engineers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy font-bold px-10 py-4 rounded-corporate-lg transition-all duration-300 shadow-corporate-lg hover:shadow-corporate-xl hover:scale-105"
            >
              Request Technical Support
            </button>
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-bold px-10 py-4 rounded-corporate-lg transition-all duration-300"
            >
              24/7 Emergency Hotline
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* 2. SERVICE OVERVIEW SECTION */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-corporate font-semibold text-sm mb-4">
                Our Expertise
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
                Professional Marine Engineering Services
              </h2>

              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Armada Marine Group provides comprehensive ship technical support services delivered by highly experienced marine engineers. Our team specializes in troubleshooting, maintenance, and repair of all types of marine machinery and systems.
                </p>

                <p className="text-lg">
                  We offer <strong className="text-navy">on-site technical assistance</strong> for main engines (MAN, Wärtsilä, Caterpillar, Mitsubishi, Yanmar), auxiliary engines, generators, purifiers, pumps, compressors, hydraulic systems, and electrical/automation systems.
                </p>

                <p className="text-lg">
                  Our strategic location in Egypt enables <strong className="text-navy">rapid response to vessels</strong> transiting the Suez Canal or docked at Egyptian ports. We provide 24/7 emergency technical support for urgent machinery failures requiring immediate attention.
                </p>

                <p className="text-lg">
                  Every service includes comprehensive technical documentation, spare parts recommendations, and follow-up support to ensure your vessel maintains optimal operational performance and meets classification society requirements.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              {/* TODO: Replace with real image: /images/marine-engineer.jpg */}
              <div className="rounded-corporate-lg overflow-hidden shadow-corporate-xl">
                <img
                  src={support}
                  alt="Marine engineer performing technical support"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-navy text-white p-6 rounded-corporate-lg shadow-corporate-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gold/20 rounded-corporate flex items-center justify-center">
                    <Wrench className="text-gold" size={32} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gold">500+</div>
                    <div className="text-sm text-gray-300">Vessels Serviced</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUPPORT CATEGORIES */}
      <section className="py-20 lg:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-corporate font-semibold text-sm mb-4">
              Service Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
              Comprehensive Technical Support Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From emergency repairs to planned maintenance, our marine engineers provide expert support for all vessel types and machinery systems.
            </p>
          </div>

          {/* Grid of Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="group bg-white rounded-corporate-lg p-8 shadow-corporate hover:shadow-corporate-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200/50"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-navy to-navy-light rounded-corporate flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-gold" size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{category.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{category.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. HOW WE WORK SECTION */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-corporate font-semibold text-sm mb-4">
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
              How We Work
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A streamlined 4-step process ensures fast, professional technical support for your vessel.
            </p>
          </div>

          {/* Timeline Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Line - Hidden on mobile */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-navy via-gold to-navy opacity-20"></div>

            {workSteps.map((step) => {
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

      {/* 5. GALLERY / IMAGES SECTION */}
      <section className="py-20 lg:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Professional Technical Services
            </h2>
            <p className="text-lg text-gray-700">
              Expert marine engineers delivering quality technical support worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Image 1 */}
            {/* TODO: Replace with real image: /images/tech-support-1.jpg */}
            <div className="rounded-corporate-lg overflow-hidden shadow-corporate-lg hover:shadow-corporate-xl transition-shadow duration-300">
              <img
                src={diagnostics}
                alt="Marine engineer diagnostics"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <h4 className="font-bold text-navy">Engine Diagnostics</h4>
                <p className="text-sm text-gray-600">Advanced troubleshooting & analysis</p>
              </div>
            </div>

            {/* Image 2 */}
            {/* TODO: Replace with real image: /images/tech-support-2.jpg */}
            <div className="rounded-corporate-lg overflow-hidden shadow-corporate-lg hover:shadow-corporate-xl transition-shadow duration-300">
              <img
                src={repairs}
                alt="On-site repairs"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <h4 className="font-bold text-navy">On-Site Repairs</h4>
                <p className="text-sm text-gray-600">Expert maintenance & repairs</p>
              </div>
            </div>

            {/* Image 3 */}
            {/* TODO: Replace with real image: /images/tech-support-3.jpg */}
            <div className="rounded-corporate-lg overflow-hidden shadow-corporate-lg hover:shadow-corporate-xl transition-shadow duration-300">
              <img
                src={documentation}
                alt="Technical documentation"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <h4 className="font-bold text-navy">Technical Reporting</h4>
                <p className="text-sm text-gray-600">Comprehensive documentation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE AMG FOR TECHNICAL SUPPORT */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Title */}
            <div>
              <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-corporate font-semibold text-sm mb-4">
                Why Choose AMG
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
                Your Trusted Technical Partner at Sea
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                With decades of maritime engineering experience and a commitment to excellence, AMG delivers the reliability and expertise your vessel operations demand.
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

      {/* 7. CTA SECTION (Bold Navy Block) */}
      <section className="relative py-20 lg:py-24 bg-navy overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Need Urgent Technical Support?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Our marine engineering team provides 24/7 emergency support for vessels at sea or in Egyptian ports. Get expert assistance when you need it most.
          </p>

          <button
            onClick={scrollToContact}
            className="bg-gold hover:bg-gold-light text-navy font-bold px-12 py-5 rounded-corporate-lg transition-all duration-300 shadow-corporate-xl hover:scale-105 text-lg"
          >
            Contact Our Engineers Now
          </button>

          {/* Quick Contact Info */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-300">
            <div className="flex items-center gap-2">
              <Phone className="text-gold" size={20} />
              <span className="font-medium">24/7 Emergency Hotline</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <Clock className="text-gold" size={20} />
              <span className="font-medium">Rapid Response Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <MapContactSection />
    </div>
  );
}
