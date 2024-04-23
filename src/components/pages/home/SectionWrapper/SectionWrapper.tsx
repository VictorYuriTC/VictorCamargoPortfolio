import { HtmlHTMLAttributes } from "react";

export default function SectionWrapper(
  props: HtmlHTMLAttributes<HTMLDivElement>
) {
  return (
    <section
      className={`min-h-[95dvh] mt-16 lg:mt-4 xl:mt-0 ${props.className}`}>
      {props.children}
    </section>
  );
}
