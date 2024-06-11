export default function NumberInput({name, label, inputData, handelChange}) {
  return (
    <label className="form-control justify-start flex-grow">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type="number"
        name={name}
        className="input input-bordered w-full"
        value={inputData[name] ?? ""}
        onChange={e => handelChange(e)}
      />
    </label>
  );
}
