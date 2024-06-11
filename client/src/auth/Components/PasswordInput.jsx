import {KeyIcon} from "../../Components/FawIcons";

export default function PasswordInput({data, handelChange}) {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <KeyIcon />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="grow"
        value={data.password}
        onChange={e => handelChange(e.target)}
      />
    </label>
  );
}
