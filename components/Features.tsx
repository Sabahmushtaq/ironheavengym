"use client";

import { motion } from "framer-motion";
import { CheckCircle, Shield, Zap, Target, Clock, Smile } from "lucide-react";

const features = [
  {
    icon: <Shield className="w-8 h-8 text-green" />,
    title: "Certified Specialists",
    desc: "Experienced professionals dedicated to your long-term wellness."
  },
  {
    icon: <Target className="w-8 h-8 text-green" />,
    title: "Tailored Roadmaps",
    desc: "Custom health & nutrition plans based on your unique profile."
  },
  {
    icon: <Zap className="w-8 h-8 text-green" />,
    title: "Modern Facilities",
    desc: "A bright, clean environment with the latest recovery tech."
  },
  {
    icon: <Smile className="w-8 h-8 text-green" />,
    title: "Supportive Community",
    desc: "A welcoming atmosphere where your progress is celebrated."
  },
  {
    icon: <Clock className="w-8 h-8 text-green" />,
    title: "Flexible Scheduling",
    desc: "Access our facilities and classes when it works for you."
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-green" />,
    title: "Measurable Impact",
    desc: "Track your transformation with our advanced biometric tools."
  }
];

export default function Features() {
  return (
    <section className="py-20 md:py-32 bg-slate-50 overflow-hidden flex flex-col items-center">
      <div className="w-full px-6 sm:px-12 md:px-24 lg:px-32 relative z-10 flex flex-col items-center">
        
        {/* Header - Centered Style */}
        <div className="flex flex-col items-center text-center gap-6 mb-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6 max-w-4xl"
          >
            <span className="text-orange font-bold uppercase tracking-widest text-xs bg-white px-8 py-3 mt-4 md:mt-0 rounded-full shadow-sm border border-slate-100 inline-block">
              Why Join Us
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-tight">
              Experience The Difference
            </h2>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              We've built a sanctuary for health and fitness that focuses on your entire journey, not just the destination.
            </p>
          </motion.div>
        </div>

        {/* Features Grid - Centered */}
        <div className="w-full flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group flex flex-col items-center text-center"
            >
              {/* Icon Container */}
              <div className="mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-transform bg-green/5 w-20 h-20 rounded-[2rem] flex items-center justify-center">
                {feature.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-lg">
                {feature.desc}
              </p>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}