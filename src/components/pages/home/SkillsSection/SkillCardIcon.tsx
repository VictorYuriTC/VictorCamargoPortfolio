import { IPortfolioIcon } from "@/typing/interfaces/IPortfolioIcon/IPortfolioIcon";
import Image from "next/image";

export interface ISkillCardIcon {
  name: string;
  iconData: IPortfolioIcon;
}

export default function SkillCardIcon(props: ISkillCardIcon) {
  return (
    <Image
      width={40}
      height={40}
      alt={props.iconData.alt}
      src={props.iconData.src}
    />
  );
}
