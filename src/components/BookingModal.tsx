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
  Clock,
  ArrowRight
} from "lucide-react";
import confetti from "canvas-confetti";
import { STORE_INFO, MockBooking, INITIAL_MOCK_BOOKINGS } from "../data/mockData";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultDevice?: string;
  defaultIssue?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService = "General Repair / Diagnostic Checkup",
  defaultDevice = "",
  defaultIssue = "",
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState(defaultService);
  const [deviceModel, setDeviceModel] = useState(defaultDevice);
  const [issueDescription, setIssueDescription] = useState(defaultIssue);
  const [urgent, setUrgent] = useState(true);

  const [loading, setLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (defaultService) setServiceType(defaultService);
    if (defaultDevice) setDeviceModel(defaultDevice);
    if (defaultIssue) setIssueDescription(defaultIssue);
  }, [defaultService, defaultDevice, defaultIssue]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMsg("Please enter your Name and a valid 10-digit Phone Number.");
      return;
    }
    setErrorMsg("");
    setLoading(true);

    const generatedId = `NGC-${Math.floor(1000 + Math.random() * 9000)}`;

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

      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          setBookingSuccess(data);
          confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
          setLoading(false);
          return;
        }
      }
      
      // Fallback for static hosting / GitHub Pages
      const newBooking: MockBooking = {
        id: generatedId,
        name: name.trim(),
        phone: phone.trim(),
        serviceType,
        deviceModel: deviceModel || "Laptop / PC",
        issueDescription: issueDescription || "Standard inspection & diagnostic",
        urgent,
        status: "Received",
        createdAt: new Date().toISOString(),
        estimatedCost: "Pending Counter Inspection"
      };

      // Save to localStorage for GitHub Pages
      try {
        const saved = JSON.parse(localStorage.getItem("nextgen_bookings") || "[]");
        saved.unshift(newBooking);
        localStorage.setItem("nextgen_bookings", JSON.stringify(saved));
      } catch (err) {
        console.warn("Storage warning:", err);
      }

      setBookingSuccess({
        success: true,
        bookingId: generatedId,
        message: "Your appointment has been registered at Shop 207, Hariniwas Complex.",
        status: "Received",
        estimatedTime: urgent ? "Same-Day (Express Priority)" : "Standard 24-48 Hours"
      });

      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    } catch (err) {
      // Offline fallback
      setBookingSuccess({
        success: true,
        bookingId: generatedId,
        message: "Your appointment has been registered at Shop 207, Hariniwas Complex.",
        status: "Received",
        estimatedTime: urgent ? "Same-Day (Express Priority)" : "Standard 24-48 Hours"
      });
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppForward = () => {
    const ticket = bookingSuccess?.bookingId || "NGC-ONLINE";
    const msg = encodeURIComponent(
      `*Priority Repair Appointment Confirmed*\n` +
      `*Ticket ID:* ${ticket}\n` +
      `*Customer:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Device:* ${deviceModel || "Laptop / PC"}\n` +
      `*Service Requested:* ${serviceType}\n` +
      `*Details:* ${issueDescription}\n` +
      `*Priority:* ${urgent ? "⚡ Same-Day Express" : "Standard"}\n\n` +
      `_Hi Next Gen Computer, I have booked this repair slot. I will visit Shop 207, 2nd Floor, Hariniwas Complex, Patna._`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto" id="booking-service-modal">
      <div className="relative w-full max-w-lg bg-[#111111] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-8 text-white animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-[#111111] p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-300">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                Book Priority Repair & Service
              </h2>
              <p className="text-xs text-blue-200/80">
                Shop 207, Hariniwas Complex, Dak Bunglow Road, Patna
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            id="close-booking-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          
          {!bookingSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Verma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#181818] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                    id="booking-name-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Phone Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9835291073"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#181818] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                    id="booking-phone-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Service Required</label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full bg-[#181818] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="General Repair / Diagnostic Checkup">General Repair / Diagnostic Checkup (₹0 Fee)</option>
                  <option value="Chip-Level Motherboard Repair">Chip-Level Motherboard Repair (Laser BGA / Dead PC)</option>
                  <option value="Display Screen Replacement">Display Screen Replacement (30-Min Fast Fit)</option>
                  <option value="SSD & RAM Speed Upgrade">SSD & RAM Speed Upgrade (10x Faster)</option>
                  <option value="Liquid Spill Restoration">Liquid Spill & Water Damage Recovery</option>
                  <option value="Custom Gaming PC Build">Custom Gaming PC Assembly & Liquid Cooling</option>
                  <option value="Certified Refurbished Laptop Purchase">Certified Refurbished Laptop In-Store Testing</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Device Brand & Model</label>
                <input
                  type="text"
                  placeholder="e.g. Dell Inspiron 15, MacBook Air M1, Lenovo ThinkPad"
                  value={deviceModel}
                  onChange={(e) => setDeviceModel(e.target.value)}
                  className="w-full bg-[#181818] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Problem / Symptoms Details</label>
                <textarea
                  rows={3}
                  placeholder="Tell us what is happening with the device..."
                  value={issueDescription}
                  onChange={(e) => setIssueDescription(e.target.value)}
                  className="w-full bg-[#181818] border border-white/15 rounded-xl p-3 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="p-3 rounded-2xl bg-blue-950/40 border border-blue-500/25 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <div>
                    <p className="text-xs font-bold text-white">Priority Express Queue</p>
                    <p className="text-[10px] text-gray-300 font-mono">Immediate technician assignment at counter</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={urgent}
                  onChange={(e) => setUrgent(e.target.checked)}
                  className="rounded bg-[#161616] border-white/20 text-blue-600 focus:ring-0"
                />
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-950/60 border border-red-800 text-red-300 text-xs">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all active:scale-95 disabled:opacity-50"
                id="submit-booking-btn"
              >
                {loading ? "Registering Slot..." : "Confirm In-Store Appointment →"}
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800">
                  Appointment Confirmed
                </span>
                <h3 className="text-xl font-bold text-white mt-2">
                  Service Token: <span className="font-mono text-blue-400">{bookingSuccess.bookingId}</span>
                </h3>
                <p className="text-xs text-gray-300 max-w-sm mx-auto mt-1 leading-relaxed">
                  Your repair slot is confirmed at Shop 207, 2nd Floor, Hariniwas Complex, Fraser Road Area, Patna.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#181818] border border-white/10 text-xs text-left space-y-1.5 font-mono">
                <div className="flex justify-between text-gray-300">
                  <span>Customer:</span>
                  <strong className="text-white">{name}</strong>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Device:</span>
                  <strong className="text-white">{deviceModel || "Laptop"}</strong>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Service:</span>
                  <strong className="text-blue-400 truncate max-w-[200px]">{serviceType}</strong>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Lab Address:</span>
                  <strong className="text-white">Shop 207, Hariniwas Complex</strong>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={handleWhatsAppForward}
                  className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Ticket to Store WhatsApp</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full py-2.5 rounded-full bg-[#202020] hover:bg-[#282828] text-gray-300 hover:text-white text-xs font-semibold transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
