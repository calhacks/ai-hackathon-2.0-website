import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

const ppNeueBit = localFont({
  src: "./PPNeueBit-Bold.otf",
  display: "swap",
  variable: "--font-pp-neue-bit",
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

export const metadata: Metadata = {
  title: "UC Berkeley AI Hackathon",
  description: "UC Berkeley AI Hackathon x Berkeley Skydeck - June 22-23, 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${whyteInktrap.variable} ${ppNeueBit.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
