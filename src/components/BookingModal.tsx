import React, { useState, useEffect } from "react";
import { 
  X, 
  Wrench, 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  Calendar, 
  Sparkles, 
  ShieldCheck, 
  Zap,
  Clock
} from "lucide-react";
import confetti from "canvas-confetti";
import { STORE_INFO } from "../data/mockData";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialDevice?: string;
  initialIssue?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = "General Repair / Diagnostic Checkup",
  initialDevice = "",
  initialIssue = "",
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState(initialService);
  const [deviceModel, setDeviceModel] = useState(initialDevice);
  const [issueDescription, setIssueDescription] = useState(initialIssue);
  const [urgent, setUrgent] = useState(true);

  const [loading, setLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (initialService) setServiceType(initialService);
    if (initialDevice) setDeviceModel(initialDevice);
    if (initialIssue) setIssueDescription(initialIssue);
  }, [initialService, initialDevice, initialIssue]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMsg("Please enter your Name and a valid 10-digit Phone Number.");
      return;
    }
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await fetch("/api/book-service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          serviceType,
          deviceModel,
          issueDescription,
          urgent
        })
      });
      const data = await res.json();
      if (data.success) {
        setBookingSuccess(data);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        setErrorMsg(data.error || "Failed to book. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Network issue. Please call us directly at 09835291073.");
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppForward = () => {
    if (bookingSuccess?.whatsAppUrl) {
      window.open(bookingSuccess.whatsAppUrl, "_blank");
    } else {
      const msg = encodeURIComponent(
        `*Service Appointment Request*\n` +
        `*Name:* ${name}\n` +
        `*Phone:* ${phone}\n` +
        `*Device:* ${deviceModel || "Laptop"}\n` +
        `*Service:* ${serviceType}\n` +
        `*Issue:* ${issueDescription}\n\n` +
        `_Hi Next Gen Computer, I booked this appointment via your website._`
      );
      window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${msg}`, "_blank");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto" id="booking-service-modal">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8 text-slate-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-300">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                Book Priority Repair & Service
              </h2>
              <p className="text-xs text-blue-200/80">
                Shop 207, Hariniwas Complex, Dak Bunglow Road, Patna
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            id="close-booking-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          
          {!bookingSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 placeholder:text-slate-500"
                    id="book-name-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9835291073"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 placeholder:text-slate-500"
                    id="book-phone-input"
                  />
                </div>
              </div>

              {/* Service Type Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Required Service
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                  id="book-service-select"
                >
                  <option value="Chip-Level Motherboard Repair">Chip-Level Motherboard Repair (Dead / No Power)</option>
                  <option value="Display / Screen Replacement">Display / Screen Replacement (144Hz / FHD IPS)</option>
                  <option value="SSD & RAM Superfast Upgrade">SSD & RAM Speed Upgrade (NVMe M.2)</option>
                  <option value="Custom Gaming PC Build Assembly">Custom Gaming / Editing PC Build Assembly</option>
                  <option value="Hinge Fabrication & Body Repair">Laptop Hinge Fabrication & Body Repair</option>
                  <option value="Liquid Spill & Water Damage Recovery">Liquid / Water Spill Ultrasonic Recovery</option>
                  <option value="Original Battery & Charger Replacement">Original Battery / Charger Replacement</option>
                  <option value="Refurbished Laptop In-Store Demo">Refurbished Laptop In-Store Testing</option>
                </select>
              </div>

              {/* Device Brand & Model */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Device Brand / Model
                </label>
                <input
                  type="text"
                  placeholder="e.g. Dell Inspiron 15, HP Pavilion, Lenovo Legion, MacBook Air"
                  value={deviceModel}
                  onChange={(e) => setDeviceModel(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 placeholder:text-slate-500"
                  id="book-device-input"
                />
              </div>

              {/* Issue Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Describe Issue / Special Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Laptop not turning on after rain or need 1TB SSD upgrade..."
                  value={issueDescription}
                  onChange={(e) => setIssueDescription(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-sm text-white focus:outline-none focus:border-blue-500 placeholder:text-slate-500"
                  id="book-issue-input"
                />
              </div>

              {/* Express Same-Day Priority Toggle */}
              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <div>
                    <div className="text-xs font-bold text-white">Same-Day Express Repair Slot</div>
                    <div className="text-[11px] text-slate-400">Technician will inspect device on priority counter</div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={urgent}
                  onChange={(e) => setUrgent(e.target.checked)}
                  className="w-4 h-4 text-blue-500 rounded focus:ring-0 cursor-pointer"
                  id="book-urgent-toggle"
                />
              </div>

              {errorMsg && (
                <div className="p-2.5 rounded-xl bg-red-950/60 border border-red-800 text-red-300 text-xs">
                  {errorMsg}
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-transform active:scale-95 disabled:opacity-50"
                id="book-submit-btn"
              >
                {loading ? "Registering Service Ticket..." : "Confirm Booking & Receive Ticket ID"}
              </button>

            </form>
          ) : (
            /* Booking Success Screen */
            <div className="space-y-4 text-center animate-in fade-in zoom-in-95 duration-200 py-2">
              
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-black text-white">
                  Booking Confirmed Successfully!
                </h3>
                <p className="text-xs text-slate-300">
                  Your Priority Repair Ticket has been registered in our Patna Hariniwas Lab.
                </p>
              </div>

              {/* Ticket details pill */}
              <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700 text-left space-y-2">
                <div className="flex justify-between items-center pb-2 border-b border-slate-700">
                  <span className="text-xs text-slate-400">Ticket Reference:</span>
                  <span className="text-sm font-mono font-black text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800">
                    {bookingSuccess.bookingId}
                  </span>
                </div>
                <div className="text-xs space-y-1 text-slate-300">
                  <div><strong>Customer:</strong> {name} ({phone})</div>
                  <div><strong>Service:</strong> {serviceType}</div>
                  <div><strong>Device:</strong> {deviceModel || "Standard Laptop"}</div>
                </div>
              </div>

              {/* Direct WhatsApp Forward Button */}
              <button
                onClick={handleWhatsAppForward}
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-transform active:scale-95"
                id="forward-whatsapp-btn"
              >
                <MessageSquare className="w-4 h-4" />
                Send Ticket Details to WhatsApp (09835291073)
              </button>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-colors"
                id="done-booking-btn"
              >
                Close & Return to Website
              </button>

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-slate-950 p-3 px-6 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <span>📍 Hariniwas Complex, 2nd Floor, Patna</span>
          <span className="text-emerald-400 font-semibold">Free Inspection Counter</span>
        </div>

      </div>
    </div>
  );
};
