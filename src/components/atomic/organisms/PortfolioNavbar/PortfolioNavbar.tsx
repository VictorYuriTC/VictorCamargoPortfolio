import PortfolioNavbarLink from "./PortfolioNavbarLink";

export default function PortfolioNavbar() {
  return (
    <nav className="flex flex-row items-center justify-end gap-x-5 mx-6 mt-4">
      <PortfolioNavbarLink
        link={{
          children: "Home",
          href: "/",
        }}
      />

      <PortfolioNavbarLink
        link={{
          children: "Portfolio",
          href: "/portfolio",
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
