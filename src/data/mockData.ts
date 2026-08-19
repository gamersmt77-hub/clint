import { ServiceItem, ProductItem, ReviewItem } from "../types";
import heroPcBanner from "../assets/images/hero_pc_banner_1787121523023.jpg";
import refurbishedBanner from "../assets/images/refurbished_laptops_banner_1787121547485.jpg";
import chipRepairLab from "../assets/images/chip_repair_lab_1787121576129.jpg";
import storeHardwareShelf from "../assets/images/store_hardware_shelf_1787121598344.jpg";

export const STORE_INFO = {
  name: "NEXT GEN COMPUTER",
  tagline: "Laptop & Computer Superstore, Chip-Level Repairing & Custom PC Hub",
  address: "Shop 207, 2nd Floor, Hariniwas Complex, New Dak Bunglow Rd, Bander Bagicha, Fraser Road Area, Patna, Bihar 800001",
  landmark: "Near Dak Bunglow Chauraha, Opp. Maurya Lok / Fraser Road Crossing",
  phone: "09835291073",
  formattedPhone: "+91 98352 91073",
  whatsapp: "919835291073",
  email: "nextgencomputerpatna@gmail.com",
  timings: "Mon - Sat: 10:30 AM - 8:30 PM | Sunday: 11:30 AM - 5:00 PM",
  mapsUrl: "https://maps.app.goo.gl/uMQZNLgJV7NpVhPN7",
  embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.940656094056!2d85.1352341!3d25.6068694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed585d69fa4841%3A0x6b449b29c9efcf72!2sNEXT%20GEN%20COMPUTER!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  experienceYears: "12+",
  repairedCount: "18,500+",
  satisfactionRate: "99.4%",
  googleRating: 4.8,
  googleReviewCount: 384,
};

export interface BannerItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  ctaText: string;
  ctaAction: "pc-builder" | "refurbished" | "repair" | "booking";
  image: string;
  tag: string;
}

export const HERO_BANNERS: BannerItem[] = [
  {
    id: "banner-1",
    title: "Custom Gaming PCs & High-End Workstations",
    subtitle: "Built with Intel 14th Gen / Ryzen 7000 + NVIDIA RTX 40-Series. Free Cable Management & 3-Yr Support at Hariniwas Complex.",
    badge: "⚡ MD Computers Style Deals",
    ctaText: "Configure Your PC",
    ctaAction: "pc-builder",
    image: heroPcBanner,
    tag: "From ₹32,000 to ₹4 Lakhs"
  },
  {
    id: "banner-2",
    title: "Certified Refurbished Laptops @ Lowest Patna Rates",
    subtitle: "Dell Latitude, Lenovo ThinkPad & Apple MacBook with 6-Month Replacement Warranty & 100% Battery Health Guarantee.",
    badge: "🔥 Grade A++ Clearance",
    ctaText: "Explore Laptops",
    ctaAction: "refurbished",
    image: refurbishedBanner,
    tag: "Starts @ ₹14,999 Only"
  },
  {
    id: "banner-3",
    title: "Patna's #1 Chip-Level Motherboard Repair Hub",
    subtitle: "Laser BGA Micro-soldering, 30-Min Screen Replacements & Dead Laptop Revival at Hariniwas Complex Shop 207.",
    badge: "🔬 Precision Hardware Lab",
    ctaText: "Book Free Diagnostic",
    ctaAction: "repair",
    image: chipRepairLab,
    tag: "90-Day Lab Warranty"
  }
];

export interface CategoryCard {
  id: string;
  name: string;
  itemCount: string;
  icon: string;
  image: string;
  popularItem: string;
}

