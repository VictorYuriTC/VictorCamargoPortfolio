import { SVGProps } from "react";

export default function VueSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={props.width || "100px"}
      height={props.height || "100px"}
      fill={props.fill || "white"}
      strokeWidth={props.strokeWidth || "1px"}
      className={`stroke-transparent ${props.className}`}>
      <path fill="#41B883" d="m2 4 14 24L30 4h-5.5L16 18.5 7.5 4z"></path>
      <path
        fill="#35495E"
        d="M7.5 4 16 18.5 24.5 4h-5l-3.435 6.013L12.5 4z"></path>
    </svg>
  );
}
