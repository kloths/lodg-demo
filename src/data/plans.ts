import { Plan } from "@/lib/types";

export const plans: Plan[] = [
  {
    name: "Solo",
    description: "Perfect for hosts with a single property",
    price: 14,
    features: [
      "1 listing",
      "Basic analytics",
      "Email support",
      "Listing pages with text & images",
      "Unlimited add-ons",
      "Secure guest access via PIN",
    ],
    billing: "monthly",
  },
  {
    name: "Growth",
    description: "Perfect for hosts with multiple properties",
    price: 39,
    features: [
      "Up to 5 listings",
      "Enhanced analytics",
      "Priority email support",
    ],
    includesPlan: "Solo",
    billing: "monthly",
  },
  {
    name: "Pro",
    description: "Perfect for professional hosts",
    price: 79,
    features: [
      "Unlimited listings",
      "Comprehensive analytics & reports",
      "Dedicated support",
    ],
    includesPlan: "Growth",
    billing: "monthly",
  },
] as const;
