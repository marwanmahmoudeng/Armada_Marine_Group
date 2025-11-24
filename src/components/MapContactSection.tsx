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

        {/* Map Placeholder */}
        <div className="mt-12 rounded-corporate-lg overflow-hidden shadow-corporate-lg h-64 bg-gray-300">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy/20 to-gold/20">
            <div className="text-center">
              <MapPin className="text-navy mx-auto mb-2" size={48} />
              <p className="text-navy font-semibold">Interactive Map</p>
              <p className="text-gray-600 text-sm">Suez Canal Region, Egypt</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
