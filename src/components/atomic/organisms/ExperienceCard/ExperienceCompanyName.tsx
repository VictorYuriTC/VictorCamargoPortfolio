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
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="group/company-link inline-flex items-center gap-2 transition-all duration-300">
          <span className="text-lg font-semibold text-purple-600 transition-colors duration-300 group-hover/company-link:text-purple-500 dark:text-purple-400 dark:group-hover/company-link:text-purple-300">
            {props.company.name.children}
          </span>

          <span className="inline-flex items-center rounded-full border border-purple-300 px-2 py-0.5 text-xs font-medium text-purple-600 transition-all duration-300 group-hover/company-link:-translate-y-px group-hover/company-link:border-purple-500 group-hover/company-link:bg-purple-50 group-hover/company-link:text-purple-500 dark:border-purple-700 dark:text-purple-400 dark:group-hover/company-link:border-purple-500 dark:group-hover/company-link:bg-purple-950/60 dark:group-hover/company-link:text-purple-300">
            Visit
          </span>
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
