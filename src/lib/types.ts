import { LucideIcon } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Plan {
  name: string;
  description?: string;
  price: number | null;
  features: string[];
  includesPlan?: string;
  billing: "one-time" | "monthly" | "annual";
}

export interface Question {
  question: string;
  answer: string;
}
