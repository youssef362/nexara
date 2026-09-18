/**
 * Design: "Luminous Void" — Dark Premium with Ethereal Light
 * Contact: Strong CTA with a simple contact form. Luminous gradient background.
 */
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Mail, Building2, User, MessageSquare, Check } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `New contact request from ${formData.name || "Nexara site"}`
    );
    const bodyLines = [
      `Name: ${formData.name}`,
      `Company: ${formData.company}`,
      `Email: ${formData.email}`,
      "",
      "Project details:",
      formData.message,
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));

    window.location.href = `mailto:info@nexara.ai?subject=${subject}&body=${body}`;

    setSubmitted(true);
    toast.success("Message draft opened in your email client.");
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/[0.05] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-violet-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: CTA copy */}
          <div ref={headerRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-8 bg-indigo-500/50" />
              <span className="text-sm font-medium text-indigo-400 uppercase tracking-wider font-mono">
                Get Started
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[Sora] tracking-tight leading-tight"
            >
              Let's Build Something
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-white/40 leading-relaxed"
            >
              Speech analytics, custom voice, AI avatars, agentic platforms — we design and build it from scratch.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 space-y-4"
            >
              {[
                "Custom R&D — no off-the-shelf",
                "Enterprise security & compliance",
                "On-prem, cloud, or edge",
                "Dedicated team from day one",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-indigo-400" />
                  </div>
                  <span className="text-sm text-white/50">{point}</span>
                </div>
              ))}
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]"
            >
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-indigo-400" />
                <span className="text-sm text-white/60">info@nexara.ai</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center p-8 rounded-2xl border border-white/[0.08] bg-white/[0.03]">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                    <Check size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white font-[Sora] mb-2">
                    Message Sent
                  </h3>
                  <p className="text-sm text-white/40">
                    We'll review your request and get back to you within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm space-y-5"
              >
                <div>
                  <label className="block text-sm text-white/50 mb-2 font-medium">
                    Name
                  </label>
                  <div className="relative">
                    <User
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/20"
                    />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-white/50 mb-2 font-medium">
                    Company
                  </label>
                  <div className="relative">
                    <Building2
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/20"
                    />
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Company name"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-white/50 mb-2 font-medium">
                    Email
                  </label>
                  <div className="relative">
                    <Mail
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/20"
                    />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-white/50 mb-2 font-medium">
                    Tell us about your project
                  </label>
                  <div className="relative">
                    <MessageSquare
                      size={16}
                      className="absolute left-3.5 top-3.5 text-white/20"
                    />
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Describe your challenge, timeline, and any specific requirements..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full group px-6 py-3.5 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 flex items-center justify-center gap-2"
                >
                  Request a Technical Deep Dive
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
