import "./globals.css";

import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

export const metadata = {
  title: "Global Village Academy | Your Global Journey Starts Here",
  description: "Global Village Academy is your trusted partner in navigating the path to a world-class international education. We turn your study abroad dreams into reality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
