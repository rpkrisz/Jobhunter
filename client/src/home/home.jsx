import {useGetJobsQuery} from "../state/jobApiSlice.js";
import JobList from "./Components/JobList.jsx";
import InfinitLoading from "../Components/InfinitLoading.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const {data, isSuccess} = useGetJobsQuery();
  return (
    <>
      <h1>Home</h1>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </label>
      {isSuccess ? <JobList jobs={data} /> : <InfinitLoading />}
    </>
  );
}
