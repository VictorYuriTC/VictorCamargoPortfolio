import PortfolioFooter from "@/components/atomic/organisms/PortfolioFooter/PortfolioFooter";
import PortfolioNavbar from "@/components/atomic/organisms/PortfolioNavbar/PortfolioNavbar";
import AboutSection from "@/components/pages/home/AboutSection/AboutSection";
import ContactSection from "@/components/pages/home/ContactSection/ContactSection";
import ExperienceSection from "@/components/pages/home/ExperienceSection/ExperienceSection";
import LandingSection from "@/components/pages/home/LandingSection/LandingSection";
import ResumeSection from "@/components/pages/home/ResumeSection/ResumeSection";
import SkillsSection from "@/components/pages/home/SkillsSection/SkillsSection";
import { VICTOR_PORTFOLIO_BASE_URL } from "@/constants";
import { Metadata } from "next";

export default function Home() {
  return (
    <>
      <PortfolioNavbar />

      <main className="px-8 lg:px-16 xl:px-36">
        <div className="flex flex-col pb-28 lg:pb-10">
          <LandingSection />

          <AboutSection />

          <ExperienceSection />

          <ResumeSection />

          <SkillsSection />

          <ContactSection />

          <PortfolioFooter />
        </div>
      </main>
    </>
  );
}

export const metadata: Metadata = {
  description:
    "Victor Camargo's Portfolio - Frontend Developer | My two cents about me",

  generator: "Next.js",
  metadataBase: new URL(VICTOR_PORTFOLIO_BASE_URL),
  appleWebApp: {
    title: "Victor Camargo Dev",
  },

  icons: "/victor-camargo-dev-website-logo.png",

  appLinks: {
    web: {
      url: new URL(VICTOR_PORTFOLIO_BASE_URL),
    },

    iphone: {
      url: new URL(VICTOR_PORTFOLIO_BASE_URL),
    },

    windows: {
      url: new URL(VICTOR_PORTFOLIO_BASE_URL),
    },

    ios: {
      url: new URL(VICTOR_PORTFOLIO_BASE_URL),
    },

    windows_universal: {
      url: new URL(VICTOR_PORTFOLIO_BASE_URL),
    },

    windows_phone: {
      url: new URL(VICTOR_PORTFOLIO_BASE_URL),
    },

    ipad: {
      url: new URL(VICTOR_PORTFOLIO_BASE_URL),
    },
  },

  publisher: "Victor Camargo",

  authors: [
    {
      name: "Victor Yuri Tavares de Camargo",
      url: new URL(VICTOR_PORTFOLIO_BASE_URL),
    },
  ],

  category: "portfolio",

  creator: "Victor Yuri Tavares de Camargo",
  manifest: new URL(`${VICTOR_PORTFOLIO_BASE_URL}/manifest.json`),

  keywords: [
    "victor",
    "yuri",
    "tavares",
    "camargo",
    "victor yuri",
    "victor tavares",
    "victor camargo",
    "yuri tavares",
    "yuri camargo",
    "tavares de camargo",
    "victor yuri tavares de camargo",
    "victor tavares de camargo",
    "victor de camargo",
    "yuri tavares de camargo",
    "portfolio",
    "dev",
    "victorcamargodev",
    "victorcamargo",
    "victor camargo dev",
    "devcuritiba",
    "dev curitiba",
    "victor camargo portfolio",
    "frontend developer",
    "victor frontend developer",
    "victor camargo frontend developer",
    "victor mobile developer",
    "victor camargo mobile developer",
    "mobile developer curitiba",
    "frontend developer curitiba",
    "front-end developer curitiba",
    "victor camargo curitiba",
    "victor yuri tavares de camargo curitiba",
    "frontend developer xaxim",
    "desenvolvedor frontend xaxim",
    "developer xaxim",
    "desenvolvedor xaxim",
    "desenvolvedor curitiba",
  ],

  twitter: {
    title: "Victor Camargo Dev",
    description: "Victor Camargo's Portfolio - My two cents about me",
    creator: "Victor Yuri Tavares de Camargo",
  },

  applicationName: "Victor Camargo Dev",

  openGraph: {
    countryName: "brasil",
    emails: ["victoryuritc@yahoo.com"],
    description: "Victor Camargo's Portoflio",
    type: "profile",
    firstName: "Victor",
    lastName: "Camargo",
    siteName: "victorcamargodev",
    title: "Victor Camargo Dev",
    url: new URL(VICTOR_PORTFOLIO_BASE_URL),
    phoneNumbers: "+5541997248930",
    determiner: "the",
  },
};
