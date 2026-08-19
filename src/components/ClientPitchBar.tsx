import React, { useState } from "react";
import { Sparkles, CheckCircle2, ChevronRight, X, Phone, Globe, Shield, Rocket } from "lucide-react";
import { STORE_INFO } from "../data/mockData";

export const ClientPitchBar: React.FC = () => {
  const [minimized, setMinimized] = useState(false);

  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        className="fixed top-20 left-4 z-50 px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-2xl backdrop-blur-md flex items-center gap-1.5 transition-transform hover:scale-105 border border-blue-400/40 font-mono"
        id="reopen-demo-pitch-bar"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        <span>Bento Demo Features for Shop Owner</span>
      </button>
    );
  }

  return (
    <aside aria-label="Demo pitch overview" className="bg-[#0a0a0a] border-b border-white/10 text-gray-200 py-2.5 px-4 text-xs shadow-md relative z-30">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center px-2 py-0.5 rounded-full bg-blue-600 text-white font-mono font-bold text-[10px] tracking-wide uppercase">
            Client Demo
          </span>
          <span className="font-semibold text-white">
            Custom Bento-Grid Demo for <strong className="text-blue-400">NEXT GEN COMPUTER (Patna)</strong>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-4 text-[11px] font-mono text-gray-400">
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Direct WhatsApp & Call Integration</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>AI Cost Estimator & PC Builder</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Patna Local Google SEO Ready</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Live Repair Ticket Tracking</span>
          </div>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <a
            href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hi%20Next%20Gen%20Computer,%20check%20out%20your%20custom%20website%20demo!`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] flex items-center gap-1 transition-colors"
          >
            <Rocket className="w-3 h-3" />
            Test WhatsApp Lead
          </a>
          <button
            onClick={() => setMinimized(true)}
            className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-white/10"
            title="Minimize Bar"
            id="minimize-pitch-bar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </aside>
  );
};
