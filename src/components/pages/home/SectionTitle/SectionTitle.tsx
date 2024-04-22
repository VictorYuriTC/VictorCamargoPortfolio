import { HtmlHTMLAttributes } from "react";

export interface ISectionTitle extends HtmlHTMLAttributes<HTMLSpanElement> {}

export default function SectionTitle(props: ISectionTitle) {
  return <strong className="text-4xl">{props.children}</strong>;
}
