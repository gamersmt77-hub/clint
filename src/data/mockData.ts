import { ServiceItem, ProductItem, ReviewItem } from "../types";

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
    image: "/src/assets/images/hero_pc_banner_1787121523023.jpg",
    tag: "From ₹32,000 to ₹4 Lakhs"
  },
  {
    id: "banner-2",
    title: "Certified Refurbished Laptops @ Lowest Patna Rates",
    subtitle: "Dell Latitude, Lenovo ThinkPad & Apple MacBook with 6-Month Replacement Warranty & 100% Battery Health Guarantee.",
    badge: "🔥 Grade A++ Clearance",
    ctaText: "Explore Laptops",
    ctaAction: "refurbished",
    image: "/src/assets/images/refurbished_laptops_banner_1787121547485.jpg",
    tag: "Starts @ ₹14,999 Only"
  },
  {
    id: "banner-3",
    title: "Patna's #1 Chip-Level Motherboard Repair Hub",
    subtitle: "Laser BGA Micro-soldering, 30-Min Screen Replacements & Dead Laptop Revival at Hariniwas Complex Shop 207.",
    badge: "🔬 Precision Hardware Lab",
    ctaText: "Book Free Diagnostic",
    ctaAction: "repair",
    image: "/src/assets/images/chip_repair_lab_1787121576129.jpg",
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
    image: "/src/assets/images/refurbished_laptops_banner_1787121547485.jpg",
    popularItem: "Dell Latitude / ThinkPad / MacBook"
  },
  {
    id: "motherboards",
    name: "Motherboards & ICs",
    itemCount: "45+ Models",
    icon: "Layers",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=500&q=80",
    popularItem: "B760 / B650 / Z790 Gaming Boards"
  },
  {
    id: "storage-ram",
    name: "NVMe SSDs & DDR5 RAM",
    itemCount: "50+ SKUs",
    icon: "HardDrive",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=500&q=80",
    popularItem: "1TB Gen4 NVMe (7000MB/s)"
  },
  {
    id: "cabinets-cooling",
    name: "Gaming Cases & Coolers",
    itemCount: "25+ Cases",
    icon: "Box",
    image: "/src/assets/images/hero_pc_banner_1787121523023.jpg",
    popularItem: "Panoramic Glass ARGB Cases"
  },
  {
    id: "power-supplies",
    name: "Power Supplies (SMPS)",
    itemCount: "20+ Units",
    icon: "BatteryCharging",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=500&q=80",
    popularItem: "650W / 750W 80+ Gold Modular"
  },
  {
    id: "repair-services",
    name: "Chip-Level Repairs",
    itemCount: "Same-Day Fix",
    icon: "Wrench",
    image: "/src/assets/images/chip_repair_lab_1787121576129.jpg",
    popularItem: "BGA Reballing & Display Fix"
  }
];

