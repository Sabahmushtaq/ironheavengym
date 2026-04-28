"use client";

import { motion } from "framer-motion";
import { Dumbbell, Flame, User, Users } from "lucide-react";

const programs = [
  {
    icon: <Flame className="w-10 h-10 text-white" />,
    title: "Weight Loss",
    desc: "Achieve a healthy weight with science-backed nutrition and exercise.",
    color: "bg-orange"
  },
  {
    icon: <Dumbbell className="w-10 h-10 text-white" />,
    title: "Muscle Health",
    desc: "Build functional strength and improve your longevity with resistance training.",
    color: "bg-green"
  },
  {
    icon: <User className="w-10 h-10 text-white" />,
    title: "1-on-1 Coaching",
    desc: "Personalized guidance from specialists to accelerate your journey.",
    color: "bg-slate-800"
  },
  {
    icon: <Users className="w-10 h-10 text-white" />,
    title: "Community Yoga",
    desc: "Improve mobility and reduce stress in our expert-led group sessions.",
    color: "bg-teal-500"
  }
];

export default function Programs() {
  return (
    <section className="py-20 md:py-32 bg-white flex flex-col items-center">
      <div className="w-full px-6 sm:px-12 md:px-24 lg:px-32 relative z-10 flex flex-col items-center">
        
        {/* Header - Bulletproof Centering */}
        <div className="flex flex-col items-center text-center gap-6 mb-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6 max-w-4xl"
          >
            <span className="text-green font-bold uppercase tracking-widest text-xs bg-white px-8 py-3 mt-4 md:mt-0 rounded-full shadow-sm border border-slate-100 inline-block">
              Our Fitness Programs
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-tight">
              Tailored To Your Lifestyle
            </h2>
          </motion.div>
        </div>

        {/* Programs Grid - Centered */}
        <div className="w-full flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[3rem] p-10 md:p-12 bg-slate-50 transition-all hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 border border-slate-100 flex flex-col items-center text-center"
              >
                <div className={`w-20 h-20 rounded-3xl ${program.color} flex items-center justify-center mb-8 shadow-lg transform group-hover:rotate-6 transition-transform`}>
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{program.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed text-lg">
                  {program.desc}
                </p>
                <button 
                  onClick={() => document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-green font-bold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto"
                >
                  Explore Program <span>→</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
