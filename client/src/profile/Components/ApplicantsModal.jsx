import InfinitLoading from "../../Components/InfinitLoading.jsx";
import {useGetApplicantsQuery} from "../../state/applicantApiSlice.js";
import ApplicantsTable from "./ApplicantsTable.jsx";

export default function ApplicantsModal({selectedJob}) {
  const {data, isSuccess} = useGetApplicantsQuery(selectedJob);
  return (
    <dialog id="applicantsModal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Applicants!</h3>
        {!isSuccess ? (
          <InfinitLoading />
        ) : data.length ? (
          <ApplicantsTable applicants={data} />
        ) : (
          <p>No one has applied yet.</p>
        )}
      </div>
      <form method="dialog" className="modal-backdrop opacity-30">
        <button className="cursor-default">close</button>
      </form>
    </dialog>
  );
}
