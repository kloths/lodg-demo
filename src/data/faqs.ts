import { Question } from "@/lib/types";

export const faqs: Question[] = [
  {
    question: "What is Lodg?",
    answer:
      "Lodg helps holiday rental hosts manage their listings in one place. Easily add detailed amenities and key details, offer guest add-ons, view analytics, and get the most out of your listings.",
  },
  {
    question: "What are add-ons?",
    answer:
      "Add-ons are extra services or products for your guests, which can be free (included in the stay) or paid. Examples include airport pickup, early check-in, late checkout, or local experiences. They provide extra value and enhance the guest experience.",
  },
  {
    question: "Do guests need an account to view listings?",
    answer:
      "No. Each listing has its own secure link with a PIN — no account required. If you change the PIN for a listing, the old link will stop working, so you’ll just need to share the new one with your guests.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes! You can upgrade or downgrade your plan any time to fit your needs.",
  },
] as const;
