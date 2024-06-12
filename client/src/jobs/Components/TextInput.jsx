export default function TextInput({name, label, inputData, handelChange, placeholder}) {
  return (
    <label className="form-control justify-start flex-grow">
      {label && (
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
      )}
      <input
        type="text"
        name={name}
        className="input input-bordered w-full "
        placeholder={placeholder}
        value={inputData[name] ?? ""}
        onChange={e => handelChange(e)}
      />
    </label>
  );
}
