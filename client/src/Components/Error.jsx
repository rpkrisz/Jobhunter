import {XmarkIcon, CircleXmarkIcon} from "./FawIcons";

export default function Error({message, closeFunction}) {
  if (!message) {
    return;
  }

  message = message.charAt(0).toUpperCase() + message.slice(1);

  return (
    <div role="alert" className="alert alert-error">
      <CircleXmarkIcon />
      <span>Error! {message}</span>
      <button className="btn btn-sm" onClick={closeFunction}>
        <XmarkIcon />
      </button>
    </div>
  );
}
