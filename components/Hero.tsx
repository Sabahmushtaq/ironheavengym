"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import LocationStatus from "./LocationStatus";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white">

            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-full h-full bg-green/5 z-0" />

            {/* Main Centered Container */}
            <div className="w-full px-8 md:px-24 lg:px-32 relative z-10 flex flex-col items-center">
                <div className="max-w-7xl mx-auto w-full flex flex-col items-center">

                    <motion.div
                        className="flex flex-col items-center text-center gap-10 md:gap-14 w-full"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >

                        {/* Location Bar */}
                        <div className="mb-4">
                            <LocationStatus />
                        </div>

                        {/* Centered Badge Stack */}
                        <div className="flex flex-col items-center gap-6">
                            <div className="flex items-center justify-center gap-4">
                                <span className="py-1.5 px-5 rounded-full bg-green text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em] shadow-lg shadow-green/20">
                                    90-Day Challenge
                                </span>
                                <div className="h-[1px] w-12 bg-slate-200 hidden md:block" />
                                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest hidden md:block">
                                    Results Guaranteed
                                </span>
                            </div>

                            {/* Massive Centered Heading */}
                            <h1 className="text-5xl md:text-9xl font-black leading-[1.1] text-slate-900 max-w-6xl">
                                Your Health, <br />
                                <span className="text-green italic">Reimagined.</span>
                            </h1>
                        </div>

                        {/* Centered Description */}
                        <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
                            Achieve your fitness goals with science-backed training and a supportive community that helps you stay consistent and motivated.
                        </p>

                        {/* Centered Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-lg">
                            <button
                                onClick={() =>
                                    document
                                        .getElementById("quiz")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="btn-secondary flex items-center justify-center gap-3 text-lg px-12 py-5 shadow-2xl shadow-green/20"
                            >
                                Start Free Trial <ArrowRight className="w-6 h-6" />
                            </button>

                            <button className="btn-outline flex items-center justify-center gap-3 text-lg px-12 py-5">
                                View Programs
                            </button>
                        </div>

                        {/* Centered Trust Features */}
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8">
                            {["Expert Trainers", "Custom Plans", "Modern Gear"].map(
                                (item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 text-slate-500 font-bold text-sm md:text-base uppercase tracking-widest"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-green" />
                                        <span>{item}</span>
                                    </div>
                                )
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Symmetrical Blobs */}
            <div className="absolute -bottom-40 -right-40 w-1/2 aspect-square opacity-10 blur-[150px] bg-green rounded-full pointer-events-none" />
            <div className="absolute -top-40 -left-40 w-1/2 aspect-square opacity-10 blur-[150px] bg-orange rounded-full pointer-events-none" />
        </section>
    );
}