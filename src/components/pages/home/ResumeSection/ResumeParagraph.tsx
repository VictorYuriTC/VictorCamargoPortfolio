import { HtmlHTMLAttributes } from "react";

export interface IResumeParagraph
  extends HtmlHTMLAttributes<HTMLParagraphElement> {}

export default function ResumeParagraph(props: IResumeParagraph) {
  return (
    <p className={`text-lg font-light ${props.className}`}>{props.children}</p>
  );
}
