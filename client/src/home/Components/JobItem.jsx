import {Link} from "react-router-dom";
import {BuildingIcon, LocationDotIcon} from "../../Components/FawIcons";

export default function JobItem({job}) {
  return (
    <li className="container flex flex-col text-left bg-primary p-2 rounded">
      <Link to={"/jobs/" + job.id} className="text-neutral">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <p className="font-bold text-4xl self-start">{job.position}</p>
          <div className="flex gap-1">
            {!job.homeOffice || <p className="badge badge-info self-center">Home Office</p>}
            <p className="badge badge-accent self-center">{job.type}</p>
          </div>
        </div>
        <hr />
        <div className="self-start ">
          <p>
            <BuildingIcon />
            {job.company}
          </p>
          <p>
            <LocationDotIcon /> {job.city}
          </p>
        </div>
        <p className="text-pretty">{job.description}</p>
      </Link>
    </li>
  );
}
