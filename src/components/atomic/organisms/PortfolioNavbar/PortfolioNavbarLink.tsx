"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface IPortfolioNavbarLink {
  link: LinkProps & {
    children: ReactNode;
  };
}

export default function PortfolioNavbarLink(props: IPortfolioNavbarLink) {
  const pathname = usePathname();

  return (
    <Link
      className={`bg-transparent py-3 px-5 font-light ${
        pathname === props.link?.href && "text-xl font-semibold"
      }`}
      href={props.link.href}>
      {props.link.children}
    </Link>
  );
}
