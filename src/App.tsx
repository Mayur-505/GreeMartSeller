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
