"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden flex flex-col items-center">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-slate-50 -skew-x-12 -translate-x-1/3 z-0" />

      <div className="w-full px-6 sm:px-12 md:px-24 lg:px-32 relative z-10 flex flex-col items-center">
        
        {/* Header - Bulletproof Centering */}
        <div className="flex flex-col items-center text-center gap-6 mb-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6 max-w-5xl"
          >
            <span className="text-orange font-bold uppercase tracking-widest text-xs bg-white px-8 py-3 mt-4 md:mt-0 rounded-full shadow-sm border border-slate-100 inline-block">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-tight">
              A Healthier You Starts <br /> With A Single Step
            </h2>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              We move beyond just "lifting weights." We believe in a holistic approach that balances strength, nutrition, and mental well-being.
            </p>
          </motion.div>
        </div>

        {/* Content Grid - Centered */}
        <div className="w-full flex justify-center">
          <div className="max-w-7xl w-full">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
              
              {/* Left Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative order-2 md:order-1 flex justify-center"
              >
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white relative w-full max-w-md">
                  <Image 
                    src="./images/training.png" 
                    alt="Personal Training" 
                    width={800} 
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* Right Content Section */}
              <motion.div
                className="flex flex-col gap-10 order-1 md:order-2 items-center md:items-start text-center md:text-left"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-8 text-slate-600 text-xl leading-relaxed">
                  <p>
                    Whether you're a complete beginner or a seasoned athlete, our team of certified specialists provides the personalized attention you need to reach your peak potential.
                  </p>
                  <p>
                    Our methods are based on science, not just sweat. We track your progress with medical-grade biometrics to ensure every minute in the gym is effective.
                  </p>
                </div>

                {/* Features List - Centered on Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  {[
                    "Personalized Assessment",
                    "Nutrition Coaching",
                    "Biometric Tracking",
                    "Community Support"
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm"
                    >
                      <div className="w-8 h-8 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-green" />
                      </div>
                      <span className="font-bold text-slate-700 text-base text-left">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" })}
                  className="btn-secondary px-10 py-4 text-lg shadow-xl shadow-green/10"
                >
                  Discover Our Method
                </button>

              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}