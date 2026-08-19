import React, { useState } from "react";
import { BEFORE_AFTER_CASES, STORE_INFO } from "../data/mockData";
import { 
  Sparkles, 
  Clock, 
  TrendingDown, 
  CheckCircle2, 
  ArrowRight, 
  Wrench,
  ShieldAlert
} from "lucide-react";

interface BeforeAfterGalleryProps {
  onOpenBooking: () => void;
}

export const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({
  onOpenBooking,
}) => {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [viewMode, setViewMode] = useState<"after" | "before">("after");

  const currentCase = BEFORE_AFTER_CASES[activeCaseIdx];

  return (
    <section className="py-16 bg-[#050505] text-[#F0F0F0] border-b border-white/10" id="before-after-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Wrench className="w-4 h-4 text-blue-400" />
            Proof of Craftsmanship • Real Patna Lab Cases
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Before & After Repair Restoration
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            See how our certified chip-level engineers resurrect dead laptops, fractured screens, and damaged motherboards that authorized service centers declared unrepairable.
          </p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {BEFORE_AFTER_CASES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => { setActiveCaseIdx(idx); setViewMode("after"); }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCaseIdx === idx
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-105 border border-blue-400/40"
                  : "bg-[#111] text-gray-400 hover:text-white border border-white/10"
              }`}
              id={`case-tab-${idx}`}
            >
              Case #{idx + 1}: {item.title.split(" vs ")[0].slice(0, 32)}...
            </button>
          ))}
        </div>

        {/* Interactive Case Showcase Card */}
        <div className="bg-[#111111] rounded-3xl border border-white/10 p-6 lg:p-8 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Image Toggle Area */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative rounded-3xl overflow-hidden aspect-video bg-[#0c0c0c] border border-white/10 shadow-inner group">
                <img 
                  src={viewMode === "after" ? currentCase.afterImg : currentCase.beforeImg}
                  alt={currentCase.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* State Tag Overlay */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-black uppercase tracking-wider shadow-lg ${
                    viewMode === "after" 
                      ? "bg-emerald-500 text-black border border-emerald-300"
                      : "bg-red-600 text-white border border-red-400"
                  }`}>
                    {viewMode === "after" ? "✅ Restored & Tested at Next Gen" : "❌ Damaged State (Customer Brought In)"}
                  </span>
                </div>

                {/* View Switcher Controls */}
                <div className="absolute bottom-4 inset-x-4 flex justify-center gap-2">
                  <button
                    onClick={() => setViewMode("before")}
                    className={`px-4 py-2 rounded-full text-xs font-bold backdrop-blur-md transition-all ${
                      viewMode === "before"
                        ? "bg-red-600/90 text-white shadow-lg border border-red-400 scale-105"
                        : "bg-black/80 text-gray-300 hover:bg-black border border-white/10"
                    }`}
                    id="case-show-before"
                  >
                    View Damaged (Before)
                  </button>
                  <button
                    onClick={() => setViewMode("after")}
                    className={`px-4 py-2 rounded-full text-xs font-bold backdrop-blur-md transition-all ${
                      viewMode === "after"
                        ? "bg-blue-600 text-white shadow-lg border border-blue-400 scale-105"
                        : "bg-black/80 text-gray-300 hover:bg-black border border-white/10"
                    }`}
                    id="case-show-after"
                  >
                    View Restored (After)
                  </button>
                </div>
              </div>
            </div>

            {/* Case Details & Breakdown */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                  Case Study #{activeCaseIdx + 1}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1 leading-snug">
                  {currentCase.title}
                </h3>
              </div>

              {/* Problem vs Solution boxes */}
              <div className="space-y-2.5 text-xs">
                <div className="p-3.5 rounded-2xl bg-red-950/20 border border-red-900/30 text-red-200">
                  <div className="font-bold text-red-400 mb-1 flex items-center gap-1.5 font-mono">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    Observed Defect:
                  </div>
                  <p className="text-gray-300 leading-relaxed">{currentCase.beforeText}</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-blue-950/20 border border-blue-900/30 text-blue-200">
                  <div className="font-bold text-blue-400 mb-1 flex items-center gap-1.5 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Next Gen Resolution:
                  </div>
                  <p className="text-gray-300 leading-relaxed">{currentCase.afterText}</p>
                </div>
              </div>

              {/* Metrics Pill */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="bg-[#0c0c0c] p-3 rounded-2xl border border-white/10">
                  <div className="text-[10px] text-gray-400 flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    Turnaround Time
                  </div>
                  <div className="text-xs font-bold font-mono text-white mt-0.5">{currentCase.timeTaken}</div>
                </div>

                <div className="bg-[#0c0c0c] p-3 rounded-2xl border border-white/10">
                  <div className="text-[10px] text-gray-400 flex items-center gap-1 font-mono">
                    <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
                    Customer Advantage
                  </div>
                  <div className="text-xs font-bold font-mono text-emerald-400 mt-0.5">{currentCase.costSaved}</div>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={onOpenBooking}
                className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-transform active:scale-95 mt-2"
                id="case-book-btn"
              >
                <span>Have a similar issue?</span>
                <strong className="text-white">Book Free Counter Inspection →</strong>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
