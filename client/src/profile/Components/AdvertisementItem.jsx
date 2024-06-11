import {
  BuildingIcon,
  LocationDotIcon,
  HouseLaptopIcon,
  HourglassEndIcon,
  HourglassIcon,
  GraduationCapIcon,
} from "../../Components/FawIcons";
import {Link} from "react-router-dom";

export default function JobItem({job}) {
  function handelEdit() {}
  function handelDelete() {}
  function iconSwitch(type) {
    switch (type) {
      case "full-time":
        return <HourglassIcon />;
      case "part-time":
        return <HourglassEndIcon />;
      case "internship":
        return <GraduationCapIcon />;
      default:
        break;
    }
  }

  return (
    <li className="container flex flex-row text-left bg-green-500 m-3 p-2 rounded justify-between flex-wrap gap-1">
      <div className="self-center">
        <div className="flex justify-between items-center">
          <p className="font-bold text-4xl self-start">{job.position}</p>
        </div>
        <div className="self-start flex flex-row gap-3">
          <p className="badge badge-primary self-center">
            <BuildingIcon />
            {job.company}
          </p>
          <p className="badge badge-primary self-center">
            <LocationDotIcon /> {job.city}
          </p>
          <p className="badge badge-primary self-center">
            {iconSwitch(job.type)} {job.type}
          </p>
          {!job.homeOffice || (
            <p className="badge badge-primary self-center">
              <HouseLaptopIcon />
              Home Office
            </p>
          )}
        </div>
      </div>
      <div className="self-center felx flex-col gap-4 justify-center place-self-auto">
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
