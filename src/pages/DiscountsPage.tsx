import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import blockUdgarIcon from "@/assets/Icons/blockUdgarIcon.svg";
import calendarIcon from "@/assets/Icons/callenderIcon.svg";
import MenIcon from "@/assets/Icons/MenIcon.svg";
import CopyIcon from "@/assets/Icons/CopyIcon.svg";
import { useState } from "react";
import ReactQuill from "react-quill";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";

const DiscountsPage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const frameworks = [
    {
      value: "en",
      label: "EN",
    },
    {
      value: "co",
      label: "CO",
    },
  ];
  return (
    <>
      <Tabs
        defaultValue="Brands"
        className="w-full pt-[32px] pl-[40px] pr-[60px] h-[calc(100vh-98px)] overflow-y-auto"
      >
        <TabsList className="w-full bg-transparent p-0 justify-start">
          <TabsTrigger
            value="Brands"
            className="rounded-none border-t-[3px] border-solid border-transparent px-[20px] py-[15px] font-Poppins w-fit text-[17px]  leading-[normal] font-[500] tracking-[0.17px]"
          >
            Cart rules
          </TabsTrigger>
          <TabsTrigger
            value="address"
            className="rounded-none border-t-[3px] border-solid border-transparent px-[20px] py-[15px] font-Poppins w-fit text-[17px]  leading-[normal] font-[500] tracking-[0.17px]"
          >
            Catalog Price Rules
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="Brands"
          className="bg-[#FFF] mt-[7px] relative z-10 pb-[100px]"
        >
          <div className="py-[7px] pl-[20px] flex font-semibold text-[18px] font-Poppins text-[#454D4A] items-center gap-[10px] bg-[#FAFBFC] border-[1px] border-solid border-[#0000001A]">
            <img src={blockUdgarIcon} alt="blockUdgarIcon" />
            Cart rule
          </div>
          <Tabs defaultValue="INFORMATION" className="w-full color-change">
            <TabsList className="w-full bg-transparent p-0 justify-start">
              <TabsTrigger
                value="INFORMATION"
                className="rounded-none border-t-[3px] border-solid border-transparent px-[20px] py-[8px] font-Poppins w-fit text-[17px]  leading-[normal] font-[500] tracking-[0.17px]"
              >
                INFORMATION
              </TabsTrigger>
              <TabsTrigger
                value="CONDITIONS"
                className="rounded-none border-t-[3px] border-solid border-transparent px-[20px] py-[8px] font-Poppins w-fit text-[17px]  leading-[normal] font-[500] tracking-[0.17px]"
              >
                CONDITIONS
              </TabsTrigger>
              <TabsTrigger
                value="ACTIONS"
                className="rounded-none border-t-[3px] border-solid border-transparent px-[20px] py-[8px] font-Poppins w-fit text-[17px]  leading-[normal] font-[500] tracking-[0.17px]"
              >
                ACTIONS
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="INFORMATION"
              className="bg-[#FFF] relative z-10 border-[1px] border-[#00000033] border-solid py-[40px]"
            >
              <div className="flex gap-[30px]">
                <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] text-[#000000CC] font-[400] leading-[normal] tracking-[0.34px]">
                  <span className="text-[#DB3700]">*</span> Name
                </Label>
                <div className="max-w-[883px] w-full flex gap-[10px]">
                  <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        aria-expanded={open}
                        className="max-w-[65px] text-[14px] text-[#000000B2] font-Poppins font-[400] leading-[normal] tracking-[0.28px] justify-between border-[#00000033]"
                      >
                        {value
                          ? frameworks.find(
                              (framework) => framework.value === value
                            )?.label
                          : "en"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search framework..." />
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          {frameworks.map((framework) => (
                            <CommandItem
                              key={framework.value}
                              value={framework.value}
                              onSelect={(currentValue) => {
                                setValue(
                                  currentValue === value ? "" : currentValue
                                );
                                setOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  value === framework.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {framework.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <div className="flex gap-[30px] mt-[30px]">
                <Label className="flex items-start text-[#000000CC] gap-[10px] justify-end w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
                  Description
                </Label>
                <div className="max-w-[883px] w-full">
                  <ReactQuill theme="snow" value={value} onChange={setValue} />
                </div>
              </div>
              <div className="flex items-center gap-[30px] mt-[30px]">
                <Label className="block w-[300px] text-[#000000CC] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
                  Partial use
                </Label>
                <div className="max-w-[883px] flex gap-[10px] w-full items-center">
                  <Switch />
                  <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#566166B2] pt-[5px]">
                    Yes
                  </p>
                </div>
              </div>
              <div className="flex gap-[30px] mt-[30px]">
                <Label className="block w-[300px] text-[#000000CC] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
                  Priority
                </Label>
                <div className="max-w-[137px] w-full">
                  <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
                </div>
              </div>
              <div className="flex items-center gap-[30px] mt-[30px]">
                <Label className="block w-[300px] text-[#000000CC] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
                  Enabled
                </Label>
                <div className="max-w-[883px] flex gap-[10px] w-full items-center">
                  <Switch />
                  <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#566166B2] pt-[5px]">
                    Yes
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="CONDITIONS"
              className="bg-[#FFF] relative z-10 border-[1px] border-[#00000033] border-solid py-[40px]"
            >
              <div className="flex gap-[30px]">
                <Label className="block w-[300px] text-[#000000CC] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
                  Limit to a single customer
                </Label>
                <div className="max-w-[883px] w-full flex relative">
                  <img
                    src={MenIcon}
                    alt="MenIcon"
                    className="absolute top-0 left-0"
                  />
                  <Input className="bg-[#F9F9F9] w-full border-[#00000033] !pl-[50px]" />
                  <img
                    src={CopyIcon}
                    alt="CopyIcon"
                    className="absolute top-0 right-0"
                  />
                </div>
              </div>
              <div className="flex gap-[30px] mt-[30px]">
                <Label className="block w-[300px] text-[#000000CC] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
                  Valid
                </Label>
                <div className="max-w-[883px] w-full gap-[18px] flex">
                  <div className="w-[50%] relative">
                    <p className="absolute top-0 left-0 h-full border-[1px] border-solid border-[#00000033] px-[9px] flex items-center justify-center font-Poppins font-[400] text-[14px] tracking-[0.28px] rounded-[5px]">
                      From
                    </p>
                    <Input className="bg-[#F9F9F9] w-full border-[#00000033] !pl-[60px]" />
                    <img
                      src={calendarIcon}
                      alt="CopyIcon"
                      className="absolute top-0 right-0 h-full"
                    />
                  </div>
                  <div className="w-[50%] relative">
                    <p className="absolute top-0 left-0 h-full border-[1px] border-solid border-[#00000033] px-[19px] flex items-center justify-center font-Poppins font-[400] text-[14px] tracking-[0.28px] rounded-[5px]">
                      To
                    </p>
                    <Input className="bg-[#F9F9F9] w-full border-[#00000033] !pl-[60px]" />
                    <img
                      src={calendarIcon}
                      alt="CopyIcon"
                      className="absolute top-0 right-0 h-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-[30px] mt-[30px]">
                <Label className="block w-[300px] text-[#000000CC] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
                  Minimum amount
                </Label>
                <div className="max-w-[883px] w-full gap-[18px] flex">
                  <div className="max-w-[130px] w-full">
                    <Input className="bg-[#F9F9F9] w-full border-[#00000033] " />
                  </div>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        aria-expanded={open}
                        className="max-w-[131px] w-full text-[14px] text-[#000000B2] font-Poppins font-[400] leading-[normal] tracking-[0.28px] justify-between border-[#00000033]"
                      >
                        {value
                          ? frameworks.find(
                              (framework) => framework.value === value
                            )?.label
                          : "USD"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search framework..." />
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          {frameworks.map((framework) => (
                            <CommandItem
                              key={framework.value}
                              value={framework.value}
                              onSelect={(currentValue) => {
                                setValue(
                                  currentValue === value ? "" : currentValue
                                );
                                setOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  value === framework.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {framework.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        aria-expanded={open}
                        className="max-w-[209px] w-full text-[14px] text-[#000000B2] font-Poppins font-[400] leading-[normal] tracking-[0.28px] justify-between border-[#00000033]"
                      >
                        {value
                          ? frameworks.find(
                              (framework) => framework.value === value
                            )?.label
                          : "Tax included"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search framework..." />
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          {frameworks.map((framework) => (
                            <CommandItem
                              key={framework.value}
                              value={framework.value}
                              onSelect={(currentValue) => {
                                setValue(
                                  currentValue === value ? "" : currentValue
                                );
                                setOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  value === framework.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {framework.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        aria-expanded={open}
                        className="max-w-[366px] w-full text-[14px] text-[#000000B2] font-Poppins font-[400] leading-[normal] tracking-[0.28px] justify-between border-[#00000033]"
                      >
                        {value
                          ? frameworks.find(
                              (framework) => framework.value === value
                            )?.label
                          : "Shipping excluded"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search framework..." />
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          {frameworks.map((framework) => (
                            <CommandItem
                              key={framework.value}
                              value={framework.value}
                              onSelect={(currentValue) => {
                                setValue(
                                  currentValue === value ? "" : currentValue
                                );
                                setOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  value === framework.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {framework.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <div className="flex gap-[30px] mt-[30px]">
                <Label className="block text-[#000000CC] w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
                  Total available
                </Label>
                <div className="max-w-[883px] w-full">
                  <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
                </div>
              </div>
              <div className="flex gap-[30px] text-[#000000CC] mt-[30px]">
                <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
                  Total available for each user
                </Label>
                <div className="max-w-[883px] w-full">
                  <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
                </div>
              </div>
              <div className="flex gap-[30px] mt-[30px]">
                <Label className="block text-[#000000CC] w-[300px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
                  Restrictions
                </Label>
                <div className="max-w-[883px] flex flex-col gap-[14px] w-full">
                  <div className="flex gap-[10px] items-center">
                    <Checkbox />{" "}
                    <p className="font-Poppins text-[#000000B2] text-[14px] font-[400] leading-[normal] tracking-[0.28px]">
                      Country selection
                    </p>
                  </div>
                  <div className="flex gap-[10px] items-center">
                    <Checkbox />{" "}
                    <p className="font-Poppins text-[#000000B2] text-[14px] font-[400] leading-[normal] tracking-[0.28px]">
                      Carrier selection
                    </p>
                  </div>
                  <div className="flex gap-[10px] items-center">
                    <Checkbox />{" "}
                    <p className="font-Poppins text-[#000000B2] text-[14px] font-[400] leading-[normal] tracking-[0.28px]">
                      Customer group selection
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="ACTIONS"
              className="bg-[#FFF]  relative z-10 border-[1px] border-[#00000033] border-solid py-[40px]"
            >
              <div className="flex items-center gap-[30px]">
                <Label className="block w-[300px] mt-[7px] text-right text-[#000000B2] font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
                  Free shipping
                </Label>
                <div className="max-w-[883px] flex gap-[10px] w-full items-center">
                  <Switch className="" />
                  <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#566166B2] pt-[5px]">
                    No
                  </p>
                </div>
              </div>
              <div className="flex gap-[30px] mt-[30px]">
                <Label className="block text-[#000000B2] w-[300px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
                  Apply a discount
                </Label>
                <div className="max-w-[883px] flex flex-col gap-[14px] w-full">
                  <div className="flex gap-[10px] items-center">
                    <input type="radio" />{" "}
                    <p className="font-Poppins text-[14px] font-[400] leading-[normal] text-[#00000080] tracking-[0.28px]">
                      Percent (%)
                    </p>
                  </div>
                  <div className="flex gap-[10px] items-center">
                    <input type="radio" />{" "}
                    <p className="font-Poppins text-[14px] text-[#00000080] font-[400] leading-[normal] tracking-[0.28px]">
                      Amount
                    </p>
                  </div>
                  <div className="flex gap-[10px] items-center">
                    <input type="radio" />{" "}
                    <p className="font-Poppins text-[14px] text-[#00000080] font-[400] leading-[normal] tracking-[0.28px]">
                      <span className="text-[#FF000080] text-[14px] font-Poppins font-[800]">
                        X
                      </span>{" "}
                      None
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-[30px] mt-[30px]">
                <Label className="block text-[#000000B2] w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
                  Exclude discounted products
                </Label>
                <div className="max-w-[883px] flex gap-[10px] w-full items-center">
                  <Switch className="" />
                  <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#566166B2] pt-[5px]">
                    No
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[30px] mt-[30px]">
                <Label className="block text-[#000000B2] w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
                  Send a free gift
                </Label>
                <div className="max-w-[883px] flex gap-[10px] w-full items-center">
                  <Switch className="" />
                  <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#566166B2] pt-[5px]">
                    No
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]"></Label>
            <div className="px-[40px] w-full">
              <div className="flex gap-[20px] mt-[50px] justify-end">
                <Button
                  variant={"outline"}
                  className="text-[17px] text-[#00000066] px-[15px] py-[8px] h-auto tracking-[0.34px] leading-[normal] font-Poppins font-[500]"
                >
                  Cancel
                </Button>
                <Button className="text-[17px] text-[#FFF] px-[15px] py-[8px] h-auto tracking-[0.34px] leading-[normal] font-Poppins font-[500]">
                  Save
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent
          value="address"
          className="bg-[#FFF] mt-[7px] relative z-10 pb-[30px]"
        >
          {" "}
          <div className="py-[7px] pl-[20px] flex font-semibold text-[18px] font-Poppins text-[#454D4A] items-center gap-[10px] bg-[#FAFBFC] border-[1px] border-solid border-[#0000001A]">
            <img src={blockUdgarIcon} alt="blockUdgarIcon" />
            Catalog Price Rules
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default DiscountsPage;
