import {useState} from "react";
import {selectFilter, setFilter} from "../../state/jobSlice";
import {useDispatch, useSelector} from "react-redux";

export default function FilterModal() {
  const filterData = useSelector(selectFilter);
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState(filterData);

  const handelChange = e => {
    if (e.name === "homeOffice") {
      if (inputData.homeOffice) {
        setInputData({...inputData, [e.name]: false});
      } else {
        setInputData({...inputData, [e.name]: true});
      }
      return;
    }
    setInputData({...inputData, [e.name]: e.value});
  };

  function handelFiltering() {
    const result = {};
    for (const key in inputData) {
      if (inputData[key] !== "") {
        result[key] = inputData[key];
      }
    }
    dispatch(setFilter({...result, skip: 0}));
  }

  function handelCanceling() {
    dispatch(setFilter({limit: filterData.limit, skip: filterData.skip}));
  }

  return (
    <dialog id="filtermodal" className="modal">
      <div className="modal-box">
        <form className="form-control">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="number"
              name="salaryFrom"
              placeholder="Payment lower limit"
              value={inputData.salaryFrom ?? ""}
              onChange={e => handelChange(e.target)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="number"
              name="salaryTo"
              placeholder="Payment upper limit"
              value={inputData.salaryTo ?? ""}
              onChange={e => handelChange(e.target)}
            />
          </label>
          <select
            className="select select-bordered flex items-center gap-2  w-full "
            name="type"
            value={inputData.type ?? ""}
            onChange={e => handelChange(e.target)}
          >
            <option disabled value="">
              Job type?
            </option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="internship">Internship</option>
          </select>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="city"
              className="grow"
              placeholder="City"
              value={inputData.city ?? ""}
              onChange={e => handelChange(e.target)}
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Home office</span>
            <input
              type="checkbox"
              name="homeOffice"
              className="checkbox"
              value={inputData.homeOffice ?? ""}
              onClick={e => handelChange(e.target)}
            />
          </label>
        </form>
        <div className="modal-action">
          <form method="dialog" className="flex gap-1">
            <button className="btn bg-primary btn-ghost" onClick={handelCanceling}>
              Cancel
            </button>
            <button className="btn bg-primary btn-ghost" onClick={handelFiltering}>
              Filter
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
