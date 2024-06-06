export default function RoleInput({data, handelChange}) {
  return (
    <select
      className="select select-bordered flex items-center gap-2  w-full "
      name="role"
      value={data.role} // ...force the select's value to match the state variable...
      onChange={e => handelChange(e.target)}
    >
      <option disabled value="">
        Company or Job seeker?
      </option>
      <option value="company">Company</option>
      <option value="jobseeker">Job seeker</option>
    </select>
  );
}
