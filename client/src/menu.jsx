import {NavLink} from "react-router-dom";

export default function Menu() {
  return (
    <nav className="navbar bg-base-100 flex-grow">
      <p className="text-xl">Job Hunter</p>
      <NavLink className="btn btn-ghost text-xl" to="/registration">
        Registration
      </NavLink>
      <NavLink className="btn btn-ghost text-xl" to="/login">
        LogIn
      </NavLink>
      <NavLink className="btn btn-ghost text-xl" to="/logout">
        LogOut
      </NavLink>
      <NavLink className="btn btn-ghost text-xl" to="/">
        Jobs
      </NavLink>
      <NavLink className="btn btn-ghost text-xl" to="/profile">
        Profile
      </NavLink>
      <NavLink className="btn btn-ghost text-xl" to="/jobs">
        Add job advertisement
      </NavLink>
    </nav>
  );
}
