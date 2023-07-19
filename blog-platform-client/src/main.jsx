import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AuthProvider from "./contexts/AuthContext";
import "./index.css";
import ProtectedRoute from "./routes/ProtectedRoute";
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Root />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
