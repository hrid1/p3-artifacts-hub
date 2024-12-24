import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRoute.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
const helmetContext = {};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider context={helmetContext}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
