import Experiences from "./Components/Experiences.jsx";
import PersonalData from "./Components/PersonalData.jsx";
import AdvertisementList from "./Components/AdvertisementList.jsx";
import ApplicantsModal from "./Components/ApplicantsModal.jsx";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useState} from "react";
import EditJobModal from "../jobs/EditJobModal.jsx";

export default function Profile() {
  const user = useSelector(state => state.auth.user);
  const [selectedJob, setSelectedJob] = useState();

  return (
    <>
      <h1 className="my-2 self-start">Profile</h1>
      <div className="container flex flex-col text-left">
        {user.role === "jobseeker" && (
          <>
            <PersonalData user={user} />
            <Experiences />
          </>
        )}
        {user.role === "company" && (
          <>
            <ApplicantsModal selectedJob={selectedJob} />
            <EditJobModal selectedJob={selectedJob} />
            <div className="flex flex-row justify-between">
              <h2 className="text-xl">A te hírdetéseid:</h2>
              <Link className="btn" to="/jobs">
                Add advertisement
              </Link>
            </div>
            <AdvertisementList setSelectedJob={setSelectedJob} />
          </>
        )}
      </div>
    </>
  );
}
