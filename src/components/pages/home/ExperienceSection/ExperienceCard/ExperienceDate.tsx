import {
  ExperienceDateType,
  IPastExperience,
  IPresentExperience,
} from "./ExperienceCard";

export default function ExperienceDate(
  props: IPastExperience | IPresentExperience
) {
  if (props.type === "past") {
    return (
      <ExperienceSpan startDate={props.startDate} endDate={props.endDate} />
    );
  }

  return <ExperienceSpan startDate={props.startDate} />;
}

function ExperienceSpan(props: {
  startDate: ExperienceDateType;
  endDate?: ExperienceDateType;
}) {
  const startMonth = props.startDate?.split("-")?.[0];
  const startYear = props.startDate?.split("-")?.[1];

  const endMonth = props.endDate?.split("-")?.[0];
  const endYear = props.endDate?.split("-")?.[1];

  return (
    <span className="text-base font-light">
      {startMonth} {startYear} -{" "}
      {props.endDate ? `${endMonth} ${endYear}` : "Present"}
    </span>
  );
}
