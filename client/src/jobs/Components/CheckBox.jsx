export default function CheckBox({inputData, handelChange}) {
  return (
    <label className="label cursor-pointer flex-grow">
      <span className="label-text">Home Office available</span>
      <input
        type="checkbox"
        name="homeOffice"
        className="checkbox"
        onChange={e => handelChange(e)}
        checked={inputData.homeOffice ?? false}
      />
    </label>
  );
}
