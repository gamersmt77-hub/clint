import React, { useState } from "react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Sparkles, 
  Wrench, 
  Cpu, 
  Search, 
  Menu, 
  X, 
  Laptop, 
  ShieldCheck, 
  MessageSquare,
  Zap,
  Layers,
  Flame,
  ChevronDown,
  HardDrive,
  Gamepad2,
  Tag
} from "lucide-react";
import { STORE_INFO, HARDWARE_CATEGORIES } from "../data/mockData";

interface HeaderProps {
  onOpenDiagnostic: (initialSymptom?: string) => void;
  onOpenTracker: () => void;
  onOpenBooking: () => void;
  onOpenPcBuilder: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenDiagnostic,
  onOpenTracker,
  onOpenBooking,
  onOpenPcBuilder,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCategorySelect = (catId: string) => {
    setSelectedCategory(catId);
    setCategoryDropdownOpen(false);
    scrollTo("products-catalog-section");
  };

  return (
    <header className="sticky top-0 z-40 bg-[#080808]/95 backdrop-blur-md border-b border-white/10 text-[#F0F0F0] shadow-2xl" id="main-header">
      
      {/* 1. TOP ANNOUNCEMENT & HELPLINE BAR (MD Computers Style) */}
      <div className="bg-[#030303] text-xs py-1.5 px-4 text-gray-400 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-mono text-[10px] font-bold border border-blue-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping mr-1.5"></span>
              PATNA TECH SUPERSTORE • SHOP 207 HARINIWAS
            </span>
            <div className="hidden lg:flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
              <span className="truncate">2nd Floor, Hariniwas Complex, Dak Bunglow Rd, Patna</span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 ml-auto text-xs">
            <div className="hidden md:flex items-center gap-1.5 text-gray-400 font-mono text-[11px]">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>10:30 AM - 8:30 PM (MON-SAT)</span>
            </div>

            <button
              onClick={onOpenTracker}
              className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-medium transition-colors"
              id="topbar-track-repair"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Track Repair Ticket</span>
            </button>

            <a 
              href={`tel:${STORE_INFO.phone}`} 
              className="flex items-center gap-1.5 font-bold text-white hover:text-blue-400 transition-colors bg-blue-600/20 px-2.5 py-0.5 rounded-full border border-blue-500/30"
              id="topbar-call-btn"
            >
              <Phone className="w-3 h-3 text-blue-400" />
              <span className="font-mono">{STORE_INFO.formattedPhone}</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. MAIN HEADER BAR (Logo, Search, CTAs) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-3 lg:gap-6">
          
          {/* Logo & Brand Identity */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 cursor-pointer group select-none flex-shrink-0"
            id="brand-logo"
          >
            <div className="w-11 h-11 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-xl flex items-center justify-center font-black text-2xl text-white shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-transform border border-blue-400/40">
              N
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-xl tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  NEXT GEN
                </span>
                <span className="font-black text-xl tracking-tight text-blue-500">
                  COMPUTER
                </span>
              </div>
              <p className="text-[10px] font-mono text-gray-400 tracking-wider uppercase -mt-0.5 flex items-center gap-1">
                <span>PC STORE & CHIP-LEVEL LAB</span>
                <span className="text-blue-500">•</span>
                <span>PATNA</span>
              </p>
            </div>
          </div>

          {/* Search Bar with Category Dropdown (MD Computers Signature) */}
          <div className="hidden md:flex flex-1 max-w-xl items-center relative">
            <div className="w-full flex items-center bg-[#111111] border border-white/15 rounded-full overflow-hidden focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all shadow-inner">
              
              {/* Category Selector Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                  className="bg-[#181818] hover:bg-[#202020] text-gray-300 text-xs font-medium px-3.5 py-2.5 flex items-center gap-1.5 border-r border-white/10 transition-colors whitespace-nowrap"
                  id="header-cat-dropdown-btn"
                >
                  <span className="max-w-[110px] truncate capitalize">
                    {selectedCategory === "all" ? "All Categories" : selectedCategory}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </button>

                {categoryDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-56 bg-[#141414] border border-white/10 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <button
                      onClick={() => handleCategorySelect("all")}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors ${selectedCategory === "all" ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-white/5"}`}
                    >
                      ⚡ All Products & Deals
                    </button>
                    <button
                      onClick={() => handleCategorySelect("laptops")}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors ${selectedCategory === "laptops" ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-white/5"}`}
                    >
                      💻 Refurbished Laptops (Grade A+)
                    </button>
                    <button
                      onClick={() => handleCategorySelect("gaming-pc")}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors ${selectedCategory === "gaming-pc" ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-white/5"}`}
                    >
                      🎮 Custom Gaming PCs & Rigs
                    </button>
                    <button
                      onClick={() => handleCategorySelect("components")}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors ${selectedCategory === "components" ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-white/5"}`}
                    >
                      ⚡ NVMe SSDs, RAM & Parts
                    </button>
                    <button
                      onClick={() => handleCategorySelect("repair")}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors ${selectedCategory === "repair" ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-white/5"}`}
                    >
                      🔧 Chip-Level Repair Packages
                    </button>
                  </div>
                )}
              </div>

              {/* Search Input Field */}
              <input
                type="text"
                placeholder="Search CPUs, RTX 4060, Refurbished ThinkPad, Screen repair..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent px-3.5 py-2 text-xs sm:text-sm text-white placeholder:text-gray-500 focus:outline-none"
                id="header-search-input"
              />

              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="p-1.5 text-gray-400 hover:text-white mr-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}

              <button
                onClick={() => scrollTo("products-catalog-section")}
                className="bg-blue-600 hover:bg-blue-500 text-white p-2.5 mr-1 rounded-full transition-colors flex items-center justify-center flex-shrink-0"
                id="header-search-submit"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Action CTAs: PC Builder & AI Diagnostic */}
          <div className="flex items-center gap-2.5">
            
            {/* MD COMPUTERS SIGNATURE: Build Your PC Button */}
            <button
              onClick={onOpenPcBuilder}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/25 border border-blue-400/30 transition-all hover:scale-105 active:scale-95"
              id="header-pc-builder-btn"
            >
              <Cpu className="w-4 h-4 animate-pulse" />
              <span>PC Builder</span>
            </button>

            {/* AI Diagnostics Tool */}
            <button
              onClick={() => onOpenDiagnostic()}
              className="hidden lg:flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#161616] hover:bg-[#222] border border-blue-500/30 text-blue-400 text-xs font-semibold transition-all hover:border-blue-400"
              id="header-ai-estimate-btn"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>AI Estimate</span>
            </button>

            {/* WhatsApp Quick Link */}
            <a 
              href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hi%20Next%20Gen%20Computer%20Patna,%20I%20want%20to%20inquire%20about%20PC%20parts/laptop%20repair.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-full bg-[#12241b] hover:bg-[#183327] text-emerald-400 border border-emerald-500/30 text-xs font-bold flex items-center gap-1.5 transition-all"
              id="header-wa-btn"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#141414] border border-white/10 text-gray-200 hover:text-white lg:hidden"
              aria-label="Toggle menu"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>

        {/* Mobile Search Bar */}
        <div className="mt-2.5 md:hidden">
          <div className="flex items-center bg-[#111111] border border-white/15 rounded-full px-3 py-1.5 shadow-inner">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search CPUs, GPUs, Laptops, Repairs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-xs text-white placeholder:text-gray-500 focus:outline-none"
              id="mobile-search-input"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="p-1 text-gray-400">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 3. MEGA CATEGORY NAVIGATION STRIP (MD Computers Style) */}
      <div className="hidden lg:block bg-[#0c0c0c] border-t border-white/10 px-4 sm:px-6 lg:px-8 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-semibold text-gray-300">
          
          <div className="flex items-center gap-1">
            <button
              onClick={() => handleCategorySelect("all")}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${selectedCategory === "all" ? "bg-blue-600 text-white" : "hover:text-white hover:bg-white/5"}`}
            >
              <Tag className="w-3.5 h-3.5 text-blue-400" />
              <span>⚡ All Deals</span>
            </button>

            <button
              onClick={() => handleCategorySelect("laptops")}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${selectedCategory === "laptops" ? "bg-blue-600 text-white" : "hover:text-white hover:bg-white/5"}`}
            >
              <Laptop className="w-3.5 h-3.5 text-blue-400" />
              <span>💻 Refurbished Laptops (Grade A+)</span>
            </button>

