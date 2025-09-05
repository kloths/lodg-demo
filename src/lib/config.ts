export const config = {
  name: "Lodg",
  url: "https://lodg.app",
  navigation: {
    header: [
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQ", href: "/#faq" },
    ],
    footer: [
      {
        category: "Product",
        links: [{ label: "Features", href: "/#features" }],
      },
      {
        category: "Resources",
        links: [
          { label: "Pricing", href: "/#pricing" },
          { label: "FAQ", href: "/#faq" },
        ],
      },
      {
        category: "Support",
        links: [{ label: "Contact", href: "/contact" }],
      },
    ],
  },
} as const;
