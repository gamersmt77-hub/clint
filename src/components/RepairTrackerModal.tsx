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
import { STORE_INFO, INITIAL_MOCK_BOOKINGS, MockBooking } from "../data/mockData";

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
    const cleanQuery = query.trim().toUpperCase();
    if (!cleanQuery) {
      setErrorMsg("Please enter your Ticket ID (e.g. NGC-9842) or Phone number.");
      return;
    }
    setErrorMsg("");
    setLoading(true);

    try {
      // Try backend first
      const res = await fetch(`/api/track-repair?q=${encodeURIComponent(cleanQuery)}`);
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.booking) {
          setResult(data.booking);
          setLoading(false);
          return;
        }
      }

      // Fallback for static hosting / GitHub Pages: check localStorage + INITIAL_MOCK_BOOKINGS
      let localBookings: MockBooking[] = [];
      try {
        localBookings = JSON.parse(localStorage.getItem("nextgen_bookings") || "[]");
      } catch (err) {
        console.warn("Storage warning", err);
      }

      const allBookings = [...localBookings, ...INITIAL_MOCK_BOOKINGS];
      const match = allBookings.find(
        (b) => b.id.toUpperCase() === cleanQuery || b.phone.replace(/\D/g, "") === cleanQuery.replace(/\D/g, "")
      );

      if (match) {
        setResult(match);
      } else {
        setErrorMsg("No repair job found for this token/phone number. Try demo ticket: NGC-9842 or NGC-9843.");
      }
    } catch (err) {
      // Client-side fallback
      const match = INITIAL_MOCK_BOOKINGS.find(
        (b) => b.id.toUpperCase() === cleanQuery || b.phone.includes(cleanQuery)
      );
      if (match) {
        setResult(match);
      } else {
        setErrorMsg("No repair job found for this token/phone number. Try demo ticket: NGC-9842.");
      }
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto" id="repair-tracker-modal">
      <div className="relative w-full max-w-xl bg-[#111111] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-8 text-white animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-950 via-orange-950 to-[#111111] p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                Live Repair Job Status Tracker
              </h2>
              <p className="text-xs text-amber-200/80">
                Track your laptop or PC repair stage in real-time at Next Gen Computer
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            id="close-tracker-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          
          {/* Search Form */}
          <form onSubmit={handleTrack} className="space-y-3">
            <label className="block text-xs font-semibold text-gray-300">
              Enter Repair Job Ticket ID or Registered Phone Number:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="e.g. NGC-9842 or 9835291073"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-[#181818] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500 font-mono"
                id="tracker-query-input"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center gap-1.5 transition-transform active:scale-95 disabled:opacity-50"
                id="tracker-submit-btn"
              >
                <Search className="w-4 h-4" />
                <span>Track Job</span>
              </button>
            </div>
            <div className="flex gap-2 text-[11px] text-gray-400 font-mono">
              <span>Demo Tickets to try:</span>
              <button type="button" onClick={() => { setQuery("NGC-9842"); }} className="text-amber-400 underline">NGC-9842</button>
              <span>•</span>
              <button type="button" onClick={() => { setQuery("NGC-9843"); }} className="text-amber-400 underline">NGC-9843</button>
              <span>•</span>
              <button type="button" onClick={() => { setQuery("NGC-9844"); }} className="text-amber-400 underline">NGC-9844</button>
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
            <div className="space-y-4 pt-2 border-t border-white/10 animate-in fade-in duration-200">
              
              {/* Job Summary Banner */}
              <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider">
                      REPAIR TICKET #{result.id}
                    </span>
                    <h3 className="text-base font-bold text-white mt-0.5">
                      {result.deviceModel}
                    </h3>
                    <p className="text-xs text-gray-300 mt-0.5">{result.serviceType}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase ${
                    result.status === "Ready for Pickup"
                      ? "bg-emerald-950 text-emerald-400 border border-emerald-700 animate-pulse"
                      : result.status === "In-Progress"
                      ? "bg-blue-950 text-blue-400 border border-blue-700"
                      : "bg-amber-950 text-amber-400 border border-amber-700"
                  }`}>
                    {result.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-mono">
                  <div className="p-2 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] text-gray-400 block">Customer Name:</span>
                    <strong className="text-white">{result.name}</strong>
                  </div>
                  <div className="p-2 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] text-gray-400 block">Estimated Cost:</span>
                    <strong className="text-amber-400">{result.estimatedCost || "₹1,850"}</strong>
                  </div>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider font-mono">
                  Repair Stage Breakdown:
                </h4>
                <div className="space-y-2">
                  {steps.map((step, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-2xl border flex items-start gap-3 transition-colors ${
                        step.done
                          ? "bg-emerald-950/20 border-emerald-500/30 text-emerald-200"
                          : "bg-[#141414] border-white/5 text-gray-500"
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        step.done ? "bg-emerald-500 text-black font-bold text-xs" : "bg-white/10 text-gray-400 text-xs"
                      }`}>
                        {step.done ? "✓" : idx + 1}
                      </div>
                      <div>
                        <p className={`text-xs font-bold ${step.done ? "text-white" : "text-gray-400"}`}>
                          {step.title}
                        </p>
                        <p className="text-[11px] text-gray-400 mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Store Location Footer */}
              <div className="p-3.5 rounded-2xl bg-[#161616] border border-white/10 flex items-center justify-between text-xs">
                <div>
                  <p className="text-white font-bold">Pick Up Location:</p>
                  <p className="text-gray-400 text-[11px]">Shop 207, 2nd Floor, Hariniwas Complex, Patna</p>
                </div>
                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="px-3 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Lab</span>
                </a>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
