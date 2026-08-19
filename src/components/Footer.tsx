import React from "react";
import { STORE_INFO } from "../data/mockData";
import { 
  Cpu, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  ExternalLink,
  Wrench,
  Laptop
} from "lucide-react";

interface FooterProps {
  onOpenDiagnostic: () => void;
  onOpenPcBuilder: () => void;
  onOpenBooking: () => void;
  onOpenTracker: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDiagnostic,
  onOpenPcBuilder,
  onOpenBooking,
  onOpenTracker,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] text-[#F0F0F0] border-t border-white/10" id="main-footer">
      
      {/* Top CTA Bento Banner */}
      <div className="bg-gradient-to-br from-blue-900/40 via-[#0a0a0a] to-[#111111] py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            <Cpu className="w-3.5 h-3.5" />
            Hariniwas Complex Tech Hub
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Need Expert Laptop Repair or a Custom PC in Patna Today?
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
            Visit Shop 207, 2nd Floor, Hariniwas Complex, Dak Bunglow Road. Same-day express turnaround with genuine 90-day testing warranty.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-xs sm:text-sm shadow-xl transition-transform active:scale-95"
              id="footer-book-btn"
            >
              Book In-Store Free Diagnostic
            </button>
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="px-6 py-3 rounded-full bg-[#161616] hover:bg-[#222] text-white font-bold text-xs sm:text-sm border border-white/10 flex items-center gap-2"
              id="footer-call-btn"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              Call: {STORE_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="font-black text-lg text-white">NEXT GEN</span>{" "}
                <span className="font-black text-lg text-blue-500">COMPUTER</span>
                <p className="text-[11px] font-mono text-gray-400">Patna's Chip-Level Hub</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Patna's premier destination for chip-level motherboard repairing, cracked screen replacement, certified refurbished laptops, and custom esports gaming rigs since 12+ years.
            </p>
            <div className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              90-Day Standard Warranty on all Repairs
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Repair & Tech Services
            </h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><button onClick={() => scrollTo("services-section")} className="hover:text-blue-400">Chip-Level Motherboard Repair</button></li>
              <li><button onClick={() => scrollTo("services-section")} className="hover:text-blue-400">30-Min Screen Replacement</button></li>
              <li><button onClick={() => scrollTo("services-section")} className="hover:text-blue-400">NVMe SSD & DDR4/DDR5 Upgrades</button></li>
              <li><button onClick={onOpenPcBuilder} className="hover:text-blue-400">Custom Gaming & 4K Editing PC Builds</button></li>
              <li><button onClick={() => scrollTo("services-section")} className="hover:text-blue-400">Hinge Fabrication & Body Restoration</button></li>
              <li><button onClick={() => scrollTo("services-section")} className="hover:text-blue-400">Liquid Spill & Water Damage Fix</button></li>
            </ul>
          </div>

          {/* Col 3: Interactive Portals */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Interactive Portals
            </h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><button onClick={onOpenDiagnostic} className="text-blue-400 hover:underline flex items-center gap-1">✨ AI Hardware Cost Estimator</button></li>
              <li><button onClick={onOpenPcBuilder} className="text-indigo-400 hover:underline flex items-center gap-1">🎮 Custom PC Configurator</button></li>
              <li><button onClick={onOpenTracker} className="text-amber-400 hover:underline flex items-center gap-1">🔍 Live Repair Job Tracker</button></li>
              <li><button onClick={() => scrollTo("refurbished-section")} className="hover:text-gray-200">💻 Certified Refurbished Laptops</button></li>
              <li><button onClick={() => scrollTo("case-studies-section")} className="hover:text-gray-200">🔬 Before & After Proof Gallery</button></li>
            </ul>
          </div>

          {/* Col 4: Contact & Patna Address */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Visit or Contact Lab
            </h3>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>207, 2nd Floor, Hariniwas Complex, New Dak Bunglow Rd, Fraser Road Area, Patna 800001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href={`tel:${STORE_INFO.phone}`} className="text-white font-bold hover:underline font-mono">
                  {STORE_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`https://wa.me/${STORE_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-emerald-400 font-semibold font-mono">
                  WhatsApp: +91 98352 91073
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>10:30 AM - 8:30 PM (Mon - Sat)</span>
              </div>
            </div>
          </div>

        </div>

        {/* SEO Keywords Tag Cloud for Patna Local Search */}
        <div className="mt-10 pt-6 border-t border-white/10 text-[11px] text-gray-500 leading-relaxed font-mono">
          <strong className="text-gray-400 block mb-1">Serving All Areas in Patna & Bihar:</strong>
          <span>Dak Bunglow Road • Fraser Road • Boring Road • Kankarbagh • Bailey Road • Rajendra Nagar • Danapur • Exhibition Road • Maurya Lok Complex • SP Verma Road • Gandhi Maidan • Anisabad • Patliputra Colony • Ashiana Nagar • Patna City.</span>
        </div>

        {/* Copyright & Pitch note */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <div>
            © {new Date().getFullYear()} {STORE_INFO.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-2 text-gray-400 font-mono text-[11px]">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span>Ultra High-Performance Web Portal Demo</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
