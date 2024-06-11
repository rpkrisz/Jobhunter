import {XmarkIcon} from "../../Components/FawIcons";

export default function FiltersRow({filterData, setFilterData}) {
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
      {Object.keys(filterData).length !== 0 && (
        <div className="flex bg-neutral p-2 rounded justify-start text-lg ">
          {Object.entries(filterData).map(filter => {
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
