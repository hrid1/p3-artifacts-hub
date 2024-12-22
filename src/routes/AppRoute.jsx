import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <h4>NOt Found</h4>,
    children: [
      {
        path: "/",
        element: (
          <>
            <h2 className="font-sans text-4xl"> HOme </h2>
            <h2 className="text-4xl "> HOme </h2>
          </>
        ),
      },
      {
        path: "/test",
        element: <h2> Test</h2>,
      },
    ],
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
]);
