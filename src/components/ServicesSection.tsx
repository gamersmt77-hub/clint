import React, { useState } from "react";
import { 
  SERVICES_DATA, 
  STORE_INFO 
} from "../data/mockData";
import { 
  Wrench, 
  Cpu, 
  Monitor, 
  Zap, 
  BatteryCharging, 
  Flame, 
  Database, 
  ShieldCheck, 
  Clock, 
  Check, 
  Sparkles, 
  ArrowRight,
  Phone
} from "lucide-react";
import { ServiceItem } from "../types";

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenDiagnostic: (symptom?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenDiagnostic,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Laptop Repair", "PC Assembly", "Upgrades", "Specialized"];

  const filteredServices = selectedCategory === "All"
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === selectedCategory);

  const getIcon = (name: string) => {
    switch (name) {
      case "Cpu": return <Cpu className="w-5 h-5" />;
      case "Monitor": return <Monitor className="w-5 h-5" />;
      case "Zap": return <Zap className="w-5 h-5" />;
      case "BatteryCharging": return <BatteryCharging className="w-5 h-5" />;
      case "Flame": return <Flame className="w-5 h-5" />;
      case "Database": return <Database className="w-5 h-5" />;
      default: return <Wrench className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-16 bg-[#050505] text-[#F0F0F0] border-b border-white/10" id="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            Chip-Level Hardware & IT Solutions
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Professional Laptop & Computer Services in Patna
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            From dead motherboard IC micro-soldering to 30-minute display replacement and custom liquid-cooled PC building. Transparent upfront pricing with 90-day warranty.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-blue-400/40 scale-105"
                    : "bg-[#111] text-gray-400 hover:text-white hover:bg-[#1a1a1a] border border-white/10"
                }`}
                id={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              className="group bg-[#111111] rounded-3xl border border-white/10 hover:border-blue-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950/30 relative overflow-hidden"
              id={`service-card-${service.id}`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-[10px] font-mono font-black uppercase px-3 py-1 rounded-bl-2xl text-white shadow">
                  Most Requested
                </div>
              )}

              <div>
                {/* Header with Icon & Category */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-blue-400 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                    {getIcon(service.iconName)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider">
                      {service.category}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-2 mb-6 bg-[#0c0c0c] p-3 rounded-2xl border border-white/5">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer with Price, Time & CTA */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-gray-400">Starting From</span>
                    <div className="text-base font-black text-blue-400 font-mono">{service.startingPrice}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-gray-400 flex items-center justify-end gap-1">
                      <Clock className="w-3 h-3 text-blue-400" />
                      Turnaround
                    </span>
                    <div className="text-xs font-mono font-bold text-gray-200">{service.estimatedTime}</div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/20 transition-all active:scale-95"
                    id={`book-service-${service.id}`}
                  >
                    <Wrench className="w-3.5 h-3.5" />
                    Book Service
                  </button>

                  <button
                    onClick={() => onOpenDiagnostic(service.title)}
                    className="p-2.5 rounded-full bg-[#1a1a1a] hover:bg-[#252525] text-blue-400 hover:text-blue-300 border border-white/10 transition-colors"
                    title="Estimate with AI"
                    id={`ai-estimate-${service.id}`}
                  >
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-[10px] font-mono text-gray-400 text-center flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>{service.warranty}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Emergency Help Bento Banner */}
        <div className="mt-12 rounded-3xl bg-gradient-to-br from-blue-900/40 via-[#0e1629] to-[#111111] border border-blue-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono font-bold border border-blue-500/20">
              ⚡ INSTANT HELP AT DAK BUNGLOW
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Not sure what is wrong with your laptop or PC?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
              Bring your device to Shop 207, 2nd Floor, Hariniwas Complex, Dak Bunglow. Free counter diagnostic check & instant repair advice.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-transform active:scale-95"
              id="emergency-call-btn"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              Call: {STORE_INFO.phone}
            </a>

            <button
              onClick={() => onOpenDiagnostic()}
              className="px-5 py-3 rounded-full bg-[#161616] hover:bg-[#222] text-white font-bold text-xs sm:text-sm border border-white/10 flex items-center gap-2 transition-colors"
              id="emergency-ai-check-btn"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              Run AI Diagnostic
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
