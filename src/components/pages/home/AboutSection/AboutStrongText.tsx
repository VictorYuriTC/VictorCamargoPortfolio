import { HtmlHTMLAttributes } from "react";

export default function AboutStrongText(
  props: HtmlHTMLAttributes<HTMLSpanElement>
) {
  return <strong className="text-purple-500">{props.children}</strong>;
}