export const HARDWARE_CATEGORIES: CategoryCard[] = [
  {
    id: "processors",
    name: "Processors (CPUs)",
    itemCount: "35+ Models",
    icon: "Cpu",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=500&q=80",
    popularItem: "Intel i5 13400F / Ryzen 5 7600X"
  },
  {
    id: "graphics-cards",
    name: "Graphics Cards (GPUs)",
    itemCount: "28+ Models",
    icon: "Zap",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=500&q=80",
    popularItem: "NVIDIA RTX 4060 / 4070 Ti Super"
  },
  {
    id: "refurbished-laptops",
    name: "Refurbished Laptops",
    itemCount: "40+ In Stock",
    icon: "Laptop",
    image: refurbishedBanner,
    popularItem: "Dell Latitude / ThinkPad / MacBook"
  },
  {
    id: "motherboards",
    name: "Motherboards",
    itemCount: "22+ Chipsets",
    icon: "Layers",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
    popularItem: "B760M / B650 Gaming Wi-Fi"
  },
  {
    id: "storage-ram",
    name: "NVMe SSDs & RAM",
    itemCount: "50+ SKUs",
    icon: "HardDrive",
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b909?auto=format&fit=crop&w=500&q=80",
    popularItem: "Crucial P3 Plus 1TB / 32GB DDR5"
  },
  {
    id: "custom-gaming-pcs",
    name: "Pre-Built Gaming PCs",
    itemCount: "12+ Configurations",
    icon: "Gamepad2",
    image: heroPcBanner,
    popularItem: "Esports i5 + RTX 4060 Builds"
  },
  {
    id: "pc-cabinets-psu",
    name: "Cabinets & SMPS",
    itemCount: "30+ Cases",
    icon: "Box",
    image: storeHardwareShelf,
    popularItem: "Ant Esports ARGB & Corsair 750W"
  },
  {
    id: "chip-level-repairs",
    name: "Chip-Level Repair",
    itemCount: "All Brands",
    icon: "Wrench",
    image: chipRepairLab,
    popularItem: "BGA Reballing & Screen Swaps"
  }
];

export const BRAND_LOGOS = [
  { name: "Intel", tag: "Core i3 / i5 / i7 / i9 14th Gen" },
  { name: "AMD", tag: "Ryzen 5000 / 7000 / 9000 Series" },
  { name: "NVIDIA", tag: "GeForce RTX 4060 / 4070 / 4080" },
  { name: "ASUS ROG", tag: "TUF Gaming & Motherboards" },
  { name: "Gigabyte", tag: "AORUS & Ultra Durable Series" },
  { name: "MSI", tag: "Gaming Laptops & Components" },
  { name: "Corsair", tag: "Vengeance RAM & Gold PSUs" },
  { name: "Western Digital", tag: "Black SN850X & Blue NVMe" },
  { name: "Crucial", tag: "Micron P3 Plus Gen4 SSDs" },
  { name: "Lenovo", tag: "ThinkPad Corporate Laptops" },
  { name: "Dell", tag: "Latitude & Inspiron Specialists" },
  { name: "Apple", tag: "MacBook Pro / Air Certified Repairs" },
];

export interface StoreProduct {
  id: string;
  name: string;
  brand: string;
  category: "laptops" | "gaming-pc" | "components" | "accessories" | "repair";
  specs: string[];
  mrp: string;
  offerPrice: string;
  discountPercent: string;
  stockStatus: "In Stock" | "Few Units Left" | "Hot Seller";
  warranty: string;
  image: string;
  badge?: string;
  rating: number;
}

