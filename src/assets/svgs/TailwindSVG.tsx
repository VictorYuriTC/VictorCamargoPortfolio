import { SVGProps } from "react";

export default function TailwindSVG(props: SVGProps<SVGElement>) {
  return (
    <svg
      width={props.width || "256"}
      height={props.height || "154"}
      className={props.className}
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 154"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <linearGradient id="a" x1="-2.777778%" x2="100%" y1="32%" y2="67.555556%">
        <stop offset="0" stop-color="#2298bd" />
        <stop offset="1" stop-color="#0ed7b5" />
      </linearGradient>
      <path
        d="m128 0c-34.1333333 0-55.4666667 17.0666667-64 51.2 12.8-17.0666667 27.7333333-23.4666667 44.8-19.2 9.737481 2.4343704 16.697363 9.4985481 24.401067 17.3184 12.549689 12.7383704 27.07437 27.4816 58.798933 27.4816 34.133333 0 55.466667-17.0666667 64-51.2-12.8 17.0666667-27.733333 23.4666667-44.8 19.2-9.737481-2.4343704-16.697363-9.4985481-24.401067-17.3184-12.549689-12.7383704-27.07437-27.4816-58.798933-27.4816zm-64 76.8c-34.1333333 0-55.46666667 17.0666667-64 51.2 12.8-17.066667 27.7333333-23.466667 44.8-19.2 9.7374815 2.43437 16.697363 9.498548 24.4010667 17.3184 12.5496889 12.73837 27.0743703 27.4816 58.7989333 27.4816 34.133333 0 55.466667-17.066667 64-51.2-12.8 17.066667-27.733333 23.466667-44.8 19.2-9.737481-2.43437-16.697363-9.498548-24.401067-17.3184-12.549689-12.7383704-27.07437-27.4816-58.798933-27.4816z"
        fill="url(#a)"
      />
    </svg>
  );
}