export const BRAND_LOGOS = [
  { name: "Intel", tag: "Core i3/i5/i7/i9" },
  { name: "AMD", tag: "Ryzen 5/7/9" },
  { name: "NVIDIA", tag: "GeForce RTX" },
  { name: "ASUS ROG", tag: "Motherboards & GPUs" },
  { name: "Gigabyte", tag: "AORUS Series" },
  { name: "MSI", tag: "Gaming Hardware" },
  { name: "Corsair", tag: "RAM & Coolers" },
  { name: "Western Digital", tag: "Black Gen4 SSDs" },
  { name: "Kingston", tag: "Fury Beast DDR5" },
  { name: "Crucial", tag: "T500 / P3 Plus" },
  { name: "Dell", tag: "Latitude & Alienware" },
  { name: "Lenovo", tag: "ThinkPad & Legion" },
  { name: "HP", tag: "EliteBook & Omen" },
  { name: "Apple", tag: "MacBook Pro / Air" }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "chip-level-repair",
    title: "Chip-Level Motherboard Repair",
    category: "Laptop Repair",
    iconName: "Cpu",
    description: "Laser microscopic circuit repair, BGA IC reballing, VRM power short troubleshooting, and dead laptop motherboard restoration.",
    features: [
      "No Power / Dead laptop revival",
      "Short-circuit tracing with IR thermal camera",
      "BGA GPU / Southbridge chip reballing",
      "Liquid & water spill recovery specialist"
    ],
    startingPrice: "₹850",
    estimatedTime: "Same Day / 24 hrs",
    popular: true,
    warranty: "90 Days Replacement Warranty",
    image: "/src/assets/images/chip_repair_lab_1787121576129.jpg"
  },
  {
    id: "screen-replacement",
    title: "Display & Screen Replacement",
    category: "Laptop Repair",
    iconName: "Monitor",
    description: "100% Genuine FHD, 2K, 4K, 144Hz & 165Hz IPS gaming laptop screens for Dell, HP, Lenovo, ASUS, Acer, Apple MacBook.",
    features: [
      "Ultra-fast 30-Minute Screen Replacement",
      "Zero Dead Pixel Guarantee",
      "All sizes: 13.3\", 14.0\", 15.6\", 16.0\", 17.3\"",
      "Free display cable & hinge alignment"
    ],
    startingPrice: "₹2,400",
    estimatedTime: "30 - 45 Minutes",
    popular: true,
    warranty: "6 Months Brand Warranty",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gaming-pc-builder",
    title: "Custom PC Building & Gaming Rigs",
    category: "PC Assembly",
    iconName: "Gamepad2",
    description: "Custom workstation & gaming battlestation builds with custom liquid cooling, ARGB sync, cable management and stress-testing.",
    features: [
      "Custom spec matching for budget ₹30K to ₹4 Lakhs",
      "Deepcool & Corsair AIO liquid cooling setup",
      "Overclocking & Cinebench / FurMark thermal stress test",
      "Free Genuine OS & Essential Game Launchers"
    ],
    startingPrice: "₹1,500 (Assembly) / Rigs from ₹32,000",
    estimatedTime: "2 - 4 Hours",
    popular: true,
    warranty: "3 Years On-Site Component Warranty",
    image: "/src/assets/images/hero_pc_banner_1787121523023.jpg"
  },
  {
    id: "speed-upgrade",
    title: "SSD & RAM Superfast Upgrades",
    category: "Upgrades",
    iconName: "Zap",
    description: "Make your 5-year-old slow laptop 10x faster with Gen4 NVMe M.2 SSDs and high-frequency dual-channel DDR4/DDR5 RAM.",
    features: [
      "10-second instant Windows bootup guaranteed",
      "100% safe data clone (all your files & apps intact)",
      "Crucial, Kingston, Samsung, WD high-speed drives",
      "Free comprehensive hardware health check"
    ],
    startingPrice: "₹1,250 (512GB NVMe M.2)",
    estimatedTime: "20 - 30 Minutes",
    popular: true,
    warranty: "3 to 5 Years Manufacturer Warranty",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "battery-adapter",
    title: "Original Battery & Adapter Replacement",
    category: "Laptop Repair",
    iconName: "BatteryCharging",
    description: "Original OEM battery packs and high-wattage power bricks (65W, 135W, 230W, Type-C 100W PD) for all major laptop brands.",
    features: [
      "Original Grade-A Lithium-ion cells",
      "Up to 4-7 hours real backup guarantee",
      "Surge-protected original laptop chargers",
      "Tested for overcharge & thermal safety"
    ],
    startingPrice: "₹1,450",
    estimatedTime: "Instant (Ready in Stock)",
    warranty: "1 Year Replacement Warranty",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hinge-body-repair",
    title: "Hinge Fabrication & Body Repair",
    category: "Laptop Repair",
    iconName: "Wrench",
    description: "Precision metal bracket reinforcement for broken laptop hinges, cracked palmrests, loose screen bezels, and corner falls.",
    features: [
      "Heavy-duty industrial resin & metal bracket weld",
      "Smooth one-finger lid opening restoration",
      "Prevents display screen pressure damage",
      "Saves expensive top-cover replacement cost"
    ],
    startingPrice: "₹650",
    estimatedTime: "1 - 2 Hours",
    warranty: "6 Months Structural Warranty",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  }
];

