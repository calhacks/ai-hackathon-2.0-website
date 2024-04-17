import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";

const ppNeueBit = localFont({
  src: "./PPNeueBit-Bold.otf",
  display: "swap",
  variable: "--font-pp-neue-bit",
});

const ppMondwest = localFont({
  src: "./PPMondwest-Regular.otf",
  display: "swap",
  variable: "--font-pp-mondwest",
});

const whyteInktrap = localFont({
  src: "./WhyteInktrap-Regular.ttf",
  display: "swap",
  variable: "--font-whyte-inktrap",
});

const openSans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const viewport: Viewport = {
  themeColor: "#000911",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "UC Berkeley AI Hackathon - Coming June 22-23, 2024",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  creator: "hackathonsatberkeley",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
    icon: "https://calhacks-sierra.s3-us-west-2.amazonaws.com/assets/branding/favicon.ico",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${whyteInktrap.variable} ${ppNeueBit.variable} ${ppMondwest.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
