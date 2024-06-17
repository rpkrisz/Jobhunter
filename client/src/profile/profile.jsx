import Experiences from "./Components/Experiences.jsx";
import PersonalData from "./Components/PersonalData.jsx";
import AdvertisementList from "./Components/AdvertisementList.jsx";
import ApplicantsModal from "./Components/ApplicantsModal.jsx";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import EditJobModal from "../jobs/EditJobModal.jsx";
import {selectUser} from "../state/authSlice.js";
import {useDispatch} from "react-redux";
import {setTitle} from "../state/titleSlice.js";

export default function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle("Profile"));
  }, []);

  const user = useSelector(selectUser);
  const [selectedJob, setSelectedJob] = useState();

  return (
    <>
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
              <Link className="btn" to="/jobs/create">
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
