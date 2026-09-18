/**
 * Design: "Luminous Void" — Dark Premium with Ethereal Light
 * Footer: Minimal, clean, with subtle border separation.
 */
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Logo size="sm" className="opacity-70" />
            <span className="text-xs text-white/20">
              International R&D Laboratory
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {["Cases", "Partners", "Process", "Technology", "Team", "Contact"].map((link) => (
              <button
                key={link}
                onClick={() =>
                  document
                    .querySelector(`#${link.toLowerCase()}`)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Nexara Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
