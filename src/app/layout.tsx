import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "../components/shared/SmoothScrollProvider";
import { Preloader } from "../components/shared/Preloader";
import { CustomCursor } from "../components/shared/CustomCursor";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Akshita Sharma | Visual Designer",
    template: "%s | Akshita Sharma"
  },
  description: "Visual Designer crafting cohesive brand identities, editorial visuals, and seamless digital experiences.",
  keywords: ["visual designer", "graphic designer", "branding", "portfolio", "Akshita Sharma", "UI/UX", "Art Direction"],
  authors: [{ name: "Akshita Sharma" }],
  creator: "Akshita Sharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akshitasharma.com", // Placeholder
    title: "Akshita Sharma | Visual Designer",
    description: "Visual Designer crafting cohesive brand identities, editorial visuals, and seamless digital experiences.",
    siteName: "Akshita Sharma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshita Sharma | Visual Designer",
    description: "Visual Designer crafting cohesive brand identities, editorial visuals, and seamless digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased`}
      >
        <SmoothScrollProvider>
          <Preloader />
          <CustomCursor />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
