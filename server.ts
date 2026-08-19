import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory demo store for customer service requests & demo repair jobs
interface ServiceBooking {
  id: string;
  name: string;
  phone: string;
  serviceType: string;
  deviceModel: string;
  issueDescription: string;
  preferredDate?: string;
  urgent: boolean;
  status: "Received" | "Diagnosing" | "In-Progress" | "Ready for Pickup" | "Delivered";
  createdAt: string;
  estimatedCost?: string;
}

const mockBookings: ServiceBooking[] = [
  {
    id: "NGC-9842",
    name: "Rahul Verma",
    phone: "9835291073",
    serviceType: "Chip-Level Motherboard Repair",
    deviceModel: "Dell Inspiron 15 5000",
    issueDescription: "No power, charging light blinking orange, liquid spill",
    urgent: true,
    status: "Ready for Pickup",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    estimatedCost: "₹1,850",
  },
  {
    id: "NGC-9843",
    name: "Amit Kumar Sharma",
    phone: "9431000000",
    serviceType: "Gaming Rig Assembly & Liquid Cooling",
    deviceModel: "Custom Ryzen 7 7800X3D + RTX 4070 Ti Super",
    issueDescription: "Assembly, Cable management & Stress benchmark testing",
    urgent: false,
    status: "In-Progress",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    estimatedCost: "₹2,500",
  },
  {
    id: "NGC-9844",
    name: "Priya Singh",
    phone: "9122000000",
    serviceType: "Display Screen Replacement (Original 144Hz IPS)",
    deviceModel: "ASUS TUF Gaming A15",
    issueDescription: "Screen flickering with vertical green lines after drop",
    urgent: false,
    status: "Diagnosing",
    createdAt: new Date().toISOString(),
    estimatedCost: "₹4,200",
  }
];

// Lazy-initialized Gemini client with telemetry header
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// API: Health check
app.get("/api/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", store: "NEXT GEN COMPUTER Patna", version: "2.0.0" });
});

