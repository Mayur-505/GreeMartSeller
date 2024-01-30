import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const VerificationCode = () => {
  const inputsRef = useRef<any>([]);
  const [Otp, setOtp] = useState("");

  useEffect(() => {
    const handleKeyDown = (event: any, index: number) => {
      const inputs = inputsRef.current;
      if (event.key === "Backspace") {
        setOtp((prev) => prev.slice(0, -1));
        inputs[index].value = "";
        if (index !== 0) inputs[index - 1].focus();
      } else if (event.key === "Tab") return false;
      else {
        const isNumericKey = /^[0-9]$/.test(event.key);
        if (index === inputs.length - 1 && inputs[index].value !== "") {
          return true;
        } else if (isNumericKey) {
          setOtp((prevValue) => prevValue + event.key.toUpperCase());
          inputs[index].value = event.key;
          if (index !== inputs.length - 1) inputs[index + 1].focus();
          event.preventDefault();
        } else if (/^[A-Za-z]$/.test(event.key)) {
          setOtp((prevValue) => prevValue + event.key.toUpperCase());
          inputs[index].value = event.key.toUpperCase();
          if (index !== inputs.length - 1) inputs[index + 1].focus();
          event.preventDefault();
        }
      }
    };
    const inputs = document.querySelectorAll("#otp > *[id]");
    inputsRef.current = Array.from(inputs);
    inputsRef.current.forEach((input: any, index: number) => {
      input.addEventListener("keydown", (event: any) =>
        handleKeyDown(event, index)
      );
    });
    return () => {
      // Cleanup event listeners when the component unmounts
      inputsRef.current.forEach((input: any, index: number) => {
        input.removeEventListener("keydown", (event: any) =>
          handleKeyDown(event, index)
        );
      });
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-[calc(100vh-108px)]">
      <div className="shadow-custom h-[543px] w-full max-w-[560px] rounded-[13px] p-5 md:px-[49px] md:pb-[35px] md:pt-[50px]">
        <div>
          <h4 className="mb-[15px] font-Poppins text-xl font-medium text-primary_text md:mb-[30px] md:text-[26px]">
            Sent to OTP
          </h4>
          <div className="mb-[30px] md:mb-[50px]">
            <span className="font-Poppins text-base font-normal text-[#7E8488]">
              Please enter the OTP sent to <br />{" "}
              <span className="text-primary">7049712552.</span>
            </span>
          </div>
          <form>
            <div className="mb-[40px] flex justify-center gap-[12px]" id="otp">
              {Array.from({ length: 4 }).map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  id={`otp-${index}`}
                  pattern="[0-9]"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  required
                  ref={(input) => (inputsRef.current[index] = input)}
                  className="h-[50px] w-[50px] border-b-[1px] border-[#ABABAB] text-center text-[25px] font-medium text-[#000] md:h-[60px] md:w-[60px] md:text-[30px]"
                />
              ))}
            </div>
          </form>
          <div className="mb-[35px] text-center font-Poppins text-sm font-normal text-[#7E8488] md:text-base">
            Not received your code?{" "}
            <Link className="text-[#5591C5]" to={"#"}>
              Resend code
            </Link>
          </div>
          <div>
            <Button className="w-full rounded-[5px] py-3 font-Poppins text-lg font-semibold text-[#fff]">
              Let’s Go!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;
