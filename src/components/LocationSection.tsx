import React from "react";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Car, 
  Building2, 
  MessageSquare,
  ShieldCheck,
  ExternalLink
} from "lucide-react";
import { STORE_INFO } from "../data/mockData";

export const LocationSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#050505] text-[#F0F0F0] border-b border-white/10" id="location-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-blue-400" />
            Visit Our Store & Lab in Patna
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Prime Central Location in Dak Bunglow, Patna
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Easily accessible from all major parts of Patna (Boring Road, Kankarbagh, Bailey Road, Fraser Road, Rajendra Nagar, Danapur).
          </p>
        </div>

        {/* Store Detail & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Address, Directions & Contact Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            <div className="bg-[#111111] rounded-3xl border border-white/10 p-6 space-y-5 shadow-xl">
              
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                    Shop #207, 2nd Floor
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                    Open Mon-Sat
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {STORE_INFO.name}
                </h3>
              </div>

              {/* Exact Address */}
              <div className="flex items-start gap-3 text-xs text-gray-300 bg-[#0c0c0c] p-4 rounded-2xl border border-white/5">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-white block text-sm">Full Address:</strong>
                  <p className="leading-relaxed text-gray-300">
                    {STORE_INFO.address}
                  </p>
                  <p className="text-blue-400 font-mono text-[11px] pt-1">
                    Landmark: {STORE_INFO.landmark}
                  </p>
                </div>
              </div>

              {/* Navigation Steps */}
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2 text-gray-300">
                  <Building2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Inside Hariniwas Complex:</strong> Take lift or main stairs to 2nd Floor, walk straight to Shop #207.</span>
                </div>
                <div className="flex items-start gap-2 text-gray-300">
                  <Car className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Parking:</strong> Dedicated basement and ground level two-wheeler & car parking available.</span>
                </div>
                <div className="flex items-start gap-2 text-gray-300">
                  <Clock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Hours:</strong> {STORE_INFO.timings}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={STORE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-transform active:scale-95"
                  id="open-google-maps-btn"
                >
                  <Navigation className="w-4 h-4" />
                  Open in Google Maps Navigation
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${STORE_INFO.phone}`}
                    className="py-2.5 px-3 rounded-full bg-[#1a1a1a] hover:bg-[#252525] text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-white/10 transition-colors"
                    id="loc-call-btn"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    Call Us
                  </a>

                  <a
                    href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hi%20Next%20Gen%20Computer,%20I%20am%20heading%20to%20your%20Hariniwas%20Complex%20shop.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow"
                    id="loc-wa-btn"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                </div>
              </div>

            </div>

            {/* Quick trust strip */}
            <div className="bg-[#0c0c0c] p-3.5 rounded-2xl border border-white/10 text-[11px] font-mono text-gray-400 flex items-center justify-between">
              <span className="flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                Authorized Repair Hub
              </span>
              <span>12+ Years at Hariniwas</span>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive View & Photo Preview */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full h-full min-h-[380px] rounded-3xl overflow-hidden border border-white/10 bg-[#111111] relative shadow-2xl">
              <iframe
                title="NEXT GEN COMPUTER Patna Google Map Location"
                src="https://maps.google.com/maps?q=NEXT%20GEN%20COMPUTER%20207%20Hariniwas%20Complex%20Dak%20Bunglow%20Patna&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Floating Overlay Badge on Map */}
              <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 shadow-xl max-w-xs text-xs text-gray-200 pointer-events-none hidden sm:block">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
                  NEXT GEN COMPUTER
                </div>
                <div className="text-[11px] font-mono text-gray-400 mt-0.5">
                  207, 2nd Floor, Hariniwas Complex, Dak Bunglow Rd, Patna
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
