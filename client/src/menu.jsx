import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {logout} from "./state/authSlice.js";

export default function Menu() {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  return (
    <nav className="navbar bg-base-100 flex-grow">
      <Link className="text-3xl" to="/">
        JH
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
            <NavLink className="btn btn-ghost text-xl" to="/jobs">
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
