import { Outlet } from "react-router";
import SignLayoutImg from "@/assets/Images/SignLayout.svg";
import Logo from "@/assets/Icons/Logo.svg";

const AuthLayout = () => {
  return (
    <>
      <header className="flex items-center justify-center border-b-[1px] py-[30px]">
        <img src={Logo} alt="Logo" />
      </header>
      <main className="md:custom_container section_padding flex items-center justify-center py-[50px] md:py-[120px]">
        <div className="flex w-full flex-col items-center justify-center md:gap-[90px] lg:flex-row">
          <div className="w-full max-w-[540px]">
            <img src={SignLayoutImg} alt="SignLayoutImg" />
          </div>
          <div className="w-full max-w-[560px]">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default AuthLayout;
