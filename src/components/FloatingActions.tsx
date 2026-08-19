import React from "react";
import { MessageSquare, Phone, Sparkles } from "lucide-react";
import { STORE_INFO } from "../data/mockData";

interface FloatingActionsProps {
  onOpenDiagnostic: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenDiagnostic,
}) => {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2.5" id="floating-actions-container">
      
      {/* Floating AI Diagnostic Quick Pill */}
      <button
        onClick={onOpenDiagnostic}
        className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111]/90 hover:bg-[#1a1a1a] text-blue-400 border border-white/10 shadow-2xl backdrop-blur-md text-xs font-mono font-bold transition-all hover:scale-105 active:scale-95 group"
        id="floating-ai-pill"
      >
        <Sparkles className="w-4 h-4 text-blue-400" />
        <span>Instant Repair Cost Estimator</span>
      </button>

      <div className="flex items-center gap-2">
        {/* Floating Call Button */}
        <a
          href={`tel:${STORE_INFO.phone}`}
          className="w-12 h-12 rounded-full bg-[#1c1c1c] hover:bg-[#282828] text-white border border-white/10 flex items-center justify-center shadow-xl transition-transform hover:scale-110 active:scale-90"
          title={`Call ${STORE_INFO.phone}`}
          id="floating-call-btn"
        >
          <Phone className="w-5 h-5 text-blue-400" />
        </a>

        {/* Floating WhatsApp Button with Notification Ping */}
        <a
          href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hi%20Next%20Gen%20Computer%20Patna,%20I%20have%20an%20inquiry%20regarding%20laptop%20repair%20/%20PC%20build.`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl shadow-emerald-600/40 transition-transform hover:scale-110 active:scale-90"
          title="Chat on WhatsApp"
          id="floating-whatsapp-btn"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-600 text-[9px] font-bold text-white items-center justify-center font-mono">
              1
            </span>
          </span>
        </a>
      </div>

    </div>
  );
};
