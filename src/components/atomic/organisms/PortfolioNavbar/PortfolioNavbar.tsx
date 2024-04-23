import PortfolioNavbarLink from "./PortfolioNavbarLink";

import userIcon from "@/assets/user.svg";
import suitcaseIcon from "@/assets/suitcase.svg";
import skillsIcon from "@/assets/skills.svg";
import emailIcon from "@/assets/email.svg";

export default function PortfolioNavbar() {
  return (
    <nav className="w-full fixed left-0 bottom-0 grid grid-flow-col backdrop-blur-lg bg-[theme(colors.gray.50)50] lg:bottom-auto lg:left-auto lg:right-0 lg:top-0 lg:flex lg:flex-row lg:items-center lg:justify-end lg:gap-x-5 lg:py-2 dark:bg-[#00000099]">
      <PortfolioNavbarLink
        link={{
          children: "About",
          href: "about-section",
        }}
        icon={{
          src: userIcon,
          alt: 'Link to "About" section',
        }}
      />

      <PortfolioNavbarLink
        link={{
          children: "Experience",
          href: "experience-section",
        }}
        icon={{
          src: suitcaseIcon,
          alt: 'Link to "Experience" section',
        }}
      />

      <PortfolioNavbarLink
        link={{
          children: "Skills",
          href: "skills-section",
        }}
        icon={{
          src: skillsIcon,
          alt: 'Link to "Skills" section',
        }}
      />

      <PortfolioNavbarLink
        link={{
          children: "Contact",
          href: "contact-section",
        }}
        icon={{
          src: emailIcon,
          alt: 'Link to "Contact" section',
        }}
      />
    </nav>
  );
}
