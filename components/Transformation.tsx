"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function Transformation() {
  return (
    <section className="py-32 relative overflow-hidden bg-slate-50">
      <div className="w-full px-8 md:px-24 lg:px-32 relative z-10">
        
        {/* Header Section - Centered for better UI */}
        <div className="flex flex-col items-center text-center gap-6 mb-20">
          <span className="text-green font-bold uppercase tracking-widest text-sm bg-green/5 px-10 py-1 rounded-full">
            Real Results
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight max-w-4xl">
            Proven Track Record of Success
          </h2>
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl">
            Join hundreds of members who have successfully transformed their lives. Our methods are based on science, not just sweat.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="order-2 md:order-1"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-white">
                <Image 
                  src="./images/success.png" 
                  alt="Transformation Results" 
                  width={800} 
                  height={1000}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2 flex flex-col items-center md:items-start text-center md:text-left"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
                Sustainable Changes <br /> That Last
              </h3>
              
              <div className="space-y-6 w-full">
                {[
                  "Sustainable weight management",
                  "Increased energy and mental clarity",
                  "Improved metabolic health markers",
                  "Lifelong healthy habits"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-green" />
                    </div>
                    <span className="text-lg font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <button className="btn-secondary mt-12 text-lg px-10 py-4 shadow-xl shadow-green/10">
                Read Success Stories
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
