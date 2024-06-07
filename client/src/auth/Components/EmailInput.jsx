import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function EmailInput({data, handelChange}) {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <FontAwesomeIcon icon={faEnvelope} />
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
