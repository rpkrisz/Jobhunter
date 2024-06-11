import {useGetJobsQuery} from "../state/jobApiSlice.js";
import JobList from "./Components/JobList.jsx";
import FilterModal from "./Components/FilterModal.jsx";
import InfinitLoading from "../Components/InfinitLoading.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {
  faMagnifyingGlass,
  faFilter,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [filterData, setFilterData] = useState({});
  let {data, isSuccess} = useGetJobsQuery(filterData);
  function handelFilterRemove(filterKey) {
    const result = {};
    for (const key in filterData) {
      if (key !== filterKey) {
        result[key] = filterData[key];
      }
    }
    setFilterData(result);
  }
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
        {Object.keys(filterData).length !== 0 && (
          <div className="flex bg-neutral p-2 rounded-sm justify-start text-lg ">
            {Object.entries(filterData).map(filter => {
              return (
                <div key={filter[0]} className="badge badge-outline gap-1 p2">
                  <FontAwesomeIcon
                    icon={faXmark}
                    onClick={() => {
                      handelFilterRemove(filter[0]);
                    }}
                    className="rounded-md p-1 hover:bg-red-500"
                  />
                  <p>
                    {filter[0]}: {filter[1]}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <FilterModal filterData={filterData} setFilterData={setFilterData} />
      {isSuccess ? <JobList jobs={data} /> : <InfinitLoading />}
    </>
  );
}