// API: AI-Powered Hardware Diagnosis & Instant Cost Estimator
app.post("/api/ai-diagnose", async (req: Request, res: Response) => {
  try {
    const { deviceType, brand, model, symptoms, urgency } = req.body;
    
    if (!symptoms) {
      return res.status(400).json({ error: "Please describe the problem or symptoms." });
    }

    const ai = getGeminiClient();

    if (ai) {
      const prompt = `You are the Master Senior Hardware Engineer & Diagnostician at NEXT GEN COMPUTER, located at Hariniwas Complex, Dak Bunglow Road, Patna.
A customer brings in a device with the following details:
- Device Category: ${deviceType || "Laptop/PC"}
- Brand & Model: ${brand || "General"} ${model || ""}
- Observed Symptoms / Issues: ${symptoms}
- Urgency: ${urgency ? "Express / Same Day" : "Standard"}

Provide a professional, realistic diagnostic breakdown in JSON with:
1. "probableCause": Concise root cause explanation (e.g., faulty power IC, VRM short, corrupted BIOS, damaged backlight inverter, thermal throttling / dry thermal paste, bad SSD sectors).
2. "severity": "Low" | "Moderate" | "High" | "Critical"
3. "estimatedRepairTime": (e.g., "2-4 Hours", "Same Day (45 mins)", "24-48 Hours for chip-level reballing")
4. "priceRangeINR": Realistic Patna market price range in INR (e.g. "₹800 - ₹1,800" or "₹1,500 - ₹3,200")
5. "recommendations": Array of 3-4 actionable tips or repair steps our technician will perform.
6. "nextGenAdvantage": Why NEXT GEN COMPUTER in Hariniwas Complex is the best place to fix this (e.g. Laser microscopic inspection, original OEM parts, 90-day warranty, transparent billing).

Return strictly valid JSON matching this schema:
{
  "probableCause": "...",
  "severity": "High",
  "estimatedRepairTime": "...",
  "priceRangeINR": "...",
  "recommendations": ["..."],
  "nextGenAdvantage": "..."
}`;

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.3,
        }
      });

      const text = response.text?.trim() || "{}";
      const parsed = JSON.parse(text);
      return res.json({ success: true, diagnosis: parsed, aiPowered: true });
    }
  } catch (error) {
    console.warn("Gemini API fallback triggered:", error);
  }

  // Smart Fallback Diagnosis Engine (Realistic Hardware knowledge base)
  const { symptoms = "", deviceType = "Laptop" } = req.body;
  const lower = symptoms.toLowerCase();
  
  let probableCause = "Hardware component degradation or system firmware glitch";
  let severity = "Moderate";
  let estimatedRepairTime = "Same Day (2-3 Hours)";
  let priceRangeINR = "₹650 - ₹1,450";
  let recommendations = [
    "Complete voltage rail multimeter testing & short-circuit check",
    "Thermal module ultrasonic cleaning and premium thermal compound re-paste",
    "Comprehensive hardware stress & RAM memory test"
  ];

  if (lower.includes("screen") || lower.includes("display") || lower.includes("line") || lower.includes("flicker") || lower.includes("broken")) {
    probableCause = "Damaged LCD/OLED panel substrate or loose eDP video ribbon cable connector";
    severity = "High";
    estimatedRepairTime = "45 - 90 Minutes";
    priceRangeINR = "₹2,800 - ₹4,800 (Screen Replacement) / ₹450 (Cable fix)";
    recommendations = [
      "Panel model pinout verification (30-pin vs 40-pin connector)",
      "Testing with high-refresh IPS grade replacement panel",
      "Hinge torque alignment to prevent future panel pressure fractures"
    ];
  } else if (lower.includes("no power") || lower.includes("dead") || lower.includes("charge") || lower.includes("on nahi") || lower.includes("smoke") || lower.includes("spill")) {
    probableCause = "Short-circuit on 19V Main DC Power rail or damaged Charging Controller IC (ISL/BQ series)";
    severity = "Critical";
    estimatedRepairTime = "Same Day to 24 Hours";
    priceRangeINR = "₹1,200 - ₹2,400 (Motherboard Chip-Level)";
    recommendations = [
      "Microscopic PCB inspection under stereo microscope for blown capacitors/MOSFETs",
      "Infrared thermal imaging to pinpoint overheating power ICs",
      "Original SMD chip replacement and ultrasonic board cleansing"
    ];
  } else if (lower.includes("slow") || lower.includes("hang") || lower.includes("blue screen") || lower.includes("bsod") || lower.includes("boot") || lower.includes("upgrade")) {
    probableCause = "Mechanical HDD latency bottleneck, bad SMART sectors, or Windows OS corruption";
    severity = "Low";
    estimatedRepairTime = "30 - 60 Minutes";
    priceRangeINR = "₹450 (OS Service) / ₹1,400 - ₹2,800 (NVMe SSD 512GB Upgrade)";
    recommendations = [
      "NVMe M.2 / 2.5\" High-Speed SSD upgrade (10x faster boot times)",
      "Dual-channel RAM expansion configuration (DDR4/DDR5)",
      "Clean Windows 11 Pro 64-bit installation with all official OEM chipset drivers"
    ];
  } else if (lower.includes("heat") || lower.includes("fan") || lower.includes("sound") || lower.includes("loud") || lower.includes("shut")) {
    probableCause = "Exhaust vent dust blockage and dried CPU/GPU thermal interface material";
    severity = "Moderate";
    estimatedRepairTime = "45 Minutes";
    priceRangeINR = "₹400 - ₹750 (Deep Servicing & Arctic MX-4 Thermal Paste)";
    recommendations = [
      "Heatsink ultrasonic bath and blower fan bearing lubrication",
      "Application of high-thermal-conductivity Arctic MX-4 / Thermal Grizzly paste",
      "Synthetic thermal stress test (FurMark + Cinebench) to ensure sub-70°C temps"
    ];
  }

  res.json({
    success: true,
    diagnosis: {
      probableCause,
      severity,
      estimatedRepairTime,
      priceRangeINR,
      recommendations,
      nextGenAdvantage: "Over 12+ years of chip-level expertise at Hariniwas Complex, Patna. 100% Genuine OEM components, transparent upfront pricing, and 90-day warranty."
    },
    aiPowered: false
  });
});

