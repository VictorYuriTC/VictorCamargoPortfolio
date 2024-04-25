import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { VICTOR_PORTFOLIO_BASE_URL } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // `scrollBehavior: 'smooth'` as reference: https://stackoverflow.com/questions/69825670/smooth-scroll-in-next-js
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: "Victor Camargo Dev",
    template: "%s | Victor Camargo Dev",
  },
  description: "Victor Camargo | My two cents about me",
  metadataBase: new URL(VICTOR_PORTFOLIO_BASE_URL),
};
