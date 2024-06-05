import {Navigate, RouterProvider, createBrowserRouter} from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import Home from "./home/home";
import Profile from "./profile/profile";
import Registration from "./auth/registration";
import Login from "./auth/login";
import Logout from "./auth/logout";
import JobForm from "./jobForm/jobform";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Navigate to="/" />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/jobs",
        element: <JobForm />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
