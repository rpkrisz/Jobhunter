import CheckBox from "../Components/Inputs/CheckBox.jsx";
import TextInput from "../Components/Inputs/TextInput.jsx";
import TextArea from "../Components/Inputs/TextArea.jsx";
import NumberInput from "../Components/Inputs/NumberInput.jsx";
import SelectInput from "./Components/SelectInput";
import {useEffect, useState} from "react";
import {useModifyJobMutation} from "../state/jobApiSlice";
import Error from "../Components/Feedbacks/Error";
import {useGetJobQuery} from "../state/jobApiSlice.js";

export default function EditJobModal({selectedJob}) {
  const {data, isSuccess} = useGetJobQuery(selectedJob);
  const [modifyJob] = useModifyJobMutation();
  const [error, setError] = useState(null);
  const [inputData, setInputData] = useState({
    company: "",
    position: "",
    description: "",
    salaryFrom: 0,
    salaryTo: 0,
    type: "",
    city: "",
    homeOffice: false,
  });

  useEffect(() => {
    if (isSuccess) {
      setInputData({...data, homeOffice: data.homeOffice ? true : false});
    }
  }, [data]);

  const handelChange = e => {
    const input = e.target;
    if (input.name === "homeOffice") {
      if (inputData.homeOffice) {
        setInputData({...inputData, [input.name]: false});
      } else {
        setInputData({...inputData, [input.name]: true});
      }
      return;
    }
    if (input.name === "salaryFrom" || input.name === "salaryTo") {
      setInputData({...inputData, [input.name]: Number(input.value)});
      return;
    }
    setInputData({...inputData, [input.name]: input.value});
  };

  const handelSubmit = e => {
    e.preventDefault();
    setError("");
    modifyJob({
      body: inputData,
    }).then(resp => {
      resp.error
        ? setError(`${resp.error.data.message}. Try again!`)
        : document.getElementById(`EditJobModal`).close();
    });
  };

  return (
    <dialog id="EditJobModal" className="modal">
      {error && <Error message={error} closeFunction={() => setError("")} />}
      <form
        action=""
        method="post"
        className="flex flex-col flex-wrap justify-between w-full max-w-screen-lg  rounded p-5 mx-auto modal-box"
      >
        <div className="flex justify-between flex-wrap gap-3 items-center">
          <TextInput
            name="company"
            label="Company"
            inputData={inputData}
            handelChange={handelChange}
          />
          <TextInput
            name="position"
            label="Position"
            inputData={inputData}
            handelChange={handelChange}
          />
        </div>
        <div className="flex justify-between flex-wrap gap-3 items-center">
          <NumberInput
            label="Payment lower limit"
            name="salaryFrom"
            inputData={inputData}
            handelChange={handelChange}
          />
          <NumberInput
            label="Payment upper limit"
            name="salaryTo"
            inputData={inputData}
            handelChange={handelChange}
          />
        </div>
        <TextArea
          name="description"
          label="Description"
          inputData={inputData}
          handelChange={handelChange}
        />
        <div className="flex justify-between flex-wrap gap-3 items-center">
          <TextInput name="city" label="City" inputData={inputData} handelChange={handelChange} />
          <SelectInput inputData={inputData} handelChange={handelChange} />
          <CheckBox
            inputData={inputData}
            handelChange={handelChange}
            label="Home office available"
            name="homeOffice"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3" onClick={e => handelSubmit(e)}>
          Save changes
        </button>
      </form>
      <form method="dialog" className="modal-backdrop opacity-30">
        <button className="cursor-default">close</button>
      </form>
    </dialog>
  );
}
