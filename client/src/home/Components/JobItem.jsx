import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot, faBuilding} from "@fortawesome/free-solid-svg-icons";
export default function JobItem({job}) {
  return (
    <li className="container flex flex-col text-left bg-green-500 p-2 rounded">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <p className="font-bold text-4xl self-start">{job.position}</p>
        <div className="flex gap-1">
          {!job.homeOffice || (
            <p className="badge badge-primary self-end self-center">
              Home Office
            </p>
          )}
          <p className="badge badge-secondary self-end self-center">
            {job.type}
          </p>
        </div>
      </div>
      <hr />
      <div className="self-start ">
        <p>
          <FontAwesomeIcon icon={faBuilding} />
          {job.company}
        </p>
        <p>
          <FontAwesomeIcon icon={faLocationDot} /> {job.city}
        </p>
      </div>

      <p className="text-pretty">{job.description}</p>
    </li>
  );
}
