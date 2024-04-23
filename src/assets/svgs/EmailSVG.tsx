import { SVGProps } from "react";

export default function EmailSVG(props: SVGProps<SVGElement>) {
  return (
    <svg
      className={props.className}
      fill={props.fill || "#ffffff"}
      width={props.width || "24px"}
      height={props.height || "24px"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z" />
    </svg>
  );
}