export interface StoreProduct {
  id: string;
  name: string;
  brand: string;
  category: "all" | "deals" | "laptops" | "gaming-pc" | "components" | "upgrades";
  specs: string[];
  mrp: string;
  offerPrice: string;
  discountPercent: string;
  stockStatus: "In Stock" | "Few Units Left" | "Hot Seller";
  warranty: string;
  image: string;
  badge: string;
  rating: number;
}

export const ALL_STORE_PRODUCTS: StoreProduct[] = [
  {
    id: "prod-1",
    name: "Dell Latitude 7400 Carbon Ultra-Slim",
    brand: "Dell",
    category: "laptops",
    specs: ["Intel Core i7-8665U (4.8 GHz)", "16GB DDR4 RAM", "512GB Fast NVMe SSD", "14.0\" FHD Anti-Glare IPS", "Backlit Keyboard + Fingerprint"],
    mrp: "₹89,990",
    offerPrice: "₹24,500",
    discountPercent: "72% OFF",
    stockStatus: "In Stock",
    warranty: "6 Months Shop Warranty",
    image: "/src/assets/images/refurbished_laptops_banner_1787121547485.jpg",
    badge: "🔥 Best for Coding & Office",
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
    image: "/src/assets/images/hero_pc_banner_1787121523023.jpg",
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
    image: "/src/assets/images/refurbished_laptops_banner_1787121547485.jpg",
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
    specs: ["Intel Core i5-12400F 6-Core", "NVIDIA GeForce RTX 4060 8GB OC", "16GB 3600MHz RGB RAM", "1TB Gen4 NVMe (4500MB/s)", "650W 80+ Bronze Certified PSU", "Panoramic Tempered Glass ARGB Case"],
    condition: "Brand New",
    mrp: "₹82,000",
    offerPrice: "₹67,999",
    warranty: "3 Years Brand Warranty on Components",
    image: "/src/assets/images/hero_pc_banner_1787121523023.jpg",
    badge: "1080p Ultra / 1440p Esports King"
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Alok Srivastava",
    location: "Fraser Road, Patna",
    rating: 5,
    date: "1 week ago",
    service: "Dell Gaming Motherboard Chip Repair",
    text: "Dell service center asked ₹14,000 to replace the entire motherboard for my G15. Next Gen Computer at Hariniwas complex diagnosed a shorted charging MOSFET and fixed it within 4 hours for just ₹1,650! Running cool since 3 weeks. Genuine honesty and great technical skills.",
    verified: true
  },
  {
    id: "rev-2",
    author: "Ritu Raj Singh",
    location: "Kankarbagh, Patna",
    rating: 5,
    date: "2 weeks ago",
    service: "Custom Editing PC Build (Ryzen 7 + RTX 4070)",
    text: "Best computer shop in Patna for custom PC builds! Got all parts at competitive Nehru Place Delhi rates right here in Dak Bunglow. They did immaculate cable management and installed Windows 11 with all drivers for free. Highly recommended!",
    verified: true
  },
  {
    id: "rev-3",
    author: "Manish Sinha",
    location: "Boring Road, Patna",
    rating: 5,
    date: "3 weeks ago",
    service: "MacBook Air Water Spill & Screen Repair",
    text: "Tea spilled on my MacBook Air M1. Other shops said it's dead. The engineers at Next Gen opened it, ultrasonic cleaned the logic board, replaced two SMD resistors, and restored it completely with all my files safe. 10/10 service!",
    verified: true
  },
  {
    id: "rev-4",
    author: "Dr. Ananya Mishra",
    location: "Bailey Road, Patna",
    rating: 5,
    date: "1 month ago",
    service: "Refurbished ThinkPad Purchase & SSD Upgrade",
    text: "Bought a refurbished Lenovo ThinkPad for clinic accounting & research. Condition is pristine like a brand new machine, and battery gives 6 hours easily. Very polite staff and transparent bills.",
    verified: true
  }
];

