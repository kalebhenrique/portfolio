import { GoArrowUpRight } from "react-icons/go";

interface workExperienceProps {
  startDate: string;
  endDate: string;
  position: string;
  enterprise: string;
  summary: (string | JSX.Element)[];
  enterpriseUrl: string;
}

export default function WorkExperience(props: workExperienceProps) {
  return (
    <div className="ml-3 mt-4 flex flex-col">
      <div>
        <p className="text-[#8E91B6]">{`${props.startDate} — ${props.endDate}`}</p>
      </div>
      <div className="">
        <h1 className="text-violeta-titulo">
          {props.position} na{" "}
          <a
            target="_blank"
            href={props.enterpriseUrl}
            className="inline-flex items-center hover:text-violeta-base-hover"
          >
            {props.enterprise}{" "}
            <span className="flex items-start">
              <GoArrowUpRight size={15} />{" "}
            </span>
          </a>
        </h1>
        <ul className="ml-5 mt-2 list-disc text-violeta-base">
          {props.summary.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}