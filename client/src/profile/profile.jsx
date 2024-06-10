import Experiences from "./Components/Experiences.jsx";
import PersonalData from "./Components/PersonalData.jsx";
import JobList from "./Components/JobList.jsx";
import {useSelector} from "react-redux";

export default function Profile() {
  const user = useSelector(state => state.auth.user);
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
            <h2 className="text-xl">A te hírdetéseid:</h2>
            <JobList />
          </>
        )}
      </div>
    </>
  );
}
