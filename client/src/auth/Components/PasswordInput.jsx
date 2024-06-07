import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faKey} from "@fortawesome/free-solid-svg-icons";
export default function PasswordInput({data, handelChange}) {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <FontAwesomeIcon icon={faKey} />
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
