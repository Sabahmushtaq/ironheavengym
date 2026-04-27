"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "David Chen",
    role: "Wellness Member",
    content: "The holistic approach here is what I needed. I've improved my strength and lowered my stress levels significantly.",
    rating: 5
  },
  {
    name: "Sarah Miller",
    role: "Weight Health",
    content: "Finally a gym that doesn't feel intimidating. The bright atmosphere and supportive staff make every visit a joy.",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "Athlete",
    content: "The technology they use to track biometrics is top-notch. It's helped me optimize my recovery and performance.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-white relative overflow-hidden flex flex-col items-center">
      
      {/* Container */}
      <div className="w-full px-8 md:px-24 lg:px-32 relative z-10 flex flex-col items-center">
        
        {/* Header - Bulletproof Centering */}
        <div className="flex flex-col items-center text-center gap-6 mb-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6 max-w-5xl"
          >
            <span className="text-orange font-bold uppercase tracking-widest text-xs bg-white px-8 py-2 rounded-full shadow-sm border border-slate-100">
              Success Stories
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-tight">
              Loved By Our Community
            </h2>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              See how we've helped hundreds of people achieve their health and wellness goals through our science-backed approach.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid - Centered */}
        <div className="w-full flex justify-center">
          <div className="max-w-7xl w-full">
            <div className="grid md:grid-cols-3 gap-10">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm relative hover:shadow-2xl hover:bg-white transition-all flex flex-col items-center text-center"
                >
                  <Quote className="absolute top-8 right-10 w-12 h-12 text-green/5" />
                  
                  <div className="flex gap-1 mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-orange text-orange" />
                    ))}
                  </div>
                  
                  <p className="text-lg md:text-xl mb-10 italic text-slate-600 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="mt-auto">
                    <p className="font-black text-slate-900 text-2xl">{testimonial.name}</p>
                    <p className="text-sm text-green font-bold uppercase tracking-widest mt-2">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
