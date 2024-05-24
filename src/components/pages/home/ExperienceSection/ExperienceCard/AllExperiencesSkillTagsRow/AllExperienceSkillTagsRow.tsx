import { VictorExperienceType } from "../ExperienceCard";
import ExperienceSkillTag from "../ExperienceSkillTag";
import { useCallback, useRef } from "react";
import ChevronButton from "./ChevronButton";

interface IAllExperienceSkillTagsRow {
  experience: VictorExperienceType;
}

export default function AllExperienceSkillTagsRow(
  props: IAllExperienceSkillTagsRow
) {
  const rowRef = useRef<HTMLDivElement>(null);

  const AMOUNT_OF_OFFSET_WIDTH_CHANGED = 200;

  const handleOnClickChevronRight = useCallback(() => {
    rowRef.current?.scrollBy({
      left: AMOUNT_OF_OFFSET_WIDTH_CHANGED,
      behavior: "smooth",
    });
  }, []);

  const handleOnClickChevronLeft = useCallback(() => {
    rowRef.current?.scrollBy({
      left: -AMOUNT_OF_OFFSET_WIDTH_CHANGED,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="relative flex items-center mb-4">
      <ChevronButton
        placement="left"
        button={{
          onClick: handleOnClickChevronLeft,
        }}
        isHidden={false}
      />

      <div
        ref={rowRef}
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
        className="pl-10 pr-10 lg:pl-0 lg:pr-0 flex flex-row lg:flex-wrap overflow-x-scroll gap-x-3 gap-y-3">
        {props.experience.allSkills.map((skill, index) => (
          <ExperienceSkillTag
            span={{
              className: "duration-500 bg-purple-700 group-hover:bg-purple-600",
            }}
            skill={skill}
            key={`name:${skill.name}-field:${skill.field}-index:${index}`}
          />
        ))}
      </div>

      <ChevronButton
        isHidden={false}
        placement="right"
        button={{
          onClick: handleOnClickChevronRight,
        }}
      />
    </div>
  );
}
