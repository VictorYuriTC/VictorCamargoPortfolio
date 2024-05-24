import { SVGProps } from "react";

interface IChevronRightSVG extends SVGProps<SVGSVGElement> {}

export default function ChevronRightSVG(props: IChevronRightSVG) {
  return (
    <svg
      width={props.width || "80px"}
      height={props.height || "80px"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill || "#000000"}
      stroke={props.stroke || "white"}
      strokeWidth={props.strokeWidth}
      className={props.className}>
      <path d="M9.343 18.657a1 1 0 0 1-.707-1.707l4.95-4.95-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-.707.293z" />
    </svg>
  );
}
