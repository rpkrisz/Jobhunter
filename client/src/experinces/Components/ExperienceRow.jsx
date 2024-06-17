import {useState} from "react";
import TextInput from "../../Components/Inputs/TextInput";
import {useDispatch} from "react-redux";
import {updateExperience} from "../../state/experienceSlice";

export default function ExperienceRow({experience}) {
  const [inputData, setInputData] = useState(experience);
  const dispatch = useDispatch();

  const handelChange = e => {
    const input = e.target;
    const newExp = {...inputData, [input.name]: input.value};
    setInputData(newExp);
    dispatch(updateExperience(newExp));
  };

  return (
    <tr className="text-start min-w-fit">
      <td>
        <TextInput name="company" inputData={inputData} handelChange={handelChange} />
      </td>
      <td>
        <TextInput name="title" inputData={inputData} handelChange={handelChange} />
      </td>
      <td>
        <TextInput name="interval" inputData={inputData} handelChange={handelChange} />
      </td>
    </tr>
  );
}
