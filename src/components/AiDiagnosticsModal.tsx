import React, { useState, useEffect } from "react";
import { 
  X, 
  Sparkles, 
  Cpu, 
  AlertTriangle, 
  Clock, 
  IndianRupee, 
  ShieldCheck, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  RefreshCw,
  Zap,
  Wrench
} from "lucide-react";
import { DiagnosticResult } from "../types";
import { STORE_INFO } from "../data/mockData";

interface AiDiagnosticsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSymptom?: string;
  onBookWithDetails?: (details: { device: string; issue: string; estimatedPrice: string }) => void;
}

export const AiDiagnosticsModal: React.FC<AiDiagnosticsModalProps> = ({
  isOpen,
  onClose,
  initialSymptom = "",
  onBookWithDetails,
}) => {
  const [deviceType, setDeviceType] = useState("Laptop");
  const [brand, setBrand] = useState("Dell");
  const [model, setModel] = useState("");
  const [symptoms, setSymptoms] = useState(initialSymptom);
  const [urgency, setUrgency] = useState(true);
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DiagnosticResult | null>(null);
  const [isAiPowered, setIsAiPowered] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (initialSymptom) {
      setSymptoms(initialSymptom);
    }
  }, [initialSymptom]);

  if (!isOpen) return null;

  const handleDiagnose = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!symptoms.trim()) {
      setErrorMsg("Please select or type your device symptoms.");
      return;
    }
    setErrorMsg("");
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/ai-diagnose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          deviceType,
          brand,
          model,
          symptoms,
          urgency
        })
      });
      const data = await res.json();
      if (data.success && data.diagnosis) {
        setResult(data.diagnosis);
        setIsAiPowered(Boolean(data.aiPowered));
      } else {
        setErrorMsg(data.error || "Could not complete diagnosis. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Server is busy. Please try again or call us directly at 09835291073.");
    } finally {
      setLoading(false);
    }
  };

  const commonSymptomChips = [
    "No Power / Dead / Charging light blinking",
    "Screen cracked / Vertical colored lines / Flickering",
    "Liquid / Water / Tea spill inside keyboard",
    "Laptop extremely slow, takes 5 mins to boot",
    "Blue Screen of Death (BSOD) / Auto restarting",
    "Overheating (90°C+) & loud jet engine fan sound",
    "Broken hinge / Screen frame separating when opening"
  ];

  const handleWhatsAppBooking = () => {
    if (!result) return;
    const msg = encodeURIComponent(
      `*Instant AI Diagnostic & Quote Inquiry*\n` +
      `*Device:* ${brand} ${model || deviceType}\n` +
      `*Symptom:* ${symptoms}\n` +
      `*Probable Cause:* ${result.probableCause}\n` +
      `*Estimated Cost:* ${result.priceRangeINR}\n` +
      `*Est. Turnaround:* ${result.estimatedRepairTime}\n\n` +
      `_Hi Next Gen Computer, I got this estimate on your website. When can I visit Shop 207, Hariniwas Complex?_`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto" id="ai-diagnostic-modal">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8 text-slate-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                Instant AI Hardware Diagnostic & Cost Estimator
              </h2>
              <p className="text-xs text-cyan-200/80">
                Powered by NEXT GEN COMPUTER Engineering Lab • Patna
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            id="close-diagnostic-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          
          {!result ? (
            <form onSubmit={handleDiagnose} className="space-y-4">
              {/* Device Category & Brand Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Device Type
                  </label>
                  <select 
                    value={deviceType}
                    onChange={(e) => setDeviceType(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                    id="diag-device-type"
                  >
                    <option value="Laptop">Windows Laptop</option>
                    <option value="Apple MacBook">Apple MacBook (Air / Pro / M1-M3)</option>
                    <option value="Gaming Laptop">High-End Gaming Laptop</option>
                    <option value="Desktop PC">Desktop / Gaming PC Rig</option>
                    <option value="All-in-One PC">All-in-One (AIO) Computer</option>
                    <option value="CCTV & Networking">CCTV / Office Networking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Brand
                  </label>
                  <select 
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                    id="diag-brand"
                  >
                    <option value="Dell">Dell (Inspiron / Vostro / XPS / Alienware)</option>
                    <option value="HP">HP (Pavilion / Omen / Victus / Envy)</option>
                    <option value="Lenovo">Lenovo (IdeaPad / ThinkPad / Legion)</option>
                    <option value="ASUS">ASUS (TUF Gaming / ROG / ZenBook)</option>
                    <option value="Acer">Acer (Nitro / Predator / Aspire)</option>
                    <option value="Apple">Apple (MacBook Pro / Air)</option>
                    <option value="MSI">MSI (Katana / Bravo / Creator)</option>
                    <option value="Custom Build">Custom Assembled Rig</option>
                  </select>
                </div>
              </div>

              {/* Model Number (Optional) */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Model Number / Generation (Optional)
                </label>
                <input 
                  type="text"
                  placeholder="e.g. Dell G15 5511, HP 15s, TUF A15, MacBook M1"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 placeholder:text-slate-500"
                  id="diag-model-input"
                />
              </div>

              {/* Issue Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                  <span>Describe Symptoms / What Happened?</span>
                  <span className="text-[11px] text-cyan-400">Click any chip below to auto-fill</span>
                </label>
                <textarea 
                  rows={3}
                  placeholder="e.g. Laptop got dead after power cut, screen has vertical lines, or water spilled on keyboard..."
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-500 placeholder:text-slate-500"
                  id="diag-symptom-input"
                />
                
                {/* Common symptom quick click chips */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {commonSymptomChips.map((chip, idx) => (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => setSymptoms(chip)}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/50 text-slate-300 transition-colors text-left"
                    >
                      + {chip}
                    </button>
                  ))}
                </div>
              </div>

              {/* Urgency switch */}
              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <div>
                    <div className="text-xs font-bold text-white">Same-Day Express Repair Priority</div>
                    <div className="text-[11px] text-slate-400">Get your laptop inspected & repaired within 30-90 minutes</div>
                  </div>
                </div>
                <input 
                  type="checkbox"
                  checked={urgency}
                  onChange={(e) => setUrgency(e.target.checked)}
                  className="w-4 h-4 text-cyan-500 rounded focus:ring-0 cursor-pointer"
                  id="diag-urgency-toggle"
                />
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-950/60 border border-red-800 text-red-300 text-xs flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 transition-transform active:scale-95 disabled:opacity-50"
                id="diag-submit-btn"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                    <span>Analyzing Circuit Schematics & Market Rates...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-slate-950" />
                    <span>Calculate Instant Diagnosis & Patna Price Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Diagnostic Result View */
            <div className="space-y-5 animate-in fade-in zoom-in-95 duration-200">
              
              {/* Top Banner with Cause & Severity */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Diagnostic Conclusion
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                    result.severity === "Critical" ? "bg-red-500/20 text-red-300 border border-red-500/30" :
                    result.severity === "High" ? "bg-amber-500/20 text-amber-300 border border-amber-500/30" :
                    "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  }`}>
                    Severity: {result.severity}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white leading-snug">
                  {result.probableCause}
                </h3>
              </div>

              {/* Price & Turnaround Metric Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <IndianRupee className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Estimated Patna Rate</span>
                  </div>
                  <div className="text-lg font-black text-emerald-400">
                    {result.priceRangeINR}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    Includes 90-Day Repair Warranty
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Estimated Turnaround</span>
                  </div>
                  <div className="text-lg font-black text-cyan-300">
                    {result.estimatedRepairTime}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    Express testing at Hariniwas Lab
                  </div>
                </div>
              </div>

              {/* Actionable recommendations */}
              {result.recommendations && result.recommendations.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-indigo-400" />
                    Next Gen Engineering Protocol
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {result.recommendations.map((rec, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-slate-800/40 p-2 rounded-lg border border-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* NextGen Advantage */}
              <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-900/60 text-xs text-blue-200 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-cyan-300">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  Next Gen Computer Advantage
                </div>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  {result.nextGenAdvantage}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={handleWhatsAppBooking}
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-transform active:scale-95"
                  id="diag-whatsapp-book-btn"
                >
                  <MessageSquare className="w-4 h-4" />
                  Lock This Price & Chat on WhatsApp (09835291073)
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      if (onBookWithDetails) {
                        onBookWithDetails({
                          device: `${brand} ${model || deviceType}`,
                          issue: symptoms,
                          estimatedPrice: result.priceRangeINR
                        });
                      }
                      onClose();
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-1.5"
                    id="diag-reserve-slot-btn"
                  >
                    <Wrench className="w-3.5 h-3.5" />
                    Book In-Store Express Slot
                  </button>

                  <button
                    onClick={() => setResult(null)}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-colors"
                    id="diag-recalculate-btn"
                  >
                    Test Another Issue
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer Note */}
        <div className="bg-slate-950 p-3 px-6 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <span>📍 207, 2nd Floor, Hariniwas Complex, Dak Bunglow Rd, Patna</span>
          <a href={`tel:${STORE_INFO.phone}`} className="text-amber-400 font-bold hover:underline">
            Call: {STORE_INFO.phone}
          </a>
        </div>

      </div>
    </div>
  );
};
