/**
 * Design: "Luminous Void" — Dark Premium with Ethereal Light
 * Hero: Full viewport, generated background image, word-by-word headline reveal,
 * floating luminous orbs, strong CTA. Sora for headline, DM Sans for sub.
 */
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/DUvAYjh0YexeBuAManR3xW/sandbox/cq9gi2n0cVDXaGlO8nmtqj-img-1_1771564590000_na1fn_aGVyby1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRFV2QVlqaDBZZXhlQnVBTWFuUjN4Vy9zYW5kYm94L2NxOWdpMm4wY1ZEWGFHbE84bm10cWotaW1nLTFfMTc3MTU2NDU5MDAwMF9uYTFmbl9hR1Z5YnkxaVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JweQDWZNBlgb3lKny6MOZSo9~CjKqT6wOhpv8yVAwZdgr0nGYK8huLoT0aHsHPoDWCuAIWSoMz4VceZsvGz~5yfu5vk6RCSWGpdCVh-zPBe-HQg5tBWrnMpIYdEgunlDaq7Mw5Do6fmbAXaHRceKcJRzJSr9wMQvoi5PTz6J4pZIDp6~Q8UkiDgWvs-u5~2z3tm2ghuX~oPVru-JZa7EQy5v56nduhaPuwEg5jdm2BOnRMJB36u5H4cjYuzREyHPocla1DxL0vHfwVe4Fe08HVmb2rezG04Oke~mdf2Cv90jRCMRAaJ2Q8xYsKp1kr7y~aOeVyCRpm-9XvTGEkwfIA__";

const headlineLine1 = ["R&D", "Laboratory", "in"];
const headlineLine2 = ["Conversational", "&\u00A0Agentic\u00A0AI"];

const stats = [
  { value: "7+", label: "Years on the Market" },
  { value: "2M+", label: "Conversations Processed Monthly" },
  { value: "70+", label: "B2B Clients Worldwide" },
  { value: "100M+", label: "Monthly Agent Operations" },
  { value: ">50", label: "AI professionals in the team" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="relative w-full h-full object-cover"
        />
        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090E]/65 via-[#08090E]/40 to-[#08090E]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090E]/55 via-transparent to-[#08090E]/55" />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-500/10 blur-[80px]"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-violet-500/8 blur-[100px]"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/2 w-48 h-48 rounded-full bg-amber-500/6 blur-[60px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pt-24 pb-32">
        <div className="max-w-5xl text-left">
          {/* Lab badge */}
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-white/70 font-medium tracking-wide">
            International R&D Laboratory
          </span>
        </motion.div>

        {/* Headline — word by word, two lines */}
        <h1 className="font-[Sora] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
          <span className="block">
            {headlineLine1.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block mr-[0.3em] text-white"
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span className="block">
            {headlineLine2.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block mr-[0.3em] bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-lg sm:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed"
        >
          Voice agents, speech analytics, AI avatars, and agentic platforms — built from scratch. On-prem, cloud, or edge.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-start justify-start gap-4"
        >
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group px-7 py-3.5 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all duration-300 shadow-xl shadow-indigo-600/20 hover:shadow-indigo-500/30 flex items-center gap-2"
          >
            Start a Conversation
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </button>
          <button
            onClick={() =>
              document.querySelector("#cases")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-7 py-3.5 text-base font-medium text-white/70 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 hover:bg-white/[0.03]"
          >
            Explore Our Work
          </button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 max-w-5xl"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.7 + i * 0.1 }}
              className="text-left"
            >
              <div className="text-3xl sm:text-4xl font-bold text-white font-[Sora] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/60 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
