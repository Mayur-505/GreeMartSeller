import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useState } from "react";

const SettingPage = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepChange = (step: number) => () => {
    setActiveStep(step);
  };

  const steps = [
    {
      label: "Order Placed",
      description: "22 Mar, 2023 - 11:35AM",
    },
    {
      label: "Packed",
      description: "23 Mar, 2023 - 10:55AM",
    },
    {
      label: "Shipped",
      description: "23 Mar, 2023 - 03:45AM",
    },
    {
      label: "Delivered",
      description: "23 Mar, 2023 - 03:45AM",
    },
  ];
  return (
    <div className="py-[50px] pl-[40px] pr-[80px] h-[calc(100vh-98px)] overflow-y-auto">
      <div className="pb-[30px]">
        <h2 className="font-Poppins font-[600] text-[22px] text-[#454D4A] tracking-[0.24px] leading-[normal]">
          Settings
        </h2>
      </div>
      <div className="shadow-boxdropshadow py-[30px] px-[50px] rounded-[10px] bg-[#FFF]">
        {/* <div className="max-w-[658px] w-full border border-[#0000001A] rounded-[5px] py-[22px] px-[20px]">
          <div className="flex justify-between border-b-[1px] border-dashed border-[#0000001A] pb-[22px]">
            <h3 className="text-[#000000B2] font-Poppins text-[17px] font-[500]">
              Track Order
            </h3>
            <p className="text-[#00000080] font-Poppins text-[14px] font-[400]">
              Tracking ID- 
              <span className="text-[#4D5EFF] text-[12px]">#1004216609</span>
            </p>
          </div>
          <div className="pt-[22px]">
            <Box sx={{ width: "100%" }}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((step, index) => (
                  <Step key={index}>
                    <StepLabel onClick={handleStepChange(index)}>
                      <h3 className="font-Poppins text-[14px] font-[500] text-[#00000099]">
                        {step.label}
                      </h3>
                      <p className="font-Poppins text-[12px] font-[300] text-[#00000099]">
                        {step.description}
                      </p>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </div>
        </div> */}
        <div className="flex items-center gap-[79px]">
          <div className="w-[50%]">
            <Label
              htmlFor="FirstName"
              className="font-Poppins font-[400] text-[14px] text-[#666] leading-[17px] pb-[5px] inline-block"
            >
              First Name <span className="text-[#DB3700]">*</span>
            </Label>
            <Input
              type="text"
              id="FirstName"
              className="focus-visible:ring-offset-[none] border-[#00000066]"
            />
          </div>
          <div className="w-[50%]">
            <Label
              htmlFor="LastName"
              className="font-Poppins font-[400] text-[14px] text-[#666] leading-[17px] pb-[5px] inline-block"
            >
              Last Name <span className="text-[#DB3700]">*</span>
            </Label>
            <Input
              type="text"
              id="LastName"
              className="focus-visible:ring-offset-[none] border-[#00000066]"
            />
          </div>
        </div>
        <div className="flex items-center gap-[79px] pt-[20px]">
          <div className="w-[50%]">
            <Label
              htmlFor="EmailAddress"
              className="font-Poppins font-[400] text-[14px] text-[#666] leading-[17px] pb-[5px] inline-block"
            >
              Email Address <span className="text-[#DB3700]">*</span>
            </Label>
            <Input
              type="email"
              id="EmailAddress"
              className="focus-visible:ring-offset-[none] border-[#00000066]"
            />
          </div>
          <div className="w-[50%]">
            <Label
              htmlFor="PhoneNumber"
              className="font-Poppins font-[400] text-[14px] text-[#666] leading-[17px] pb-[5px] inline-block"
            >
              Phone Number
            </Label>
            <Input
              type="number"
              id="PhoneNumber"
              className="focus-visible:ring-offset-[none] border-[#00000066]"
            />
          </div>
        </div>
        <div className="flex items-center gap-[79px] pt-[20px]">
          <div className="max-w-[50%] w-full">
            <Label
              htmlFor="City"
              className="font-Poppins font-[400] text-[14px] text-[#666] leading-[17px] pb-[5px] inline-block"
            >
              City
            </Label>
            <Input
              type="text"
              id="City"
              className="focus-visible:ring-offset-[none] border-[#00000066]"
            />
          </div>
          <div className="max-w-[50%] w-full">
            <Label
              htmlFor="Country"
              className="font-Poppins font-[400] text-[14px] text-[#666] leading-[17px] pb-[5px] inline-block"
            >
              Country
            </Label>
            <Input
              type="text"
              id="Country"
              className="focus-visible:ring-offset-[none] border-[#00000066]"
            />
          </div>
          <div className="max-w-[50%] w-full">
            <Label
              htmlFor="ZipCode"
              className="font-Poppins font-[400] text-[14px] text-[#666] leading-[17px] pb-[5px] inline-block"
            >
              Zip Code
            </Label>
            <Input
              type="number"
              id="ZipCode"
              className="focus-visible:ring-offset-[none] border-[#00000066]"
            />
          </div>
        </div>
        <div className="pt-[20px]">
          <Label
            htmlFor="Description"
            className="font-Poppins font-[400] text-[14px] text-[#666] leading-[17px] pb-[5px] inline-block"
          >
            <span className="text-[#DB3700]">*</span> Description
          </Label>
          <Textarea
            id="Description"
            rows={6}
            className="focus-visible:ring-offset-[none] border-[#00000066]"
          />
        </div>
        <div className="flex justify-end mt-[30px]">
          <Button className="px-[15px] py-[7px] rounded-[5px] h-auto font-Poppins font-[600] text-[#fff] text-[18px] leading-[normal] tracking-[0.27px]">
            Update Profile
          </Button>
        </div>
      </div>
      <div className="shadow-boxdropshadow py-[30px] px-[50px] rounded-[10px] mt-[30px] bg-[#FFF]">
        <div className="flex items-center gap-[79px]">
          <div className="w-[50%]">
            <Label
              htmlFor="Twitter"
              className="font-Poppins font-[400] text-[14px] text-[#666] leading-[17px] pb-[5px] inline-block"
            >
              Twitter <span className="text-[#DB3700]">*</span>
            </Label>
            <Input
              type="text"
              id="Twitter"
              className="focus-visible:ring-offset-[none] border-[#00000066]"
            />
          </div>
          <div className="w-[50%]">
            <Label
              htmlFor="Whatsapp"
              className="font-Poppins font-[400] text-[14px] text-[#666] leading-[17px] pb-[5px] inline-block"
            >
              Whatsapp
            </Label>
            <Input
              type="number"
              id="Whatsapp"
              className="focus-visible:ring-offset-[none] border-[#00000066]"
            />
          </div>
        </div>
        <div className="flex items-center gap-[79px] pt-[20px]">
          <div className="w-[50%]">
            <Label
              htmlFor="Facebook"
              className="font-Poppins font-[400] text-[14px] text-[#666] leading-[17px] pb-[5px] inline-block"
            >
              Facebook
            </Label>
            <Input
              type="text"
              id="Facebook"
              className="focus-visible:ring-offset-[none] border-[#00000066]"
            />
          </div>
          <div className="w-[50%]">
            <Label
              htmlFor="Email"
              className="font-Poppins font-[400] text-[14px] text-[#666] leading-[17px] pb-[5px] inline-block"
            >
              Email
            </Label>
            <Input
              type="email"
              id="Email"
              className="focus-visible:ring-offset-[none] border-[#00000066]"
            />
          </div>
        </div>
        <div className="flex justify-end mt-[30px]">
          <Button className="px-[15px] py-[7px] rounded-[5px] text-[#fff] h-auto font-Poppins font-[600] text-[18px] leading-[normal] tracking-[0.27px]">
            Change Social Media
          </Button>
        </div>
      </div>
      <div className="shadow-boxdropshadow py-[30px] px-[50px] rounded-[10px] mt-[60px] bg-[#FFF]">
        <div className="flex items-center gap-[79px] pt-[20px]">
          <div className="max-w-[50%] w-full">
            <Label
              htmlFor="Old Password"
              className="font-Poppins font-[400] text-[14px] text-[#666] leading-[17px] pb-[5px] inline-block"
            >
              Old Password <span className="text-[#DB3700]">*</span>
            </Label>
            <Input
              type="text"
              id="Old-Password"
              className="focus-visible:ring-offset-[none] border-[#00000066]"
            />
          </div>
          <div className="max-w-[50%] w-full">
            <Label
              htmlFor="Password"
              className="font-Poppins font-[400] text-[14px] text-[#666] leading-[17px] pb-[5px] inline-block"
            >
              Password
            </Label>
            <Input
              type="text"
              id="Password"
              className="focus-visible:ring-offset-[none] border-[#00000066]"
            />
          </div>
          <div className="max-w-[50%] w-full">
            <Label
              htmlFor="Confirm-Password"
              className="font-Poppins font-[400] text-[14px] text-[#666] leading-[17px] pb-[5px] inline-block"
            >
              Confirm Password
            </Label>
            <Input
              type="text"
              id="Confirm-Password"
              className="focus-visible:ring-offset-[none] border-[#00000066]"
            />
          </div>
        </div>
        <div className="pt-[20px]">
          <button className="font-Poppins text-[#1456FF] font-[400] text-[14px] leading-[17px]">
            Forgot Password ?
          </button>
        </div>
        <div className="flex justify-end mt-[30px]">
          <Button className="px-[15px] py-[7px] rounded-[5px] h-auto font-Poppins text-[#fff] font-[600] text-[18px] leading-[normal] tracking-[0.27px]">
            Change Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
