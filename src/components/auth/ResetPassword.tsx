import { Button } from "../ui/button";
import InputWithLabel from "../common/InputWithLabel";

const ResetPassword = () => {
  return (
    <div className="shadow-custom h-[560px] w-full max-w-[560px] rounded-[13px] p-5 md:px-[49px] md:pb-[35px] md:pt-[50px]">
      <div>
        <h4 className="mb-[15px] font-Poppins text-xl font-medium text-primary_text md:mb-[30px] md:text-[26px]">
          Reset Your Password
        </h4>
        <div className="mb-[15px]">
          <div className="grid w-full items-center">
            <InputWithLabel
              id="NewPassword"
              label="New Password"
              placeholder="New Password"
              className="h-[41px]"
            />
          </div>
        </div>
        <div className="mb-[35px]">
          <div className="grid w-full items-center">
            <InputWithLabel
              id="ConfirmPassword"
              label="Confirm Password"
              placeholder="Confirm Password"
              className="h-[41px]"
            />
          </div>
        </div>
        <div>
          <Button className="w-full rounded-[5px] py-[10px] font-Poppins text-lg font-semibold text-[#fff]">
            Create Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
