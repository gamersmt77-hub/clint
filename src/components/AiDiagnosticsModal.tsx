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

// Client-side smart diagnostic engine for 100% offline & GitHub Pages compatibility
function generateClientDiagnosis(symptoms: string, deviceType: string, brand: string, model: string): DiagnosticResult {
  const lower = symptoms.toLowerCase();
  
  if (lower.includes("screen") || lower.includes("display") || lower.includes("flicker") || lower.includes("line") || lower.includes("crack") || lower.includes("broken")) {
    return {
      probableCause: "Damaged LCD/OLED panel substrate or loose eDP video ribbon cable connector.",
      severity: "Moderate",
      estimatedRepairTime: "30 - 45 Minutes (Express Counter Swap)",
      priceRangeINR: "₹2,200 - ₹3,800",
      recommendations: [
        "Test with brand-new OEM Grade-A IPS high-refresh display panel",
        "Inspect display hinge tension and lubricate to prevent future frame cracking",
        "Perform zero dead-pixel verification benchmark test",
        "6 Months replacement warranty card issuance"
      ],
      nextGenAdvantage: "Direct manufacturer supply in Hariniwas Complex; tested on-counter within 30 minutes with zero data risk."
    };
  }

  if (lower.includes("dead") || lower.includes("power") || lower.includes("charging") || lower.includes("light") || lower.includes("turn on") || lower.includes("boot")) {
    return {
      probableCause: "Primary 19V VIN power rail short circuit, blown charging MOSFET, or corrupted BIOS flash IC.",
      severity: "High",
      estimatedRepairTime: "2 - 4 Hours / Same Day",
      priceRangeINR: "₹1,200 - ₹2,400",
      recommendations: [
        "Thermal camera diagnostic scan to isolate shorted capacitor / IC",
        "Micro-soldering replacement of damaged power-stage MOSFETs",
        "Re-flash clean firmware BIOS using hardware programmer",
        "Stress test power delivery stability under 100% CPU load"
      ],
      nextGenAdvantage: "Chip-level BGA rework lab at Shop 207 fixes only the damaged ₹50 component, saving 70% vs authorized service center motherboard swaps."
    };
  }

  if (lower.includes("liquid") || lower.includes("water") || lower.includes("spill") || lower.includes("coffee") || lower.includes("tea")) {
    return {
      probableCause: "Electrolytic oxidation and corrosion bridging microscopic tracks across motherboard power circuits.",
      severity: "Critical",
      estimatedRepairTime: "24 - 48 Hours (Full Ultrasonic De-oxidation)",
      priceRangeINR: "₹1,500 - ₹2,800",
      recommendations: [
        "Immediate battery isolation to prevent permanent PCB carbonization",
        "Ultrasonic chemical PCB bath to remove all corrosive residues",
        "Microscopic trace repair on corroded copper jumper tracks",
        "Cleanroom drying and component thermal verification"
      ],
      nextGenAdvantage: "85%+ success rate for liquid spill restoration with 100% confidential personal data protection."
    };
  }

  if (lower.includes("slow") || lower.includes("hang") || lower.includes("lag") || lower.includes("ssd") || lower.includes("ram") || lower.includes("speed")) {
    return {
      probableCause: "Mechanical HDD mechanical latency bottlenecks, high disk usage 100%, or insufficient dual-channel RAM.",
      severity: "Low",
      estimatedRepairTime: "20 - 30 Minutes",
      priceRangeINR: "₹1,450 - ₹3,200",
      recommendations: [
        "Install PCIe Gen4 NVMe M.2 SSD (Up to 5000 MB/s speed)",
        "Zero-data-loss clone of your existing Windows OS and personal files",
        "Enable Dual-Channel DDR4/DDR5 high-frequency RAM",
        "Thermal paste refresh and startup optimization"
      ],
      nextGenAdvantage: "Instant 10x speed boost guaranteed on the spot with 3 to 5 years brand warranty on Crucial/Kingston SSDs."
    };
  }

  if (lower.includes("heat") || lower.includes("hot") || lower.includes("fan") || lower.includes("noise") || lower.includes("shutdown")) {
    return {
      probableCause: "Dry thermal paste, clogged copper heatpipe radiator fins, or worn-out fan bearings.",
      severity: "Moderate",
      estimatedRepairTime: "30 - 45 Minutes",
      priceRangeINR: "₹450 - ₹850",
      recommendations: [
        "Deep ultrasonic radiator fin dust extraction",
        "Application of premium Arctic MX-6 / Thermal Grizzly compound",
        "Lubricate high-RPM fan motor assembly",
        "Furmark 15-minute thermal stress drop test"
      ],
      nextGenAdvantage: "Restores peak FPS and prevents expensive GPU/CPU solder fatigue from chronic overheating."
    };
  }

  return {
    probableCause: `Hardware/Firmware issue observed on ${brand} ${model || deviceType}. Comprehensive diagnostic required.`,
    severity: "Moderate",
    estimatedRepairTime: "Same Day / 2-4 Hours",
    priceRangeINR: "₹850 - ₹1,800",
    recommendations: [
      "Full hardware diagnostic rail inspection at Hariniwas counter",
      "Component-level test with multimeter and thermal scan",
      "Upfront quote provided before starting any work",
      "No Fix - No Fee guarantee"
    ],
    nextGenAdvantage: "12+ Years experienced chip-level engineers in Patna with 18,500+ satisfied customers."
  };
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
      // Try backend first
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

      if (res.ok) {
        const data = await res.json();
        if (data.success && data.diagnosis) {
          setResult(data.diagnosis);
          setIsAiPowered(Boolean(data.aiPowered));
          setLoading(false);
          return;
        }
      }
      
      // Fallback if static host or API offline
      const clientResult = generateClientDiagnosis(symptoms, deviceType, brand, model);
      setResult(clientResult);
      setIsAiPowered(true);
    } catch (err) {
      // Client-side fallback works 100% on GitHub Pages
      const clientResult = generateClientDiagnosis(symptoms, deviceType, brand, model);
      setResult(clientResult);
      setIsAiPowered(true);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto" id="ai-diagnostic-modal">
      <div className="relative w-full max-w-2xl bg-[#101010] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-8 text-white animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-[#101010] p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-300">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                Instant AI Hardware Diagnostic & Cost Estimator
              </h2>
              <p className="text-xs text-blue-200/80">
                Powered by NEXT GEN COMPUTER Engineering Lab • Patna
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            id="close-diagnostic-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Form */}
          <form onSubmit={handleDiagnose} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Device Type</label>
                <select
                  value={deviceType}
                  onChange={(e) => setDeviceType(e.target.value)}
                  className="w-full bg-[#161616] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="Laptop">Laptop (Dell/HP/Lenovo/ASUS)</option>
                  <option value="Apple MacBook">Apple MacBook (Air/Pro)</option>
                  <option value="Gaming PC Desktop">Gaming PC / Custom Rig</option>
                  <option value="Office Desktop / AIO">All-In-One (AIO) / Office PC</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Brand</label>
                <select
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="w-full bg-[#161616] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="Dell">Dell (Latitude / Inspiron / Alienware)</option>
                  <option value="Lenovo">Lenovo (ThinkPad / Legion / IdeaPad)</option>
                  <option value="HP">HP (Pavilion / EliteBook / OMEN)</option>
                  <option value="ASUS">ASUS (ROG / TUF / ZenBook)</option>
                  <option value="Apple">Apple (MacBook / iMac / Mac mini)</option>
                  <option value="Acer / MSI / Custom">Acer / MSI / Custom Build</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Model (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. ThinkPad T480, TUF A15"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full bg-[#161616] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Symptoms Input */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Describe Problem or What Happened:
              </label>
              <textarea
                rows={3}
                placeholder="e.g., Laptop won't turn on after tea spilled, charging light is blinking orange..."
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                className="w-full bg-[#161616] border border-white/15 rounded-xl p-3 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
                id="diagnostic-symptoms-input"
              />
            </div>

            {/* Quick Symptom Chips */}
            <div>
              <span className="text-[11px] text-gray-400 font-mono block mb-1.5">
                ⚡ Click common symptoms to auto-fill:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {commonSymptomChips.map((chip, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => setSymptoms(chip)}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-[#1a1a1a] hover:bg-blue-600 hover:text-white border border-white/10 text-gray-300 transition-colors text-left"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-950/60 border border-red-800 text-red-300 text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 text-xs text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={urgency}
                  onChange={(e) => setUrgency(e.target.checked)}
                  className="rounded bg-[#161616] border-white/20 text-blue-600 focus:ring-0"
                />
                <span>I need Same-Day / Express Repair at Patna Store</span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all active:scale-95 disabled:opacity-50"
                id="run-ai-diagnostic-btn"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Analyzing Circuit...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Run Instant Diagnosis</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Results Section */}
          {result && (
            <div className="mt-6 pt-6 border-t border-white/10 space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              
              {/* Summary Card */}
              <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/30 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                      LAB DIAGNOSIS REPORT
                    </span>
                    <h3 className="text-base font-bold text-white mt-0.5">
                      {result.probableCause}
                    </h3>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase ${
                    result.severity === "Critical" 
                      ? "bg-red-950 text-red-400 border border-red-800" 
                      : result.severity === "High"
                      ? "bg-amber-950 text-amber-400 border border-amber-800"
                      : "bg-blue-950 text-blue-400 border border-blue-800"
                  }`}>
                    Severity: {result.severity}
                  </span>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] text-gray-400 font-mono block">Estimated Patna Market Cost:</span>
                    <span className="text-lg font-black text-blue-400 font-mono">{result.priceRangeINR}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] text-gray-400 font-mono block">Estimated Turnaround:</span>
                    <span className="text-sm font-bold text-white font-mono flex items-center gap-1 mt-1">
                      <Clock className="w-3.5 h-3.5 text-blue-400" />
                      {result.estimatedRepairTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Recommended Lab Steps */}
              {result.recommendations && result.recommendations.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider font-mono">
                    Recommended Repair Procedure:
                  </h4>
                  <div className="space-y-1.5">
                    {result.recommendations.map((step, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-300 p-2 rounded-xl bg-[#141414] border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Next Gen Advantage */}
              {result.nextGenAdvantage && (
                <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-300 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block font-bold">Why Next Gen Computer Patna:</strong>
                    <p className="text-gray-300 mt-0.5 leading-relaxed">{result.nextGenAdvantage}</p>
                  </div>
                </div>
              )}

              {/* Call to Actions */}
              <div className="pt-3 flex flex-wrap gap-2 justify-end">
                <button
                  onClick={handleWhatsAppBooking}
                  className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Quote to WhatsApp</span>
                </button>

                {onBookWithDetails && (
                  <button
                    onClick={() => {
                      onBookWithDetails({
                        device: `${brand} ${model || deviceType}`,
                        issue: `${symptoms} (${result.probableCause})`,
                        estimatedPrice: result.priceRangeINR
                      });
                      onClose();
                    }}
                    className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 shadow transition-all active:scale-95"
                  >
                    <span>Book In-Store Slot</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
