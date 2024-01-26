import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ProfileLogo from "@/assets/Images/ProfileLogo.svg";
import CheckIcon from "@/assets/Images/CheckIcon.svg";
import LockIcon from "@/assets/Icons/LockIcon.svg";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Textarea } from "../ui/textarea";

const steps = [
  "Seller account creation",
  "Verify GST number",
  "Store Name",
  "Shipping Preferences & Pickup address",
  "Bank Details",
];

const VerifyGst = () => {
  const [active, setAactive] = useState(4);
  return (
    <>
      <div className="border-b-[#00000026] border-solid border-[1px]">
        <div className="lg:custom_container section_padding">
          <div className="px-[300px] verify_stepper pb-[20px] pt-[30px]">
            <Box sx={{ width: "100%" }}>
              <Stepper activeStep={active} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel className="font-Poppins text-[16px] font-[400] leading-[normal] text-[#263238]">
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </div>
        </div>
      </div>
      {active == 0 && (
        <div className="max-w-[660px] w-full mx-auto pt-[50px] pb-[100px]">
          <h3 className="text-[24px] font-[600] leading-[normal] tracking-[0.24px] font-Poppins">
            Verify your GST details
          </h3>
          <div className="mt-[17px]">
            <h4 className="text-[16px] text-[#263238] font-Poppins font-[400] leading-[24px] pb-[5px]">
              15 digit GST number
            </h4>
            <Input
              value={"18AABCU9603R"}
              type="text"
              className="bg-[#EBEEEF] border-[#AAB7B8] text-[15px] font-Poppins font-[500] leading-[23px] max-w-[505px]"
            />
          </div>
          <div className="mt-[50px]">
            <h3 className="text-[16px] text-[#263238] font-Poppins font-[600] leading-[normal] tracking-[0.16px] pb-[18px]">
              Review your GST details
            </h3>
            <div className="border-[1px] border-solid border-[#00000066] rounded-[5px] px-[30px]">
              <div className="border-b-[1px] py-[25px] border-solid border-[#00000026] flex items-center gap-[18px]">
                <img src={ProfileLogo} alt="ProfileLogo" />
                <div>
                  <h3 className="text-[22px] text-[#263238] font-Poppins font-[500] leading-[normal]">
                    Dev Khadi Bhandar
                  </h3>
                  <p className="text-[16px] text-[#00000080] font-Poppins font-[400] leading-[24px]">
                    This is your trade name.
                  </p>
                </div>
              </div>
              <div className="flex gap-[70px] mt-[30px]">
                <div>
                  <h4 className="text-[15px] text-[#00000080] font-Poppins font-[400] leading-[24px]">
                    GST NUMBER
                  </h4>
                  <p className="text-[15px] text-[#263238] font-Poppins font-[500] leading-[24px] tracking-[0.15px]">
                    18AABCU9603R1ZM
                  </p>
                </div>
                <div>
                  <h4 className="text-[15px] text-[#00000080] font-Poppins font-[400] leading-[24px]">
                    GST NUMBER
                  </h4>
                  <p className="text-[15px] text-[#263238] font-Poppins font-[500] leading-[24px] tracking-[0.15px]">
                    18AABCU9603R1ZM
                  </p>
                </div>
              </div>
              <div className="mt-[30px]">
                <h4 className="text-[15px] text-[#00000080] font-Poppins font-[400] leading-[24px]">
                  LEGAL NAME
                </h4>
                <p className="text-[15px] text-[#263238] font-Poppins font-[500] leading-[24px] tracking-[0.15px]">
                  Red Khadi
                </p>
              </div>
              <div className="my-[30px]">
                <h4 className="text-[15px] text-[#00000080] font-Poppins font-[400] leading-[24px]">
                  SDDRESS OF PRINCIPLE PLACE OF BUSINESS
                </h4>
                <p className="text-[15px] text-[#263238] font-Poppins font-[500] leading-[24px] tracking-[0.15px]">
                  89, SUBHAM SOC, Gurgoan, Sector 19, Ahmedabad - 719712
                </p>
              </div>
            </div>
            <div className="mt-[30px]">
              <h3 className="text-[15px] text-[#263238] font-Poppins font-[600] leading-[24px] tracking-[-0.15px] pb-[15px]">
                By clicking on ‘ Continue to verify’ you agree that:
              </h3>
              <div className="flex items-start gap-[18px]">
                <img src={CheckIcon} alt="CheckIcon" className="mt-[10px]" />
                <p className="text-[15px] text-[#00000080] font-Poppins font-[400] leading-[24px]">
                  You have read and agree to comply with and be bound by the{" "}
                  <span className="text-primary">
                    Greemart Services Business Solutions Agreement , Easy ahip
                    Terms of Service, Runway T&Cs and addendum to the Greemart
                    Services Busimess Solutions Agreement.
                  </span>
                </p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="text-[#FFFFFF] rounded-[5px] w-full mt-[30px] text-[18px] font-Poppins font-[400] leading-[23px]">
                    Continue to verify
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[450px]">
                  <DialogHeader>
                    <DialogTitle className="text-[24px] font-[600] tracking-[0.24px] leading-[normal] text-[#263238]">
                      Enter OTP
                    </DialogTitle>
                  </DialogHeader>
                  <div className="py-[20px]">
                    <p className="text-[16px] text-[#000000B2] font-Poppins font-[400] leading-[normal] tracking-[0.8px]">
                      an otp has been sent to the mobile and email address of
                      primary GST holder.
                    </p>
                    <div className="flex gap-[15px] h-[50px] my-[25px]">
                      <Input
                        type="text"
                        className="h-full rounded-none border-[#0000004D]"
                      />
                      <Input
                        type="text"
                        className="h-full rounded-none border-[#0000004D]"
                      />
                      <Input
                        type="text"
                        className="h-full rounded-none border-[#0000004D]"
                      />
                      <Input
                        type="text"
                        className="h-full rounded-none border-[#0000004D]"
                      />
                      <Input
                        type="text"
                        className="h-full rounded-none border-[#0000004D]"
                      />
                      <Input
                        type="text"
                        className="h-full rounded-none border-[#0000004D]"
                      />
                    </div>
                    <div className="flex justify-between">
                      <p className="font-Poppins text-[16px] font-[500] tracking-[0.08px] text-primary">
                        Resend OTP
                      </p>
                      <p className="font-Poppins text-[16px] font-[500] tracking-[0.08px] text-[#00000066]">
                        12 Secs
                      </p>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" className="text-[#fff] rounded-[5px]">
                      SUBMIT
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <div className="mt-[20px]">
                <p className="max-w-[497px] w-full text-[16px] text-[#00000080] font-Poppins font-[400] leading-[22px]">
                  A One-Time Password (OTP) will be sent to the primary mobile
                  and email address linked to the GST number entered.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {active == 1 && (
        <div className="max-w-[660px] w-full mx-auto pt-[50px] pb-[100px]">
          <h3 className="text-[24px] font-[600] leading-[normal] tracking-[0.24px] font-Poppins">
            Give your store a name
          </h3>
          <div className="mt-[10px]">
            <h4 className="text-[16px] text-[#263238] font-Poppins font-[400] leading-[24px] pb-[5px]">
              You can update the store name at any time from account settings
              post regidtration.
            </h4>
          </div>
          <div className="mt-[40px]">
            <div className="border-[1px] border-solid border-[#00000066] rounded-[5px] px-[30px]">
              <div className="border-b-[1px] py-[25px] border-solid border-[#00000026] flex items-center gap-[18px]">
                <div>
                  <h3 className="text-[19px] text-[#263238] font-Poppins font-[500] leading-[normal]">
                    Your Store Name
                  </h3>
                  <Input type="text" className="w-full" />
                </div>
              </div>
              <div className="flex gap-[70px] mt-[30px]">
                <div>
                  <h4 className="text-[15px] text-[#00000080] font-Poppins font-[400] leading-[24px]">
                    GST NUMBER
                  </h4>
                  <p className="text-[15px] text-[#263238] font-Poppins font-[500] leading-[24px] tracking-[0.15px]">
                    18AABCU9603R1ZM
                  </p>
                </div>
                <div>
                  <h4 className="text-[15px] text-[#00000080] font-Poppins font-[400] leading-[24px]">
                    GST NUMBER
                  </h4>
                  <p className="text-[15px] text-[#263238] font-Poppins font-[500] leading-[24px] tracking-[0.15px]">
                    18AABCU9603R1ZM
                  </p>
                </div>
              </div>
              <div className="mt-[30px]">
                <h4 className="text-[15px] text-[#00000080] font-Poppins font-[400] leading-[24px]">
                  LEGAL NAME
                </h4>
                <p className="text-[15px] text-[#263238] font-Poppins font-[500] leading-[24px] tracking-[0.15px]">
                  Red Khadi
                </p>
              </div>
              <div className="my-[30px]">
                <h4 className="text-[15px] text-[#00000080] font-Poppins font-[400] leading-[24px]">
                  SDDRESS OF PRINCIPLE PLACE OF BUSINESS
                </h4>
                <p className="text-[15px] text-[#263238] font-Poppins font-[500] leading-[24px] tracking-[0.15px]">
                  89, SUBHAM SOC, Gurgoan, Sector 19, Ahmedabad - 719712
                </p>
              </div>
            </div>
            <div className="mt-[30px]">
              <Button className="text-[#FFFFFF] rounded-[5px] w-full mt-[30px] text-[18px] font-Poppins font-[400] leading-[23px]">
                Save and continue
              </Button>
            </div>
          </div>
        </div>
      )}
      {active == 2 && (
        <div className="max-w-[660px] w-full mx-auto pt-[50px] pb-[100px]">
          <h3 className="text-[24px] font-[600] leading-[normal] tracking-[0.24px] font-Poppins">
            Pickup address
          </h3>
          <div className="mt-[10px]">
            <h4 className="text-[16px] text-[#263238] font-Poppins font-[400] leading-[24px] pb-[5px]">
              This is where your orders will be picked up from.
            </h4>
          </div>
          <div className="mt-[50px]">
            <div className="border-[1px] border-solid border-[#00000066] rounded-[5px] p-[20px] flex gap-[25px]">
              <div className="pt-[3px]">
                <input type="radio" className="h-[21px] w-[21px]" />
              </div>
              <div>
                <h3 className="text-[19px] font-[600] leading-[24px] mb-[7px] font-Poppins">
                  Dev Khadi Bhandar{" "}
                </h3>
                <p className="text-[15px] text-[#00000080] font-[400] leading-[24px] tracking-[0.15px] font-Poppins max-w-[346px]">
                  53, Subham apartments, Gurgoan, Sector 33 Ahmedabad - 615024
                </p>
                <p className="text-[15px] text-[#00000080] font-[400] leading-[24px] tracking-[0.15px] font-Poppins max-w-[346px]">
                  P.No: +91 98765 43210
                </p>
                <button className="text-[15px] text-primary mt-[5px] font-[400] leading-[24px] tracking-[0.15px] font-Poppins max-w-[346px]">
                  Edit address
                </button>
              </div>
            </div>
          </div>
          <div className="mt-[25px]">
            <div className="border-[1px] border-solid border-[#00000066] rounded-[5px] py-[25px] px-[20px] flex gap-[25px]">
              <div className="pt-[3px]">
                <input type="radio" className="h-[21px] w-[21px]" />
              </div>
              <div className="w-full">
                <h3 className="text-[19px] font-[600] leading-[24px] mb-[7px] font-Poppins">
                  Add new pickup address
                </h3>
                <div className="mt-[37px]">
                  <label
                    htmlFor=""
                    className="font-Poppins text-[16px] font-[500] leading-[24px] tracking-[0.16px] text-[#000000B2]"
                  >
                    Pin code*
                  </label>
                  <Input className="border-[#00000033] !max-w-[410px] !w-full" />
                  <p className="font-Poppins text-[16px] font-[500] leading-[24px] tracking-[0.16px] text-[#000000B2] mt-[5px]">
                    This has to be within Haryana.
                  </p>
                </div>
                <div className="mt-[25px]">
                  <label
                    htmlFor=""
                    className="font-Poppins text-[16px] font-[500] leading-[24px] tracking-[0.16px] text-[#000000B2]"
                  >
                    City*
                  </label>
                  <Input className="border-[#00000033] !max-w-[410px] !w-full" />
                </div>
                <div className="mt-[25px]">
                  <label
                    htmlFor=""
                    className="font-Poppins text-[16px] font-[500] leading-[24px] tracking-[0.16px] text-[#000000B2]"
                  >
                    State*
                  </label>
                  <Input className="border-[#00000033] !max-w-[410px] !w-full" />
                </div>
                <div className="mt-[25px]">
                  <label
                    htmlFor=""
                    className="font-Poppins text-[16px] font-[500] leading-[24px] tracking-[0.16px] text-[#000000B2]"
                  >
                    Area, Street, Building No.*
                  </label>
                  <Textarea
                    className="border-[#00000033] rounded-[5px] !max-w-[410px] !w-full font-Poppins text-[16px] font-[300] italic tracking-[0.16px] leading-[24px] text-[#000000B2]"
                    placeholder="Enter address such as area name, building number, door number,etc."
                  ></Textarea>
                </div>
              </div>
            </div>
            <div className="mt-[30px]">
              <Button className="text-[#FFFFFF] rounded-[5px] w-full mt-[30px] text-[18px] font-Poppins font-[400] leading-[23px]">
                Save and continue
              </Button>
            </div>
          </div>
        </div>
      )}
      {active == 3 && (
        <div className="max-w-[660px] w-full mx-auto pt-[50px] pb-[100px]">
          <h3 className="text-[24px] font-[600] leading-[normal] tracking-[0.24px] font-Poppins mb-[30px]">
            Select your preferred shipping method.
          </h3>
          <div className="max-w-[505px] w-full">
            <div className="border-[1px] border-solid border-primary p-[20px] flex gap-[25px]">
              <div className="pt-[3px]">
                <input type="radio" className="h-[21px] w-[21px]" />
              </div>
              <div>
                <h3 className="text-[19px] font-[600] leading-[24px] mb-[7px] font-Poppins">
                  Easy Ship (You store, Greemart ships)
                </h3>
                <p className="text-[15px] text-[#00000080] font-[400] leading-[24px] tracking-[0.15px] font-Poppins max-w-[346px]">
                  You store and pack orders at your location.Greemart will pick
                  them and deliver to couriers.
                </p>
                <button className="text-[15px] rounded-[50px] bg-[#578C22] px-[17px] py-[4px] text-[#fff] mt-[10px] font-[400] leading-[24px] tracking-[0.15px] font-Poppins max-w-[346px]">
                  Edit address
                </button>
              </div>
            </div>
            <div className="border-[1px] border-solid border-[#00000066] p-[20px] flex gap-[25px]">
              <div className="pt-[3px]">
                <input type="radio" className="h-[21px] w-[21px]" />
              </div>
              <div>
                <h3 className="text-[19px] font-[600] leading-[24px] mb-[7px] font-Poppins">
                  Self Ship (Your store, you ship)
                </h3>
                <p className="text-[15px] text-[#00000080] font-[400] leading-[24px] tracking-[0.15px] font-Poppins max-w-[346px]">
                  You store and pack deliver orders to customers either on your
                  own or through third-party couriers.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[100px]">
            <p className="text-[15px] text-[#00000080] font-[400] leading-[24px] tracking-[0.15px] font-Poppins max-w-[505px]">
              You can update the shipping method preference at any time feom
              account settings post registration.
            </p>
            <Button className="text-[#FFFFFF] max-w-[505px] rounded-[5px] w-full mt-[20px] text-[18px] font-Poppins font-[400] leading-[23px]">
              Save and continue
            </Button>
          </div>
        </div>
      )}
      {active == 4 && (
        <div className="max-w-[505px] w-full mx-auto pt-[50px] pb-[100px]">
          <h3 className="text-[24px] font-[600] leading-[normal] tracking-[0.24px] font-Poppins">
            Pickup address
          </h3>
          <div className="mt-[10px]">
            <h4 className="text-[16px] text-[#263238] font-Poppins font-[400] leading-[24px] pb-[5px]">
              Greemart needs your bank account details to transfer the money you
              make from your sales on Amazon.in. You can update bank details at
              any time from account settings post registration.
            </h4>
          </div>
          <div className="bg-[#17AEC91F] flex flex-col  px-[40px] rounded-[10px] gap-[20px] mt-[20px] py-[30px]">
            <div>
              <h3 className="leading-[24px] font-[400] text-[14px] font-Poppins text-[#263238]">
                GST number
              </h3>
              <p className="leading-[24px] font-[600] text-[16px] font-Poppins text-[#263238]">
                18AABCU9603R1ZM
              </p>
            </div>
            <div>
              <h3 className="leading-[24px] font-[400] text-[14px] font-Poppins text-[#263238]">
                TRADE NAME
              </h3>
              <p className="leading-[24px] font-[600] text-[16px] font-Poppins text-[#263238]">
                Rave Khanq
              </p>
            </div>
            <div>
              <h3 className="leading-[24px] font-[400] text-[14px] font-Poppins text-[#263238]">
                LEGAL NAME
              </h3>
              <p className="leading-[24px] font-[600] text-[16px] font-Poppins text-[#263238]">
                Patel Khadi Bhandar
              </p>
            </div>
          </div>
          <div>
            <div className="mt-[60px]">
              <label
                htmlFor=""
                className="font-Poppins text-[16px] font-[500] leading-[24px] tracking-[0.16px] text-[#000000B2]"
              >
                Account holder Name
              </label>
              <Input className="border-[#00000033] !max-w-[505px] !w-full" />
              <p className="font-Poppins text-[16px] font-[500] leading-[24px] tracking-[0.16px] text-[#000000B2] mt-[5px]">
                This should match with the name on PAN.
              </p>
            </div>
            <div className="mt-[25px]">
              <label
                htmlFor=""
                className="font-Poppins text-[16px] font-[500] leading-[24px] tracking-[0.16px] text-[#000000B2]"
              >
                Bank account number
              </label>
              <Input className="border-[#00000033] !max-w-[505px] !w-full" />
            </div>
            <div className="mt-[25px]">
              <label
                htmlFor=""
                className="font-Poppins text-[16px] font-[500] leading-[24px] tracking-[0.16px] text-[#000000B2]"
              >
                Re-enter Bank account number
              </label>
              <Input className="border-[#00000033] !max-w-[505px] !w-full" />
            </div>
            <div className="mt-[25px]">
              <label
                htmlFor=""
                className="font-Poppins text-[16px] font-[500] leading-[24px] tracking-[0.16px] text-[#000000B2]"
              >
                IFSC code
              </label>
              <Input className="border-[#00000033] !max-w-[505px] !w-full" />
              <p className="font-Poppins text-[16px] font-[500] leading-[24px] tracking-[0.16px] text-primary text-right mt-[10px]">
                Search IFSC code
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[20px] mt-[50px]">
            <img src={LockIcon} alt="LockIcon" />
            <p className="text-[16px] text-[#263238] font-Poppins font-[400] leading-[24px] ">
              This information will be handled as per Greemart
            </p>
          </div>
          <Button className="text-[#FFFFFF] rounded-[5px] w-full mt-[15px] text-[18px] font-Poppins font-[400] leading-[23px]">
            Save and continue
          </Button>
        </div>
      )}
    </>
  );
};

export default VerifyGst;
