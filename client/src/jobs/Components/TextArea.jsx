export default function TextArea({name, label, inputData, handelChange}) {
  return (
    <label className="form-control justify-start flex-grow">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <textarea
        name={name}
        className="textarea textarea-bordered  w-full "
        value={inputData[name] ?? ""}
        onChange={e => handelChange(e)}
      ></textarea>
    </label>
  );
}
