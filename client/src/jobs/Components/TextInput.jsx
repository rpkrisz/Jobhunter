export default function TextInput({name, label}) {
  return (
    <label className="form-control justify-start flex-grow">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type="text"
        name={name}
        className="input input-bordered w-full "
      />
    </label>
  );
}
