import { HtmlHTMLAttributes } from "react";

export interface IExperienceRole
  extends HtmlHTMLAttributes<HTMLParagraphElement> {}

export default function ExperienceRole(props: IExperienceRole) {
  return (
    <p className={`text-2xl font-bold ${props.className}`}>{props.children}</p>
  );
}
