import JobItem from "./JobItem";
import {useGetJobsQuery} from "../../state/jobApiSlice.js";
import InfinitLoading from "../../Components/InfinitLoading.jsx";

export default function JobList() {
  const {data, isSuccess} = useGetJobsQuery();

  return (
    <>
      {!isSuccess ? (
        <InfinitLoading />
      ) : (
        <div className="container ">
          <div className="divider divider-primary divider-start">Jobs</div>
          <ul>
            {data.map(job => (
              <JobItem key={job.id} job={job} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
