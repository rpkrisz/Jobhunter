import {Link} from "react-router-dom";

export default function Menu() {
  return (
    <>
      <nav className="navbar bg-base-100">
        <Link className="btn btn-ghost text-xl" to="/registration">Registration</Link>
        <Link className="btn btn-ghost text-xl" to="/login">Login</Link>
        <Link className="btn btn-ghost text-xl" to="/logout">Logout</Link>
        <Link className="btn btn-ghost text-xl" to="/">Home</Link>
        <Link className="btn btn-ghost text-xl" to="/profile">Profile</Link>
        <Link className="btn btn-ghost text-xl" to="/jobs">Jobs</Link>
      </nav>
    </>
  );
}
