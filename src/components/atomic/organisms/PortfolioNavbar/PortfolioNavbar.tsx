import PortfolioNavbarLink from "./PortfolioNavbarLink";

import portfolioIcon from "@/assets/dart-language.svg";
import homeIcon from "@/assets/home.svg";
import userIcon from "@/assets/user.svg";

export default function PortfolioNavbar() {
  return (
    <nav className="bg-[#00000099] backdrop-blur-lg w-full fixed left-0 bottom-0 mx-6 grid grid-flow-col lg:bottom-auto lg:left-auto lg:right-0 lg:top-0 lg:flex lg:flex-row lg:items-center lg:justify-end lg:gap-x-5 lg:py-2">
      <PortfolioNavbarLink
        link={{
          children: "Home",
          href: "/",
        }}
        icon={{
          src: homeIcon,
          alt: 'Link to "Home"',
        }}
      />

      <PortfolioNavbarLink
        link={{
          children: "Portfolio",
          href: "/portfolio",
        }}
        icon={{
          src: userIcon,
          alt: 'Link to "Portfolio"',
        }}
      />

      <PortfolioNavbarLink
        link={{
          children: "Animations",
          href: "/animations",
        }}
      />
    </nav>
  );
}
