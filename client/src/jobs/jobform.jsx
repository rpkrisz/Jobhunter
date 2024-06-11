import CheckBox from "./Components/CheckBox";
import TextInput from "./Components/TextInput";
import TextArea from "./Components/TextArea";
import NumberInput from "./Components/NumberInput";
import SelectInput from "./Components/SelectInput";
import {useState} from "react";
import {useCreateJobMutation} from "../state/jobApiSlice";
import Error from "../Components/Error";
import {useNavigate} from "react-router-dom";

export default function JobForm() {
  const navigate = useNavigate();
  const [createJob] = useCreateJobMutation();
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
    createJob({
      body: inputData,
    }).then(resp => {
      console.log(resp);
      resp.error ? setError(`${resp.error.data.message}. Try again!`) : navigate("/");
    });
  };

  return (
    <>
      {error && <Error message={error} closeFunction={() => setError("")} />}
      <form
        action=""
        method="post"
        className="flex flex-col flex-wrap justify-between w-full max-w-screen-lg  rounded p-5 mx-auto"
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
          <CheckBox inputData={inputData} handelChange={handelChange} />
        </div>
        <button type="submit" className="btn btn-primary mt-3" onClick={e => handelSubmit(e)}>
          Add advertisement
        </button>
      </form>
    </>
  );
}
