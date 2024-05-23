import { IPortfolioIcon } from "@/typing/interfaces/IPortfolioIcon/IPortfolioIcon";
import Image from "next/image";

export interface ISkillCardIcon {
  name: string;
  iconData: IPortfolioIcon;
  svgSize: number;
}

export default function SkillCardIcon(props: ISkillCardIcon) {
  return (
    <Image
      width={props.svgSize}
      height={props.svgSize}
      alt={props.iconData.alt}
      src={props.iconData.src}
      placeholder="blur"
      blurDataURL="/image-placeholder.jpeg"
    />
  );
}
