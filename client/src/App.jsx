import {RouterProvider, createBrowserRouter} from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import Home from "./home/home";
import Profile from "./profile/profile";
import Registration from "./auth/registration";
import Login from "./auth/login";
import JobForm from "./jobs/jobform";
import RequireAuth from "./RequireAuth";
import Job from "./jobs/Job";
import ExperienceForm from "./experinces/ExperienceForm";

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
        path: "/profile",
        element: (
          <RequireAuth>
            <Profile />
          </RequireAuth>
        ),
      },
      {
        path: "/jobs",
        element: null,
        children: [
          {
            path: "/jobs/create",
            element: (
              <RequireAuth>
                <JobForm />
              </RequireAuth>
            ),
          },
          {
            path: "/jobs/:jobId",
            element: <Job />,
          },
        ],
      },
      {
        path: "/experiences",
        element: (
          <RequireAuth>
            <ExperienceForm />
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