// API: Custom PC Build Advisor
app.post("/api/ai-pc-builder", async (req: Request, res: Response) => {
  try {
    const { budget, purpose, resolution, preferredBrand } = req.body;
    const ai = getGeminiClient();

    if (ai) {
      const prompt = `Act as Chief PC Architect at NEXT GEN COMPUTER Patna.
Recommend an optimal custom PC component configuration for:
- Budget: ₹${budget || "60,000"} INR
- Primary Purpose: ${purpose || "Gaming & Video Editing / Creator"}
- Target Resolution: ${resolution || "1080p Ultra / 1440p High"}
- Preferred CPU/GPU: ${preferredBrand || "Best Value (AMD or Intel + NVIDIA)"}

Return valid JSON with:
{
  "buildName": "e.g. Patna Esports Dominator / NextGen Creator Pro",
  "totalEstimatedINR": "e.g. ₹62,500",
  "fpsEstimate": { "valorant": "300+ FPS", "gta5": "120+ FPS", "cyberpunk": "75+ FPS" },
  "components": [
    { "category": "Processor (CPU)", "item": "...", "approxPrice": "₹..." },
    { "category": "Graphics Card (GPU)", "item": "...", "approxPrice": "₹..." },
    { "category": "Motherboard", "item": "...", "approxPrice": "₹..." },
    { "category": "RAM", "item": "...", "approxPrice": "₹..." },
    { "category": "Storage", "item": "...", "approxPrice": "₹..." },
    { "category": "Power Supply (PSU)", "item": "...", "approxPrice": "₹..." },
    { "category": "Cabinet & Cooling", "item": "...", "approxPrice": "₹..." }
  ],
  "builderPerks": ["Free Assembly & Cable Routing", "Free Windows 11 Pro + Drivers Pre-installed", "Free 1-Year Local In-Store Warranty Support"]
}`;

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.2
        }
      });

      const parsed = JSON.parse(response.text?.trim() || "{}");
      return res.json({ success: true, build: parsed, aiPowered: true });
    }
  } catch (error) {
    console.warn("PC builder AI fallback triggered:", error);
  }

  // Fallback preset builder based on budget
  const budgetNum = Number(req.body.budget) || 60000;
  let buildName = "NextGen Streamer & Gaming Beast";
  let totalEstimatedINR = "₹" + budgetNum.toLocaleString("en-IN");
  let components = [];

  if (budgetNum < 40000) {
    buildName = "NextGen Budget Esports & Office Rocket";
    components = [
      { category: "Processor", item: "AMD Ryzen 5 5600G (6C/12T with Radeon Vega 7 Graphics)", approxPrice: "₹11,200" },
      { category: "Motherboard", item: "Gigabyte B450M DS3H WiFi", approxPrice: "₹6,400" },
      { category: "RAM", item: "16GB (8GBx2) Corsair Vengeance LPX 3200MHz DDR4", approxPrice: "₹3,400" },
      { category: "Storage", item: "512GB Kingston NV2 PCIe 4.0 NVMe SSD", approxPrice: "₹3,100" },
      { category: "Power Supply", item: "Ant Esports VS500L 500W PSU", approxPrice: "₹2,100" },
      { category: "Cabinet", item: "Ant Esports ICE-112 RGB Mesh Mid-Tower", approxPrice: "₹2,800" }
    ];
  } else if (budgetNum < 75000) {
    buildName = "NextGen 1080p Ultra & 1440p Esports King";
    components = [
      { category: "Processor", item: "Intel Core i5-12400F (6C/12T, up to 4.4GHz)", approxPrice: "₹10,800" },
      { category: "Graphics Card", item: "Zotac GeForce RTX 4060 8GB GDDR6 Twin Edge", approxPrice: "₹27,900" },
      { category: "Motherboard", item: "MSI PRO B760M-E DDR4 Motherboard", approxPrice: "₹8,200" },
      { category: "RAM", item: "16GB (8GBx2) G.Skill Ripjaws V 3600MHz DDR4", approxPrice: "₹3,800" },
      { category: "Storage", item: "1TB WD Blue SN580 PCIe 4.0 NVMe SSD (4150MB/s)", approxPrice: "₹5,600" },
      { category: "Power Supply", item: "Deepcool PK550D 550W 80+ Bronze Certified", approxPrice: "₹3,400" },
      { category: "Cabinet & Cooling", item: "Galax Revolution-05 4x ARGB Fans + Deepcool AG400 Cooler", approxPrice: "₹4,800" }
    ];
  } else {
    buildName = "NextGen 4K 144Hz Cyberpunk & Rendering Titan";
    components = [
      { category: "Processor", item: "AMD Ryzen 7 7800X3D (Ultimate Gaming CPU)", approxPrice: "₹36,500" },
      { category: "Graphics Card", item: "Gigabyte GeForce RTX 4070 Ti Super 16GB Gaming OC", approxPrice: "₹78,900" },
      { category: "Motherboard", item: "ASUS TUF Gaming B650-PLUS WiFi DDR5", approxPrice: "₹20,400" },
      { category: "RAM", item: "32GB (16GBx2) G.Skill Trident Z5 Neo RGB 6000MHz CL30", approxPrice: "₹10,500" },
      { category: "Storage", item: "2TB Samsung 990 PRO Gen4 NVMe SSD (7450MB/s)", approxPrice: "₹15,200" },
      { category: "Power Supply", item: "Corsair RM850e 850W 80+ Gold Fully Modular ATX 3.0", approxPrice: "₹10,800" },
      { category: "Liquid Cooler & Case", item: "Lian Li Lancool 216 RGB + Deepcool LT720 360mm AIO", approxPrice: "₹16,500" }
    ];
  }

  res.json({
    success: true,
    build: {
      buildName,
      totalEstimatedINR,
      fpsEstimate: { valorant: "400+ FPS", gta5: "150+ FPS", cyberpunk: "95+ FPS" },
      components,
      builderPerks: [
        "Free High-Precision Cable Management & Clean Routing",
        "Free Windows 11 Pro + Essential Drivers & Benchmarking",
        "Lifetime Free In-Store Maintenance & Dust Blowout"
      ]
    },
    aiPowered: false
  });
});

