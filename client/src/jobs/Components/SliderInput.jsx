import Slider from "@mui/material/Slider";
import {useEffect, useState} from "react";

export default function SliderInput({inputData, setInputData}) {
  const [value, setValue] = useState([inputData.salaryFrom, inputData.salaryTo]);
  
  const handelChange = event => {
    const value = event.target.value;
    setValue(value);
    setInputData({...inputData, salaryFrom: Number(value[0]), salaryTo: Number(value[1])});
  };

  useEffect(() => {
    setValue([inputData.salaryFrom, inputData.salaryTo]);
  }, [inputData.salaryFrom, inputData.salaryTo]);

  return (
    <label className="form-control justify-start flex-grow min-w-96">
      <div className="label">
        <span className="label-text">Salary range</span>
      </div>
      <Slider
        min={0}
        step={10000}
        max={1000000}
        name="salary"
        value={value}
        onChange={handelChange}
        valueLabelDisplay="auto"
        color="primary"
      />
    </label>
  );
}
