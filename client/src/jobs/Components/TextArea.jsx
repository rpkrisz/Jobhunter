export default function TextArea({name, label}) {
  return (
    <label className="form-control justify-start flex-grow">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <textarea
        name={name}
        className="textarea textarea-bordered  w-full "
      ></textarea>
    </label>
  );
}
