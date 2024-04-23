import { HtmlHTMLAttributes } from "react";

export interface ISectionTitle extends HtmlHTMLAttributes<HTMLSpanElement> {
  hasDefaultMarginTop: boolean;
  hasDefaultMarginBottom: boolean;
}

export default function SectionTitle(props: ISectionTitle) {
  return (
    <h3
      className={`${props.hasDefaultMarginTop && "mt-12"} ${
        props.hasDefaultMarginBottom && "mb-12"
      }`}>
      <strong className={`text-4xl`}>{props.children}</strong>
    </h3>
  );
}
