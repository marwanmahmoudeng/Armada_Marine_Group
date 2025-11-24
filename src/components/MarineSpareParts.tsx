import { useNavigate } from "react-router-dom";
import {
  Package,
  Wrench,
  Settings,
  Droplet,
  Activity,
  Globe2,
  Zap,
  Search,
  ShoppingCart,
  ClipboardCheck,
  Truck,
  Phone,
  CheckCircle2,
  Clock,
  Shield,
  Users,
  TrendingDown,
} from "lucide-react";
import MapContactSection from "./MapContactSection";

type PartCategory = {
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

export default function MarineSpareParts() {
  const navigate = useNavigate();

  const partCategories: PartCategory[] = [
    {
      icon: Settings,
      title: "Main Engine Components",
      description:
        "Pistons, cylinder liners, cylinder heads, valves, and complete overhaul kits for all major brands.",
    },
    {
      icon: Zap,
      title: "Auxiliary Engine Components",
      description:
        "Generator parts, turbochargers, fuel injection systems, and auxiliary machinery spares.",
    },
    {
      icon: Droplet,
      title: "Purifiers & Separators",
      description:
        "Alfa Laval, Mitsubishi, and Westfalia purifier parts, bowls, discs, and sealing systems.",
    },
    {
      icon: Activity,
      title: "Pumps & Compressors",
      description:
        "Centrifugal pumps, air compressors, hydraulic pumps, and associated spare parts.",
    },
    {
      icon: Wrench,
      title: "Hydraulic Systems",
      description:
        "Hydraulic motors, cylinders, valves, seals, and complete hydraulic system components.",
    },
    {
      icon: Package,
      title: "Electrical & Navigation",
      description:
        "Electrical motors, control panels, navigation equipment parts, and automation spares.",
    },
  ];

  const workSteps: WorkStep[] = [
    {
      number: "01",
      icon: Search,
      title: "Inquiry & Technical Validation",
      description:
        "Submit your parts request with technical specifications. Our marine engineers validate requirements.",
    },
    {
      number: "02",
      icon: ShoppingCart,
      title: "Sourcing from Verified Suppliers",
      description:
        "We source from our global network of OEM manufacturers and certified marine suppliers.",
    },
    {
      number: "03",
      icon: ClipboardCheck,
      title: "Quality Inspection & Packing",
      description:
        "Every part undergoes strict quality control, certification verification, and secure packaging.",
    },
    {
      number: "04",
      icon: Truck,
      title: "Delivery to Vessel / Suez Canal",
      description:
        "Fast delivery to your vessel at port or Suez Canal anchorage with full documentation.",
    },
  ];

  const benefits: BenefitItem[] = [
    {
      icon: Clock,
      text: "24/7 emergency delivery to Suez Canal transiting vessels",
    },
    {
      icon: Shield,
      text: "100% genuine OEM and certified aftermarket parts only",
    },
    {
      icon: Globe2,
      text: "Extensive global supplier network across 40+ countries",
    },
    {
      icon: Users,
      text: "Experienced marine engineers for technical consultation",
    },
    {
      icon: TrendingDown,
      text: "Competitive pricing with transparent quotations",
    },
    {
      icon: CheckCircle2,
      text: "Complete certification and warranty documentation",
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
        {/* TODO: Replace with real image: /images/marine-engine-room.jpg */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070')",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block bg-gold/20 backdrop-blur-sm border border-gold/30 text-gold px-5 py-2 rounded-corporate font-semibold text-sm mb-6">
            Premium Marine Supply Services
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Marine Spare Parts Supply
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-10 leading-relaxed">
            Reliable sourcing and fast delivery of genuine and OEM components for all major marine
            engines and systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy font-bold px-10 py-4 rounded-corporate-lg transition-all duration-300 shadow-corporate-lg hover:shadow-corporate-xl hover:scale-105"
            >
              Request a Quote
            </button>
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-bold px-10 py-4 rounded-corporate-lg transition-all duration-300"
            >
              Contact Support
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
                Trusted Marine Parts Supply Partner
              </h2>

              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Armada Marine Group maintains an extensive network of verified marine equipment
                  suppliers and OEM manufacturers worldwide. Our procurement specialists ensure
                  authentic parts sourcing for vessels of all types and sizes.
                </p>

                <p className="text-lg">
                  We specialize in sourcing <strong className="text-navy">genuine and OEM-certified parts</strong> for
                  main engines, auxiliary systems, deck machinery, and navigation equipment from all
                  major marine brands including MAN, Wärtsilä, Caterpillar, Mitsubishi, and more.
                </p>

                <p className="text-lg">
                  Our strategic location enables <strong className="text-navy">rapid delivery to all Egyptian ports</strong> and
                  Suez Canal anchorages. We provide 24/7 emergency support for vessels requiring
                  urgent spare parts during transit or layover.
                </p>

                <p className="text-lg">
                  Every component undergoes rigorous quality verification and comes with complete
                  certification documentation, manufacturer warranties, and material traceability
                  reports for your records and classification society requirements.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              {/* TODO: Replace with real image: /images/engine-parts.jpg */}
              <div className="rounded-corporate-lg overflow-hidden shadow-corporate-xl">
                <img
                  src="https://images.unsplash.com/photo-1565630916779-e303be97bc8d?q=80&w=2070"
                  alt="Marine engine spare parts"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-navy text-white p-6 rounded-corporate-lg shadow-corporate-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gold/20 rounded-corporate flex items-center justify-center">
                    <Package className="text-gold" size={32} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gold">10,000+</div>
                    <div className="text-sm text-gray-300">Parts Delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CATEGORIES OF PARTS WE SUPPLY */}
      <section className="py-20 lg:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-corporate font-semibold text-sm mb-4">
              Parts Inventory
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
              Complete Range of Marine Spares
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From critical engine components to specialized navigation equipment, we source every
              part your vessel needs.
            </p>
          </div>

          {/* Grid of Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partCategories.map((category) => {
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
              A streamlined 4-step process ensures fast, reliable delivery of quality marine parts.
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
              Quality Assurance & Logistics
            </h2>
            <p className="text-lg text-gray-700">
              Professional handling from warehouse to vessel delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Image 1 */}
            {/* TODO: Replace with real image: /images/spares-1.jpg */}
            <div className="rounded-corporate-lg overflow-hidden shadow-corporate-lg hover:shadow-corporate-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070"
                alt="Spare parts warehouse"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <h4 className="font-bold text-navy">Organized Warehouse</h4>
                <p className="text-sm text-gray-600">Climate-controlled parts storage</p>
              </div>
            </div>

            {/* Image 2 */}
            {/* TODO: Replace with real image: /images/spares-2.jpg */}
            <div className="rounded-corporate-lg overflow-hidden shadow-corporate-lg hover:shadow-corporate-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?q=80&w=2070"
                alt="Technical inspection"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <h4 className="font-bold text-navy">Quality Inspection</h4>
                <p className="text-sm text-gray-600">Rigorous verification process</p>
              </div>
            </div>

            {/* Image 3 */}
            {/* TODO: Replace with real image: /images/spares-3.jpg */}
            <div className="rounded-corporate-lg overflow-hidden shadow-corporate-lg hover:shadow-corporate-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
                alt="Packed parts ready for delivery"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <h4 className="font-bold text-navy">Ready for Delivery</h4>
                <p className="text-sm text-gray-600">Secure packaging & documentation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE AMG FOR SPARE PARTS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Title */}
            <div>
              <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-corporate font-semibold text-sm mb-4">
                Why Choose AMG
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
                Your Trusted Marine Parts Partner
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                With decades of maritime industry experience and a commitment to excellence, AMG
                delivers the reliability and quality your vessel operations demand.
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
            Need Spare Parts Urgently?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Our operations team provides 24/7 support for vessels transiting the Suez Canal and
            docked at Egyptian ports. Get your critical parts delivered fast.
          </p>

          <button
            onClick={scrollToContact}
            className="bg-gold hover:bg-gold-light text-navy font-bold px-12 py-5 rounded-corporate-lg transition-all duration-300 shadow-corporate-xl hover:scale-105 text-lg"
          >
            Get a Quotation Now
          </button>

          {/* Quick Contact Info */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-300">
            <div className="flex items-center gap-2">
              <Phone className="text-gold" size={20} />
              <span className="font-medium">24/7 Hotline Available</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <Clock className="text-gold" size={20} />
              <span className="font-medium">Emergency Response Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <MapContactSection />
    </div>
  );
}
