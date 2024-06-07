import Experiences from "./Components/Experiences.jsx";
import PersonalData from "./Components/PersonalData.jsx";

export default function Profile() {
  return (
    <>
      <h1>Profile</h1>
      <div className="container flex flex-col text-left">
        <PersonalData />
        <Experiences />
      </div>
    </>
  );
}