export const BEFORE_AFTER_CASES = [
  {
    id: "case-1",
    title: "Dell XPS 15 Fractured IPS Screen vs Fresh 100% sRGB Panel",
    category: "Screen Replacement",
    beforeText: "Shattered glass with ink bleed and vertical black bars after accidental backpack squeeze.",
    afterText: "Replaced with original OEM 400-nit InfinityEdge IPS display in 35 minutes. Zero dead pixels.",
    beforeImg: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    afterImg: "/src/assets/images/refurbished_laptops_banner_1787121547485.jpg",
    turnaround: "35 Minutes",
    savings: "Saved 65% vs Authorised Center"
  },
  {
    id: "case-2",
    title: "Burnt 19V Power Rail & Mosfet vs Precision Micro-Soldered Circuit",
    category: "Chip-Level Repair",
    beforeText: "Dead HP Envy x360. No power indicator LED, burnt smell, zero response to charger.",
    afterText: "Identified blown capacitor & buck regulator IC under 40x microscope. Replaced with OEM components.",
    beforeImg: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    afterImg: "/src/assets/images/chip_repair_lab_1787121576129.jpg",
    turnaround: "Same Day (3.5 Hrs)",
    savings: "Saved ₹16,000 Motherboard Swap"
  },
  {
    id: "case-3",
    title: "Choked 96°C Overheating Heatsink vs Clean Arctic MX-4 Setup",
    category: "Thermal Servicing",
    beforeText: "ASUS ROG gaming laptop thermal throttling to 15 FPS in GTA V and shutting down in 10 mins.",
    afterText: "Ultrasonic fin cleaning + Arctic MX-4 thermal paste. Temperatures stable at 68°C under max gaming load.",
    beforeImg: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80",
    afterImg: "/src/assets/images/hero_pc_banner_1787121523023.jpg",
    turnaround: "40 Minutes",
    savings: "Restored 100% Gaming Performance"
  }
];

export const FAQS = [
  {
    q: "Where is NEXT GEN COMPUTER located in Patna?",
    a: "We are centrally located at Shop No. 207, 2nd Floor, Hariniwas Complex, New Dak Bunglow Road, Fraser Road Area, Patna, Bihar 800001 (Just 1 minute walk from Dak Bunglow Chauraha, right opposite Maurya Lok area)."
  },
  {
    q: "How fast can you replace a broken laptop screen or upgrade SSD?",
    a: "We stock 95% of screen panels (14.0\", 15.6\", 120Hz/144Hz IPS) and NVMe SSDs in-store. Standard screen replacements and SSD/RAM upgrades are completed within 30 to 45 minutes right in front of you."
  },
  {
    q: "Do you repair dead laptops that official service centers rejected?",
    a: "Yes! Authorized brand centers usually only swap entire costly motherboards. At NEXT GEN COMPUTER, our master technicians specialize in chip-level circuit diagnosis, micro-soldering, and BGA reballing, saving you 60-80% of costs."
  },
  {
    q: "Do you offer warranty on repairs and refurbished laptops?",
    a: "Absolutely. All chip-level repairs come with a transparent 90-day testing warranty, new replacement parts carry 6 to 12 months warranty, and our certified refurbished business laptops include up to 6 months shop warranty plus lifetime tech support."
  },
  {
    q: "Can I customize a Gaming or Video Editing PC within my budget?",
    a: "Yes! Use our live PC Builder on this website or visit our Hariniwas Complex store. We build customized rigs for Valorant, GTA V, CS2, AutoCAD, 4K Premiere Pro, Blender 3D, and AI machine learning with competitive Delhi/Nehru Place wholesale pricing."
  }
];
