import Applicant from "./Applicant";

export default function ApplicantsTable({applicants}) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email address</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map(applicant => {
            return <Applicant key={applicant.userId} user={applicant} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
