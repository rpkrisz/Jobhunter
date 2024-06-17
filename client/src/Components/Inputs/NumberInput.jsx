export default function NumberInput({name, label, inputData, handelChange, placeholder, step = 1}) {
  return (
    <label className="form-control justify-start flex-grow">
      {label && (
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
      )}
      <input
        type="number"
        name={name}
        className="input input-bordered w-full"
        placeholder={placeholder}
        value={inputData[name] ?? ""}
        onChange={e => handelChange(e)}
        step={step}
      />
    </label>
  );
}
