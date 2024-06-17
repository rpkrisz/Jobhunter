import {useGetJobsQuery} from "../state/jobApiSlice.js";
import JobList from "./Components/JobList.jsx";
import FilterModal from "./Components/FilterModal.jsx";
import InfinitLoading from "../Components/InfinitLoading.jsx";
import FiltersRow from "./Components/FiltersRow.jsx";
import {MagnifyingGlassIcon, FilterIcon} from "../Components/FawIcons.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectFilter, setFilter} from "../state/jobSlice.js";
import {setTitle} from "../state/titleSlice.js";
import {useEffect} from "react";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle("Home"));
  }, []);

  const filter = useSelector(selectFilter);
  let {data, isSuccess} = useGetJobsQuery(filter);

  return (
    <>
      <div className="flex flex-col gap-1 ">
        <div className="flex flex-row gap-5 flex-wrap">
          <label className="input input-bordered flex items-center gap-2 grow">
            <input
              type="text"
              className="grow"
              placeholder="Search for company"
              onChange={e => {
                dispatch(setFilter({...filter, company: e.target.value}));
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
        <FiltersRow />
      </div>
      <FilterModal />
      {isSuccess ? <JobList jobs={data.data} /> : <InfinitLoading />}
    </>
  );
}
