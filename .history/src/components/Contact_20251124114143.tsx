import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Facebook,
  Linkedin,
} from "lucide-react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import logo from "../assets/amg-logo.png";
import { SOCIAL_LINKS, CONTACT_INFO } from "../config/socialLinks";

const FORMSPREE_URL = "https://formspree.io/f/xkgkgojp";
const FORM_SUBJECT = "New Message from AMG Website";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [statusMsg, setStatusMsg] = useState<null | "ok" | "err">(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setStatusMsg(null);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || "-",
          message: formData.message,
          _subject: FORM_SUBJECT,
          _replyto: formData.email,
        }),
      });

      if (!res.ok) throw new Error("Formspree failed");

      setStatusMsg("ok");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatusMsg("err");
    } finally {
      setIsSubmitted(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: CONTACT_INFO.email,
      link: `mailto:${CONTACT_INFO.email}`,
    },
    {
      icon: Phone,
      title: "Phone",
      value: CONTACT_INFO.phone,
      link: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MapPin,
      title: "Location",
      value: CONTACT_INFO.address,
      link: "https://maps.app.goo.gl/ZyuWv5PJCKem7yN1A",
    },
  ];

  const socialmedia = [
    {
      icon: BsWhatsapp,
      link: `${SOCIAL_LINKS.whatsapp}?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services`,
    },
    { icon: BsInstagram, link: SOCIAL_LINKS.instagram },
    {
      icon: Facebook,
      link: SOCIAL_LINKS.facebook,
    },
    { icon: Linkedin, link: SOCIAL_LINKS.linkedin },
  ];

  return (
    <section id="contact" className="py-20 lg:py-24 bg-navy relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gold/20 text-gold px-4 py-2 rounded-corporate font-semibold text-sm mb-4">
            Get in Touch
          </div>

          <div className="flex justify-center mb-8">
            <img
              src={logo}
              alt="AMG Logo"
              className="w-28 sm:w-36 md:w-44 drop-shadow-2xl"
            />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Discuss Your Maritime Needs
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Based in Alexandria, Egypt, AMG is strategically positioned to serve the Suez Canal
            and all major Egyptian ports. Contact our operations team — we typically respond within 24 hours.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* FORM */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {["name", "email", "company"].map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-white font-medium mb-1.5 sm:mb-2 text-sm sm:text-base"
                  >
                    {field === "name"
                      ? "Full Name"
                      : field === "email"
                      ? "Email Address"
                      : "Company Name"}
                  </label>

                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    value={(formData as any)[field]}
                    onChange={handleChange}
                    required={field !== "company"}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-corporate text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/40 transition text-sm sm:text-base"
                    placeholder={
                      field === "name"
                        ? "John Doe"
                        : field === "email"
                        ? "john@company.com"
                        : "Your Company"
                    }
                  />
                </div>
              ))}

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-medium mb-2 text-sm sm:text-base"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-corporate text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/40 transition text-sm sm:text-base resize-none"
                  placeholder="Tell us about your maritime needs..."
                />
              </div>

              {statusMsg === "ok" && (
                <div className="text-sm text-green-400">
                  Your message was sent successfully.
                </div>
              )}
              {statusMsg === "err" && (
                <div className="text-sm text-red-400">
                  Something went wrong. Please try again.
                </div>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-corporate-lg transition-all duration-300 shadow-corporate-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={18} />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* INFO SECTION */}
          <div className="space-y-8">
            {/* CONTACT INFO */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-corporate-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-5 sm:space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gold/20 p-3 rounded-corporate flex-shrink-0">
                        <Icon className="text-gold" size={22} />
                      </div>
                      <div>
                        <div className="text-gray-400 text-xs sm:text-sm mb-1">
                          {info.title}
                        </div>
                        <a
                          href={info.link}
                          className="text-white font-medium hover:text-gold transition text-sm sm:text-base"
                          target="_blank"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SOCIAL */}
            <div>
            <div className="flex justify-center items-center gap-4 sm:gap-6">
                {socialmedia.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={i}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all"
                      title={i === 0 ? "WhatsApp" : i === 1 ? "Instagram" : i === 2 ? "Facebook" : "Linkedin"}
                    >
                      <Icon className="text-white" size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* BUSINESS HOURS */}
            <div className="bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-corporate-lg p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                Business Hours
              </h3>

              <div className="space-y-2 text-gray-300 text-sm sm:text-base">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="text-white font-medium">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white font-medium">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-white font-medium">Closed</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-xs sm:text-sm text-gray-400">
                24/7 emergency support available for existing clients
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
