import PortfolioFooter from "@/components/atomic/organisms/PortfolioFooter/PortfolioFooter";
import PortfolioNavbar from "@/components/atomic/organisms/PortfolioNavbar/PortfolioNavbar";
import AboutSection from "@/components/pages/home/AboutSection/AboutSection";
import ContactSection from "@/components/pages/home/ContactSection/ContactSection";
import ExperienceSection from "@/components/pages/home/ExperienceSection/ExperienceSection";
import LandingSection from "@/components/pages/home/LandingSection/LandingSection";
import ResumeSection from "@/components/pages/home/ResumeSection/ResumeSection";
import SkillsSection from "@/components/pages/home/SkillsSection/SkillsSection";
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
  appleWebApp: {
    title: "Victor Camargo's Portfolio",
  },

  authors: [
    {
      name: "Victor Yuri Tavares de Camargo",
      url: "https://victorcamargodev.com",
    },
  ],

  category: "portfolio",

  creator: "Victor Yuri Tavares de Camargo",

  description: "My two cents about me",

  keywords: [
    "victor",
    "camargo",
    "victor camargo",
    "portfolio",
    "victor camargo portfolio",
    "victor yuri tavares de camargo",
  ],

  openGraph: {
    countryName: "",
    emails: ["victoryuritc@yahoo.com"],
    description: "Victor Camargo's Portoflio",
    type: "profile",
    firstName: "Victor",
    lastName: "Camargo",
    siteName: "victorcamargodev",
    title: "Victor Camargo's Portfolio",
    url: "https://victorcamargodev.com",
    phoneNumbers: "+5541997248930",
    determiner: "the",
  },

  title: "Victor Camargo's Portfolio",
};
