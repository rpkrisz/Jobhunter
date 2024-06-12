import {useRemoveJobMutation} from "../../state/jobApiSlice";
import {
  BuildingIcon,
  LocationDotIcon,
  HouseLaptopIcon,
  HourglassStartIcon,
  HourglassIcon,
  GraduationCapIcon,
  PenToSquareIcon,
  EyeIcon,
  TrashIcon,
} from "../../Components/FawIcons";

export default function AdvertisementItem({job, setSelectedJob, setFeedBack, closeFeedBack}) {
  const [deleteJobAdv] = useRemoveJobMutation();

  function handelEdit() {
    setSelectedJob(job.id);
    document.getElementById(`EditJobModal`).showModal();
  }

  function handelDelete() {
    deleteJobAdv(job.id)
      .then(resp => {
        console.log(resp);
        resp.error
          ? setFeedBack({error: true, succes: false})
          : setFeedBack({error: false, succes: true});
      })
      .then(() => {
        setTimeout(() => {
          closeFeedBack();
        }, 3000);
      });
    console.log("Deleted");
  }

  function handelShow() {
    setSelectedJob(job.id);
    document.getElementById(`applicantsModal`).showModal();
  }

  function iconSwitch(type) {
    switch (type) {
      case "full-time":
        return <HourglassIcon />;
      case "part-time":
        return <HourglassStartIcon />;
      case "internship":
        return <GraduationCapIcon />;
      default:
        break;
    }
  }

  return (
    <li className="container flex flex-row text-left bg-green-500 my-3 p-2 rounded justify-between flex-wrap gap-1">
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
        <button className="btn btn-neutral mx-1 tooltip" data-tip="Edit" onClick={handelEdit}>
          <PenToSquareIcon />
        </button>
        <button
          className="btn btn-neutral mx-1 tooltip"
          data-tip="Show applicants"
          onClick={handelShow}
        >
          <EyeIcon />
        </button>
        <button
          className="btn btn-error mx-1 tooltip tooltip-error "
          data-tip="Delete"
          onClick={handelDelete}
        >
          <TrashIcon />
        </button>
      </div>
    </li>
  );
}
