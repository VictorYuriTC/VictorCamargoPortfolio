import PortfolioNavbarLink from "./PortfolioNavbarLink";

import UserSVG from "@/assets/svgs/UserSVG";
import SuitcaseSVG from "@/assets/svgs/SuitcaseSVG";
import SkillsSVG from "@/assets/svgs/SkillsSVG";
import PhoneSVG from "@/assets/svgs/PhoneSVG";

export default function PortfolioNavbar() {
  const SVG_SIZE = 24;

  return (
    <nav className="w-full fixed left-0 bottom-0 grid grid-flow-col backdrop-blur-lg bg-[theme(colors.gray.50)50] lg:bottom-auto lg:left-auto lg:right-0 lg:top-0 lg:flex lg:flex-row lg:items-center lg:justify-end lg:gap-x-5 lg:py-2 dark:bg-[#00000099]">
      <PortfolioNavbarLink
        link={{
          children: "About",
          href: "about-section",
        }}
        icon={{
          node: (
            <UserSVG
              width={SVG_SIZE}
              height={SVG_SIZE}
              className="fill-black dark:fill-white"
            />
          ),
        }}
      />

      <PortfolioNavbarLink
        link={{
          children: "Experience",
          href: "experience-section",
        }}
        icon={{
          node: (
            <SuitcaseSVG
              width={SVG_SIZE}
              height={SVG_SIZE}
              className="fill-black dark:fill-white"
            />
          ),
          alt: 'Link to "Experience" section',
        }}
      />

      <PortfolioNavbarLink
        link={{
          children: "Skills",
          href: "skills-section",
        }}
        icon={{
          node: (
            <SkillsSVG
              width={SVG_SIZE}
              height={SVG_SIZE}
              className="fill-black dark:fill-white"
            />
          ),
          alt: 'Link to "Skills" section',
        }}
      />

      <PortfolioNavbarLink
        link={{
          children: "Contact",
          href: "contact-section",
        }}
        icon={{
          node: (
            <PhoneSVG
              width={SVG_SIZE}
              height={SVG_SIZE}
              className="fill-black dark:fill-white"
            />
          ),
          alt: 'Link to "Contact" section',
        }}
      />
    </nav>
  );
}
