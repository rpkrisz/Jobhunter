export default function SelectInput() {
  return (
    <label className="form-control justify-start flex-grow min-w-96">
      <div className="label">
        <span className="label-text">Job type?</span>
      </div>
      <select
        className="select select-bordered flex items-center gap-2  w-full "
        name="type"
      >
        <option value="full-time">Full-time</option>
        <option value="part-time">Part-time</option>
        <option value="internship">Internship</option>
      </select>
    </label>
  );
}
