import Header from "@/components/Header/Header";
import MainHeader from "@/components/MainHeader/MainHeader";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const RootLayout = () => {
  const loction = useLocation();
  console.log("loction", loction.pathname);
  return (
    <>
      {loction.pathname.includes("auth") ? (
        <>
          <MainHeader />
          <main>
            <Outlet />
          </main>
        </>
      ) : (
        <div className="flex h-[100vh]">
          <Sidebar />
          <div className="max-w-[1573px] w-full">
            <Header />
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default RootLayout;