export const ALL_STORE_PRODUCTS: StoreProduct[] = [
  {
    id: "prod-1",
    name: "Dell Latitude 7400 Carbon Edition Ultrabook",
    brand: "Dell",
    category: "laptops",
    specs: ["Intel Core i7-8665U (Up to 4.8 GHz)", "16GB DDR4 RAM High-Speed", "512GB Ultra-Fast NVMe SSD", "14.0\" FHD Anti-Glare IPS Display", "Backlit Keyboard + Fingerprint Sensor"],
    mrp: "₹89,990",
    offerPrice: "₹24,500",
    discountPercent: "73% OFF",
    stockStatus: "In Stock",
    warranty: "6 Months Shop Warranty + 1 Year Support",
    image: refurbishedBanner,
    badge: "🔥 Patna Bestseller for Students & Coders",
    rating: 4.9
  },
  {
    id: "prod-2",
    name: "Lenovo ThinkPad T480 Legendary Durability",
    brand: "Lenovo",
    category: "laptops",
    specs: ["Intel Core i5 8th Gen Quad Core", "16GB RAM Dual Channel", "256GB NVMe SSD + 1TB HDD", "Dual Battery System (6-8 Hrs)", "Spill-Proof Keyboard"],
    mrp: "₹78,500",
    offerPrice: "₹20,999",
    discountPercent: "73% OFF",
    stockStatus: "Few Units Left",
    warranty: "6 Months Shop Warranty",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    badge: "⭐ Patna Students Favorite",
    rating: 4.8
  },
  {
    id: "prod-3",
    name: "Apple MacBook Pro 13 (Retina Display + TouchBar)",
    brand: "Apple",
    category: "laptops",
    specs: ["Intel Core i5 2.4GHz Quad-Core", "16GB LPDDR3 RAM", "512GB Apple High-Speed SSD", "Retina True Tone Display", "Touch Bar & Touch ID Sensor"],
    mrp: "₹1,42,000",
    offerPrice: "₹38,500",
    discountPercent: "73% OFF",
    stockStatus: "In Stock",
    warranty: "6 Months Replacement Warranty",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    badge: "🍎 Apple Certified Grade A+",
    rating: 5.0
  },
  {
    id: "prod-4",
    name: "NextGen Beast Gaming PC (i5 12400F + RTX 4060 8GB)",
    brand: "NextGen Rig",
    category: "gaming-pc",
    specs: ["Intel Core i5-12400F 6-Core / 12-Threads", "NVIDIA GeForce RTX 4060 8GB GDDR6", "16GB 3600MHz RGB RAM", "1TB Gen4 NVMe (4500MB/s)", "650W 80+ Bronze PSU + ARGB Case"],
    mrp: "₹84,000",
    offerPrice: "₹67,999",
    discountPercent: "19% OFF",
    stockStatus: "Hot Seller",
    warranty: "3 Years Brand Warranty on Parts",
    image: heroPcBanner,
    badge: "🚀 1080p / 1440p Esports King",
    rating: 5.0
  },
  {
    id: "prod-5",
    name: "NextGen Titan 4K Creator (Ryzen 7 7700X + RTX 4070 Super)",
    brand: "NextGen Rig",
    category: "gaming-pc",
    specs: ["AMD Ryzen 7 7700X 8-Core Zen 4", "NVIDIA RTX 4070 Super 12GB GDDR6X", "32GB DDR5 6000MHz Corsair RAM", "2TB Gen4 Kingston Fury SSD", "240mm ARGB Liquid Cooler + 750W Gold"],
    mrp: "₹1,65,000",
    offerPrice: "₹1,38,500",
    discountPercent: "16% OFF",
    stockStatus: "In Stock",
    warranty: "3 Years Brand Warranty",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
    badge: "🎬 4K Video & 3D Blender Rig",
    rating: 5.0
  },
  {
    id: "prod-6",
    name: "Crucial P3 Plus 1TB PCIe 4.0 3D NAND NVMe M.2 SSD",
    brand: "Crucial",
    category: "components",
    specs: ["Sequential Read up to 5000 MB/s", "Sequential Write up to 4200 MB/s", "M.2 2280 Form Factor", "Superfast boot & Game Loading"],
    mrp: "₹8,500",
    offerPrice: "₹5,299",
    discountPercent: "38% OFF",
    stockStatus: "In Stock",
    warranty: "5 Years Manufacturer Warranty",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80",
    badge: "⚡ 5000 MB/s Speed",
    rating: 4.9
  },
  {
    id: "prod-7",
    name: "Kingston FURY Beast 16GB (2x8GB) DDR4 3200MHz RAM",
    brand: "Kingston",
    category: "components",
    specs: ["Low-profile heat spreader design", "Intel XMP & AMD Ryzen Ready", "Plug N Play at 3200MHz", "Dual-Channel Kit"],
    mrp: "₹4,800",
    offerPrice: "₹3,150",
    discountPercent: "34% OFF",
    stockStatus: "In Stock",
    warranty: "Lifetime Warranty",
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b909?auto=format&fit=crop&w=800&q=80",
    badge: "🔥 High-Speed Dual Channel",
    rating: 4.8
  },
  {
    id: "prod-8",
    name: "HP EliteBook 840 G6 Aluminum Business Edition",
    brand: "HP",
    category: "laptops",
    specs: ["Intel Core i5 8th Gen", "16GB DDR4 RAM", "512GB Fast M.2 SSD", "14.0\" FHD Micro-Edge IPS", "Bang & Olufsen Audio + Face Unlock"],
    mrp: "₹84,000",
    offerPrice: "₹23,500",
    discountPercent: "72% OFF",
    stockStatus: "In Stock",
    warranty: "6 Months Shop Warranty",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    badge: "💼 Sleek Silver Ultrabook",
    rating: 4.7
  }
];

