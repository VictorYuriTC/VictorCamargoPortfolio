import { HtmlHTMLAttributes } from "react";

export default function AboutParagraph(
  props: HtmlHTMLAttributes<HTMLParagraphElement>
) {
  return (
    <p className={`text-lg font-extralight ${props.className}`}>
      {props.children}
    </p>
  );
}
