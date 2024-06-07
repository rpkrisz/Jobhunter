import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
export default function NameInput({data, handelChange}) {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <FontAwesomeIcon icon={faUser} />
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
