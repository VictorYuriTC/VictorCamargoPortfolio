import { ButtonHTMLAttributes, HtmlHTMLAttributes } from "react";

export interface IPortfolioPrimaryButton
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  borderRadius: "default" | "rounded-full";
}

export default function PortfolioPrimaryButton(props: IPortfolioPrimaryButton) {
  return (
    <button
      style={props.style}
      className={`py-3 px-5 bg-purple-700 font-semibold duration-300 hover:bg-purple-800 ${
        props.borderRadius === "default"
          ? "rounded-lg"
          : props.borderRadius === "rounded-full"
          ? "rounded-full"
          : "rounded-lg"
      } ${props.className}`}>
      {props.children}
    </button>
  );
}
