export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  iconName: string;
  description: string;
  features?: string[];
  startingPrice: string;
  turnaround: string;
  estimatedTime?: string;
  popular?: boolean;
  warranty: string;
  highlights?: string[];
  image?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  specs: string[];
  condition: string;
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
  service?: string;
  serviceUsed?: string;
  text?: string;
  comment?: string;
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
