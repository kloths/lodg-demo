import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Lodg | Simplify managing your holiday rentals",
  description:
    "Lodg helps hosts manage listings with detailed amenities, key details, and guest add-ons—saving time, boosting income, and enhancing guest experiences.",
  keywords: [
    "holiday rentals",
    "rental management",
    "detailed amenities",
    "guest add-ons",
    "host dashboard",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
