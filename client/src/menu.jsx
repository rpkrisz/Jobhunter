import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {logout} from "./state/authSlice.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {selectUser} from "./state/authSlice.js";

export default function Menu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <nav className="navbar bg-base-100 flex-grow">
      <Link className="text-3xl" to="/">
        <FontAwesomeIcon icon={faBriefcase} size="lg" />{" "}
      </Link>
      {!user && (
        <>
          <NavLink className="btn btn-ghost text-xl" to="/registration">
            Registration
          </NavLink>
          <NavLink className="btn btn-ghost text-xl" to="/login">
            LogIn
          </NavLink>
        </>
      )}
      {user && (
        <>
          <NavLink className="btn btn-ghost text-xl" to="/">
            Jobs
          </NavLink>
          <NavLink className="btn btn-ghost text-xl" to="/profile">
            Profile
          </NavLink>
          {user.role === "company" && (
            <NavLink className="btn btn-ghost text-xl" to="/jobs/create">
              Add job advertisement
            </NavLink>
          )}
          <NavLink
            className="btn btn-ghost text-xl"
            to="/"
            onClick={() => {
              dispatch(logout());
            }}
          >
            LogOut
          </NavLink>
        </>
      )}
    </nav>
  );
}
