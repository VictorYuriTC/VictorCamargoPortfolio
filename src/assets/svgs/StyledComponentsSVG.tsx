import { SVGProps } from "react";

export default function StyledComponentsSVG(props: SVGProps<SVGElement>) {
  return (
    <svg
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={props.width || "24px"}
      height={props.height || "24px"}>
      <g fill="none" fillRule="evenodd">
        <text
          fill="#000"
          fontSize="75"
          letterSpacing=".5"
          transform="translate(15 80)">
          <tspan x="0" y="0">
            💅
          </tspan>
        </text>
      </g>
    </svg>
  );
}
