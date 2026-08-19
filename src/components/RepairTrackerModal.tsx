import React, { useState } from "react";
import { 
  X, 
  Search, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Sparkles,
  ShieldCheck,
  Cpu
} from "lucide-react";
import { STORE_INFO } from "../data/mockData";

interface RepairTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RepairTrackerModal: React.FC<RepairTrackerModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [query, setQuery] = useState("NGC-9842");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleTrack = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim()) {
      setErrorMsg("Please enter your Ticket ID (e.g. NGC-9842) or Phone number.");
      return;
    }
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await fetch(`/api/track-repair?q=${encodeURIComponent(query.trim())}`);
      const data = await res.json();
      if (data.success && data.booking) {
        setResult(data.booking);
      } else {
        setErrorMsg(data.error || "No repair job found for this token/number.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Unable to check status right now. Please call our shop at 09835291073.");
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    { title: "Device Received & Logged", desc: "Initial visual inspection at Hariniwas counter", done: true },
    { title: "Circuit & Microscopic Diagnostic", desc: "Multimeter & thermal camera rail diagnostics", done: true },
    { title: "Chip-Level Repair & Replacement", desc: "OEM part replacement and micro-soldering", done: result?.status === "In-Progress" || result?.status === "Ready for Pickup" || result?.status === "Delivered" },
    { title: "Stress Benchmark & QA Testing", desc: "Thermal load & 100% stability stress testing", done: result?.status === "Ready for Pickup" || result?.status === "Delivered" },
    { title: "Ready for Pickup at Lab", desc: "Tested with 90-day warranty card ready", done: result?.status === "Ready for Pickup" || result?.status === "Delivered" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto" id="repair-tracker-modal">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8 text-slate-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-900 via-orange-950 to-slate-900 p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                Live Repair Job Status Tracker
              </h2>
              <p className="text-xs text-amber-200/80">
                Track your laptop or PC repair stage in real-time at Next Gen Computer
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            id="close-tracker-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          
          {/* Search Form */}
          <form onSubmit={handleTrack} className="space-y-3">
            <label className="block text-xs font-semibold text-slate-300">
              Enter Repair Job Ticket ID or Registered Phone Number:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="e.g. NGC-9842 or 9835291073"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                id="tracker-query-input"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-transform active:scale-95 disabled:opacity-50"
                id="tracker-submit-btn"
              >
                <Search className="w-4 h-4" />
                <span>Track Job</span>
              </button>
            </div>
            <div className="flex gap-2 text-[11px] text-slate-400">
              <span>Demo Tickets to try:</span>
              <button type="button" onClick={() => { setQuery("NGC-9842"); }} className="text-amber-400 underline">NGC-9842</button>
              <span>•</span>
              <button type="button" onClick={() => { setQuery("NGC-9843"); }} className="text-amber-400 underline">NGC-9843</button>
            </div>
          </form>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-950/60 border border-red-800 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Result Card */}
          {result && (
            <div className="space-y-4 pt-2 border-t border-slate-800 animate-in fade-in duration-200">
              
              {/* Job Summary Banner */}
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800">
                    Ticket #{result.id}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Status: {result.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400">Customer & Device</span>
                    <div className="font-bold text-white">{result.name}</div>
                    <div className="text-slate-300 text-[11px]">{result.deviceModel}</div>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400">Service Category</span>
                    <div className="font-bold text-cyan-300">{result.serviceType}</div>
                    <div className="text-slate-300 text-[11px]">Estimate: {result.estimatedCost || "Standard Rate"}</div>
                  </div>
                </div>
              </div>

              {/* Progress Stepper */}
              <div className="space-y-3 p-3 bg-slate-950/60 rounded-xl border border-slate-850">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Workshop Progress Timeline
                </h4>
                <div className="space-y-3">
                  {steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs">
                      <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                        step.done 
                          ? "bg-emerald-500 text-slate-950 font-bold" 
                          : "bg-slate-800 border border-slate-700 text-slate-500"
                      }`}>
                        {step.done ? "✓" : idx + 1}
                      </div>
                      <div>
                        <div className={`font-bold ${step.done ? "text-slate-100" : "text-slate-500"}`}>
                          {step.title}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          {step.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Engineer */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow"
                  id="tracker-call-engineer"
                >
                  <Phone className="w-4 h-4" />
                  Call Assigned Engineer ({STORE_INFO.phone})
                </a>
                <a
                  href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hi%20Next%20Gen%20Computer,%20I%20am%20inquiring%20about%20my%20repair%20job%20${result.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5"
                  id="tracker-wa-engineer"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-slate-950 p-3 px-6 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <span>📍 Hariniwas Complex, 2nd Floor, Patna</span>
          <span className="text-amber-400 font-semibold">90-Day Warranty on all repairs</span>
        </div>

      </div>
    </div>
  );
};
