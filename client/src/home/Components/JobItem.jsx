import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
export default function JobItem({job}) {
  return (
    <li className="container flex flex-col text-left bg-green-500 m-3 p-2 rounded">
      <div className="flex justify-between items-center">
        <p className="font-bold text-4xl self-start">{job.position}</p>
        {!job.homeOffice || (
          <p className="badge badge-primary self-end self-center">
            Home Office
          </p>
        )}
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
