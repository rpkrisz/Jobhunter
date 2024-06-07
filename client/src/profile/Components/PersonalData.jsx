import {useSelector} from "react-redux";
export default function PersonalData() {
  const user = useSelector(state => state.auth.user);
  return (
    <div >
      <div className="my-3">
        <h2 className="text-xl">Personal data</h2>
        <p className="text-xs text-secondary-content">Your data and experience all in one place.</p>
      </div>
      <table className="table table-zebra">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{user.fullname}</td>
          </tr>
          <tr>
            <th>E-mail</th>
            <td>{user.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
