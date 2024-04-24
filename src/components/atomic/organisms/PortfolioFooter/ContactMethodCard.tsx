import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

export interface IContactMethodCard {
  icon: ReactNode;
  text:
    | "victoryuritc@yahoo.com"
    | "+5541997248930"
    | "GitHub"
    | "LinkedIn"
    | "Instagram";
  link?: LinkProps;
}

export default function ContactMethodCard(props: IContactMethodCard) {
  const wrapperClassName = "flex flex-row items-center gap-x-2";

  if (props.link) {
    return (
      <Link
        href={props.link.href}
        passHref={true}
        className={`transition-colors duration-500 text-black dark:text-white ${wrapperClassName}`}>
        {props.icon}
      </Link>
    );
  }

  return (
    <div className={wrapperClassName}>
      {props.icon}

      <span className="text-black dark:text-white">{props.text}</span>
    </div>
  );
}
