import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import AddArtifact from "../pages/AddArtifact/AddArtifact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <h4>NOt Found</h4>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-artifacts",
        element: <h2>ALL Artifact</h2>,
      },
      {
        path: "/add-artifacts",
        element: (
          <PrivateRoute>
            <AddArtifact />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
]);
