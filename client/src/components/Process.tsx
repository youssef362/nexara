/**
 * Design: "Luminous Void" — Dark Premium with Ethereal Light
 * Process: Vertical timeline with animated connectors. Each step has an icon,
 * title, description, and subtle glow. Staggered scroll reveal.
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, PenTool, Rocket, Server, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Analyze workflows, data, and use cases. Define the AI vector.",
    icon: Search,
    accent: "from-blue-500 to-cyan-400",
  },
  {
    number: "02",
    title: "Design",
    description: "Architect agents, RAG pipelines, and model strategy for your scale.",
    icon: PenTool,
    accent: "from-violet-500 to-purple-400",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop AI agents and conversational systems using proven R&D.",
    icon: Rocket,
    accent: "from-indigo-500 to-blue-400",
  },
  {
    number: "04",
    title: "Integrate & Deploy",
    description: "Connect to enterprise systems. Deploy on cloud or on-prem.",
    icon: Server,
    accent: "from-amber-500 to-orange-400",
  },
  {
    number: "05",
    title: "Optimize",
    description: "Monitor, improve models, and evolve your AI in production.",
    icon: BarChart3,
    accent: "from-emerald-500 to-teal-400",
  },
];

function ProcessStep({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const colorClass = step.accent.split(" ")[0].replace("from-", "text-");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-6 sm:gap-8"
    >
      {/* Timeline column */}
      <div className="flex flex-col items-center shrink-0">
        {/* Step circle */}
        <step.icon size={32} className={`${colorClass} z-10 drop-shadow-lg mb-4`} />
        {/* Connector line */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.12 + 0.3 }}
            className="w-px flex-1 bg-gradient-to-b from-white/10 to-transparent origin-top min-h-[60px]"
          />
        )}
      </div>

      {/* Content */}
      <div className={`pb-12 ${isLast ? "pb-0" : ""}`}>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-mono text-white/25">{step.number}</span>
          <h3 className="text-xl font-semibold text-white font-[Sora]">{step.title}</h3>
        </div>
        <p className="text-base text-white/40 leading-relaxed max-w-lg">{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="process" className="relative py-28 sm:py-36">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-500/[0.03] rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: header */}
          <div ref={headerRef} className="lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-8 bg-indigo-500/50" />
              <span className="text-sm font-medium text-indigo-400 uppercase tracking-wider font-mono">
                Our Process
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[Sora] tracking-tight leading-tight"
            >
              From Idea
              <br />
              to Production
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg text-white/40 leading-relaxed"
            >
              Transparent and reliable — from day one to production.
            </motion.p>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {["Client-Focused", "Best Practices", "Transparent", "Reliable"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs text-white/40 bg-white/[0.03] border border-white/[0.06] rounded-lg font-mono"
                  >
                    {tag}
                  </span>
                )
              )}
            </motion.div>
          </div>

          {/* Right: timeline */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <ProcessStep
                key={step.number}
                step={step}
                index={i}
                isLast={i === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
