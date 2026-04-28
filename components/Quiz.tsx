"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowLeft, ArrowRight, Activity, Target, Flame, Calendar, Lock } from "lucide-react";

const steps = [
  {
    id: "goal",
    question: "What is your primary fitness goal?",
    options: [
      { id: "weight", label: "Weight Loss", icon: <Flame className="w-5 h-5" />, color: "bg-orange" },
      { id: "muscle", label: "Muscle Building", icon: <Target className="w-5 h-5" />, color: "bg-green" },
      { id: "wellness", label: "General Wellness", icon: <Activity className="w-5 h-5" />, color: "bg-blue-500" },
      { id: "performance", label: "Athletic Performance", icon: <Activity className="w-5 h-5" />, color: "bg-slate-800" },
    ],
  },
  {
    id: "level",
    question: "What is your current fitness level?",
    options: [
      { id: "beginner", label: "Beginner", icon: "🌱", color: "bg-green" },
      { id: "intermediate", label: "Intermediate", icon: "⚖️", color: "bg-blue-500" },
      { id: "advanced", label: "Advanced", icon: "⚡", color: "bg-orange" },
    ],
  },
  {
    id: "schedule",
    question: "How many days can you train per week?",
    options: [
      { id: "1-2", label: "1-2 Days", icon: <Calendar className="w-5 h-5" />, color: "bg-slate-400" },
      { id: "3-4", label: "3-4 Days", icon: <Calendar className="w-5 h-5" />, color: "bg-slate-600" },
      { id: "5+", label: "5+ Days", icon: <Calendar className="w-5 h-5" />, color: "bg-slate-900" },
    ],
  }
];

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (stepId: string, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [stepId]: optionId }));
    
    if (currentStep < steps.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setIsCalculating(true);
      setTimeout(() => {
        setIsCalculating(false);
        setCurrentStep(steps.length);
      }, 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <section id="quiz" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden flex flex-col items-center">
      
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-1/3 aspect-square bg-green/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-1/3 aspect-square bg-orange/5 blur-[120px] rounded-full" />
      </div>

      {/* Main Centered Container */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-24 lg:px-32 relative z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-6 mb-20 w-full">
          <span className="text-orange font-bold uppercase tracking-widest text-[10px] md:text-xs bg-white px-8 py-3 mt-4 md:mt-0 rounded-full shadow-sm border border-slate-100 inline-block">
            Step Into Your Future
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-tight">
            Start Your <br className="hidden md:block" /> Transformation
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Answer a few questions to get your personalized science-backed 90-day plan.
          </p>
        </div>

        {/* Quiz Card - Strictly Centered */}
        <div className="w-full flex justify-center">
          <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden relative w-full max-w-3xl">
            
            {/* Smooth Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-2 bg-slate-50">
              <motion.div 
                className="h-full bg-green"
                initial={{ width: 0 }}
                animate={{ width: `${isSubmitted ? 100 : progress}%` }}
                transition={{ duration: 0.6, ease: "circOut" }}
              />
            </div>

            <div className="p-10 md:p-16 min-h-[500px] flex flex-col items-center justify-center">
              
              {isCalculating ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center flex flex-col items-center w-full"
                >
                  <div className="relative w-24 h-24 mb-10">
                    <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#f1f5f9" strokeWidth="8" />
                      <motion.circle 
                        cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="8" 
                        strokeDasharray="283"
                        initial={{ strokeDashoffset: 283 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Activity className="w-10 h-10 text-green animate-pulse" />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 text-slate-900">Calculating Protocol</h3>
                  <p className="text-slate-400 text-lg">Optimizing training volume and caloric targets...</p>
                </motion.div>
              ) : isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center flex flex-col items-center w-full"
                >
                  <div className="w-24 h-24 bg-green rounded-[2rem] flex items-center justify-center mb-10 shadow-xl shadow-green/20 rotate-3">
                    <Check className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-4xl font-black mb-6 text-slate-900">blueprint ready!</h3>
                  <p className="text-slate-500 text-xl mb-12 max-w-sm leading-relaxed">
                    Check your email. Your personalized 90-day plan is waiting for you.
                  </p>
                  <button 
                    onClick={() => { setIsSubmitted(false); setCurrentStep(0); setAnswers({}); }} 
                    className="text-slate-400 font-bold text-sm uppercase tracking-widest hover:text-green transition-colors border-b-2 border-transparent hover:border-green pb-1"
                  >
                    Take Quiz Again
                  </button>
                </motion.div>
              ) : (
                <AnimatePresence mode="wait">
                  {currentStep < steps.length ? (
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="w-full flex flex-col items-center"
                    >
                      <div className="text-center mb-12">
                        <span className="text-xs font-black text-green uppercase tracking-[0.3em] mb-3 block">
                          Question {currentStep + 1} of {steps.length}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-black text-slate-900">
                          {steps[currentStep].question}
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 gap-4 w-full max-w-md">
                        {steps[currentStep].options.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => handleSelect(steps[currentStep].id, option.id)}
                            className={`flex items-center gap-6 p-6 rounded-3xl border-2 transition-all group relative overflow-hidden ${
                              answers[steps[currentStep].id] === option.id
                                ? "border-green bg-green/5 shadow-inner"
                                : "border-slate-50 hover:border-slate-200 hover:bg-slate-50 bg-slate-50/40"
                            }`}
                          >
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all ${
                              answers[steps[currentStep].id] === option.id ? "bg-green text-white rotate-6" : "bg-white text-slate-400 shadow-sm"
                            }`}>
                              {option.icon}
                            </div>
                            <span className={`text-lg font-bold transition-colors ${
                              answers[steps[currentStep].id] === option.id ? "text-slate-900" : "text-slate-600"
                            }`}>
                              {option.label}
                            </span>
                            
                            {answers[steps[currentStep].id] === option.id && (
                              <motion.div 
                                layoutId="check-pill"
                                className="ml-auto w-7 h-7 bg-green rounded-full flex items-center justify-center"
                              >
                                <Check className="w-4 h-4 text-white" />
                              </motion.div>
                            )}
                          </button>
                        ))}
                      </div>

                      <div className="mt-12 w-full flex justify-center">
                        <button
                          disabled={currentStep === 0}
                          onClick={() => setCurrentStep(currentStep - 1)}
                          className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-slate-900 disabled:opacity-0 transition-all"
                        >
                          <ArrowLeft className="w-4 h-4" /> Go Back
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="w-full flex flex-col items-center"
                    >
                      <div className="text-center mb-16">
                        <span className="text-xs font-black text-orange uppercase tracking-[0.3em] mb-6 block">Final Step</span>
                        <h3 className="text-3xl md:text-5xl font-black text-slate-900">Send My Protocol</h3>
                      </div>
                      
                      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="relative">
                            <input required type="text" className="w-full p-5 rounded-[1.5rem] border-2 border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-8 focus:ring-green/5 focus:border-green outline-none transition-all text-base font-bold placeholder:text-slate-300" placeholder="First Name" />
                          </div>
                          <div className="relative">
                            <input required type="tel" className="w-full p-5 rounded-[1.5rem] border-2 border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-8 focus:ring-green/5 focus:border-green outline-none transition-all text-base font-bold placeholder:text-slate-300" placeholder="Phone" />
                          </div>
                        </div>
                        <input required type="email" className="w-full p-5 rounded-[1.5rem] border-2 border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-8 focus:ring-green/5 focus:border-green outline-none transition-all text-base font-bold placeholder:text-slate-300" placeholder="Email Address" />
                        
                        <div className="pt-10">
                          <button type="submit" className="w-full bg-green text-white font-black text-base uppercase tracking-widest py-6 rounded-[1.5rem] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-green/30 flex items-center justify-center gap-4 group">
                            Calculate Results 
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                          </button>
                          
                          <div className="flex items-center justify-center gap-2 mt-10 text-slate-400">
                            <Lock className="w-4 h-4" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Secure & Private</span>
                          </div>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}