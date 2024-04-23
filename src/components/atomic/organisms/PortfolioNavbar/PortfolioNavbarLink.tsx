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
  icon?: IPortfolioIcon;
}

export default function PortfolioNavbarLink(props: IPortfolioNavbarLink) {
  const pathname = usePathname();

  return (
    <Link
      className={`flex flex-col items-center bg-transparent py-3 px-5 font-light text-base ${
        pathname === props.link?.href && "font-semibold"
      }`}
      href={props.link.href}>
      {props.icon && (
        <Image
          width={24}
          height={24}
          src={props.icon.src}
          alt={`${props.icon.alt}`}
          className="lg:hidden"
        />
      )}

      {props.link.children}
    </Link>
  );
}