            <button
              onClick={() => handleCategorySelect("gaming-pc")}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${selectedCategory === "gaming-pc" ? "bg-blue-600 text-white" : "hover:text-white hover:bg-white/5"}`}
            >
              <Gamepad2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>🎮 Custom Gaming Rigs</span>
            </button>

            <button
              onClick={() => handleCategorySelect("components")}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${selectedCategory === "components" ? "bg-blue-600 text-white" : "hover:text-white hover:bg-white/5"}`}
            >
              <HardDrive className="w-3.5 h-3.5 text-cyan-400" />
              <span>⚡ NVMe SSDs & RAM</span>
            </button>

            <button
              onClick={() => scrollTo("services-section")}
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1.5"
            >
              <Wrench className="w-3.5 h-3.5 text-amber-400" />
              <span>🔧 Chip-Level Repair Lab</span>
            </button>

            <button
              onClick={() => scrollTo("before-after-section")}
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Restoration Proof</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollTo("location-section")}
              className="px-3 py-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1"
            >
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Store Location (Hariniwas)</span>
            </button>
            <button
              onClick={onOpenBooking}
              className="bg-white text-black hover:bg-gray-200 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase transition-all shadow"
            >
              Book Service
            </button>
          </div>

        </div>
      </div>

      {/* 4. MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0c0c] border-t border-white/10 p-4 space-y-3 animate-in fade-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenPcBuilder(); }}
              className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow"
            >
              <Cpu className="w-4 h-4" />
              Custom PC Builder
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDiagnostic(); }}
              className="p-3 rounded-xl bg-blue-950/60 border border-blue-500/40 text-blue-300 font-bold text-xs flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              AI Cost Estimator
            </button>
          </div>

          <div className="space-y-1 pt-1 border-t border-white/5">
            <button
              onClick={() => { handleCategorySelect("all"); setMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 text-gray-300 text-sm font-medium flex items-center justify-between"
            >
              <span>⚡ Hot Store Deals</span>
              <Tag className="w-4 h-4 text-blue-400" />
            </button>
            <button
              onClick={() => { handleCategorySelect("laptops"); setMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 text-gray-300 text-sm font-medium flex items-center justify-between"
            >
              <span>💻 Refurbished Laptops (Grade A+)</span>
              <Laptop className="w-4 h-4 text-gray-400" />
            </button>
            <button
              onClick={() => { handleCategorySelect("gaming-pc"); setMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 text-gray-300 text-sm font-medium flex items-center justify-between"
            >
              <span>🎮 Pre-Built Gaming PCs</span>
              <Gamepad2 className="w-4 h-4 text-indigo-400" />
            </button>
            <button
              onClick={() => { scrollTo("services-section"); setMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 text-gray-300 text-sm font-medium flex items-center justify-between"
            >
              <span>🔧 Chip-Level Motherboard Repair</span>
              <Wrench className="w-4 h-4 text-amber-400" />
            </button>
            <button
              onClick={() => { onOpenTracker(); setMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 text-gray-300 text-sm font-medium flex items-center justify-between"
            >
              <span>🔍 Track Live Repair Ticket</span>
              <Search className="w-4 h-4 text-amber-400" />
            </button>
            <button
              onClick={() => { scrollTo("location-section"); setMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 text-gray-300 text-sm font-medium flex items-center justify-between"
            >
              <span>📍 Hariniwas Complex Store & Map</span>
              <MapPin className="w-4 h-4 text-blue-400" />
            </button>
          </div>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Shop
            </a>
            <button
              onClick={() => { onOpenBooking(); setMobileMenuOpen(false); }}
              className="py-2.5 px-3 rounded-xl bg-white hover:bg-gray-200 text-black font-bold text-xs flex items-center justify-center gap-1.5 shadow"
            >
              <Wrench className="w-3.5 h-3.5" />
              Book Service
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
