import { ButtonHTMLAttributes } from "react";

export interface IPortfolioPrimaryButton
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  borderRadius: "default" | "rounded-full";
  variant: "default" | "small";
}

export default function PortfolioPrimaryButton(props: IPortfolioPrimaryButton) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      style={props.style}
      className={`transition-colors duration-300 text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 disabled:opacity-60 disabled:hover:bg-purple-600 disabled:dark:hover:bg-purple-700 ${
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
