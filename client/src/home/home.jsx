import {useGetJobsQuery} from "../state/jobApiSlice.js";
import JobList from "./Components/JobList.jsx";
import FilterModal from "./Components/FilterModal.jsx";
import InfinitLoading from "../Components/InfinitLoading.jsx";
import {useState} from "react";
import FiltersRow from "./Components/FiltersRow.jsx";
import {MagnifyingGlassIcon, FilterIcon} from "../Components/FawIcons.jsx";

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
            <MagnifyingGlassIcon />
          </label>
          <button
            className="btn"
            onClick={() => document.getElementById("filtermodal").showModal()}
          >
            <FilterIcon />
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
