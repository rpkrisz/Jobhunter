export default function TextInput({name, label, inputData, handelChange}) {
  return (
    <label className="form-control justify-start flex-grow">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type="text"
        name={name}
        className="input input-bordered w-full "
        value={inputData[name] ?? ""}
        onChange={e => handelChange(e)}
      />
    </label>
  );
}
