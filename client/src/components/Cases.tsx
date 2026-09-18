/**
 * Design: "Luminous Void" — Dark Premium with Ethereal Light
 * Cases: Expandable cards with glass-morphism, generated images, staggered scroll reveals.
 * Each case has metrics, tags, and a description. Click to expand details.
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  AudioWaveform,
  Mic,
  Users,
  MessageSquare,
  ChevronDown,
  Headphones,
  Layers,
  FlaskConical,
  X,
} from "lucide-react";

const IMG_SPEECH = "/what-we-build/speech.png";
const IMG_EMPATHIC = "/what-we-build/empathic.png";
const IMG_VOICE_COPILOT = "/what-we-build/voice.png";
const IMG_TESAI = "/what-we-build/tesai.png";
const IMG_CONVERSATIONAL = "/what-we-build/conversational.png";
const IMG_AVATAR = "/what-we-build/avatars.png";
const IMG_ENTERPRISE = "/what-we-build/enterprise.png";
const IMG_1MED_TV = "/what-we-build/1med-tv.png";
const IMG_METRO_RECRUITMENT = "/what-we-build/metro-recruitment.png";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  icon: React.ElementType;
  image?: string;
  accentColor: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  description: string;
  details: string[];
  link?: string;
  demoUrl?: string;
}

const cases: CaseStudy[] = [
  {
    id: "speech-analytics",
    title: "Speech Analytics Platform",
    client: "International Fintech with 1 mln MAU",
    icon: AudioWaveform,
    image: IMG_SPEECH,
    accentColor: "from-blue-500 to-cyan-400",
    tags: ["ASR", "RAG & LLM", "Analytics", "On-Prem"],
    metrics: [
      { label: "Languages", value: "17" },
      { label: "Dialogs/Month", value: "1M" },
      { label: "Quality Metrics", value: "20" },
      { label: "Accuracy", value: "95%" },
    ],
    description:
      "On-prem speech analytics processing 1M dialogs/month across 17 languages with open-source ASR/NLU stack.",
    details: [
      "20 custom metrics for support and sales quality evaluation",
      "95% accuracy vs. manual human review",
      "Enterprise integrations: Confluence, Datalake, HA clusters",
    ],
  },
  {
    id: "empathic-voice",
    title: "Custom Empathic Voice",
    client: "International gaming solution provider",
    icon: Mic,
    image: IMG_EMPATHIC,
    accentColor: "from-amber-500 to-orange-400",
    tags: ["TTS", "Voice Cloning", "Emotion", "Low Latency"],
    metrics: [
      { label: "Latency", value: "50ms" },
      { label: "Training", value: "5–7 iter" },
      { label: "MOS Score", value: "Human-level" },
      { label: "Pipeline", value: "Custom" },
    ],
    description:
      "Custom empathic TTS with voice cloning — 50ms latency, MOS scores indistinguishable from human speech.",
    details: [
      "Emotional expression pipeline with 5–7 training iterations per voice",
      "Real-time inference at 50ms for production applications",
    ],
  },
  {
    id: "voice-copilot",
    title: "Voice Co-pilot for Medical Center",
    client: "Premium European Medical Center",
    icon: Headphones,
    image: IMG_VOICE_COPILOT,
    accentColor: "from-emerald-500 to-teal-400",
    tags: ["Co-pilot", "Voice AI", "Agentic AI", "On-prem"],
    metrics: [
      { label: "Mode", value: "Real-time" },
      { label: "Latency", value: "<2 sec" },
      { label: "Pipeline", value: "ASR + RAG" },
      { label: "Integration", value: "Cisco" },
    ],
    description:
      "Real-time voice co-pilot on Cisco telephony — agentic RAG delivers personalized hints to operators during live calls.",
    details: [
      "Dual-channel Cisco telephony integration",
      "Agentic RAG autonomously queries external systems for context",
    ],
  },
  {
    id: "tesai",
    title: "Tesai — AI Test Automation",
    client: "Nexara — Internal Spin-off",
    icon: FlaskConical,
    image: IMG_TESAI,
    accentColor: "from-emerald-400 to-cyan-400",
    tags: ["AI test automation", "Deploy Everywhere", "Multi-Agent"],
    metrics: [
      { label: "AI Agents", value: "4" },
      { label: "AI Providers", value: "3" },
      { label: "Execution AI Cost", value: "$0" },
      { label: "Status", value: "Alpha" },
    ],
    description:
      "Our internal spin-off: an agentic AI platform that generates, runs, and self-heals E2E tests. Showcases our R&D depth beyond client work.",
    details: [
      "4 specialized agents: Engineer, Detective, Healer, Sentinel",
      "AI-free execution, AI-powered maintenance and self-healing",
      "Supports OpenAI, Claude, Gemini — BYOK model",
      "Desktop + CI/CD (GitHub Actions, Jenkins, GitLab)",
    ],
    link: "https://tesai.app",
  },
  {
    id: "agentic-platform",
    title: "Conversational Agentic AI Platform",
    client: "Nexara — Proprietary R&D",
    icon: Layers,
    image: IMG_CONVERSATIONAL,
    accentColor: "from-violet-500 to-purple-400",
    tags: ["Platform", "Orchestration", "Multi-tenancy"],
    metrics: [
      { label: "Chatbots", value: "250+" },
      { label: "Uptime", value: "99.9%" },
      { label: "R&D", value: "5+ Years" },
      { label: "Deploy", value: "Anywhere" },
    ],
    description:
      "No-code agentic AI platform with proprietary dialog management and FSM orchestration — SaaS, private cloud, or on-prem.",
    details: [
      "Proprietary dialog engine for voice & text agents",
      "Optimized for low latency and minimal hardware footprint",
    ],
  },
  {
    id: "1med-tv-avatar",
    title: "Video Avatar of 1Med TV Channel",
    client: "AI Avatar Content Platform",
    icon: Users,
    image: IMG_1MED_TV,
    accentColor: "from-cyan-500 to-indigo-500",
    tags: ["Voice AI", "Avatars", "AI Video Generation"],
    metrics: [
      { label: "Languages", value: "4" },
      { label: "Production", value: "No Studio" },
      { label: "Turnaround", value: "Minutes" },
      { label: "Use Cases", value: "Media+" },
    ],
    description:
      "AI-powered video avatar studio for 1Med TV — script-to-video content in multiple languages without physical filming.",
    details: [
      "AI-powered avatar generating high-quality video content without physical filming",
      "Multilingual delivery in Russian, Kazakh, English, and Arabic",
      "Natural, human-like voice and realistic facial animation",
      "Script-to-video automation with fast turnaround",
      "Cost-efficient alternative to traditional video production",
      "Scalable deployment for media, marketing, education, and public communications",
    ],
    demoUrl: "https://drive.google.com/file/d/1aLl6T1SrQRk3o1OwHhvZV4pDMKG_Ulmq/preview",
  },
  {
    id: "metro-recruitment-chatbot",
    title: "Metro Cash & Carry: AI Recruitment Chatbot",
    client: "Conversational Recruitment Platform",
    icon: MessageSquare,
    image: IMG_METRO_RECRUITMENT,
    accentColor: "from-emerald-500 to-sky-500",
    tags: ["HR", "Recruitment", "Text AI", "ATS Integration"],
    metrics: [
      { label: "Self-Service Adoption", value: "77%" },
      { label: "Channel", value: "WhatsApp" },
      { label: "Availability", value: "24/7" },
      { label: "Scope", value: "Hiring FAQs" },
    ],
    description:
      "Cloud-based AI recruitment chatbot on WhatsApp, improving candidate experience and taking pressure off HR teams.",
    details: [
      "Automated candidate support via WhatsApp, answering FAQs and providing real-time hiring updates",
      "77% candidate self-service adoption, significantly reducing recruiter workload",
      "24/7 scalable conversational platform, improving recruitment efficiency and candidate experience",
    ],
  },
  {
    id: "ai-avatars",
    title: "AI Avatars",
    client: "Multiple Deployments",
    icon: Users,
    image: IMG_AVATAR,
    accentColor: "from-indigo-500 to-blue-400",
    tags: ["Avatar", "NLU", "TTS", "On-Prem"],
    metrics: [
      { label: "Deployments", value: "3+" },
      { label: "Sectors", value: "Gov, Aviation, Medical" },
      { label: "Mode", value: "On-Prem" },
      { label: "Type", value: "Real Time" },
    ],
    description:
      "Interactive AI avatars for government, aviation, and medical — from resident support to AI-powered TV anchors.",
    details: [
      "Saudi municipality: on-prem resident support avatar",
      "Airport: passenger consultation and wayfinding",
      "Medical TV: AI-powered news anchor",
    ],
  },
  {
    id: "chatbots",
    title: "Enterprise Chatbots & Agents",
    client: "70+ B2B Clients",
    icon: MessageSquare,
    image: IMG_ENTERPRISE,
    accentColor: "from-rose-500 to-pink-400",
    tags: ["Chatbot", "LLM", "RAG", "Multi-Channel"],
    metrics: [
      { label: "Deployments", value: "100+" },
      { label: "Conversations", value: "2M+" },
      { label: "Clients", value: "70+" },
      { label: "Experience", value: "7+ Years" },
    ],
    description:
      "100+ chatbot deployments, 2M+ conversations — KFC, Raiffeisen, Philips, Mary Kay, and more.",
    details: [
      "Clients: KFC/Yum, Raiffeisen, VTB, Invitro, Metro, Rusagro",
      "Also: Skolkovo, HSE, Philips, Mary Kay, Avon, Honor",
    ],
  },
];

function CaseCard({ c, index }: { c: CaseStudy; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const colorClass = c.accentColor.split(" ")[0].replace("from-", "text-");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div
        className={`relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04] ${
          expanded ? "ring-1 ring-white/[0.08]" : ""
        }`}
      >
        {/* Image header */}
        {c.image && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={c.image}
              alt={c.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Plain brand tint overlay (matches primary button color at ~20% opacity) */}
            <div className="absolute inset-0 bg-indigo-600/20" />
            {/* Floating accent */}
            <div className="absolute top-4 right-4">
              <c.icon size={32} className="text-white drop-shadow-lg" />
            </div>
          </div>
        )}

        {/* No-image header */}
        {!c.image && (
          <div className="relative h-32 overflow-hidden bg-gradient-to-br from-white/[0.03] to-transparent">
            <div className="absolute inset-0 flex items-center justify-center">
              <c.icon size={48} className={`${colorClass} drop-shadow-lg opacity-80`} />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <h3 className="text-lg font-semibold text-white font-[Sora]">{c.title}</h3>
              <p className="text-sm text-white/40 mt-0.5">{c.client}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {c.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium text-white/50 bg-white/[0.04] border border-white/[0.06] rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {c.metrics.map((m) => (
              <div key={m.label} className="bg-white/[0.02] rounded-lg p-3 border border-white/[0.04]">
                <div className="text-sm font-semibold text-white font-[Sora]">{m.value}</div>
                <div className="text-xs text-white/35 mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>

          <p className="text-sm text-white/50 leading-relaxed">{c.description}</p>

          {/* Watch demo */}
          {c.demoUrl && (
            <button
              type="button"
              onClick={() => setShowDemo(true)}
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3.5 py-1.5 text-xs font-medium text-cyan-200 hover:bg-white/[0.1] hover:text-cyan-100 transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Watch demo</span>
            </button>
          )}

          {/* Link to product */}
          {c.link && (
            <a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Visit {c.link.replace("https://", "")} &rarr;
            </a>
          )}

          {/* Expand toggle */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <span>{expanded ? "Show less" : "View details"}</span>
            <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown size={14} />
            </motion.div>
          </button>

          {/* Expanded details */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-4 mt-4 border-t border-white/[0.06] space-y-2.5">
                  {c.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500/60 shrink-0" />
                      <span className="text-sm text-white/50 leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Demo modal */}
      <AnimatePresence>
        {showDemo && c.demoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setShowDemo(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.12] bg-black/80">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08]">
                  <div className="text-sm font-medium text-white/80">1Med TV Avatar — Demo</div>
                  <button
                    type="button"
                    onClick={() => setShowDemo(false)}
                    className="rounded-full p-1.5 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                    aria-label="Close demo"
                  >
                    <X size={16} />
                  </button>
                </div>
                <div className="aspect-video bg-black">
                  <iframe
                    src={c.demoUrl}
                    title="1Med TV Avatar demo"
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="flex items-center justify-between px-4 py-3 border-t border-white/[0.08] text-xs text-white/50">
                  <span>Streaming from Google Drive</span>
                  <a
                    href="https://drive.google.com/file/d/1aLl6T1SrQRk3o1OwHhvZV4pDMKG_Ulmq/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-cyan-200"
                  >
                    Open in new tab ↗
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Cases() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="cases" className="relative py-28 sm:py-36">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

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
              Case Studies
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[Sora] tracking-tight leading-tight"
          >
            What We Build
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-white/40 leading-relaxed"
          >
            From speech analytics to agentic AI platforms, and proprietary AI solutions
          </motion.p>
        </div>

        {/* Cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <CaseCard key={c.id} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
