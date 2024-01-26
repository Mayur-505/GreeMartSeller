import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import VerifyGst from "./components/VerifyGst/VerifyGst";
import SignInForm from "./components/auth/SignInForm";
import SignUpForm from "./components/auth/SignUpForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "verify-gst",
        element: <VerifyGst />,
      },
      {
        path: "signin",
        element: <SignInForm />,
      },
      {
        path: "signup",
        element: <SignUpForm />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
