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
        target="_blank"
        rel="noopener noreferrer"
        aria-label={props.text}
        className={`group rounded-full p-1 text-black transition-transform duration-300 hover:-translate-y-1 hover:scale-125 dark:text-white ${wrapperClassName}`}>
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
