import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1F3A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pentagoncreedintegrations.com"),
  title: {
    default: "Pentagon Creed Integrations — Strategy. Creativity. Integration.",
    template: "%s | Pentagon Creed Integrations",
  },
  description:
    "Pentagon Creed Integrations is a multidisciplinary business solutions company helping organisations build stronger brands, digital experiences, market presence and business operations.",
  keywords: [
    "brand development",
    "SEO agency",
    "web development",
    "market activation",
    "media advisory",
    "business solutions Nigeria",
    "Pentagon Creed Integrations",
  ],
  authors: [{ name: "Pentagon Creed Integrations" }],
  creator: "Pentagon Creed Integrations",
  publisher: "Pentagon Creed Integrations",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.pentagoncreedintegrations.com",
    siteName: "Pentagon Creed Integrations",
    title: "Pentagon Creed Integrations — Strategy. Creativity. Integration.",
    description:
      "Multidisciplinary business solutions: SEO, Web Development, Brand Development, Market Activation, and Media Advisory.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pentagon Creed Integrations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pentagon Creed Integrations",
    description:
      "Strategy. Creativity. Integration. Building brands that move business forward.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
