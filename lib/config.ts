import { SiteConfig } from "@/types";

const config = {
  isProduction: process.env.NODE_ENV === "production",
  baseUrl:
    process.env.NODE_ENV === "production"
      ? "https://ai.calhacks.io/"
      : "http://localhost:3000",
};

export const siteConfig: SiteConfig = {
  name: "UC Berkeley AI Hackathon",
  description: "UC Berkeley AI Hackathon x Berkeley Skydeck - June 22-23, 2024",
  keywords: [],
  domain: "ai.calhacks.io",
  url: "https://ai.calhacks.io",
  ogImage:
    "https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/ai-hackathon-2.0/og.png",
  links: {
    twitter: "https://twitter.com/CalHacks",
  },
};

export default config;
