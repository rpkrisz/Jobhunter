import {selectPageCount, changePageTo} from "../../state/jobSlice";
import {useDispatch, useSelector} from "react-redux";
import JobItem from "./JobItem";

export default function JobList({jobs}) {
  const dispatch = useDispatch();
  const pageCount = useSelector(selectPageCount);
  const pages = [];
  for (let index = 0; index < pageCount; index++) {
    pages.push(index + 1);
  }

  return (
    <div className="container ">
      <div className="divider divider-primary divider-start">Jobs</div>
      <ul className="flex flex-col justify-start gap-4">
        {jobs.map(job => (
          <JobItem key={job.id} job={job} />
        ))}
      </ul>
      <div className="join m-3 flex justify-center">
        {pages.map(index => {
          return (
            <input
              key={index}
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label={index}
              onClick={() => dispatch(changePageTo(index))}
            />
          );
        })}
      </div>
    </div>
  );
}
