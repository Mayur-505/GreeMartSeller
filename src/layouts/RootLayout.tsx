import MainHeader from "@/components/MainHeader/MainHeader";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
