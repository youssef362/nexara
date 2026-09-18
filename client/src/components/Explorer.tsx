/**
 * Design: "Luminous Void" — Dark Premium with Ethereal Light
 * Interactive Solution Explorer: User selects industry + challenge type,
 * and sees matching capabilities with smooth animated reveal.
 */
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Building2,
  Plane,
  Gamepad2,
  HeartPulse,
  ShoppingCart,
  Landmark,
  Headphones,
  AudioWaveform,
  Mic,
  Languages,
  MessageSquare,
  Users,
  Brain,
  Shield,
  Cpu,
  Sparkles,
} from "lucide-react";

const industries = [
  { id: "fintech", label: "Fintech & Banking", icon: Landmark },
  { id: "gaming", label: "Gaming & Entertainment", icon: Gamepad2 },
  { id: "aviation", label: "Aviation & Travel", icon: Plane },
  { id: "healthcare", label: "Healthcare", icon: HeartPulse },
  { id: "retail", label: "Retail & FMCG", icon: ShoppingCart },
  { id: "government", label: "Government & Public", icon: Building2 },
];

const challenges = [
  { id: "analytics", label: "Speech & Call Analytics", icon: AudioWaveform },
  { id: "voice", label: "Voice Synthesis & Cloning", icon: Mic },
  { id: "translation", label: "Real-Time Translation", icon: Languages },
  { id: "chatbot", label: "Chatbots & Virtual Agents", icon: MessageSquare },
  { id: "avatar", label: "AI Avatars", icon: Users },
  { id: "custom", label: "Custom NLP Solution", icon: Brain },
];

interface Solution {
  title: string;
  description: string;
  capabilities: string[];
  metrics: { label: string; value: string }[];
  relatedCase?: string;
}

function getSolution(industry: string, challenge: string): Solution {
  const solutions: Record<string, Record<string, Solution>> = {
    fintech: {
      analytics: {
        title: "Enterprise Speech Analytics for Financial Services",
        description:
          "Process millions of customer interactions across 17+ languages for compliance, quality, and satisfaction insights.",
        capabilities: [
          "Multi-language ASR (17+ languages)",
          "Custom compliance metric extraction",
          "On-premises deployment for data sovereignty",
          "Real-time and batch processing modes",
        ],
        metrics: [
          { label: "Languages", value: "17+" },
          { label: "Accuracy", value: "95%" },
          { label: "Scale", value: "1M dialogs/mo" },
        ],
        relatedCase: "Speech Analytics Platform",
      },
      voice: {
        title: "Branded Voice for Financial Products",
        description:
          "Distinctive voice identity for IVR, mobile banking, and customer-facing interfaces.",
        capabilities: [
          "Custom TTS with brand voice training",
          "Low-latency inference for real-time use",
          "Emotional tone control for different contexts",
          "Multi-language voice synthesis",
        ],
        metrics: [
          { label: "Latency", value: "50ms" },
          { label: "Quality", value: "Human-level" },
          { label: "Languages", value: "10+" },
        ],
        relatedCase: "Custom Empathic Voice",
      },
      translation: {
        title: "Real-Time Translation for Global Banking",
        description:
          "Seamless multilingual communication across branches, call centers, and digital channels.",
        capabilities: [
          "ASR → Translation → TTS pipeline",
          "Financial domain vocabulary",
          "Edge deployment for branch offices",
          "Sub-2-second end-to-end latency",
        ],
        metrics: [
          { label: "Latency", value: "<2s" },
          { label: "Deploy", value: "Edge/Cloud" },
          { label: "Languages", value: "20+" },
        ],
        relatedCase: "AI Translation Kiosk",
      },
      chatbot: {
        title: "Intelligent Banking Assistant",
        description:
          "AI chatbots for account inquiries, transaction support, and financial advisory with enterprise security.",
        capabilities: [
          "LLM-powered conversational AI",
          "RAG over financial knowledge bases",
          "Secure on-prem deployment",
          "Multi-channel: web, mobile, messaging",
        ],
        metrics: [
          { label: "Deployments", value: "100+" },
          { label: "Conversations", value: "1M+" },
          { label: "Channels", value: "Multi" },
        ],
        relatedCase: "Enterprise Chatbots & Agents",
      },
      avatar: {
        title: "Virtual Financial Advisor Avatar",
        description:
          "Interactive AI avatar for branches and digital channels — personalized financial guidance.",
        capabilities: [
          "Photorealistic avatar rendering",
          "NLU + financial domain knowledge",
          "On-premises deployment",
          "Multi-language support",
        ],
        metrics: [
          { label: "Sectors", value: "Banking" },
          { label: "Deploy", value: "On-Prem" },
          { label: "Type", value: "Interactive" },
        ],
        relatedCase: "AI Avatars",
      },
      custom: {
        title: "Custom NLP for Financial Document Processing",
        description:
          "Custom NLP for contract analysis, compliance monitoring, and automated reporting.",
        capabilities: [
          "Custom entity extraction for financial terms",
          "Document classification and routing",
          "Regulatory compliance checking",
          "Automated summarization",
        ],
        metrics: [
          { label: "Accuracy", value: "95%+" },
          { label: "Scale", value: "Enterprise" },
          { label: "Deploy", value: "Flexible" },
        ],
      },
    },
  };

  // Default solution for combinations not explicitly mapped
  const defaultSolution: Solution = {
    title: `${challenges.find((c) => c.id === challenge)?.label} for ${industries.find((i) => i.id === industry)?.label}`,
    description: `Custom ${challenges.find((c) => c.id === challenge)?.label.toLowerCase()} solution for ${industries.find((i) => i.id === industry)?.label.toLowerCase()}, built on our proven R&D stack.`,
    capabilities: [
      "Custom architecture designed from scratch",
      "Enterprise-grade security and compliance",
      "Flexible deployment: on-prem, cloud, or edge",
      "Continuous iteration based on real metrics",
    ],
    metrics: [
      { label: "Approach", value: "Custom R&D" },
      { label: "Deploy", value: "Flexible" },
      { label: "Support", value: "Ongoing" },
    ],
  };

  return solutions[industry]?.[challenge] || defaultSolution;
}

