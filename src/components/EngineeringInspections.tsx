import { useNavigate } from "react-router-dom";
import {
  FileSearch,
  Gauge,
  ClipboardCheck,
  Settings,
  Microscope,
  Award,
  Phone,
  CheckCircle2,
  Clock,
  Shield,
  Users,
  FileText,
  Camera,
  Search,
  FileCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import MapContactSection from "./MapContactSection";
import background from "../assets/documentation.jfif";
import equipment from "../assets/equipment.png";
import Precision from "../assets/Precision.png";
import Engine from "../assets/Engine.png";
import reporting from "../assets/reporting.jfif";
type InspectionCategory = {
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

export default function EngineeringInspections() {
  const navigate = useNavigate();

  const inspectionCategories: InspectionCategory[] = [
    {
      icon: Settings,
      title: "Main Engine Inspections",
      description:
        "Comprehensive inspections of main engines including cylinder condition, valve clearances, and performance analysis.",
    },
    {
      icon: Gauge,
      title: "Precision Measurements",
      description:
        "Accurate crankshaft deflection, cylinder liner wear, and piston crown measurements using calibrated instruments.",
    },
    {
      icon: Microscope,
      title: "Non-Destructive Testing (NDT)",
      description:
        "Ultrasonic thickness gauging, magnetic particle testing, and dye penetrant inspections for structural integrity.",
    },
    {
      icon: ClipboardCheck,
      title: "Classification Society Inspections",
      description:
        "Preparation and support for class surveys, including documentation and technical assistance during inspections.",
    },
    {
      icon: Camera,
      title: "Borescope Inspections",
      description:
        "Internal visual inspections of cylinders, turbochargers, and hard-to-reach areas using advanced borescope technology.",
    },
    {
      icon: FileText,
      title: "Condition Monitoring",
      description:
        "Vibration analysis, oil analysis coordination, and trend monitoring for predictive maintenance programs.",
    },
  ];

  const workSteps: WorkStep[] = [
    {
      number: "01",
      icon: Phone,
      title: "Inspection Planning",
      description:
        "Discuss your inspection requirements, timeline, and vessel specifications with our technical team.",
    },
    {
      number: "02",
      icon: Search,
      title: "On-Site Inspection Execution",
      description:
        "Our certified engineers perform thorough inspections using calibrated equipment and industry best practices.",
    },
    {
      number: "03",
      icon: FileCheck,
      title: "Data Analysis & Evaluation",
      description:
        "Comprehensive analysis of inspection data with comparison to manufacturer standards and previous readings.",
    },
    {
      number: "04",
      icon: FileText,
      title: "Detailed Technical Report",
      description:
        "Receive a complete inspection report with findings, recommendations, and photographic documentation.",
    },
  ];

  const benefits: BenefitItem[] = [
    {
      icon: Award,
      text: "Class-approved inspections accepted by all major classification societies",
    },
    {
      icon: Users,
      text: "Experienced marine engineers with manufacturer training certifications",
    },
    {
      icon: Shield,
      text: "Calibrated precision instruments with valid certification documentation",
    },
    {
      icon: Clock,
      text: "Flexible scheduling to minimize vessel downtime and operational impact",
    },
    {
      icon: FileText,
      text: "Comprehensive reports with actionable recommendations and trend analysis",
    },
    {
      icon: Target,
      text: "Early detection of potential issues preventing costly breakdowns",
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
        {/* TODO: Replace with real image: /images/engine-inspection.jpg */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:`url(${background})`,
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block bg-gold/20 backdrop-blur-sm border border-gold/30 text-gold px-5 py-2 rounded-corporate font-semibold text-sm mb-6">
            Professional Marine Engineering Services
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Engineering Inspections
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-10 leading-relaxed">
            Thorough technical inspections and precision measurements for marine engines and equipment with comprehensive reporting.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy font-bold px-10 py-4 rounded-corporate-lg transition-all duration-300 shadow-corporate-lg hover:shadow-corporate-xl hover:scale-105"
            >
              Schedule an Inspection
            </button>
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-bold px-10 py-4 rounded-corporate-lg transition-all duration-300"
            >
              Request a Quote
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
                Precision Engineering Inspection Services
              </h2>

              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Armada Marine Group provides professional marine engineering inspection services delivered by certified marine engineers with extensive experience across all vessel types and machinery systems.
                </p>

                <p className="text-lg">
                  Our <strong className="text-navy">comprehensive inspection services</strong> include main engine inspections, auxiliary machinery assessments, precision measurements, non-destructive testing (NDT), and classification society survey support for vessels operating in Egyptian waters and the Suez Canal region.
                </p>

                <p className="text-lg">
                  We utilize <strong className="text-navy">calibrated precision instruments</strong> and industry-standard methodologies to deliver accurate, reliable inspection results. Our team is trained by major manufacturers including MAN, Wärtsilä, and Caterpillar.
                </p>

                <p className="text-lg">
                  Every inspection includes detailed technical documentation with photographic evidence, measurement data, comparative analysis, and actionable recommendations to maintain optimal vessel performance and compliance with classification society requirements.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              {/* TODO: Replace with real image: /images/inspection-equipment.jpg */}
              <div className="rounded-corporate-lg overflow-hidden shadow-corporate-xl">
                <img
                  src={equipment}
                  alt="Marine engineering inspection equipment"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-navy text-white p-6 rounded-corporate-lg shadow-corporate-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gold/20 rounded-corporate flex items-center justify-center">
                    <FileSearch className="text-gold" size={32} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gold">1,000+</div>
                    <div className="text-sm text-gray-300">Inspections Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INSPECTION CATEGORIES */}
      <section className="py-20 lg:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-corporate font-semibold text-sm mb-4">
              Service Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
              Comprehensive Inspection Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From routine measurements to advanced non-destructive testing, our engineers provide expert inspection services for all marine systems.
            </p>
          </div>

          {/* Grid of Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inspectionCategories.map((category) => {
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
              A systematic 4-step process ensures thorough, professional inspections with detailed documentation.
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
              Professional Inspection Services
            </h2>
            <p className="text-lg text-gray-700">
              Expert marine engineers using precision equipment for accurate results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Image 1 */}
            {/* TODO: Replace with real image: /images/inspection-1.jpg */}
            <div className="rounded-corporate-lg overflow-hidden shadow-corporate-lg hover:shadow-corporate-xl transition-shadow duration-300">
              <img
                src={Precision}
                alt="Precision measurement equipment"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <h4 className="font-bold text-navy">Precision Measurements</h4>
                <p className="text-sm text-gray-600">Calibrated instruments & tools</p>
              </div>
            </div>

            {/* Image 2 */}
            {/* TODO: Replace with real image: /images/inspection-2.jpg */}
            <div className="rounded-corporate-lg overflow-hidden shadow-corporate-lg hover:shadow-corporate-xl transition-shadow duration-300">
              <img
                src={Engine}
                alt="Engine inspection process"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <h4 className="font-bold text-navy">Engine Inspections</h4>
                <p className="text-sm text-gray-600">Comprehensive diagnostics</p>
              </div>
            </div>

            {/* Image 3 */}
            {/* TODO: Replace with real image: /images/inspection-3.jpg */}
            <div className="rounded-corporate-lg overflow-hidden shadow-corporate-lg hover:shadow-corporate-xl transition-shadow duration-300">
              <img
                src={reporting}
                alt="Technical documentation and reporting"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <h4 className="font-bold text-navy">Detailed Reporting</h4>
                <p className="text-sm text-gray-600">Complete technical documentation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE AMG FOR INSPECTIONS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Title */}
            <div>
              <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-corporate font-semibold text-sm mb-4">
                Why Choose AMG
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
                Your Trusted Inspection Partner
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                With decades of marine engineering experience and commitment to precision, AMG delivers the reliable inspection services your vessel operations demand.
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
            Need a Professional Inspection?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Our certified marine engineers provide thorough inspections with detailed reporting. Schedule your inspection today for vessels in Egyptian ports or Suez Canal.
          </p>

          <button
            onClick={scrollToContact}
            className="bg-gold hover:bg-gold-light text-navy font-bold px-12 py-5 rounded-corporate-lg transition-all duration-300 shadow-corporate-xl hover:scale-105 text-lg"
          >
            Schedule Inspection Now
          </button>

          {/* Quick Contact Info */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-300">
            <div className="flex items-center gap-2">
              <Phone className="text-gold" size={20} />
              <span className="font-medium">24/7 Support Available</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <Clock className="text-gold" size={20} />
              <span className="font-medium">Flexible Scheduling</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <MapContactSection />
    </div>
  );
}
