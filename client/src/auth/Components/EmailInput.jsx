import {EnvelopeIcon} from "../../Components/FawIcons";

export default function EmailInput({data, handelChange}) {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <EnvelopeIcon />
      <input
        type="text"
        name="email"
        className="grow"
        placeholder="Email"
        value={data.email}
        onChange={e => handelChange(e.target)}
      />
    </label>
  );
}
