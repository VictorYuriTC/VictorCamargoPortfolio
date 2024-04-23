import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victor Camargo's Portfolio",
  description: "Victor Camargo's Portfolio",
};

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
