import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  Wrench, 
  ShieldCheck, 
  Zap, 
  Star, 
  Cpu, 
  ArrowRight, 
  ChevronLeft,
  ChevronRight,
  Truck,
  CheckCircle2, 
  Laptop,
  Flame,
  MapPin,
  Clock,
  HardDrive,
  Gamepad2,
  Tag,
  Layers,
  ArrowUpRight
} from "lucide-react";
import { STORE_INFO, HERO_BANNERS, HARDWARE_CATEGORIES, BRAND_LOGOS } from "../data/mockData";

interface HeroProps {
  onOpenDiagnostic: (initialSymptom?: string) => void;
  onOpenPcBuilder: () => void;
  onOpenBooking: () => void;
  onOpenTracker: () => void;
  onSelectCategory: (cat: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenDiagnostic,
  onOpenPcBuilder,
  onOpenBooking,
  onOpenTracker,
  onSelectCategory,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide banner
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_BANNERS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_BANNERS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_BANNERS.length) % HERO_BANNERS.length);
  };

  const handleBannerAction = (action: string) => {
    if (action === "pc-builder") onOpenPcBuilder();
    else if (action === "refurbished") onSelectCategory("laptops");
    else if (action === "repair") onOpenDiagnostic();
    else onOpenBooking();
  };

  const quickSymptoms = [
    { label: "Dead / Won't Turn On", icon: "⚡" },
    { label: "Shattered / Flickering Screen", icon: "💻" },
    { label: "Slow Laptop? NVMe SSD Upgrade", icon: "🚀" },
    { label: "Liquid / Tea Spill Revival", icon: "🔬" },
    { label: "Custom RTX Gaming Rig", icon: "🎮" }
  ];

  return (
    <section className="bg-[#050505] text-[#F0F0F0] pt-4 pb-8 border-b border-white/10" id="hero-bento">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* 1. TOP CAROUSEL & SIDE WIDGETS (MD COMPUTERS SIGNATURE LAYOUT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Main Hero Slider (8 cols) */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-white/15 bg-[#0e0e0e] shadow-2xl group min-h-[360px] sm:min-h-[420px] flex flex-col justify-end">
            
            {/* Banner Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={HERO_BANNERS[currentSlide].image}
                alt={HERO_BANNERS[currentSlide].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform scale-105 group-hover:scale-100 transition-transform duration-700 filter brightness-[0.65]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
            </div>

            {/* Slider Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 flex items-center justify-center opacity-80 hover:opacity-100 transition-all active:scale-95"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 flex items-center justify-center opacity-80 hover:opacity-100 transition-all active:scale-95"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Banner Slide Content */}
            <div className="relative z-10 p-6 sm:p-8 space-y-3 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-600/90 text-white font-mono text-xs font-bold uppercase tracking-wider border border-blue-400/40 shadow-lg">
                  {HERO_BANNERS[currentSlide].badge}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur text-gray-300 font-mono text-xs border border-white/10">
                  {HERO_BANNERS[currentSlide].tag}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight drop-shadow-md">
                {HERO_BANNERS[currentSlide].title}
              </h1>

              <p className="text-xs sm:text-sm text-gray-300 max-w-xl leading-relaxed drop-shadow">
                {HERO_BANNERS[currentSlide].subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => handleBannerAction(HERO_BANNERS[currentSlide].ctaAction)}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide transition-all shadow-lg shadow-blue-600/30 active:scale-95 flex items-center gap-2"
                >
                  <span>{HERO_BANNERS[currentSlide].ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenDiagnostic()}
                  className="bg-black/60 hover:bg-black/90 text-gray-200 hover:text-white border border-white/20 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all backdrop-blur flex items-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span>Instant AI Diagnostic</span>
                </button>
              </div>
            </div>

            {/* Slide Pagination Dots */}
            <div className="absolute bottom-3 right-6 z-20 flex items-center gap-1.5">
              {HERO_BANNERS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all ${currentSlide === idx ? "w-6 bg-blue-500" : "w-2 bg-white/40 hover:bg-white/70"}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

          {/* Side Promotional Cards (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            {/* Card 1: Custom PC Builder Card (MD Computers signature) */}
            <div 
              onClick={onOpenPcBuilder}
              className="flex-1 bg-gradient-to-br from-blue-900/60 via-[#10192e] to-[#0c0c0c] border border-blue-500/30 hover:border-blue-400/60 rounded-3xl p-5 sm:p-6 flex flex-col justify-between group cursor-pointer shadow-xl transition-all hover:scale-[1.01]"
              id="hero-side-pc-builder"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-blue-400 tracking-wider">
                    MD COMPUTERS STYLE
                  </span>
                  <h3 className="text-xl font-black text-white mt-1 group-hover:text-blue-400 transition-colors">
                    CUSTOM PC BUILDER
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Select CPU, GPU, RAM with live wattage & instant Patna pricing.
                  </p>
                </div>
                <div className="w-9 h-9 rounded-2xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-300 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-400 font-bold">
                  ⚡ 100% Genuine Components
                </span>
                <span className="text-xs font-bold text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Launch Builder →
                </span>
              </div>
            </div>

            {/* Card 2: 30-Minute Fast Screen & Battery Express Lab */}
            <div className="flex-1 bg-[#111111] border border-white/10 hover:border-white/20 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-xl transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold">
                      IN-HOUSE REPAIR LAB
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-white mt-1">
                    30-Min Screen & Battery Swap
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Shop 207, Hariniwas Complex. Laser BGA micro-soldering & original display panels.
                  </p>
                </div>
                <div className="w-9 h-9 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <Wrench className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-gray-300 font-mono">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>90-Day Lab Warranty</span>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="px-3 py-1.5 rounded-full bg-white text-black hover:bg-gray-200 text-xs font-bold uppercase transition-all"
                >
                  Book Slot
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* 2. MD COMPUTERS 4-POINT TRUST BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-[#0d0d0d] border border-white/10 rounded-2xl p-3.5 sm:p-4 shadow-lg">
          
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Same-Day Patna Delivery</p>
              <p className="text-[10px] text-gray-400 font-mono">Or direct pickup at Shop 207</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">90-Day Testing Warranty</p>
              <p className="text-[10px] text-gray-400 font-mono">100% genuine brand parts</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Chip-Level BGA Lab</p>
              <p className="text-[10px] text-gray-400 font-mono">Save 70% vs official centers</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
              <Star className="w-5 h-5 fill-amber-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">4.8★ Google Rating</p>
              <p className="text-[10px] text-gray-400 font-mono">18,500+ happy Patna customers</p>
            </div>
          </div>

        </div>

        {/* 3. HARDWARE CATEGORY EXPLORER GRID (MD COMPUTERS STYLE) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                EXPLORE HARDWARE & LAPTOP CATEGORIES
              </h2>
              <p className="text-xs text-gray-400">
                Browse our verified inventory at Hariniwas Complex, Patna
              </p>
            </div>
            <button
              onClick={() => onSelectCategory("all")}
              className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 font-mono"
            >
              View Full Catalog →
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {HARDWARE_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id === "refurbished-laptops" ? "laptops" : cat.id === "processors" || cat.id === "graphics-cards" || cat.id === "storage-ram" ? "components" : cat.id)}
                className="bg-[#111111] hover:bg-[#181818] border border-white/10 hover:border-blue-500/40 rounded-2xl p-3 flex flex-col items-center text-center cursor-pointer group transition-all hover:-translate-y-1 shadow-md"
                id={`cat-card-${cat.id}`}
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden mb-2 relative bg-black/40 border border-white/5">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                  {cat.name}
                </h4>
                <span className="text-[10px] text-gray-400 font-mono mt-0.5">
                  {cat.itemCount}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. INSTANT REPAIR SYMPTOM STRIP */}
        <div className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-inner">
          <div className="flex items-center gap-2 flex-shrink-0">
            <Flame className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Instant Diagnosis Shortcut:
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {quickSymptoms.map((s, idx) => (
              <button
                key={idx}
                onClick={() => onOpenDiagnostic(s.label)}
                className="px-3 py-1.5 rounded-full bg-[#161616] hover:bg-blue-600 hover:text-white border border-white/10 text-xs text-gray-300 transition-all flex items-center gap-1.5 group"
                id={`hero-symptom-${idx}`}
              >
                <span>{s.icon}</span>
                <span>{s.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 5. BRAND MARQUEE STRIP (MD COMPUTERS STYLE) */}
        <div className="pt-2 border-t border-white/5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
              AUTHORIZED HARDWARE & SERVICE BRANDS IN PATNA:
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 opacity-80 hover:opacity-100 transition-opacity">
            {BRAND_LOGOS.map((brand, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-lg bg-[#111111] border border-white/10 text-xs font-mono font-bold text-gray-300 hover:text-white hover:border-blue-500/40 transition-colors"
              >
                {brand.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
