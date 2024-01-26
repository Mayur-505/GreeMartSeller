import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Switch } from "../ui/switch";
import { useState } from "react";

const AddCustomerDialog = () => {
  const [switchValue, setSwitchValue] = useState(false);

  const handalswitchvalue = (e) => {
    console.log(e);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex gap-[10px] items-center font-Poppins text-[18px] font-[600] tracking-[0.27px] leading-[normal]">
          <div className="w-[19px] h-[19px] rounded-full bg-[#FFF] text-[#000] text-[16px] flex items-center justify-center">
            +
          </div>
          <span className="text-[#fff]">ADD Customers</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[720px] p-0 !rounded-none">
        <DialogHeader className="py-[24px] shadow-bottomshadow px-[40px] bg-[#F8F8F8]">
          <DialogTitle className="text-[24px] font-Inter font-[600] text-[#263238] leading-[normal]">
            Add New Customer
          </DialogTitle>
        </DialogHeader>
        <div className="px-[40px] py-[10px] max-h-[250px] overflow-y-auto">
          <div>
            <Label
              htmlFor="Customerinformation"
              className="font-Poppins font-[500] text-[13px] text-[#666] leading-[17px] tracking-[0.13px] pb-[5px] inline-block"
            >
              Customer Information
            </Label>
            <div className="flex flex-col gap-[15px]">
              <Input
                type="text"
                id="Customerinformation"
                placeholder="Customer Name"
                className="focus-visible:ring-offset-[none] border-[#00000066]"
              />
              <Input
                type="text"
                id="Customerinformation"
                placeholder="Customer Email"
                className="focus-visible:ring-offset-[none] border-[#00000066]"
              />
              <div className="flex gap-[15px]">
                <div className="max-w-[84px] w-full">
                  <Select>
                    <SelectTrigger id="Gender">
                      <SelectValue placeholder="+91" />
                    </SelectTrigger>
                    <SelectContent
                      position="popper"
                      className="!focus-visible:ring-offset-[none] max-w-[84px] placeholder:text-[14px] placeholder:font-Poppins placeholder:font-[400] placeholder:text-[#A2A2A2] border-[#00000066]"
                    >
                      <SelectItem value="male">+90</SelectItem>
                      <SelectItem value="female">+9</SelectItem>
                      <SelectItem value="other">+1</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Input
                  type="text"
                  id="Customerinformation"
                  placeholder="Customer Information"
                  className="focus-visible:ring-offset-[none] border-[#00000066]"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-[15px] mt-[23px]">
                <Label
                  htmlFor="airplane-mode"
                  className="font-Poppins font-[400] text-[13px] text-[#666] leading-[normal]"
                >
                  Add Address
                </Label>
                <Switch
                  id="airplane-mode"
                  onClick={() => setSwitchValue(!switchValue)}
                />
              </div>
              {switchValue && (
                <div className="flex flex-col gap-[15px] mt-[20px]">
                  <Input
                    type="text"
                    id="BuildingNo"
                    placeholder="Building No., Street Address"
                    className="focus-visible:ring-offset-[none] border-[#00000066]"
                  />
                  <Input
                    type="text"
                    id="City"
                    placeholder="City"
                    className="focus-visible:ring-offset-[none] border-[#00000066]"
                  />
                  <div className="flex gap-[20px]">
                    <div className="w-[50%]">
                      <Select>
                        <SelectTrigger id="Gender">
                          <SelectValue placeholder="Country" />
                        </SelectTrigger>
                        <SelectContent
                          position="popper"
                          className="!focus-visible:ring-offset-[none] max-w-[84px] placeholder:text-[14px] placeholder:font-Poppins placeholder:font-[400] placeholder:text-[#A2A2A2] border-[#00000066]"
                        >
                          <SelectItem value="male">Country1</SelectItem>
                          <SelectItem value="female">Country2</SelectItem>
                          <SelectItem value="other">Country3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-[50%]">
                      <Select>
                        <SelectTrigger id="Gender">
                          <SelectValue placeholder="State" />
                        </SelectTrigger>
                        <SelectContent
                          position="popper"
                          className="!focus-visible:ring-offset-[none] max-w-[84px] placeholder:text-[14px] placeholder:font-Poppins placeholder:font-[400] placeholder:text-[#A2A2A2] border-[#00000066]"
                        >
                          <SelectItem value="male">State1</SelectItem>
                          <SelectItem value="female">State2</SelectItem>
                          <SelectItem value="other">State3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <p className="font-Poppins font-[400] text-[#00000080] text-[14px] leading-[17px] tracking-[0.14px]">
                      <span className="text-[#000000B2] pr-[10px]">
                        Billing Address{" "}
                      </span>{" "}
                      Same as Customer Address
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <DialogFooter className="shadow-topshadow bg-[#F8F8F8] py-[17px] pr-[40px]">
          <div>
            <Button
              variant={"ghost"}
              className="text-[#FF0000D9] font-Poppins text-[14px] font-[400] tracking-[0.21px] leading-[normal]"
            >
              Cancel
            </Button>
            <Button className="px-[29px] py-[6px] h-auto font-Poppins text-[18px] font-[600] tracking-[0.285px] leading-[normal]">
              Add
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddCustomerDialog;
