import { useNavigate } from "react-router-dom";
import {
  Zap,
  Clock,
  Ship,
  Package,
  Phone,
  Mail,
  CheckCircle2,
  Anchor,
  Navigation,
  Shield,
  Users,
  TrendingUp,
  Headphones,
  FileText,
  Gauge,
  AlertTriangle,
} from "lucide-react";
import MapContactSection from "./MapContactSection";

type EmergencyFeature = {
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

export default function EmergencyDeliveriesSuezCanal() {
  const navigate = useNavigate();

  const emergencyFeatures: EmergencyFeature[] = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Round-the-clock operations team ready to respond to urgent delivery requests at any time, day or night.",
    },
    {
      icon: Ship,
      title: "Suez Canal Coverage",
      description:
        "Strategic positioning for rapid delivery to vessels transiting or anchored in the Suez Canal zone.",
    },
    {
      icon: Navigation,
      title: "Port-to-Vessel Delivery",
      description:
        "Fast boat services for direct delivery to vessels at anchorage or alongside at Egyptian ports.",
    },
    {
      icon: Package,
      title: "Critical Spare Parts",
      description:
        "Emergency sourcing and delivery of essential spare parts, lubricants, provisions, and technical supplies.",
    },
    {
      icon: FileText,
      title: "Customs Clearance",
      description:
        "Expedited customs processing and documentation for urgent maritime cargo entering Egyptian waters.",
    },
    {
      icon: Headphones,
      title: "Operations Coordination",
      description:
        "Dedicated operations team coordinating with agents, suppliers, and port authorities for seamless delivery.",
    },
  ];

  const processSteps: ProcessStep[] = [
    {
      number: "01",
      icon: Phone,
      title: "Urgent Request Received",
      description:
        "Contact our 24/7 operations hotline with your emergency requirements, vessel details, and ETA.",
    },
    {
      number: "02",
      icon: Gauge,
      title: "Rapid Assessment & Sourcing",
      description:
        "Our team immediately assesses availability, sources parts from our network, and confirms delivery timeline.",
    },
    {
      number: "03",
      icon: Zap,
      title: "Expedited Processing",
      description:
        "Fast-track customs clearance, quality verification, and secure packaging while coordinating logistics.",
    },
    {
      number: "04",
      icon: Ship,
      title: "Delivery to Vessel",
      description:
        "Direct delivery to your vessel via fast boat or port logistics, with full documentation and confirmation.",
    },
  ];

  const benefits: BenefitItem[] = [
    {
      icon: Clock,
      text: "Average response time under 2 hours for emergency requests",
    },
    {
      icon: MapPin,
      text: "Strategic location near Suez Canal for rapid mobilization",
    },
    {
      icon: Shield,
      text: "Proven track record with 500+ emergency deliveries completed",
    },
    {
      icon: Users,
      text: "Experienced operations team with deep port authority relationships",
    },
    {
      icon: TrendingUp,
      text: "Real-time tracking and updates throughout delivery process",
    },
    {
      icon: CheckCircle2,
      text: "Complete documentation and customs compliance guaranteed",
    },
  ];

  const scrollToContact = () => {
    navigate("/#contact");
  };

  const handleEmergencyCall = () => {
    window.location.href = "tel:+201019062754";
  };

  const handleEmergencyEmail = () => {
    window.location.href = "mailto:emergency@armadamarine.com?subject=Emergency%20Delivery%20Request";
  };
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        {/* TODO: Replace with real image: /images/emergency-hero.jpg */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070')",
          }}
        >
          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/90 to-navy/75"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          {/* Label Chip */}
          <div className="inline-block bg-red-500/20 backdrop-blur-sm border border-red-400/40 text-red-400 px-5 py-2 rounded-corporate font-semibold text-sm mb-6 animate-pulse">
            <Zap className="inline mr-2" size={16} />
            24/7 Emergency Support
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Emergency Deliveries – Suez Canal
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-10 leading-relaxed">
            Rapid delivery of critical spare parts and supplies for vessels transiting the Suez Canal and Egyptian ports. Available 24/7 for urgent maritime needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleEmergencyEmail}
              className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-bold px-10 py-4 rounded-corporate-lg transition-all duration-300 shadow-corporate-lg hover:shadow-corporate-xl hover:scale-105 flex items-center justify-center gap-2"
            >
              <AlertTriangle size={20} />
              Request Emergency Delivery
            </button>
            <button
              onClick={handleEmergencyCall}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-bold px-10 py-4 rounded-corporate-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Contact Operations
            </button>
          </div>

          {/* Emergency Hotline Number */}
          <div className="mt-8 inline-block bg-navy/80 backdrop-blur-sm border border-gold/30 px-8 py-4 rounded-corporate-lg">
            <div className="flex items-center gap-3">
              <Phone className="text-gold" size={24} />
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase tracking-wider">Emergency Hotline</p>
                <a href="tel:+201019062754" className="text-xl font-bold text-white hover:text-gold transition-colors">
                  +20 101 906 2754
                </a>
              </div>
            </div>
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
                24/7 Emergency Response for Suez Canal Vessels
              </h2>

              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Armada Marine Group operates a dedicated <strong className="text-navy">24/7 emergency delivery service</strong> for vessels transiting the Suez Canal and anchored at Egyptian ports. Our strategic location and established network enable rapid response to urgent maritime requirements.
                </p>

                <p className="text-lg">
                  We specialize in <strong className="text-navy">emergency sourcing and delivery</strong> of critical spare parts, lubricants, provisions, technical supplies, and equipment. Our operations team coordinates with global suppliers, local agents, and port authorities to ensure seamless execution.
                </p>

                <p className="text-lg">
                  Our service covers all <strong className="text-navy">Suez Canal anchorages</strong> and major Egyptian ports including Port Said, Suez, Alexandria, and Damietta. We utilize fast boat services for direct vessel delivery and maintain expedited customs clearance protocols.
                </p>

                <p className="text-lg">
                  Every emergency delivery includes complete documentation, real-time tracking, and post-delivery confirmation. Our experienced team understands the urgency of maritime operations and provides professional support throughout the process.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              {/* TODO: Replace with real image: /images/emergency-overview.jpg */}
              <div className="rounded-corporate-lg overflow-hidden shadow-corporate-xl">
                <img
                  src="https://images.unsplash.com/photo-1605737132449-c82f2fdd7200?q=80&w=2070"
                  alt="Emergency delivery operations at night"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-navy text-white p-6 rounded-corporate-lg shadow-corporate-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-red-500/20 rounded-corporate flex items-center justify-center">
                    <Zap className="text-red-400" size={32} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gold">
                      <span className="text-red-400">&lt;2</span>h
                    </div>
                    <div className="text-sm text-gray-300">Avg Response Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EMERGENCY FEATURES SECTION */}
      <section className="py-20 lg:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-corporate font-semibold text-sm mb-4">
              Service Features
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
              Comprehensive Emergency Support
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From urgent spare parts to critical provisions, our emergency delivery service covers all aspects of vessel support.
            </p>
          </div>

          {/* Grid of Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyFeatures.map((feature) => {
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
              How Emergency Delivery Works
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A streamlined 4-step process ensures rapid response and delivery for urgent vessel requirements.
            </p>
          </div>

          {/* Timeline Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Line - Hidden on mobile */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-gold to-red-500 opacity-20"></div>

            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative">
                  {/* Step Card */}
                  <div className="bg-light rounded-corporate-lg p-6 h-full border-2 border-navy/10 hover:border-red-500/50 transition-colors duration-300">
                    {/* Step Number Badge */}
                    <div className="relative inline-flex items-center justify-center w-16 h-16 bg-red-500 rounded-corporate mb-4 z-10">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
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

      {/* 5. COVERAGE MAP SECTION */}
      <section className="py-20 lg:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Suez Canal & Egyptian Ports Coverage
            </h2>
            <p className="text-lg text-gray-700">
              Strategic positioning for rapid delivery throughout the Suez Canal zone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Coverage Area 1 */}
            <div className="rounded-corporate-lg overflow-hidden shadow-corporate-lg hover:shadow-corporate-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2070"
                alt="Suez Canal vessels"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <h4 className="font-bold text-navy flex items-center gap-2">
                  <Anchor className="text-gold" size={20} />
                  Suez Canal Anchorages
                </h4>
                <p className="text-sm text-gray-600">Fast boat delivery to transiting vessels</p>
              </div>
            </div>

            {/* Coverage Area 2 */}
            <div className="rounded-corporate-lg overflow-hidden shadow-corporate-lg hover:shadow-corporate-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1605737132449-c82f2fdd7200?q=80&w=2070"
                alt="Port operations"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <h4 className="font-bold text-navy flex items-center gap-2">
                  <MapPin className="text-gold" size={20} />
                  Major Egyptian Ports
                </h4>
                <p className="text-sm text-gray-600">Port Said, Suez, Alexandria, Damietta</p>
              </div>
            </div>

            {/* Coverage Area 3 */}
            <div className="rounded-corporate-lg overflow-hidden shadow-corporate-lg hover:shadow-corporate-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1585409661859-4c45c097ffea?q=80&w=2070"
                alt="Night operations"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <h4 className="font-bold text-navy flex items-center gap-2">
                  <Clock className="text-gold" size={20} />
                  24/7 Operations
                </h4>
                <p className="text-sm text-gray-600">Round-the-clock emergency support</p>
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
                Your Trusted Emergency Partner
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                When every minute counts, Armada Marine Group delivers the speed, reliability, and professionalism your vessel operations demand.
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

      {/* 7. EMERGENCY CTA SECTION */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-br from-red-600 to-red-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-corporate text-white font-semibold text-sm mb-6">
            <Zap className="inline mr-2" size={16} />
            Emergency Support Available Now
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Need Urgent Delivery?
          </h2>
          <p className="text-xl text-red-100 mb-10 leading-relaxed">
            Our operations team is standing by 24/7 to handle your emergency delivery requirements. Contact us now for immediate assistance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              onClick={handleEmergencyCall}
              className="bg-white hover:bg-gray-100 text-red-600 font-bold px-12 py-5 rounded-corporate-lg transition-all duration-300 shadow-corporate-xl hover:scale-105 text-lg flex items-center justify-center gap-2"
            >
              <Phone size={24} />
              Call Emergency Hotline
            </button>
            <button
              onClick={handleEmergencyEmail}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold px-12 py-5 rounded-corporate-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail size={24} />
              Email Request
            </button>
          </div>

          {/* Emergency Contact Info */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-red-100 border-t border-white/20 pt-8">
            <div className="flex items-center gap-2">
              <Phone className="text-white" size={20} />
              <div className="text-left">
                <p className="text-xs opacity-80">Emergency Hotline</p>
                <a href="tel:+201019062754" className="font-bold text-white hover:text-gold transition-colors">
                  +20 101 906 2754
                </a>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <Mail className="text-white" size={20} />
              <div className="text-left">
                <p className="text-xs opacity-80">Emergency Email</p>
                <a href="mailto:emergency@armadamarine.com" className="font-bold text-white hover:text-gold transition-colors">
                  emergency@armadamarine.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <MapContactSection />
    </div>
  );
}
