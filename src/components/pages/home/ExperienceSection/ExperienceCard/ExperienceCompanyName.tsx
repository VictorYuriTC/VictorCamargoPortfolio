import { HtmlHTMLAttributes } from "react";

export interface IExperienceCompanyName
  extends HtmlHTMLAttributes<HTMLParagraphElement> {}

export default function ExperienceCompanyName(props: IExperienceCompanyName) {
  return (
    <p className={`text-lg font-semibold ${props.className}`}>
      {props.children}
    </p>
  );
}
