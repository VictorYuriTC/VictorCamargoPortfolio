import Image from "next/image";

export interface ISkillIcon {
  alt: string;
  src: string;
}

export interface ISkillCardIcon {
  name: string;
  iconData: ISkillIcon;
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
