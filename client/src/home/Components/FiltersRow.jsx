import {useDispatch, useSelector} from "react-redux";
import {XmarkIcon} from "../../Components/FawIcons";
import {selectFilter, setFilter} from "../../state/jobSlice";

export default function FiltersRow() {
  const dispatch = useDispatch();
  const filterData = useSelector(selectFilter);

  function handelFilterRemove(filterKey) {
    const result = {};
    for (const key in filterData) {
      if (key !== filterKey) {
        result[key] = filterData[key];
      }
    }
    dispatch(setFilter(result));
  }

  return (
    <>
      {Object.keys(filterData).length > 2 && (
        <div className="flex bg-neutral p-2 rounded justify-start text-lg ">
          {Object.entries(filterData)
            .filter(filter => filter[0] !== "limit" && filter[0] !== "skip")
            .map(filter => {
              return (
                <div key={filter[0]} className="badge badge-outline gap-1 p2">
                  <XmarkIcon
                    onClick={() => {
                      handelFilterRemove(filter[0]);
                    }}
                    className="rounded-md cursor-pointer p-1 hover:bg-red-500"
                  />
                  <p>
                    {filter[0]}: {filter[1]}
                  </p>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
}
