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
      className={`font-normal py-3 px-5 rounded-lg active:bg-purple-900 ${
        pathname === props.link?.href && "font-medium bg-purple-950"
      }`}
      href={props.link.href}>
      {props.link.children}
    </Link>
  );
}
