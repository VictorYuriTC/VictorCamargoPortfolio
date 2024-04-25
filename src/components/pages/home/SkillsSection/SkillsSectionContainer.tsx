import { HTMLAttributes, ReactNode } from "react";

interface ISkillsSectionContainer {
  title: string;
  children: ReactNode;

  divWrapper?: HTMLAttributes<HTMLDivElement>;
}

export default function SkillsSectionContainer(props: ISkillsSectionContainer) {
  return (
    <div className={`flex flex-col ${props.divWrapper?.className}`}>
      <span className="text-lg font-semibold">{props.title}</span>

      <div className="flex flex-row flex-wrap items-center gap-8 mt-1">
        {props.children}
      </div>
    </div>
  );
}