// API: Book Service / Request Instant Call Back
app.post("/api/book-service", (req: Request, res: Response) => {
  const { name, phone, serviceType, deviceModel, issueDescription, urgent } = req.body;
  if (!name || !phone) {
    return res.status(400).json({ error: "Name and Phone Number are required." });
  }

  const newId = `NGC-${Math.floor(1000 + Math.random() * 9000)}`;
  const booking: ServiceBooking = {
    id: newId,
    name,
    phone,
    serviceType: serviceType || "General Checkup & Repair",
    deviceModel: deviceModel || "Laptop / Desktop",
    issueDescription: issueDescription || "Customer requested inspection and quote",
    urgent: Boolean(urgent),
    status: "Received",
    createdAt: new Date().toISOString(),
    estimatedCost: urgent ? "₹650 (Priority Slot)" : "₹450 - ₹1,200 (Subject to inspection)"
  };

  mockBookings.unshift(booking);

  // Generate WhatsApp direct text for seamless 1-click chatting with the Patna shop
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const shopPhone = "919835291073";
  const waMessage = encodeURIComponent(
    `*Service Request: ${newId}*\n*Name:* ${name}\n*Phone:* ${phone}\n*Device:* ${deviceModel || "Laptop/PC"}\n*Service:* ${serviceType}\n*Issue:* ${issueDescription || "Inspection"}\n*Urgent:* ${urgent ? "YES (Priority)" : "Standard"}\n\n_Hi Next Gen Computer (Hariniwas Complex), I submitted this inquiry on your website!_`
  );
  const waUrl = `https://wa.me/${shopPhone}?text=${waMessage}`;

  res.json({
    success: true,
    bookingId: newId,
    booking,
    whatsAppUrl: waUrl,
    message: "Service request registered successfully! Our expert technician will call you within 15 minutes."
  });
});

// API: Track Repair Job by ID or Phone
app.get("/api/track-repair", (req: Request, res: Response) => {
  const query = (req.query.q as string || "").trim().toLowerCase();
  if (!query) {
    return res.status(400).json({ error: "Please provide a Booking ID (e.g. NGC-9842) or Phone Number." });
  }

  const found = mockBookings.find(b => 
    b.id.toLowerCase() === query || 
    b.phone.includes(query) || 
    b.name.toLowerCase().includes(query)
  );

  if (found) {
    return res.json({ success: true, booking: found });
  }

  // If not found in memory, generate dynamic simulated tracker for demo delight
  const simulatedId = query.toUpperCase().startsWith("NGC") ? query.toUpperCase() : `NGC-${Math.floor(1000 + Math.random() * 9000)}`;
  res.json({
    success: true,
    booking: {
      id: simulatedId,
      name: "Customer Job",
      phone: query,
      serviceType: "Laptop Chip-Level Inspection & Diagnostic",
      deviceModel: "HP Pavilion 15 / Lenovo ThinkPad",
      issueDescription: "Diagnostic completed. Testing memory power rail stability.",
      status: "In-Progress",
      createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
      estimatedCost: "₹1,450 (Parts + Labor with 90-Day Warranty)"
    }
  });
});

// Launch Vite or Static server
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`NEXT GEN COMPUTER Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
