import { HtmlHTMLAttributes } from "react";

export default function SectionWrapper(
  props: HtmlHTMLAttributes<HTMLDivElement> & {
    id: string;
  }
) {
  return (
    <section
      id={props.id}
      className={`min-h-[95dvh] pt-6 mt-10 lg:mt-4 xl:mt-0 ${props.className}`}>
      {props.children}
    </section>
  );
}
