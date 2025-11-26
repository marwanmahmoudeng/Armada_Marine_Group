import { useNavigate } from "react-router-dom";
import {
  Globe,
  Package,
  FileText,
  Ship,
  CheckCircle2,
  Clock,
  Shield,
  Users,
  TrendingUp,
  Plane,
  Truck,
  Phone,
  Mail,
  FileCheck,
  Building2,
  BadgeCheck,
  Anchor,
  Navigation2,
  Container,
  ClipboardCheck,
} from "lucide-react";
import MapContactSection from "./MapContactSection";
import background from "../assets/Packed.jfif";
import main from "../assets/main_i.jfif";
import one from "../assets/one_i.png";
import two from "../assets/two_i.png";
import three from "../assets/three_i.png";
type ImportExportFeature = {
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

export default function ImportExportServices() {
  const navigate = useNavigate();

  const importExportFeatures: ImportExportFeature[] = [
    {
      icon: Globe,
      title: "Global Sourcing & Supply",
      description:
        "Worldwide network for importing marine equipment, spare parts, and technical supplies from verified international suppliers.",
    },
    {
      icon: FileText,
      title: "Customs Clearance",
      description:
        "Full customs documentation, classification, and clearance services for marine cargo entering or leaving Egyptian ports.",
    },
    {
      icon: Ship,
      title: "Maritime Logistics",
      description:
        "Sea freight coordination, port handling, and delivery to vessels or warehouses throughout Egypt.",
    },
    {
      icon: Plane,
      title: "Air Freight Services",
      description:
        "Expedited air cargo services for urgent shipments requiring fast international delivery.",
    },
    {
      icon: FileCheck,
      title: "Documentation Management",
      description:
        "Complete handling of invoices, packing lists, certificates of origin, and all required import/export documents.",
    },
    {
      icon: Building2,
      title: "Regulatory Compliance",
      description:
        "Ensuring full compliance with Egyptian customs regulations, international trade laws, and maritime standards.",
    },
  ];

  const processSteps: ProcessStep[] = [
    {
      number: "01",
      icon: Phone,
      title: "Initial Consultation",
      description:
        "Discuss your import/export requirements, cargo specifications, timeline, and budget with our trade desk.",
    },
    {
      number: "02",
      icon: FileText,
      title: "Documentation & Compliance",
      description:
        "Prepare all necessary customs documents, verify compliance, and obtain required certifications and permits.",
    },
    {
      number: "03",
      icon: Ship,
      title: "Logistics Coordination",
      description:
        "Arrange freight (sea/air), coordinate with carriers, and manage port handling and customs clearance.",
    },
    {
      number: "04",
      icon: CheckCircle2,
      title: "Delivery & Confirmation",
      description:
        "Final delivery to destination with full documentation, customs clearance confirmation, and shipment tracking.",
    },
  ];

  const benefits: BenefitItem[] = [
    {
      icon: Clock,
      text: "Streamlined processes minimizing customs delays and port issues",
    },
    {
      icon: Shield,
      text: "Full compliance with Egyptian and international trade regulations",
    },
    {
      icon: Globe,
      text: "Established relationships with global suppliers and local authorities",
    },
    {
      icon: Users,
      text: "Experienced trade specialists with maritime industry expertise",
    },
    {
      icon: TrendingUp,
      text: "Transparent pricing with no hidden fees or unexpected charges",
    },
    {
      icon: CheckCircle2,
      text: "Complete documentation and certification support throughout",
    },
  ];

  const scrollToContact = () => {
    navigate("/#contact");
  };

  const handleTradeInquiry = () => {
    window.location.href = "mailto:info@armadamarinegroup.com?subject=Import%2FExport%20Inquiry";
  };

  const handleContactTradeDeskEmail = () => {
    window.location.href = "mailto:info@armadamarinegroup.com";
  };

  const handleContactTradeDeskPhone = () => {
    window.location.href = "tel:+201019062754";
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        {/* TODO: Replace with real image: /images/imex-hero.jpg */}
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
            <Globe className="inline mr-2" size={16} />
            Global Trade Support
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Import & Export Services
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-10 leading-relaxed">
            Streamlined import and export of marine equipment, spare parts, and technical supplies with full logistics coordination and customs clearance support.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleTradeInquiry}
              className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy font-bold px-10 py-4 rounded-corporate-lg transition-all duration-300 shadow-corporate-lg hover:shadow-corporate-xl hover:scale-105 flex items-center justify-center gap-2"
            >
              <FileText size={20} />
              Request Import / Export Quote
            </button>
            <button
              onClick={handleContactTradeDeskEmail}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-bold px-10 py-4 rounded-corporate-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Contact Trade Desk
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
                Professional Import & Export Solutions
              </h2>

              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Armada Marine Group provides comprehensive <strong className="text-navy">import and export services</strong> for marine spare parts, equipment, and technical supplies. Our experienced trade team coordinates with global suppliers, freight forwarders, and local authorities to ensure seamless international logistics.
                </p>

                <p className="text-lg">
                  We handle all aspects of <strong className="text-navy">customs clearance and documentation</strong>, including invoices, packing lists, certificates of origin, and import permits. Our established relationships with Egyptian customs authorities and port operators enable efficient processing and minimize delays.
                </p>

                <p className="text-lg">
                  Our services cover both <strong className="text-navy">sea and air freight</strong> for marine cargo, with complete logistics coordination from origin to final destination. We focus on minimizing paperwork issues, port delays, and customs complications while maintaining full regulatory compliance.
                </p>

                <p className="text-lg">
                  Every shipment includes complete documentation support, real-time tracking, and post-clearance confirmation. Our team understands the complexities of international maritime trade and provides professional guidance throughout the entire import/export process.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              {/* TODO: Replace with real image: /images/imex-docs.jpg */}
              <div className="rounded-corporate-lg overflow-hidden shadow-corporate-xl">
                <img
                  src={main}
                  alt="Import export documentation and logistics planning"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-navy text-white p-6 rounded-corporate-lg shadow-corporate-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gold/20 rounded-corporate flex items-center justify-center">
                    <Globe className="text-gold" size={32} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gold">40+</div>
                    <div className="text-sm text-gray-300">Countries Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. IMPORT/EXPORT FEATURES SECTION */}
      <section className="py-20 lg:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-corporate font-semibold text-sm mb-4">
              Service Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
              Comprehensive Trade Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From global sourcing to final delivery, our import/export services cover every aspect of international maritime trade.
            </p>
          </div>

          {/* Grid of Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {importExportFeatures.map((feature) => {
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
              How Import / Export Works
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A streamlined 4-step process ensures efficient, compliant international trade operations.
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

      {/* 5. SERVICES GALLERY SECTION */}
      <section className="py-20 lg:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Global Trade Expertise
            </h2>
            <p className="text-lg text-gray-700">
              Professional import/export services for the maritime industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Service Image 1 */}
            {/* TODO: Replace with real images */}
            <div className="rounded-corporate-lg overflow-hidden shadow-corporate-lg hover:shadow-corporate-xl transition-shadow duration-300">
              <img
                src={one}
                alt="Sea freight and maritime logistics"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <h4 className="font-bold text-navy flex items-center gap-2">
                  <Ship className="text-gold" size={20} />
                  Sea Freight Services
                </h4>
                <p className="text-sm text-gray-600">Global maritime shipping coordination</p>
              </div>
            </div>

            {/* Service Image 2 */}
            <div className="rounded-corporate-lg overflow-hidden shadow-corporate-lg hover:shadow-corporate-xl transition-shadow duration-300">
              <img
                src={two}
                alt="Customs documentation and clearance"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <h4 className="font-bold text-navy flex items-center gap-2">
                  <FileCheck className="text-gold" size={20} />
                  Customs Clearance
                </h4>
                <p className="text-sm text-gray-600">Complete documentation management</p>
              </div>
            </div>

            {/* Service Image 3 */}
            <div className="rounded-corporate-lg overflow-hidden shadow-corporate-lg hover:shadow-corporate-xl transition-shadow duration-300">
              <img
                src={three}
                alt="Port logistics and cargo handling"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <h4 className="font-bold text-navy flex items-center gap-2">
                  <Container className="text-gold" size={20} />
                  Port Logistics
                </h4>
                <p className="text-sm text-gray-600">Efficient cargo handling operations</p>
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
                Your Trusted Trade Partner
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                With extensive experience in maritime trade and established relationships worldwide, AMG delivers the efficiency and compliance your international operations demand.
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
            Ready to Start Importing or Exporting?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Our trade specialists are ready to assist with your international maritime cargo requirements. Get in touch for a customized quote.
          </p>

          <button
            onClick={handleTradeInquiry}
            className="bg-gold hover:bg-gold-light text-navy font-bold px-12 py-5 rounded-corporate-lg transition-all duration-300 shadow-corporate-xl hover:scale-105 text-lg"
          >
            Request Trade Quote
          </button>

          {/* Quick Contact Info */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-300">
            <div className="flex items-center gap-2">
              <Phone className="text-gold" size={20} />
              <span className="font-medium">Trade Desk Available</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <Globe className="text-gold" size={20} />
              <span className="font-medium">Worldwide Network</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <MapContactSection />
    </div>
  );
}
