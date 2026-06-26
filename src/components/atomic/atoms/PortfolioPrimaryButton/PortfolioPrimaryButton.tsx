import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type PortfolioPrimaryButtonBaseProps = {
  borderRadius: "default" | "rounded-full";
  variant: "default" | "small";
};

type PortfolioPrimaryButtonAsButton = PortfolioPrimaryButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type PortfolioPrimaryButtonAsAnchor = PortfolioPrimaryButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type IPortfolioPrimaryButton =
  | PortfolioPrimaryButtonAsButton
  | PortfolioPrimaryButtonAsAnchor;

export default function PortfolioPrimaryButton(props: IPortfolioPrimaryButton) {
  function getPortfolioPrimaryButtonClassName(
    props: PortfolioPrimaryButtonBaseProps & { className?: string },
  ) {
    const borderRadiusClassName =
      props.borderRadius === "default"
        ? "rounded-lg"
        : props.borderRadius === "rounded-full"
          ? "rounded-full"
          : "rounded-lg";

    const fontClassName =
      props.variant === "default"
        ? "py-3 px-5 font-semibold"
        : "py-1 px-3 font-normal";

    const hoverClassName =
      props.variant === "default"
        ? "hover:bg-purple-700 dark:hover:bg-purple-800"
        : "hover:bg-purple-100 dark:hover:bg-purple-900";

    return `inline-flex items-center justify-center transition-colors duration-300 text-white bg-purple-600 whitespace-nowrap disabled:opacity-60 disabled:hover:bg-purple-600 disabled:dark:hover:bg-purple-700 ${borderRadiusClassName} ${fontClassName} ${hoverClassName} ${props.className ?? ""}`;
  }

  const className = getPortfolioPrimaryButtonClassName(props);

  if (props.href) {
    const { borderRadius, variant, className: _, ...anchorProps } = props;

    return (
      <a className={className} {...anchorProps}>
        {props.children}
      </a>
    );
  }

  const {
    borderRadius,
    variant,
    className: _,
    ...buttonProps
  } = props as PortfolioPrimaryButtonAsButton;

  return (
    <button className={className} {...buttonProps}>
      {props.children}
    </button>
  );
}
