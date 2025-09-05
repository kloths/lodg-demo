import { Feature } from "@/lib/types";
import {
  BlocksIcon,
  ChartBarIcon,
  FileTextIcon,
  HomeIcon,
  ShareIcon,
  SofaIcon,
} from "lucide-react";

export const features: Feature[] = [
  {
    title: "Create listings",
    description:
      "Set up professional rental listings in minutes, saving you from repeating details for every guest.",
    icon: HomeIcon,
  },
  {
    title: "Add detailed amenities",
    description:
      "Add amenities with details guests always ask about, like Wi-Fi with the network and password.",
    icon: SofaIcon,
  },
  {
    title: "Add details",
    description:
      "Share important information beyond amenities — like check-in instructions, house rules, or local recommendations — so guests have everything in one place.",
    icon: FileTextIcon,
  },
  {
    title: "Offer guest add-ons",
    description:
      "Increase revenue or improve guest experiences with paid or free add-ons, like airport pickup, early check-in, or late checkout.",
    icon: BlocksIcon,
  },
  {
    title: "Share listings with guests",
    description:
      "Easily share your listings via a secure URL with a PIN, so only your actual guests can access the listing.",
    icon: ShareIcon,
  },
  {
    title: "Track performance",
    description:
      "Get insights into views, engagement, and add-on sales to optimize your listings.",
    icon: ChartBarIcon,
  },
] as const;
