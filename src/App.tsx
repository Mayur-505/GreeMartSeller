import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import VerifyGst from "./components/VerifyGst/VerifyGst";
import SignInForm from "./components/auth/SignInForm";
import SignUpForm from "./components/auth/SignUpForm";
import Dashboard from "./pages/Dashboard";
import SettingPage from "./pages/SettingPage";
import AccountPage from "./pages/AccountPage";
import CustomerPage from "./pages/CustomerPage";
import Categorypage from "./pages/Categorypage";
import ProductsListPage from "./pages/ProductsListPage";
import SubCategoryPage from "./pages/SubCategoryPage";
import OrderListPage from "./pages/OrderListPage";
import AddProducts from "./components/AddProducts/AddProducts";
import AddCategories from "./components/AddCategories/AddCategories";
import AddSubCategories from "./components/AddSubCategories/AddSubCategories";
import AttributesPage from "./pages/AttributesPage";
import BrandsPage from "./pages/BrandsPage";
import DiscountsPage from "./pages/DiscountsPage";
import ForgetPassword from "./components/auth/ForgetPassword";
import ResetPassword from "./components/auth/ResetPassword";
import VerificationCode from "./components/auth/VerificationCode";
import AuthLayout from "./layouts/AuthLayout";
import OrderDetails from "./pages/OrderDetails";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
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
      {
        path: "forgetpassword",
        element: <ForgetPassword />,
      },
      {
        path: "resetpassword",
        element: <ResetPassword />,
      },
      {
        path: "verificode",
        element: <VerificationCode />,
      },
    ],
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/setting",
        element: <SettingPage />,
      },
      {
        path: "/account",
        element: <AccountPage />,
      },
      {
        path: "/customer",
        element: <CustomerPage />,
      },
      {
        path: "/category",
        element: <Categorypage />,
      },
      {
        path: "/productslist",
        element: <ProductsListPage />,
      },
      {
        path: "/subcategory",
        element: <SubCategoryPage />,
      },
      {
        path: "/orderlist",
        element: <OrderListPage />,
      },
      {
        path: "/orderdetail",
        element: <OrderDetails />,
      },
      {
        path: "/addproduct",
        element: <AddProducts />,
      },
      {
        path: "/addcategories",
        element: <AddCategories />,
      },
      {
        path: "/addsubcategories",
        element: <AddSubCategories />,
      },
      {
        path: "/attributes",
        element: <AttributesPage />,
      },
      {
        path: "/brands",
        element: <BrandsPage />,
      },
      {
        path: "/discounts",
        element: <DiscountsPage />,
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
