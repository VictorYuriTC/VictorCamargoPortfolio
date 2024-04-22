import { HtmlHTMLAttributes } from "react";

export default function SectionWrapper(
  props: HtmlHTMLAttributes<HTMLDivElement>
) {
  return (
    <section className={`min-h-[95dvh] ${props.className}`}>
      {props.children}
    </section>
  );
}
