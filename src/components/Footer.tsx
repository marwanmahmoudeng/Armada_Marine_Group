import logo from "../assets/amg-logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white py-8 sm:py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
          {/* Logo + text */}
          <div className="flex items-center gap-4 sm:gap-6">
            <img
              src={logo}
              alt="Armada Marine Group logo"
              className="h-9 w-auto sm:h-10 md:h-12"
              loading="eager"
              decoding="async"
            />
            <div>
              <span className="block text-xs sm:text-sm font-[Orbitron] tracking-[0.22em] sm:tracking-[0.28em]">
                ARMADA MARINE GROUP
              </span>
              <span className="text-gray-400 text-[11px] sm:text-xs">
                Excellence in Maritime Solutions
              </span>
            </div>
          </div>

          {/* Rights */}
          <div className="text-xs sm:text-sm text-center md:text-right text-gray-400">
            <p>© {currentYear} Armada Marine Group. All rights reserved.</p>
            <p className="text-[11px] sm:text-xs mt-1 text-gray-500">
              Committed to maritime excellence and innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
