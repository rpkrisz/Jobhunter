export default function CheckBox({name, label, inputData, handelChange, placeholder}) {
  return (
    <label className="label cursor-pointer flex-grow">
      {label && <span className="label-text">{label}</span>}
      <input
        type="checkbox"
        name={name}
        className="checkbox"
        placeholder={placeholder}
        onChange={e => handelChange(e)}
        checked={inputData[name] ?? false}
      />
    </label>
  );
}
