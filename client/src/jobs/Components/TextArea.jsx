export default function TextArea({name, label, inputData, handelChange, placeholder}) {
  return (
    <label className="form-control justify-start flex-grow">
      {label && (
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
      )}
      <textarea
        name={name}
        className="textarea textarea-bordered  w-full "
        placeholder={placeholder}
        value={inputData[name] ?? ""}
        onChange={e => handelChange(e)}
      ></textarea>
    </label>
  );
}
