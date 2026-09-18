/**
 * Design: "Luminous Void" — Dark Premium with Ethereal Light
 * Home page: Assembles all sections in order with smooth transitions.
 * Background: Deep navy-charcoal (#08090E) base.
 */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Cases from "@/components/Cases";
import Partners from "@/components/Partners";
import Process from "@/components/Process";
import Technology from "@/components/Technology";
import Explorer from "@/components/Explorer";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#08090E] text-white overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* Subtle section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <Cases />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <Partners />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <Process />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <Technology />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <Explorer />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <Team />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <Contact />

      <Footer />
    </div>
  );
}
