import {useGetJobsQuery} from "../state/jobApiSlice.js";
import JobList from "./Components/JobList.jsx";
import FilterModal from "./Components/FilterModal.jsx";
import InfinitLoading from "../Components/InfinitLoading.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {faMagnifyingGlass, faFilter} from "@fortawesome/free-solid-svg-icons";
import FiltersRow from "./Components/FiltersRow.jsx";

export default function Home() {
  const [filterData, setFilterData] = useState({});
  let {data, isSuccess} = useGetJobsQuery(filterData);

  return (
    <>
      <h1>Home</h1>
      <div className="flex flex-col gap-1 ">
        <div className="flex flex-row gap-5 flex-wrap">
          <label className="input input-bordered flex items-center gap-2 grow">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              onChange={e => {
                setFilterData({...filterData, company: e.target.value});
              }}
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </label>
          <button
            className="btn"
            onClick={() => document.getElementById("filtermodal").showModal()}
          >
            <FontAwesomeIcon icon={faFilter} />
            Filter
          </button>
        </div>
          <FiltersRow filterData={filterData} setFilterData={setFilterData} />
      </div>
      <FilterModal filterData={filterData} setFilterData={setFilterData} />
      {isSuccess ? <JobList jobs={data} /> : <InfinitLoading />}
    </>
  );
}
