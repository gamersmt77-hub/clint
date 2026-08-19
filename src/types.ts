export interface ServiceItem {
  id: string;
  title: string;
  category: "Laptop Repair" | "PC Assembly" | "Upgrades" | "Specialized";
  iconName: string;
  description: string;
  features: string[];
  startingPrice: string;
  estimatedTime: string;
  popular?: boolean;
  warranty: string;
  image: string;
}

export interface ProductItem {
  id: string;
  name: string;
  brand: string;
  category: "Refurbished Laptop" | "Gaming PC" | "Component" | "Accessory";
  specs: string[];
  condition: "Brand New" | "Certified Refurbished (Grade A++)" | "Custom Built";
  mrp: string;
  offerPrice: string;
  warranty: string;
  image: string;
  badge?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  text: string;
  verified: boolean;
}

export interface DiagnosticResult {
  probableCause: string;
  severity: "Low" | "Moderate" | "High" | "Critical";
  estimatedRepairTime: string;
  priceRangeINR: string;
  recommendations: string[];
  nextGenAdvantage: string;
}

export interface PCBuildRecommendation {
  buildName: string;
  totalEstimatedINR: string;
  fpsEstimate: { [game: string]: string };
  components: { category: string; item: string; approxPrice: string }[];
  builderPerks: string[];
}
