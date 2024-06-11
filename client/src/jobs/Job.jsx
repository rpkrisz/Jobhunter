import {useParams} from "react-router-dom";
import {useGetJobQuery} from "../state/jobApiSlice.js";
import {useCreateApplyMutation} from "../state/applicantApiSlice.js";
import {useSelector} from "react-redux";
import InfinitLoading from "../Components/InfinitLoading.jsx";
export default function Job() {
  const {jobId} = useParams();
  let {data: job, isLoading, error} = useGetJobQuery(jobId);
  const [applyJob] = useCreateApplyMutation();
  const user = useSelector(state => state.auth.user);
  function handelApply() {
    applyJob({
      body: {jobId: Number(jobId)},
    });
  }
  if (error) {
    return (
      <div
        role="alert"
        className="alert alert-error sm:items-center sm:text-center sm:justify-items-center grid-cols-1"
      >
        <span>ERROR! {error.data.message}.</span>
      </div>
    );
  }
  return (
    <>
      {isLoading ? (
        <InfinitLoading />
      ) : (
        <div className="container flex flex-col text-left p-2 rounded">
          <div>
            <div className="my-3 flex justify-between ">
              <div>
                <h2 className="text-3xl">{job.position} job description</h2>
                <p className="text-xs">Are you interested? Apply now!</p>
              </div>
              {user && (
                <button className="btn btn-primary" onClick={handelApply}>
                  Apply
                </button>
              )}
            </div>
            <table className="table table-zebra">
              <tbody>
                <tr>
                  <th>Company</th>
                  <td>{job.company}</td>
                </tr>
                <tr>
                  <th>Position</th>
                  <td>{job.position}</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>{job.description}</td>
                </tr>
                <tr>
                  <th>Type</th>
                  <td>{job.type}</td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>{job.city}</td>
                </tr>
                <tr>
                  <th>Payment</th>
                  <td>
                    {job.salaryFrom / 1000}-{job.salaryTo / 1000}K Ft
                  </td>
                </tr>
                <tr>
                  <th>Home office</th>
                  <td>{job.homeOffice ? "Yes" : "No"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
