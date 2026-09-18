/**
 * Design: "Luminous Void" — Dark Premium with Ethereal Light
 * Partners: Two tiers — strategic partners (cards) and notable clients (scrolling marquee).
 * Clean, minimal, with subtle glass-morphism.
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Handshake, Building2 } from "lucide-react";

const partners = [
  {
    name: "Big4 Consulting in MENA",
    description: "Strategic consulting partnership in the MENA region — project-ready",
    type: "Consulting",
  },
  {
    name: "Teleperformance / Direct Star",
    description: "Global customer experience management and BPO partnership",
    type: "CX & BPO",
  },
  {
    name: "Prior Solutions",
    description: "Major Thai system integrator — Southeast Asia market access",
    type: "System Integrator",
  },
  {
    name: "Top System Integrator in MENA",
    description: "Leading system integrator — MENA market presence",
    type: "System Integrator",
  },
  {
    name: "Elementpay.io",
    description: "Southeast Asia JV partner — fintech and payments ecosystem",
    type: "JV Partner",
  },
  {
    name: "EDNA",
    description: "Omnichannel communications platform partnership",
    type: "Technology",
  },
];

const clients = [
  "Philips",
  "Mary Kay",
  "Avon",
  "Honor",
  "KFC",
  "Raiffeisen",
  "VTB",
  "Invitro",
  "Metro",
  "Skolkovo",
  "HSE",
  "Rusagro",
];

function PartnerCard({ partner: p, index: i }: { partner: typeof partners[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="group relative p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
    >
      <div className="flex items-start gap-3">
        <Handshake size={32} className="text-indigo-400 shrink-0 drop-shadow-md" />
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-white font-[Sora] truncate">
            {p.name}
          </h3>
          <span className="text-xs text-indigo-400/70 font-mono">{p.type}</span>
          <p className="text-sm text-white/35 mt-2 leading-relaxed">
            {p.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Partners() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="partners" className="relative py-28 sm:py-36">
      {/* Subtle background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-violet-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div ref={headerRef} className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-indigo-500/50" />
            <span className="text-sm font-medium text-indigo-400 uppercase tracking-wider font-mono">
              Trusted By
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[Sora] tracking-tight"
          >
            Partners & Clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-white/40 leading-relaxed"
          >
            Leading enterprises and integrators across MENA, Southeast Asia, and Europe.
          </motion.p>
        </div>

        {/* Strategic Partners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {partners.map((p, i) => (
            <PartnerCard key={p.name} partner={p} index={i} />
          ))}
        </div>

        {/* Notable Clients — marquee */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Building2 size={16} className="text-white/30" />
            <span className="text-sm text-white/30 uppercase tracking-wider font-mono">
              Notable Clients
            </span>
          </div>

          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#08090E] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#08090E] to-transparent z-10 pointer-events-none" />

            {/* Scrolling track */}
            <div className="flex gap-8 animate-marquee">
              {[...clients, ...clients].map((name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="shrink-0 px-6 py-3 rounded-lg border border-white/[0.06] bg-white/[0.02]"
                >
                  <span className="text-base font-medium text-white/40 whitespace-nowrap font-[Sora]">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
