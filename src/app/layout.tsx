import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { VICTOR_PORTFOLIO_BASE_URL } from "@/constants";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // `scrollBehavior: 'smooth'` as reference: https://stackoverflow.com/questions/69825670/smooth-scroll-in-next-js
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: "Victor Camargo Dev",
    template: "%s | Victor Camargo Dev",
  },
  description:
    "Victor Camargo Dev | Portfolio website created by Victor Yuri Tavares de Camargo - a frontend developer and mobile developer based on Curitiba, Paraná, Brazil. Let me give my two cents about me.",
  metadataBase: new URL(VICTOR_PORTFOLIO_BASE_URL),
};
