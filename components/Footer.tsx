"use client";

import { motion } from "framer-motion";
import { Globe, Share2, Mail, Dumbbell, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-100 pt-20 pb-10">

      <div className="w-full px-8 md:px-24 lg:px-32 flex flex-col items-center gap-16">

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-6 w-full"
        >
          <div className="w-full bg-green rounded-[2.5rem] px-10 py-16 relative overflow-hidden flex flex-col items-center text-center gap-7">
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)",
                backgroundSize: "22px 22px",
              }}
            />

            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight relative z-10">
              Your Transformation <br /> Starts Today.
            </h2>

            <p className="text-white/80 text-base md:text-lg max-w-lg relative z-10 leading-relaxed">
              Join a community that cares about your results as much as you do.
              Limited intake slots for next month.
            </p>

            <button
              onClick={() =>
                document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-green font-bold text-base px-9 py-4 rounded-2xl relative z-10 hover:scale-105 transition-all duration-200 shadow-xl shadow-black/10 flex items-center gap-10"
            >
              Get Started Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-6 w-full"
        >
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-green rounded-2xl flex items-center justify-center">
              <Dumbbell className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-black tracking-widest text-slate-900 uppercase">
              Iron Wellness
            </span>
          </div>
        </motion.div>

        {/* Nav + Socials + Divider + Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-6 w-full"
        >
          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
            {["Programs", "Philosophy", "Success", "Contact"].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-green transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-3 justify-center">
            {[
              { Icon: Globe, label: "Website" },
              { Icon: Share2, label: "Share" },
              { Icon: Mail, label: "Email" },
            ].map(({ Icon, label }, i) => (
              <a 
                key={i} 
                href="#" 
                aria-label={label}
                className="w-11 h-11 rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-green hover:border-green hover:text-white transition-all duration-200 cursor-pointer"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-slate-100" />

          {/* Bottom */}
          <div className="flex flex-col items-center gap-4 pb-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              © 2026 Iron Heaven Center. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy", "Terms"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-green transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </footer>
  );
}