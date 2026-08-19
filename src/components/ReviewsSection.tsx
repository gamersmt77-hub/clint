import React, { useState } from "react";
import { REVIEWS_DATA, FAQS, STORE_INFO } from "../data/mockData";
import { 
  Star, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare, 
  ExternalLink,
  Quote
} from "lucide-react";

export const ReviewsSection: React.FC = () => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-[#050505] text-[#F0F0F0] border-b border-white/10" id="reviews-faq-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Reviews Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            4.8 ★ Google Verified Customer Feedback
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Trusted by 18,000+ Patna Customers
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Read authentic reviews from students, professionals, and gamers across Fraser Road, Boring Road, Kankarbagh & Bailey Road.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {REVIEWS_DATA.map((rev) => (
            <div 
              key={rev.id}
              className="bg-[#111111] rounded-3xl border border-white/10 p-5 flex flex-col justify-between hover:border-blue-500/40 transition-colors shadow-lg relative"
              id={`review-card-${rev.id}`}
            >
              <div className="space-y-3">
                {/* Rating & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-gray-500">{rev.date}</span>
                </div>

                {/* Service Tag */}
                <div className="text-[10px] font-mono font-bold text-blue-400 bg-blue-950/40 px-2.5 py-0.5 rounded-full border border-blue-900/60 inline-block">
                  {rev.service}
                </div>

                {/* Review Text */}
                <p className="text-xs text-gray-300 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author & Verification */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-4">
                <div>
                  <div className="text-xs font-bold text-white">{rev.author}</div>
                  <div className="text-[10px] text-gray-400">{rev.location}</div>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-semibold bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-900">
                  <ShieldCheck className="w-3 h-3" />
                  Verified
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto pt-4">
          <div className="text-center space-y-2 mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Frequently Asked Questions (Patna Store)
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Clear answers regarding pricing, turnaround time, warranty, and location.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl bg-[#111111] border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-gray-100 hover:text-blue-400 transition-colors"
                    id={`faq-btn-${idx}`}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-blue-400 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs text-gray-300 leading-relaxed border-t border-white/5 bg-[#0c0c0c] animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
