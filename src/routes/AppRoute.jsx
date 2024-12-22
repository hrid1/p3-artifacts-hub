import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import AddArtifacts from "../pages/AddArtifacts/AddArtifacts";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";

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
        path: "/add-artifacts",
        element: (
          <PrivateRoute>
            <AddArtifacts />
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
