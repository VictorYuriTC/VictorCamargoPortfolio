import { ButtonHTMLAttributes } from "react";

export interface IPortfolioPrimaryButton
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  borderRadius: "default" | "rounded-full";
  variant: "default" | "small";
}

export default function PortfolioPrimaryButton(props: IPortfolioPrimaryButton) {
  return (
    <button
      style={props.style}
      className={` duration-300 text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 ${
        props.borderRadius === "default"
          ? "rounded-lg"
          : props.borderRadius === "rounded-full"
          ? "rounded-full"
          : "rounded-lg"
      } ${
        props.variant === "default"
          ? "py-3 px-5 font-semibold"
          : "py-1 px-3 font-normal"
      } ${props.className}`}>
      {props.children}
    </button>
  );
}
