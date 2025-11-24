import { Phone, Mail, MapPin, Globe2, Facebook, Linkedin } from "lucide-react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { SOCIAL_LINKS, CONTACT_INFO } from "../config/socialLinks";

/**
 * Shared Map + Contact Section Component
 * Used across all service detail pages for consistency
 */
export default function MapContactSection() {
  return (
    <section className="py-16 bg-light border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-navy rounded-corporate flex items-center justify-center flex-shrink-0">
              <Mail className="text-gold" size={22} />
            </div>
            <div>
              <h4 className="font-bold text-navy mb-1">Email Us</h4>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-gray-700 hover:text-gold transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-navy rounded-corporate flex items-center justify-center flex-shrink-0">
              <Phone className="text-gold" size={22} />
            </div>
            <div>
              <h4 className="font-bold text-navy mb-1">Call 24/7</h4>
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                className="text-gray-700 hover:text-gold transition-colors"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-navy rounded-corporate flex items-center justify-center flex-shrink-0">
              <MapPin className="text-gold" size={22} />
            </div>
            <div>
              <h4 className="font-bold text-navy mb-1">Location</h4>
              <p className="text-gray-700">{CONTACT_INFO.address}</p>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-navy rounded-corporate flex items-center justify-center flex-shrink-0">
              <Globe2 className="text-gold" size={22} />
            </div>
            <div>
              <h4 className="font-bold text-navy mb-1">Follow Us</h4>
              <div className="flex gap-3 mt-2">
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-navy/10 hover:bg-navy rounded-full flex items-center justify-center transition-colors group"
                  title="Facebook"
                >
                  <Facebook className="text-navy group-hover:text-gold transition-colors" size={16} />
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-navy/10 hover:bg-navy rounded-full flex items-center justify-center transition-colors group"
                  title="Instagram"
                >
                  <BsInstagram className="text-navy group-hover:text-gold transition-colors" size={16} />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-navy/10 hover:bg-navy rounded-full flex items-center justify-center transition-colors group"
                  title="LinkedIn"
                >
                  <Linkedin className="text-navy group-hover:text-gold transition-colors" size={16} />
                </a>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-navy/10 hover:bg-navy rounded-full flex items-center justify-center transition-colors group"
                  title="WhatsApp"
                >
                  <BsWhatsapp className="text-navy group-hover:text-gold transition-colors" size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-navy/10 to-gold/10 p-6">
          <div className="text-center mb-6">
            <MapPin className="text-navy mx-auto mb-3" size={48} />
            <h3 className="text-2xl font-bold text-navy mb-2">Interactive Map</h3>
            <p className="text-gray-600 text-lg">Alexandria, Egypt</p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg w-full h-[380px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220052.58223677374!2d29.738449315625!3d31.200092399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2sAlexandria%2C%20Egypt!5e0!3m2!1sen!2seg!4v1234567890123!5m2!1sen!2seg"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Alexandria, Egypt"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
