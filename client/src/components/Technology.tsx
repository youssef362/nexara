/**
 * Design: "Luminous Void" — Dark Premium with Ethereal Light
 * Technology: Staggered grid of capability cards with icons and subtle animations.
 * Organized by category with visual hierarchy.
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain,
  AudioWaveform,
  Globe,
  Server,
  Shield,
  Cpu,
  MessageSquare,
  Mic,
  Languages,
  Database,
  Lock,
  Cloud,
} from "lucide-react";

const categories = [
  {
    title: "Large Language Models",
    icon: Brain,
    accent: "from-violet-500 to-purple-400",
    items: [
      { name: "ChatGPT", detail: "OpenAI" },
      { name: "Claude", detail: "Anthropic" },
      { name: "Gemini Pro", detail: "Google" },
      { name: "Llama, Mistral, Qwen", detail: "Open Source" },
    ],
  },
  {
    title: "Speech & Voice",
    icon: Mic,
    accent: "from-amber-500 to-orange-400",
    items: [
      { name: "NVIDIA RIVA", detail: "17+ Languages" },
      { name: "Empathic TTS", detail: "50ms Latency" },
      { name: "Voice Cloning", detail: "Human-Level MOS" },
      { name: "Speaker Diarization", detail: "Multi-Speaker" },
    ],
  },
  {
    title: "NLU & Dialogue",
    icon: MessageSquare,
    accent: "from-blue-500 to-cyan-400",
    items: [
      { name: "Intent Classification", detail: "Multi-Language" },
      { name: "Entity Extraction", detail: "Custom Ontologies" },
      { name: "Dialogue Management", detail: "State Machines + LLM" },
      { name: "RAG Pipelines", detail: "Enterprise Knowledge" },
    ],
  },
  {
    title: "Deployment",
    icon: Server,
    accent: "from-emerald-500 to-teal-400",
    items: [
      { name: "On-Premises", detail: "Full Air-Gap Support" },
      { name: "Edge / IoT", detail: "Mini AI PC, Mobile" },
      { name: "Cloud Native", detail: "K8s, Docker, Terraform" },
      { name: "Hybrid", detail: "Split Workloads" },
    ],
  },
  {
    title: "Security & Compliance",
    icon: Shield,
    accent: "from-rose-500 to-pink-400",
    items: [
      { name: "Data Sovereignty", detail: "On-Prem First" },
      { name: "PI2 Security", detail: "Enterprise Grade" },
      { name: "Audit Logging", detail: "Full Traceability" },
      { name: "Access Control", detail: "RBAC / SSO" },
    ],
  },
  {
    title: "AI Infrastructure",
    icon: Cpu,
    accent: "from-indigo-500 to-blue-400",
    items: [
      { name: "Model Quantization", detail: "INT4/INT8" },
      { name: "Knowledge Distillation", detail: "Custom Models" },
      { name: "HA Clusters", detail: "Zero Downtime" },
      { name: "MLOps Pipeline", detail: "CI/CD for ML" },
    ],
  },
];

function CategoryCard({
  cat,
  index,
}: {
  cat: (typeof categories)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const colorClass = cat.accent.split(" ")[0].replace("from-", "text-");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <cat.icon size={32} className={`${colorClass} drop-shadow-md`} />
        <h3 className="text-base font-semibold text-white font-[Sora]">{cat.title}</h3>
      </div>

      {/* Items */}
      <div className="space-y-3">
        {cat.items.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between gap-3 py-2 border-b border-white/[0.04] last:border-0"
          >
            <span className="text-sm text-white/60">{item.name}</span>
            <span className="text-xs text-white/30 font-mono shrink-0">{item.detail}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Technology() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="technology" className="relative py-28 sm:py-36">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[400px] bg-violet-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

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
              Technology
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[Sora] tracking-tight"
          >
            What We Work With
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-white/40 leading-relaxed"
          >
            We work seamlessly with both open-source and proprietary AI technologies.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
