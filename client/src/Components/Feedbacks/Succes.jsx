import {XmarkIcon, CircleCheckIcon} from "../FawIcons";

export default function Succes({message, closeFunction}) {
  message = message.charAt(0).toUpperCase() + message.slice(1);

  return (
    <div role="alert" className="alert alert-success">
      <CircleCheckIcon />
      <span>Succes! {message}</span>
      <button className="btn btn-sm" onClick={closeFunction}>
        <XmarkIcon />
      </button>
    </div>
  );
}
