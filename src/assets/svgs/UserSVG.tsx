import { SVGProps } from "react";

export default function UserSVG(props: SVGProps<SVGElement>) {
  return (
    <svg
      className={props.className}
      fill={props.fill || "#ffffff"}
      width={props.width || "800px"}
      height={props.height || "800px"}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60.671 60.671">
      <g>
        <g>
          <ellipse cx="30.336" cy="12.097" rx="11.997" ry="12.097" />
          <path
            d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9
          C48.354,35.818,42.661,30.079,35.64,30.079z"
          />
        </g>
      </g>
    </svg>
  );
}