export const REFURBISHED_PRODUCTS: ProductItem[] = [
  {
    id: "lap-01",
    name: "Dell Latitude 7400 Carbon Edition",
    brand: "Dell",
    category: "Refurbished Laptop",
    specs: ["Intel Core i7-8665U (4.8 GHz)", "16GB DDR4 RAM", "512GB NVMe M.2 SSD", "14.0\" FHD Anti-Glare IPS", "Backlit Keyboard + Fingerprint", "4+ Hrs Battery Backup"],
    condition: "Certified Refurbished (Grade A++)",
    mrp: "₹89,990",
    offerPrice: "₹24,500",
    warranty: "6 Months Shop Warranty + 1 Year Tech Support",
    image: refurbishedBanner,
    badge: "Bestseller for Students & Coding"
  },
  {
    id: "lap-02",
    name: "Lenovo ThinkPad T480 Legendary Tough",
    brand: "Lenovo",
    category: "Refurbished Laptop",
    specs: ["Intel Core i5-8350U Quad Core", "16GB Dual Channel RAM", "256GB NVMe SSD + 1TB HDD", "14.0\" IPS Anti-Glare Display", "Dual Battery System (6-8 Hrs)", "Spill-Resistant Keyboard"],
    condition: "Certified Refurbished (Grade A++)",
    mrp: "₹78,500",
    offerPrice: "₹20,999",
    warranty: "6 Months Shop Warranty",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    badge: "Most Durable Laptop"
  },
  {
    id: "lap-03",
    name: "HP EliteBook 840 G6 Aluminum Unibody",
    brand: "HP",
    category: "Refurbished Laptop",
    specs: ["Intel Core i5 8th Gen", "16GB DDR4 RAM", "512GB Fast M.2 SSD", "14.0\" Full HD Micro-Edge IPS", "Bang & Olufsen Premium Audio", "Face Unlock + Fingerprint"],
    condition: "Certified Refurbished (Grade A++)",
    mrp: "₹84,000",
    offerPrice: "₹23,500",
    warranty: "6 Months Shop Warranty",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    badge: "Premium Slim Business Look"
  },
  {
    id: "pc-01",
    name: "NextGen Beast RTX 4060 Gaming Battlestation",
    brand: "NextGen Custom",
    category: "Gaming PC",
    specs: ["Intel Core i5-12400F 6-Core", "NVIDIA RTX 4060 8GB GDDR6", "16GB 3600MHz RGB RAM", "1TB Gen4 NVMe (5000 MB/s)", "650W 80+ Bronze PSU", "ARGB Tempered Glass Case"],
    condition: "Brand New Custom Assembly",
    mrp: "₹84,000",
    offerPrice: "₹67,999",
    warranty: "3 Years Brand Warranty",
    image: heroPcBanner,
    badge: "⚡ Esports 240+ FPS Ready"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "srv-01",
    title: "Chip-Level Motherboard Repair",
    category: "Laptop Repair",
    description: "Laser microscopic inspection, short circuit tracing, BGA reballing, power IC replacement, and corrupted BIOS reprogramming.",
    startingPrice: "₹1,200",
    turnaround: "Same Day / 24-48 Hrs",
    warranty: "90-Day Guarantee",
    iconName: "Cpu",
    popular: true,
    highlights: ["Advanced German Soldering Station", "No Fix - No Fee Policy", "Original IC Replacements"]
  },
  {
    id: "srv-02",
    title: "Display & Screen Replacement",
    category: "Laptop Repair",
    description: "FHD, IPS, OLED, and 144Hz/240Hz gaming display replacement. Free dust cleaning and hinge greasing included.",
    startingPrice: "₹2,200",
    turnaround: "30 - 45 Minutes",
    warranty: "6 Months Warranty",
    iconName: "Monitor",
    popular: true,
    highlights: ["100% Brand New Grade-A Panels", "Zero Dead Pixel Guarantee", "Express 30-Min Fitting"]
  },
  {
    id: "srv-03",
    title: "Custom Gaming & Workstation Assembly",
    category: "PC Assembly",
    description: "Budget & high-end PC builds with custom liquid cooling, professional cable routing, thermal paste application, and stress testing.",
    startingPrice: "₹1,500",
    turnaround: "Same Day Ready",
    warranty: "Lifetime Build Support",
    iconName: "Zap",
    popular: true,
    highlights: ["Cinebench & Furmark Tested", "Zero Cable Clutter", "Official GST Invoice"]
  },
  {
    id: "srv-04",
    title: "High-Speed SSD & RAM Upgrades",
    category: "Upgrades",
    description: "Revive slow laptops with NVMe Gen4 SSDs (10x faster than HDDs) and Dual-Channel DDR4/DDR5 RAM with free OS migration.",
    startingPrice: "₹1,450",
    turnaround: "20 - 30 Minutes",
    warranty: "3 to 5 Years Warranty",
    iconName: "Flame",
    popular: false,
    highlights: ["Zero Data Loss Clone", "Crucial / Kingston Genuine", "Instant Speed Boost"]
  },
  {
    id: "srv-05",
    title: "Liquid Spill & Dead Laptop Revival",
    category: "Specialized",
    description: "Ultrasonic chemical bath PCB cleaning for tea/water damaged laptops, repairing corroded tracks and oxidised SMD components.",
    startingPrice: "₹1,500",
    turnaround: "24 - 48 Hours",
    warranty: "90-Day Guarantee",
    iconName: "BatteryCharging",
    popular: false,
    highlights: ["Ultrasonic PCB De-oxidation", "85%+ Recovery Success Rate", "Complete Data Preservation"]
  },
  {
    id: "srv-06",
    title: "Lost Data Recovery (HDD/SSD/NVMe)",
    category: "Specialized",
    description: "Cleanroom recovery from formatted drives, raw file systems, clicking hard drives, and corrupted memory cards.",
    startingPrice: "₹1,800",
    turnaround: "1 - 3 Days",
    warranty: "100% Confidentiality",
    iconName: "Database",
    popular: false,
    highlights: ["Class-100 Cleanroom Access", "Strict Privacy Protocol", "Pay Only If Data Recovered"]
  }
];

