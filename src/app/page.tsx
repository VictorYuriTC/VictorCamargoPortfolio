import PortfolioFooter from "@/components/atomic/organisms/PortfolioFooter/PortfolioFooter";
import PortfolioNavbar from "@/components/atomic/organisms/PortfolioNavbar/PortfolioNavbar";
import AboutSection from "@/components/pages/home/AboutSection/AboutSection";
import ContactSection from "@/components/pages/home/ContactSection/ContactSection";
import ExperienceSection from "@/components/pages/home/ExperienceSection/ExperienceSection";
import LandingSection from "@/components/pages/home/LandingSection/LandingSection";
import ProjectsSection from "@/components/pages/home/ProjectsSection/ProjectsSection";
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

          <ProjectsSection />

          <ResumeSection />

          <SkillsSection />

          <ContactSection />

          <PortfolioFooter />
        </div>
      </main>
    </>
  );
}

const WEBSITE_DESCRIPTION =
  "Victor Camargo's Portfolio - My two cents about me | Portfolio developed by Victor Yuri Tavares de Camargo, frontend developer and mobile developer based on Curitiba, Paraná, Brazil. VictorYuriTC on GitHub.";

const VICTOR_CAMARGO_PHOTO =
  "https://victorcamargodev.com/victor-camargo-photo.jpeg";

const VICTOR_CAMARGO_SITE = "https://victorcamargodev.com";

export const metadata: Metadata = {
  description: WEBSITE_DESCRIPTION,

  generator: "Next.js",
  metadataBase: new URL(VICTOR_PORTFOLIO_BASE_URL),
  appleWebApp: {
    title: "Victor Camargo Dev",
  },

  icons: "/favicon.ico",

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
  manifest: new URL(`${VICTOR_PORTFOLIO_BASE_URL}/manifest.webmanifest`),

  keywords: [
    "victor",
    "yuri",
    "tavares",
    "camargo",
    "victor yuri tavares de camargo",
    "portfolio",
    "dev",
    "xaxim",
    "curitiba",
    "paraná",
    "brasil",
    "frontend developer",
    "mobile developer",
  ],

  twitter: {
    title: "Victor Camargo Dev",
    description: WEBSITE_DESCRIPTION,
    creator: "Victor Yuri Tavares de Camargo",
    card: "summary",
    images: VICTOR_CAMARGO_PHOTO,
    site: VICTOR_CAMARGO_SITE,
  },

  applicationName: "Victor Camargo Dev",

  openGraph: {
    countryName: "brasil",
    emails: ["victoryuritc@yahoo.com"],
    description: WEBSITE_DESCRIPTION,
    type: "profile",
    firstName: "Victor",
    lastName: "Camargo",
    siteName: "victorcamargodev",
    title: "Victor Camargo Dev",
    url: new URL(VICTOR_PORTFOLIO_BASE_URL),
    phoneNumbers: "+5541997248930",
    determiner: "the",
    images: VICTOR_CAMARGO_PHOTO,
  },
};
