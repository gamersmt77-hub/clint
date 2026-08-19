import React, { useState } from "react";
import { 
  X, 
  Cpu, 
  Sparkles, 
  Gamepad2, 
  Video, 
  Layers, 
  TrendingUp, 
  CheckCircle2, 
  IndianRupee, 
  MessageSquare, 
  Zap, 
  RefreshCw,
  Sliders,
  ShieldCheck
} from "lucide-react";
import { PCBuildRecommendation } from "../types";
import { STORE_INFO } from "../data/mockData";

interface CustomPcBuilderProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderBuild?: (buildName: string, budget: string) => void;
}

export const CustomPcBuilder: React.FC<CustomPcBuilderProps> = ({
  isOpen,
  onClose,
  onOrderBuild,
}) => {
  const [budget, setBudget] = useState(65000);
  const [purpose, setPurpose] = useState("Gaming & Esports");
  const [resolution, setResolution] = useState("1080p Ultra / 1440p High");
  const [preferredBrand, setPreferredBrand] = useState("Intel + NVIDIA RTX");

  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<PCBuildRecommendation | null>(null);

  if (!isOpen) return null;

  const handleGenerateBuild = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/ai-pc-builder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          budget,
          purpose,
          resolution,
          preferredBrand
        })
      });
      const data = await res.json();
      if (data.success && data.build) {
        setRecommendation(data.build);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const purposes = [
    { id: "Gaming & Esports", label: "Gaming & Esports", icon: Gamepad2, desc: "Valorant, GTA V, Cyberpunk, CS2, BGMI Emulators" },
    { id: "Video Editing & 4K Creator", label: "Video Editing & Creator", icon: Video, desc: "Premiere Pro, After Effects, DaVinci Resolve, 4K Color Grading" },
    { id: "3D CAD & Architecture", label: "3D CAD & Architecture", icon: Layers, desc: "AutoCAD, Blender, 3ds Max, Revit, SketchUp" },
    { id: "Trading & Office Multitasking", label: "Trading & Heavy Office", icon: TrendingUp, desc: "Multi-monitor stock charts, Excel, Tally Prime, Day trading" }
  ];

  const handleWhatsAppOrder = () => {
    if (!recommendation) return;
    const msg = encodeURIComponent(
      `*Custom PC Build Inquiry (Next Gen Computer Patna)*\n` +
      `*Build:* ${recommendation.buildName}\n` +
      `*Budget:* ₹${budget.toLocaleString("en-IN")}\n` +
      `*Target:* ${purpose} (${resolution})\n` +
      `*Estimated Cost:* ${recommendation.totalEstimatedINR}\n\n` +
      `_Hi Next Gen Computer (Hariniwas Complex), I customized this PC build on your website. Is it available for assembly today?_`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto" id="pc-builder-modal">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8 text-slate-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                Custom PC Builder & FPS Architect
              </h2>
              <p className="text-xs text-purple-200/80">
                Nehru Place Wholesale Part Rates in Patna • Free Clean Assembly & Cable Management
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            id="close-pc-builder-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Budget Slider */}
          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5 uppercase tracking-wider">
                <Sliders className="w-4 h-4 text-purple-400" />
                Select Your Budget Target
              </label>
              <span className="text-xl font-black text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-lg border border-emerald-800">
                ₹{budget.toLocaleString("en-IN")}
              </span>
            </div>
            <input 
              type="range"
              min="28000"
              max="250000"
              step="3000"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
              id="pc-budget-slider"
            />
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>₹28,000 (Esports/Office)</span>
              <span>₹65,000 (1080p Ultra RTX)</span>
              <span>₹1,20,000 (1440p Beast)</span>
              <span>₹2.5L+ (4K Ultra Titan)</span>
            </div>
          </div>

          {/* Purpose / Usage Select */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Primary Purpose
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {purposes.map((p) => {
                const Icon = p.icon;
                const isSelected = purpose === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPurpose(p.id)}
                    className={`p-3 rounded-xl border text-left flex items-start gap-3 transition-all ${
                      isSelected 
                        ? "bg-purple-950/50 border-purple-500 text-white shadow-lg shadow-purple-900/30" 
                        : "bg-slate-800/60 border-slate-700 text-slate-300 hover:border-slate-600 hover:bg-slate-800"
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${isSelected ? "bg-purple-600 text-white" : "bg-slate-700 text-slate-400"}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">{p.label}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">{p.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Resolution & Platform Preferences */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Target Resolution & Refresh Rate
              </label>
              <select
                value={resolution}
                onChange={(e) => setResolution(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                id="pc-resolution-select"
              >
                <option value="1080p Esports 144Hz+">1080p Full HD (Competitive 144Hz - 240Hz)</option>
                <option value="1440p 2K Ultra Gaming">1440p 2K Quad HD Ultra Settings</option>
                <option value="4K 120Hz Ray Tracing / Creator">4K Ultra HDR + Ray Tracing</option>
                <option value="Multi-Monitor 4x 1080p Screens">Multi-Monitor Display Setup (Trading/CAD)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Preferred Platform / Ecosystem
              </label>
              <select
                value={preferredBrand}
                onChange={(e) => setPreferredBrand(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                id="pc-brand-select"
              >
                <option value="Intel Core + NVIDIA RTX">Intel Core + NVIDIA GeForce RTX (Best for Premiere/CUDA)</option>
                <option value="AMD Ryzen + NVIDIA RTX">AMD Ryzen + NVIDIA GeForce RTX (Ultimate Gaming Value)</option>
                <option value="Full AMD Pure Gaming (Ryzen + Radeon)">Full AMD Smart Access (Ryzen + Radeon RX)</option>
                <option value="Best Value Recommended by Next Gen">Let Next Gen Engineer optimize for maximum performance</option>
              </select>
            </div>
          </div>

          {/* Action to build configuration */}
          <button
            onClick={handleGenerateBuild}
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 transition-transform active:scale-95 disabled:opacity-50"
            id="generate-pc-build-btn"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-white" />
                <span>Configuring Compatible Components & Benchmarks...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Generate Custom Rig Bill of Materials & FPS Breakdown</span>
              </>
            )}
          </button>

          {/* Generated PC Bill of Materials & FPS Output */}
          {recommendation && (
            <div className="space-y-4 pt-2 border-t border-slate-800 animate-in fade-in duration-200">
              
              {/* Build title & price header */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-950/60 to-slate-900 border border-purple-800/80 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300">
                    Next Gen Custom Rig
                  </span>
                  <h3 className="text-base font-black text-white">{recommendation.buildName}</h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400">Total Approx Cost</span>
                  <div className="text-xl font-black text-emerald-400">{recommendation.totalEstimatedINR}</div>
                </div>
              </div>

              {/* Game FPS Badges */}
              {recommendation.fpsEstimate && (
                <div className="p-3 bg-slate-800/90 rounded-xl border border-slate-700 space-y-2">
                  <div className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    Estimated Gaming Performance (FPS Benchmark)
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    {Object.entries(recommendation.fpsEstimate).map(([game, fps], idx) => (
                      <div key={idx} className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                        <div className="text-slate-400 text-[10px] uppercase font-semibold">{game}</div>
                        <div className="text-cyan-300 font-extrabold mt-0.5">{fps}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Component breakdown table */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Recommended Hardware Components
                </h4>
                <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
                  {recommendation.components.map((comp, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/80 flex items-center justify-between text-xs gap-3">
                      <div>
                        <div className="font-bold text-slate-200">{comp.category}</div>
                        <div className="text-slate-400 text-[11px]">{comp.item}</div>
                      </div>
                      <div className="font-mono font-bold text-emerald-400 flex-shrink-0">
                        {comp.approxPrice}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Gen Perks */}
              <div className="p-3 bg-blue-950/40 rounded-xl border border-blue-900/60 space-y-1.5">
                <div className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  Free Build Perks Included with Every Next Gen Rig:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                  {recommendation.builderPerks?.map((perk, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  onClick={handleWhatsAppOrder}
                  className="flex-1 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-transform active:scale-95"
                  id="pc-order-whatsapp-btn"
                >
                  <MessageSquare className="w-4 h-4" />
                  Lock Parts & Order via WhatsApp (09835291073)
                </button>
                <button
                  onClick={() => {
                    if (onOrderBuild) {
                      onOrderBuild(recommendation.buildName, recommendation.totalEstimatedINR);
                    }
                    onClose();
                  }}
                  className="py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-1.5"
                  id="pc-reserve-consultation-btn"
                >
                  Book Free In-Store Consultation
                </button>
              </div>

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-slate-950 p-3 px-6 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <span>📍 207, 2nd Flr, Hariniwas Complex, Dak Bunglow, Patna</span>
          <span className="text-purple-300 font-semibold">100% Brand Sealed Components with Invoice</span>
        </div>

      </div>
    </div>
  );
};