export const BEFORE_AFTER_CASES = [
  {
    id: "case-01",
    title: "Liquid Spilled Lenovo Legion Gaming Laptop (Short Circuit)",
    device: "Lenovo Legion 5 Pro (Ryzen 7 + RTX 3060)",
    beforeImg: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    afterImg: chipRepairLab,
    beforeText: "Customer spilled coffee; motherboard shorted with 19V rail burnt. Authorized service center quoted ₹48,000 for whole motherboard replacement.",
    afterText: "Repaired 3 shorted MOSFETs, cleaned corrosion via ultrasonic PCB bath, reprogrammed BIOS IC. Delivered working with FurMark stress test in 24 hours.",
    costSaved: "₹38,500 Saved (Repaired for ₹3,800)",
    timeTaken: "24 Hours"
  },
  {
    id: "case-02",
    title: "Crushed Hinges & Broken Display Frame on HP Pavilion",
    device: "HP Pavilion 15 Gaming",
    beforeImg: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    afterImg: refurbishedBanner,
    beforeText: "Severe corner drop caused metallic hinge to rip out of bottom plastic frame. Screen was dangling by the video ribbon cable.",
    afterText: "Rebuilt inner anchor mounts with metal-bonding resin, calibrated hinge tension to 50% lighter opening force, fitted brand new 144Hz IPS panel.",
    costSaved: "₹14,000 Saved (Repaired for ₹2,400)",
    timeTaken: "45 Minutes"
  },
  {
    id: "case-03",
    title: "Overheating (102°C) Custom Gaming PC with Thermal Throttling",
    device: "Intel Core i9 13900K + RTX 4080",
    beforeImg: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
    afterImg: heroPcBanner,
    beforeText: "PC kept turning off during 4K video rendering and Cyberpunk 2077. Dry generic thermal paste and clogged AIO pump.",
    afterText: "Flushed loop, installed Arctic MX-6 high-conductivity compound, re-engineered case intake/exhaust pressure. Temps dropped from 102°C to 68°C peak.",
    costSaved: "Hardware Lifespan Doubled",
    timeTaken: "2 Hours"
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-01",
    author: "Vivek Anand",
    location: "Kankarbagh, Patna",
    rating: 5,
    date: "3 days ago",
    comment: "Meri Dell laptop ka display Maurya Lok ke service center wale ne bol diya ki change nahi hoga, ₹8,500 mang rahe the. Next Gen Computer pe Bhaiya ne sirf 30 minutes me ₹2,600 me original IPS screen laga di with 6 months warranty! Best shop in Patna.",
    serviceUsed: "Dell Screen Replacement",
    verified: true
  },
  {
    id: "rev-02",
    author: "Dr. Alok Ranjan",
    location: "Bailey Road, Patna",
    rating: 5,
    date: "1 week ago",
    comment: "Got a refurbished ThinkPad T480 from Next Gen Computer for my clinic records. Laptop is literally in brand new condition, battery gives 6+ hours backup. Very genuine pricing and clean billing.",
    serviceUsed: "Refurbished ThinkPad Purchase",
    verified: true
  },
  {
    id: "rev-03",
    author: "Rohan Kumar (Gamers Arena)",
    location: "Boring Road, Patna",
    rating: 5,
    date: "2 weeks ago",
    comment: "Built my full gaming rig (Ryzen 7 7800X3D + RTX 4070 Ti) from Next Gen. Pricing was lower than MD Computers and Nehru Place Delhi, plus they did clean cable management and BIOS tuning for free right in front of me.",
    serviceUsed: "Custom Gaming PC Assembly",
    verified: true
  },
  {
    id: "rev-04",
    author: "Sneha Sinha",
    location: "Fraser Road, Patna",
    rating: 5,
    date: "3 weeks ago",
    comment: "My MacBook Air had water damage and was completely dead. Next Gen engineers did micro-soldering and saved all my college project files within 24 hours. Genuine saviors in Hariniwas Complex!",
    serviceUsed: "MacBook Chip-Level Repair",
    verified: true
  }
];

