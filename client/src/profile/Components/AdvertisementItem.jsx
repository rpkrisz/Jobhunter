import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot, faBuilding} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default function JobItem({job}) {
  function handelEdit() {}
  function handelDelete() {}

  return (
    <li className="container flex flex-row text-left bg-green-500 m-3 p-2 rounded justify-between">
      <div className="self-center">
        <div className="flex justify-between items-center">
          <p className="font-bold text-4xl self-start">{job.position}</p>
        </div>
        <div className="self-start flex flex-row gap-3">
          <p>
            <FontAwesomeIcon icon={faBuilding} />
            {job.company}
          </p>
          <p>
            <FontAwesomeIcon icon={faLocationDot} /> {job.city}
          </p>
          {!job.homeOffice || (
            <p className="badge badge-primary self-end self-center">
              Home Office
            </p>
          )}
        </div>
      </div>
      <div className="self-center felx flex-col gap-4 justify-center ">
        <button className="btn btn-neutral" onClick={handelEdit}>
          Edit
        </button>
        <Link className="btn btn-neutral" to={"/"}>
          Show
        </Link>
        <button className="btn btn-error" onClick={handelDelete}>
          Delete
        </button>
      </div>
    </li>
  );
}
