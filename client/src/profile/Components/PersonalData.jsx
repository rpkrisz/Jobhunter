export default function PersonalData({user}) {
  return (
    <div>
      <div className="my-3 flex justify-between ">
        <div>
          <h2 className="text-xl">Personal data</h2>
          <p className="text-xs">Your data and experience all in one place.</p>
        </div>
        <button className="btn btn-primary">Edit experiences</button>
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
