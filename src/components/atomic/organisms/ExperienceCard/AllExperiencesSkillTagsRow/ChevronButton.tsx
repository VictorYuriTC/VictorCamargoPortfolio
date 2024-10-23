import ChevronRightSVG from "@/assets/svgs/ChevronRightSVG";
import { ButtonHTMLAttributes } from "react";

interface IChevronButton {
  button: ButtonHTMLAttributes<HTMLButtonElement>;
  placement: "right" | "left";
  isHidden: boolean;
}

export default function ChevronButton(props: IChevronButton) {
  const isChevronLeft = props.placement === "left";

  return (
    <button
      onClick={props.button.onClick}
      className={`flex justify-center items-center p-1 bg-gray-50 dark:bg-white rounded-full absolute aspect-square active:bg-gray-100 lg:hidden ${
        isChevronLeft ? "left-0" : "right-0"
      } ${props.isHidden && "hidden"}`}>
      <ChevronRightSVG
        strokeWidth={0.5}
        className={`stroke-gray-500 fill-gray-500 dark:stroke-black dark:fill-black ${
          isChevronLeft ? "rotate-180" : ""
        }`}
        width={20}
        height={20}
      />
    </button>
  );
}
