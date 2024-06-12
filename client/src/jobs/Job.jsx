import {useParams} from "react-router-dom";
import {useGetJobQuery} from "../state/jobApiSlice.js";
import {useCreateApplyMutation} from "../state/applicantApiSlice.js";
import {useGetUserJobsQuery} from "../state/applicantApiSlice.js";
import {useSelector} from "react-redux";
import InfinitLoading from "../Components/InfinitLoading.jsx";
import Succes from "../Components/Feedbacks/Succes.jsx";
import Error from "../Components/Feedbacks/Error.jsx";
import {useState} from "react";

export default function Job() {
  const {jobId} = useParams();
  let {data: job, isLoading, error} = useGetJobQuery(jobId);
  const [applyJob] = useCreateApplyMutation();
  const user = useSelector(state => state.auth.user);
  const [feedBack, setFeedBack] = useState({error: false, succes: false});
  const {data} = useGetUserJobsQuery(user?.id);
  const canApplied = data?.map(app => app.jobId).includes(Number(jobId));

  function handelApply() {
    applyJob({
      body: {jobId: Number(jobId)},
    })
      .then(resp => {
        resp.error
          ? setFeedBack({error: true, succes: false})
          : setFeedBack({error: false, succes: true});
      })
      .then(() => {
        setTimeout(() => {
          closeFeedBack();
        }, 3000);
      });
  }

  function closeFeedBack() {
    setFeedBack({error: false, succes: false});
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
      {(feedBack.error || feedBack.succes) && (
        <div className="toast toast-end toast-bottom">
          {feedBack.succes && (
            <Succes message="Your application went throug!" closeFunction={closeFeedBack} />
          )}
          {feedBack.error && (
            <Error message="Something went wrong! Try again!" closeFunction={closeFeedBack} />
          )}
        </div>
      )}
      {isLoading ? (
        <InfinitLoading />
      ) : (
        <div className="container flex flex-col text-left p-2 rounded max-w-4xl">
          <div>
            <div className="my-3 flex justify-between ">
              <div>
                <h2 className="text-3xl">{job.position} job description</h2>
                {user ? (
                  canApplied ? (
                    <p className="text-xs">You have already applied.</p>
                  ) : (
                    <p className="text-xs">Are you interested? Apply now!</p>
                  )
                ) : (
                  <p className="text-xs">Are you interested? Sign in and Apply now!</p>
                )}
              </div>
              {user?.role === "jobseeker" && !canApplied && (
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
