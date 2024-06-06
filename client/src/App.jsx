import {RouterProvider, createBrowserRouter} from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import Home from "./home/home";
import Profile from "./profile/profile";
import Registration from "./auth/registration";
import Login from "./auth/login";
import Logout from "./auth/logout";
import JobForm from "./jobForm/jobform";
import RequireAuth from "./RequireAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
        element: (
          <RequireAuth>
            <Profile />
          </RequireAuth>
        ),
      },
      {
        path: "/jobs",
        element: (
          <RequireAuth>
            <JobForm />
          </RequireAuth>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
