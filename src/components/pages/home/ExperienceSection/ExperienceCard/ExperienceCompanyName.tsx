import Link from "next/link";
import { ICompany } from "./ExperienceCard";

export interface IExperienceCompanyName {
  company: ICompany;
}

export default function ExperienceCompanyName(props: IExperienceCompanyName) {
  if (props.company.websiteLink) {
    return (
      <div className="flex flex-row">
        <Link
          passHref={true}
          href={props.company.websiteLink.href}
          className={`text-lg font-semibold text-purple-600 hover:text-purple-500 ${props.company.websiteLink}`}>
          {props.company.name.children}
        </Link>
      </div>
    );
  }

  return (
    <span
      className={`text-lg font-semibold text-black dark:text-white ${props.company.name.className}`}>
      {props.company.name.children}
    </span>
  );
}
