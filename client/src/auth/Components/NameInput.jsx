import {UserIcon} from "../../Components/FawIcons";

export default function NameInput({data, handelChange}) {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <UserIcon />
      <input
        type="text"
        name="fullname"
        className="grow"
        placeholder="Full name"
        value={data.fullname}
        onChange={e => handelChange(e.target)}
      />
    </label>
  );
}
