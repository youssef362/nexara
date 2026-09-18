/**
 * Design: "Luminous Void" — Dark Premium with Ethereal Light
 * Team: About Us section with key team members displayed in a clean grid.
 * Each member has photo, name, role, short bio, and LinkedIn link.
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, User } from "lucide-react";

const teamMembers = [
  {
    name: "Sergey Shlykov",
    role: "CEO",
    description: "Serial entrepreneur. Founded Graphlogic & Chatme.ai. 10+ years building conversational AI products.",
    photo: "/team-sergey.jpg",
    linkedin: "https://www.linkedin.com/in/sergey-shlykov",
  },
  {
    name: "Ilya Korolev",
    role: "CTO",
    description: "Architect of high-load AI platforms, chatbots, and marketplaces at Graphlogic.",
    photo: "/team-korolev.jpg",
    linkedin: "https://www.linkedin.com/in/%D0%B8%D0%BB%D1%8C%D1%8F-%D0%BA%D0%BE%D1%80%D0%BE%D0%BB%D0%B5%D0%B2-295ba85a/",
  },
  {
    name: "Alexander Menshikov",
    role: "Product Owner",
    description: "Leads product strategy and development of conversational AI solutions.",
    photo: "/team-menschikov.jpg",
    linkedin: "https://www.linkedin.com/in/menschikov/",
  },
  {
    name: "Maksim Glazkov",
    role: "Head of Voice AI",
    description: "ML engineer & data scientist. Expert in ASR, TTS, voice cloning, and speech analytics.",
    photo: "/team-maksim.jpg",
    linkedin: "https://www.linkedin.com/in/maksim-glazkov-b9224077/",
  },
  {
    name: "Alexey Kim",
    role: "Head of ML",
    description: "ML researcher specializing in NLP, LLMs, and production-grade conversational AI systems.",
    photo: "/team-alexey.jpg",
    linkedin: "https://www.linkedin.com/in/ameyuuno/",
  },
  {
    name: "Danil Troshnev",
    role: "Head of Engineering",
    description: "Full-stack engineer with 10+ years experience. Leads platform development and system reliability.",
    photo: "/team-danil.jpg",
    linkedin: "https://www.linkedin.com/in/danil-troshnev/",
  },
];

function TeamCard({
  member,
  index,
}: {
  member: (typeof teamMembers)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
    >
      {/* Photo + LinkedIn */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/[0.08] bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex-shrink-0 flex items-center justify-center">
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <User className="text-white/50" size={32} />
          )}
        </div>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/30 hover:text-indigo-400 transition-colors duration-200 mt-1"
          aria-label={`${member.name} on LinkedIn`}
        >
          <Linkedin size={18} />
        </a>
      </div>

      {/* Info */}
      <h3 className="text-base font-semibold text-white font-[Sora]">{member.name}</h3>
      <span className="text-xs text-indigo-400/70 font-mono">{member.role}</span>
      <p className="text-sm text-white/35 mt-3 leading-relaxed">{member.description}</p>
    </motion.div>
  );
}

export default function Team() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="team" className="relative py-28 sm:py-36">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-violet-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

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
              About Us
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[Sora] tracking-tight"
          >
            Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-white/40 leading-relaxed"
          >
            7+ years on the market. Engineers, researchers, and leaders behind our AI systems.
          </motion.p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {teamMembers.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
