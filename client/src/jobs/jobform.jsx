import CheckBox from "./Components/CheckBox";
import TextInput from "./Components/TextInput";
import TextArea from "./Components/TextArea";
import NumberInput from "./Components/NumberInput";
import SelectInput from "./Components/SelectInput";
export default function JobForm() {
  return (
    <form
      action=""
      method="post"
      className="flex flex-col flex-wrap justify-between w-full max-w-screen-lg  rounded p-5"
    >
      <div className="flex justify-between flex-wrap gap-3 items-center">
        <TextInput name="company" label="Company" />
        <TextInput name="position" label="Position" />
      </div>
      <div className="flex justify-between flex-wrap gap-3 items-center">
        <NumberInput label="Payment lower limit" name="salaryFrom" />

        <NumberInput label="Payment upper limit" name="salaryTo" />
      </div>
      <TextArea name="description" label="Description" />
      <div className="flex justify-between flex-wrap gap-3 items-center">
        <TextInput name="city" label="City" />
        <SelectInput />
        <CheckBox />
      </div>
    </form>
  );
}
