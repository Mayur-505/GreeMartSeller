import { Button } from "../ui/button";
import GoogleIcon from "@/assets/Icons/Google.svg";
import InputWithLabel from "../common/InputWithLabel";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-108px)]">
      <div className="shadow-custom w-full max-w-[560px] rounded-[13px] p-5 md:px-[49px] md:pb-[35px] md:pt-[50px]">
        <div>
          <h4 className="mb-[15px] font-Poppins text-xl font-medium text-primary_text md:mb-[30px] md:text-[26px]">
            Forget
            <br /> Your Password ?
          </h4>
          <div className="mb-[35px]">
            <div className="grid w-full items-center">
              <InputWithLabel
                id="email"
                label="Email"
                placeholder="Email or Phone Number"
                className="h-[41px]"
              />
            </div>
          </div>
          <div>
            <Button className="w-full rounded-[5px] py-3 font-Poppins text-lg font-semibold text-[#fff]">
              Let’s Go!
            </Button>
            <div className="flex flex-col py-[27px]">
              <span className="flex items-center justify-center space-x-2">
                <span className="h-px w-[164px] bg-[#E9E9EA]"></span>
                <span className="font-Roboto text-xs font-medium text-[#BCBCBE]">
                  OR
                </span>
                <span className="h-px w-[164px] bg-[#E9E9EA]"></span>
              </span>
            </div>
            <Button
              variant={"outline"}
              className="mb-5 w-full rounded-[5px] py-[10px] font-Poppins text-base font-medium text-[#9C9C9F]"
            >
              <img src={GoogleIcon} alt="GoogleIcon" className="mr-[10px]" />
              Sign up with Google
            </Button>
            <div className="mb-6 text-center font-Poppins text-base font-normal text-[#9C9C9F]">
              Already have account?{" "}
              <Link to={"/auth/signin"} className="font-medium text-primary">
                Sign in
              </Link>
            </div>
            <div className="font-Poppins text-xs font-normal text-[#6E6E73]">
              By signing up, you agree to billing's{" "}
              <Link to={""} className="font-normal text-primary">
                terms of service
              </Link>{" "}
              and{" "}
              <Link to={""} className="font-normal text-primary">
                privacy policy
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
