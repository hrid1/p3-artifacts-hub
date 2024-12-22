import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import AddArtifacts from "../pages/AddArtifacts/AddArtifacts";

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
        element: <AddArtifacts />,
      },
    ],
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
]);
