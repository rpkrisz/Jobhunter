import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

export default function RequireAuth({children}) {
  const isAuthenticated = useSelector(state => !!state.auth.user);

  if (isAuthenticated) {
    return [children];
  }

  return <Navigate to="/login" />;
}
