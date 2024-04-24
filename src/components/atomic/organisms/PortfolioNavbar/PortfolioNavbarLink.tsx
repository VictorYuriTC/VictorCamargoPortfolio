"use client";

import { IPortfolioIcon } from "@/typing/interfaces/IPortfolioIcon/IPortfolioIcon";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface IPortfolioNavbarLink {
  link: LinkProps & {
    children: ReactNode;
  };
  icon?: {
    node: ReactNode;
    alt?: string;
  };
}

export default function PortfolioNavbarLink(props: IPortfolioNavbarLink) {
  const pathname = usePathname();

  return (
    <Link
      className={`flex flex-col items-center bg-transparent py-3 px-5 text-sm rounded-full font-medium dark:font-light`}
      href={`/${pathname}#${props.link.href}`}>
      <div className="flex flex-col items-center pb-1 lg:hidden">
        {props.icon?.node}
      </div>

      {props.link.children}
    </Link>
  );
}