export const FAQS = [
  {
    question: "Where is NEXT GEN COMPUTER located in Patna?",
    answer: "We are located at Shop 207, 2nd Floor, Hariniwas Complex, New Dak Bunglow Road, Fraser Road Area, Patna, Bihar 800001 (Near Dak Bunglow Chauraha, right opposite Maurya Lok)."
  },
  {
    question: "Do you offer warranty on laptop repairs and refurbished laptops?",
    answer: "Yes! All chip-level motherboard repairs come with 90-day lab warranty. Screen and battery replacements carry up to 6 months warranty. All refurbished laptops (Dell, ThinkPad, HP, MacBook) are backed by 6 months shop replacement warranty."
  },
  {
    question: "How long does a laptop screen or battery replacement take?",
    answer: "Most popular Dell, HP, Lenovo, and ASUS screen and battery replacements are completed in just 30 to 45 minutes right in front of you at our Hariniwas Complex store."
  },
  {
    question: "Can I customize a Gaming PC or Workstation based on my budget?",
    answer: "Absolutely! We provide live PC building assistance where you choose your CPU, GPU, RAM, Cabinet, and Liquid Cooler. We assemble, cable-manage, and benchmark test with official brand warranties."
  },
  {
    question: "What is your 'No Fix - No Fee' policy?",
    answer: "If our chip-level engineers are unable to repair your dead motherboard or recover your data, we charge ₹0 diagnostic fee. You only pay when your device is fully fixed and verified by you."
  }
];

export interface MockBooking {
  id: string;
  name: string;
  phone: string;
  serviceType: string;
  deviceModel: string;
  issueDescription: string;
  urgent: boolean;
  status: "Received" | "Diagnosing" | "In-Progress" | "Ready for Pickup" | "Delivered";
  createdAt: string;
  estimatedCost: string;
}

export const INITIAL_MOCK_BOOKINGS: MockBooking[] = [
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
