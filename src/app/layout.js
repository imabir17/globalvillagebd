import "./globals.css";

import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

export const metadata = {
  title: "Global Village Academy | Your Global Journey Starts Here",
  description: "Global Village Academy is your trusted partner in navigating the path to a world-class international education. We turn your study abroad dreams into reality.",
  keywords: ["study abroad", "student visa bangladesh", "japanese language course dhaka", "university admission", "global village academy"],
  openGraph: {
    title: "Global Village Academy",
    description: "Your trusted partner in navigating the path to a world-class international education.",
    url: "https://www.globalvillageacademybd.com",
    siteName: "Global Village Academy",
    locale: "en_US",
    type: "website",
  },
};

import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
        <Analytics />
      </body>
    </html>
  );
}