export default function Explorer() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("fintech");
  const [selectedChallenge, setSelectedChallenge] = useState<string>("analytics");
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const solution =
    selectedIndustry && selectedChallenge
      ? getSolution(selectedIndustry, selectedChallenge)
      : null;

  return (
    <section id="explorer" className="relative py-28 sm:py-36">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/[0.03] rounded-full blur-[150px] pointer-events-none" />

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
              Interactive
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[Sora] tracking-tight"
          >
            Solution Explorer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-white/40 leading-relaxed"
          >
            Select your industry and challenge to see our tailored solution.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Selection panel */}
          <div className="space-y-8">
            {/* Industry selection */}
            <div>
              <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-4 font-mono">
                Your Industry
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {industries.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind.id)}
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border text-left transition-all duration-200 ${
                      selectedIndustry === ind.id
                        ? "border-indigo-500/50 bg-indigo-500/10 text-white"
                        : "border-white/[0.06] bg-white/[0.02] text-white/50 hover:bg-white/[0.04] hover:border-white/[0.1] hover:text-white/70"
                    }`}
                  >
                    <ind.icon
                      size={18}
                      className={
                        selectedIndustry === ind.id ? "text-indigo-400" : "text-white/30"
                      }
                    />
                    <span className="text-sm font-medium">{ind.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Challenge selection */}
            <div>
              <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-4 font-mono">
                Your Challenge
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {challenges.map((ch) => (
                  <button
                    key={ch.id}
                    onClick={() => setSelectedChallenge(ch.id)}
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border text-left transition-all duration-200 ${
                      selectedChallenge === ch.id
                        ? "border-indigo-500/50 bg-indigo-500/10 text-white"
                        : "border-white/[0.06] bg-white/[0.02] text-white/50 hover:bg-white/[0.04] hover:border-white/[0.1] hover:text-white/70"
                    }`}
                  >
                    <ch.icon
                      size={18}
                      className={
                        selectedChallenge === ch.id ? "text-indigo-400" : "text-white/30"
                      }
                    />
                    <span className="text-sm font-medium">{ch.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result panel */}
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {solution ? (
                <motion.div
                  key={`${selectedIndustry}-${selectedChallenge}`}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm"
                >
                  {/* Solution header */}
                  <div className="flex items-start gap-3 mb-6">
                    <Sparkles size={32} className="text-indigo-500 drop-shadow-lg shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white font-[Sora] leading-snug">
                        {solution.title}
                      </h3>
                      {solution.relatedCase && (
                        <span className="text-xs text-indigo-400/70 font-mono mt-1 inline-block">
                          Related: {solution.relatedCase}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-white/45 leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {solution.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="bg-white/[0.03] rounded-lg p-3 border border-white/[0.04] text-center"
                      >
                        <div className="text-base font-semibold text-white font-[Sora]">
                          {m.value}
                        </div>
                        <div className="text-xs text-white/30 mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Capabilities */}
                  <h4 className="text-xs font-medium text-white/40 uppercase tracking-wider mb-3 font-mono">
                    Key Capabilities
                  </h4>
                  <div className="space-y-2.5">
                    {solution.capabilities.map((cap, i) => (
                      <motion.div
                        key={cap}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.08 }}
                        className="flex items-start gap-2.5"
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500/60 shrink-0" />
                        <span className="text-sm text-white/50">{cap}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() =>
                      document
                        .querySelector("#contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="mt-6 w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20"
                  >
                    Discuss This Solution
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex items-center justify-center p-8 rounded-2xl border border-dashed border-white/[0.06]"
                >
                  <div className="text-center">
                    <Sparkles size={48} className="text-white/10 mx-auto mb-6" />
                    <p className="text-base text-white/30 font-[Sora]">
                      Select an industry and challenge
                    </p>
                    <p className="text-sm text-white/20 mt-1">
                      to explore our tailored solution
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
