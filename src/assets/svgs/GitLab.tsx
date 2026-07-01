import * as React from "react";
import { SVGProps } from "react";

export default function GitLabSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={`${props.width || 96}px`}
      height={`${props.height || 96}px`}
      fill={props.fill}>
      <path fill="#e24329" d="m16 28.896 5.156-15.867H10.844z"></path>
      <path fill="#fc6d26" d="m16 28.896-5.156-15.867H3.619z"></path>
      <path
        fill="#fca326"
        d="m3.619 13.029-1.567 4.822a1.07 1.07 0 0 0 .388 1.193L16 28.9z"></path>
      <path
        fill="#e24329"
        d="M3.619 13.029h7.225L7.739 3.473a.534.534 0 0 0-1.015 0z"></path>
      <path fill="#fc6d26" d="m16 28.896 5.156-15.867h7.225z"></path>
      <path
        fill="#fca326"
        d="m28.381 13.029 1.567 4.822a1.07 1.07 0 0 1-.388 1.193L16 28.9z"></path>
      <path
        fill="#e24329"
        d="M28.381 13.029h-7.225l3.105-9.557a.534.534 0 0 1 1.015 0z"></path>
    </svg>
  );
}
