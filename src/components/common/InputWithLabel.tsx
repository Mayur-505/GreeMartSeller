import { forwardRef } from "react";
import { Input, InputProps } from "../ui/input";
import { Label } from "../ui/label";

type InputWithLabelProps = InputProps & {
  label?: string;
};

const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProps>(
  ({ label, id, placeholder, type = "text", ...rest }, ref) => {
    return (
      <div>
        {label && (
          <Label
            htmlFor={id}
            className="mb-[5px] inline-block font-Poppins text-xs font-normal text-[#666]"
          >
            {label}
          </Label>
        )}
        <Input
          type={type}
          id={id}
          ref={ref}
          placeholder={placeholder}
          className=""
          {...rest}
        />
      </div>
    );
  }
);

export default InputWithLabel;
