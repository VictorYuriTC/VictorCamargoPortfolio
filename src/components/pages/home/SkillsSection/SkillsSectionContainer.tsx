import { HTMLAttributes, ReactNode } from "react";

interface ISkillsSectionContainer {
  title: string;
  children: ReactNode;

  divWrapper?: HTMLAttributes<HTMLDivElement>;
}

export default function SkillsSectionContainer(props: ISkillsSectionContainer) {
  return (
    <div
      className={`flex flex-col items-center ${props.divWrapper?.className}`}>
      <span className="text-lg font-semibold">{props.title}</span>

      <div className="mt-3 grid grid-flow-col grid-col-3 gap-8">
        {props.children}
      </div>
    </div>
  );
}
