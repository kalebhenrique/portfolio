import { RiExternalLinkLine } from "react-icons/ri";

interface workExperienceProps {
  startDate: string;
  endDate: string;
  position: string;
  enterprise: string;
  summary: string;
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
          {props.position} em{" "}
          <a
            target="_blank"
            href={props.enterpriseUrl}
            className="inline-flex items-center"
          >
            {props.enterprise} <RiExternalLinkLine size={12} className="ml-1" />
          </a>
        </h1>
        <p className="mt-2 text-violeta-base">{props.summary}</p>
      </div>
    </div>
  );
}
