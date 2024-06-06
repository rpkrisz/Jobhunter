import {Link} from "react-router-dom";

export default function Menu() {
  return (
    <>
      <nav className="flex justify-between gap-2">
        <Link to="/registration">Registration</Link>
        <Link to="/login">Login</Link>
        <Link to="/logout">Logout</Link>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/jobs">Jobs</Link>
      </nav>
    </>
  );
}
