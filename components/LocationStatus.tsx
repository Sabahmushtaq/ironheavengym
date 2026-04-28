"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Navigation, Info } from "lucide-react";

export default function LocationStatus() {
  const [location, setLocation] = useState<string | null>(null);
  const [branch, setBranch] = useState<string>("Main Branch");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10`
          );
          const data = await response.json();
          
          const city = data.address.city || data.address.town || data.address.village || "Unknown Area";
          setLocation(city);
          setBranch(`${city} Premier Branch`);
          setLoading(false);
        } catch (err) {
          console.error("Error fetching location details:", err);
          setError(true);
          setLoading(false);
        }
      },
      (err) => {
        console.error("Geolocation error:", err);
        setError(true);
        setLoading(false);
      }
    );
  }, []);

  return (
    <div className="flex justify-start mb-6 w-full">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-md border border-slate-200 py-3 px-6 rounded-2xl shadow-xl shadow-slate-200/50"
      >
        <div className="relative">
          <MapPin className={`w-5 h-5 ${error ? "text-slate-300" : "text-green"}`} />
          {!loading && !error && (
            <motion.div 
              className="absolute -top-1 -right-1 w-2 h-2 bg-green rounded-full border-2 border-white"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
            {loading ? "Identifying Location..." : error ? "Location Default" : "Nearest Branch Found"}
          </span>
          <div className="h-3 w-[1px] bg-slate-200" />
          <AnimatePresence mode="wait">
            <motion.span 
              key={branch}
              initial={{ opacity: 0, x: 5 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-sm font-bold text-slate-900"
            >
              {branch}
            </motion.span>
          </AnimatePresence>
        </div>

        {error && (
          <div className="group relative">
            <Info className="w-4 h-4 text-slate-300 cursor-help" />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-900 text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Location access denied. Displaying our central hub details.
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
