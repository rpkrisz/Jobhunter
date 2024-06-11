export default function CheckBox() {
  return (
    <label className="label cursor-pointer flex-grow">
      <span className="label-text">Home Office available</span>
      <input type="checkbox" name="homeOffice" className="checkbox" />
    </label>
  );
}
