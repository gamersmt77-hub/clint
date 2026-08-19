import React, { useState } from "react";
import { ALL_STORE_PRODUCTS, STORE_INFO, StoreProduct } from "../data/mockData";
import { 
  Laptop, 
  ShieldCheck, 
  Check, 
  Sparkles, 
  MessageSquare, 
  Tag, 
  Cpu, 
  Battery, 
  HardDrive, 
  Gamepad2, 
  Zap, 
  Star, 
  ArrowRight, 
  Filter, 
  CheckCircle2 
} from "lucide-react";
import { ProductItem } from "../types";

interface RefurbishedLaptopsProps {
  onInquireProduct?: (product: ProductItem) => void;
  onOpenPcBuilder?: () => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  searchQuery: string;
}

export const RefurbishedLaptops: React.FC<RefurbishedLaptopsProps> = ({
  onInquireProduct,
  onOpenPcBuilder,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
}) => {
  const filterTabs = [
    { id: "all", label: "⚡ All Deals", icon: Tag },
    { id: "laptops", label: "💻 Refurbished Laptops", icon: Laptop },
    { id: "gaming-pc", label: "🎮 Custom Gaming PCs", icon: Gamepad2 },
    { id: "components", label: "🚀 NVMe SSDs & RAM", icon: HardDrive },
  ];

  // Filtering products based on category and search query
  const filteredProducts = ALL_STORE_PRODUCTS.filter((prod) => {
    const matchesCategory = selectedCategory === "all" || prod.category === selectedCategory;
    const specsList = prod.specs || [];
    const matchesSearch = !searchQuery.trim() || 
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      specsList.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleWhatsAppBuy = (product: StoreProduct) => {
    const msg = encodeURIComponent(
      `*MD Computers Style Order & Availability Inquiry*\n` +
      `*Product:* ${product.name} (${product.brand})\n` +
      `*Offer Price:* ${product.offerPrice} (MRP: ${product.mrp} - ${product.discountPercent})\n` +
      `*Stock Status:* ${product.stockStatus} at Hariniwas Complex\n` +
      `*Warranty:* ${product.warranty}\n\n` +
      `_Hi Next Gen Computer, I want to purchase/inspect this product at Shop 207, Hariniwas Complex, Patna._`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <section className="py-12 sm:py-16 bg-[#070707] text-[#F0F0F0] border-b border-white/10" id="products-catalog-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header (MD Computers Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider">
              <Tag className="w-4 h-4 text-blue-400" />
              MD Computers Style Hardware Catalog • In Stock at Patna Store
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Featured Tech Deals & Certified Laptops
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 max-w-2xl">
              100% Genuine brand components, factory-tested Grade-A refurbished ThinkPads, MacBooks & customized gaming desktop battlestations with official warranty.
            </p>
          </div>

          {/* Quick Stats or PC Builder trigger */}
          {onOpenPcBuilder && (
            <button
              onClick={onOpenPcBuilder}
              className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-blue-600/30 self-start md:self-auto transition-all"
            >
              <Cpu className="w-4 h-4" />
              <span>Need Custom Config? Open PC Builder</span>
            </button>
          )}
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-[1.02]"
                      : "bg-[#121212] hover:bg-[#1c1c1c] text-gray-300 border border-white/10"
                  }`}
                  id={`filter-tab-${tab.id}`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-blue-400"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {searchQuery && (
            <div className="text-xs font-mono text-gray-400 flex items-center gap-2 bg-[#141414] px-3 py-1.5 rounded-full border border-white/10">
              <span>Filtering for: <strong className="text-blue-400">"{searchQuery}"</strong></span>
              <button 
                onClick={() => setSelectedCategory("all")}
                className="text-gray-400 hover:text-white underline ml-1"
              >
                Clear
              </button>
            </div>
          )}
        </div>

        {/* Product Cards Grid (MD Computers Style) */}
        {filteredProducts.length === 0 ? (
          <div className="bg-[#111111] border border-white/10 rounded-3xl p-12 text-center space-y-4">
            <Laptop className="w-12 h-12 text-gray-600 mx-auto" />
            <h3 className="text-lg font-bold text-white">No products found matching "{searchQuery}"</h3>
            <p className="text-xs text-gray-400 max-w-md mx-auto">
              We stock hundreds of CPUs, GPUs, motherboards and laptops at Shop 207, Hariniwas Complex. Contact our Patna store team on WhatsApp for instant stock lookup!
            </p>
            <button
              onClick={() => setSelectedCategory("all")}
              className="px-5 py-2 rounded-full bg-blue-600 text-white font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredProducts.map((prod) => (
              <div 
                key={prod.id}
                className="bg-[#111111] rounded-3xl border border-white/10 hover:border-blue-500/50 flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950/40 hover:-translate-y-1"
                id={`product-card-${prod.id}`}
              >
                <div>
                  {/* Image Showcase with Discount Pill & Stock */}
                  <div className="relative aspect-[4/3] bg-[#090909] overflow-hidden border-b border-white/10">
                    <img 
                      src={prod.image} 
                      alt={prod.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Discount Badge */}
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-mono font-black uppercase px-2.5 py-0.5 rounded-full shadow-lg border border-red-400/40">
                      {prod.discountPercent}
                    </div>

                    {/* Quality / Recommendation Badge */}
                    {prod.badge && (
                      <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] text-gray-200 border border-white/15 font-mono max-w-[85%] truncate">
                        {prod.badge}
                      </div>
                    )}

                    {/* Star Rating */}
                    <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] text-amber-300 border border-white/10 font-mono flex items-center gap-1 font-bold">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span>{prod.rating}</span>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-4 sm:p-5 space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono uppercase text-gray-400 mb-1">
                        <span className="font-bold text-blue-400">{prod.brand}</span>
                        <span className="text-emerald-400 font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          {prod.stockStatus}
                        </span>
                      </div>
                      
                      <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors leading-snug line-clamp-2">
                        {prod.name}
                      </h3>
                    </div>

                    {/* Key Technical Specs */}
                    <div className="space-y-1 bg-[#090909] p-2.5 rounded-2xl border border-white/5">
                      {(prod.specs || []).slice(0, 3).map((spec, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-gray-300">
                          <Check className="w-3 h-3 text-blue-400 flex-shrink-0" />
                          <span className="truncate">{spec}</span>
                        </div>
                      ))}
                    </div>

                    {/* Warranty Tag */}
                    <div className="text-[10px] font-mono text-gray-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span className="truncate">{prod.warranty}</span>
                    </div>
                  </div>
                </div>

                {/* Pricing & CTA Controls */}
                <div className="p-4 sm:p-5 pt-0 space-y-3">
                  <div className="pt-3 border-t border-white/10 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] text-gray-500 line-through mr-1.5 font-mono">{prod.mrp}</span>
                      <span className="text-lg sm:text-xl font-black text-white font-mono">{prod.offerPrice}</span>
                    </div>
                    <span className="text-[10px] font-mono text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-800">
                      Patna Store Offer
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleWhatsAppBuy(prod)}
                      className="w-full py-2 px-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1 transition-all shadow active:scale-95"
                      id={`btn-wa-order-${prod.id}`}
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </button>

                    <button
                      onClick={() => {
                        const msg = encodeURIComponent(
                          `Hi Next Gen Computer, I want to reserve ${prod.name} (${prod.offerPrice}) for testing at Hariniwas Complex Shop 207.`
                        );
                        window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${msg}`, "_blank");
                      }}
                      className="w-full py-2 px-2.5 rounded-xl bg-[#1c1c1c] hover:bg-blue-600 text-gray-200 hover:text-white font-bold text-xs flex items-center justify-center gap-1 border border-white/10 transition-all active:scale-95"
                      id={`btn-visit-store-${prod.id}`}
                    >
                      <Laptop className="w-3.5 h-3.5 text-blue-400" />
                      <span>Reserve Demo</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
