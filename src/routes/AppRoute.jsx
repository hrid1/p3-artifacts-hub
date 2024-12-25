import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import AddArtifact from "../pages/AddArtifact/AddArtifact";
import AllArtifacts from "../pages/AllArtifacts/AllArtifacts";

import ArtifactDetails from "../pages/ArtifactDetails/ArtifactDetails";
import MyArtifacts from "../pages/MyArtifacts/MyArtifacts";
import UpdateArtifact from "../pages/UpdateArtifact/UpdateArtifact";
import LikeArtifacts from "../pages/LikedArtifacts/LikeArtifacts";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-artifacts",
        element: <AllArtifacts />,
        loader: () => fetch("https://artifact-server.vercel.app/artifacts"),
      },
      {
        path: "/artifact/:id",
        element: (
          <PrivateRoute>
            <ArtifactDetails />
          </PrivateRoute>
        ),
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
        path: "/my-artifacts",
        element: (
          <PrivateRoute>
            <MyArtifacts />
          </PrivateRoute>
        ),
      },
      {
        path: "/liked-artifacts",
        element: (
          <PrivateRoute>
            <LikeArtifacts />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-artifact/:id",
        element: (
          <PrivateRoute>
            <UpdateArtifact />,
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
 
]);
