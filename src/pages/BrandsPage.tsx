import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import blockUdgarIcon from "@/assets/Icons/brandIcon.svg";
import blockSuppliersIcon from "@/assets/Icons/suppliers.svg";
import { useState } from "react";
import ReactQuill from "react-quill";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

const BrandsPage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [tabs, setTabs] = useState("Brands");
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
    <Tabs
      defaultValue="Brands"
      className="w-full pt-[32px] pl-[40px] pr-[60px] h-[calc(100vh-98px)] overflow-y-auto"
    >
      <TabsList className="w-full bg-transparent p-0 justify-start">
        <TabsTrigger
          value="Brands"
          onClick={() => setTabs("Brands")}
          className={`rounded-none border-t-[3px] border-solid border-transparent px-[20px] py-[15px] font-Poppins w-fit text-[17px] leading-[normal] font-[500] tracking-[0.17px] ${
            tabs == "Brands" && "border-t-[3px] border-[#17AEC9]"
          }`}
        >
          Brands
        </TabsTrigger>
        <TabsTrigger
          value="address"
          onClick={() => setTabs("address")}
          className={`rounded-none border-t-[3px] border-solid border-transparent px-[20px] py-[15px] font-Poppins w-fit text-[17px] leading-[normal] font-[500] tracking-[0.17px] ${
            tabs == "address" && "border-t-[3px] border-[#17AEC9]"
          }`}
        >
          Brands Address
        </TabsTrigger>
        <TabsTrigger
          value="Suppliers"
          onClick={() => setTabs("Suppliers")}
          className={`rounded-none border-t-[3px] border-solid border-transparent px-[20px] py-[15px] font-Poppins w-fit text-[17px] leading-[normal] font-[500] tracking-[0.17px] ${
            tabs == "Suppliers" && "border-t-[3px] border-[#17AEC9]"
          }`}
        >
          Suppliers
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="Brands"
        className="bg-[#FFF] mt-[7px] relative z-10 pb-[100px]"
      >
        <div className="py-[7px] pl-[20px] text-[#454D4A] flex font-semibold text-[24px] font-Poppins items-center gap-[10px] bg-[#FAFBFC] border-[1px] border-solid border-[#0000001A]">
          <img src={blockUdgarIcon} alt="blockUdgarIcon" />
          Brands
        </div>
        <div className="mt-[58px]">
          <div className="flex gap-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              <span className="text-[#DB3700]">*</span> Name
            </Label>
            <div className="max-w-[883px] w-full">
              <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
              <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#00000080] pt-[5px] border-[#00000033]">
                {"invalid characters: <>;=#{}"}
              </p>
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="flex items-start gap-[10px] justify-end w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Short Description
            </Label>
            <div className="max-w-[883px] w-full">
              <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="flex items-start gap-[10px] justify-end w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Description
            </Label>
            <div className="max-w-[883px] w-full">
              <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Logo
            </Label>
            <div className="max-w-[883px] w-full">
              <div className="flex relative">
                <Input
                  className="bg-[#F9F9F9] w-full font-Poppins text-[14px] font-[400] leading-[normal] tracking-[0.28px] border-[#00000033]"
                  placeholder="Choose file(s)"
                  type="file"
                />
                <Button className="rounded-ss-none rounded-es-none px-[24px] right-0 font-Poppins text-[16px] font-[400] leading-[normal] tracking-[0.32px] absolute">
                  Browse
                </Button>
              </div>
              <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#566166B2] pt-[5px]">
                Upload a brand logo drom your computer.
              </p>
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Meta title
            </Label>
            <div className="max-w-[883px] w-full">
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
              <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#566166B2] pt-[5px]">
                {"invalid characters:<>={}"}
              </p>
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Meta description
            </Label>
            <div className="max-w-[883px] w-full">
              <div className="max-w-[883px] w-full flex gap-[10px]">
                <Textarea className="bg-[#F9F9F9] w-full font-Poppins text-[14px] font-[400] leading-[normal] tracking-[0.28px] border-[#00000033]" />
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
              <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#566166B2] pt-[5px]">
                {"invalid characters:<>={}"}
              </p>
            </div>
          </div>

          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Meta keywords
            </Label>
            <div className="max-w-[883px] w-full">
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
              <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#566166B2] pt-[5px]">
                To add tags, click in the field, write something, and then press
                the “Enter” key. <br /> {"invalid characters:<>={}"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Enabled
            </Label>
            <div className="max-w-[883px] flex gap-[10px] w-full items-center">
              <Switch className="" />
              <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#566166B2] pt-[5px]">
                Yes
              </p>
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]"></Label>
            <div className="max-w-[883px] w-full">
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
        </div>
      </TabsContent>
      <TabsContent
        value="address"
        className="bg-[#FFF] mt-[7px] relative z-10 pb-[100px]"
      >
        <div className="py-[7px] pl-[20px] text-[#454D4A] flex items-center gap-[10px] font-semibold text-[24px] font-Poppins bg-[#FAFBFC] border-[1px] border-solid border-[#0000001A]">
          {/* <img src={blockUdgarIcon} alt="blockUdgarIcon" /> */}
          Addresses
        </div>
        <div className="mt-[58px]">
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Brand
            </Label>
            <div className="max-w-[883px] w-full">
              <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              <span className="text-[#DB3700]">*</span> First name
            </Label>
            <div className="max-w-[883px] w-full">
              <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
              <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#00000080] pt-[5px] border-[#00000033]">
                {"invalid characters:<>={}@#”{}_$%:"}
              </p>
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              <span className="text-[#DB3700]">*</span> Last name
            </Label>
            <div className="max-w-[883px] w-full">
              <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
              <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#00000080] pt-[5px] border-[#00000033]">
                {"invalid characters:<>={}@#”{}_$%:"}
              </p>
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              <span className="text-[#DB3700]">*</span> Address
            </Label>
            <div className="max-w-[883px] w-full">
              <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Address(2)
            </Label>
            <div className="max-w-[883px] w-full">
              <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Zip/Postal code
            </Label>
            <div className="max-w-[883px] w-full">
              <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              <span className="text-[#DB3700]">*</span> Country
            </Label>
            <div className="max-w-[883px] w-full">
              <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              <span className="text-[#DB3700]">*</span> State
            </Label>
            <div className="max-w-[883px] w-full">
              <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              DNI
            </Label>
            <div className="max-w-[883px] w-full">
              <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Phone
            </Label>
            <div className="max-w-[883px] w-full">
              <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Mobile phone
            </Label>
            <div className="max-w-[883px] w-full">
              <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Other
            </Label>
            <div className="max-w-[883px] w-full">
              <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
              <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#00000080] pt-[5px] border-[#00000033]">
                {"invalid characters:<>={}"}
              </p>
            </div>
          </div>

          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]"></Label>
            <div className="max-w-[883px] w-full">
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
        </div>
      </TabsContent>
      <TabsContent
        value="Suppliers"
        className="bg-[#FFF] mt-[7px] relative z-10 pb-[100px]"
      >
        <div className="py-[7px] pl-[20px] flex font-semibold text-[24px] font-Poppins text-[#454D4A] items-center gap-[10px] bg-[#FAFBFC] border-[1px] border-solid border-[#0000001A]">
          <img src={blockSuppliersIcon} alt="blockSuppliersIcon" />
          Suppliers
        </div>
        <div className="mt-[58px]">
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              <span className="text-[#DB3700]">*</span> Name
            </Label>
            <div className="max-w-[883px] w-full">
              <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
              <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#00000080] pt-[5px] border-[#00000033]">
                {"invalid characters:<>;=#{}"}
              </p>
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="flex items-start gap-[10px] justify-end w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Description
            </Label>
            <div className="max-w-[883px] w-full">
              <ReactQuill theme="snow" value={value} onChange={setValue} />
              <p className="font-Poppins text-end text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#00000080] pt-[5px] border-[#00000033]">
                0 of 12850 characters allowed
              </p>
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Mobile Phone
            </Label>
            <div className="max-w-[883px] w-full">
              <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              <span className="text-[#DB3700]">*</span> Address
            </Label>
            <div className="max-w-[883px] w-full">
              <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Address(2)
            </Label>
            <div className="max-w-[883px] w-full">
              <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Zip/Postal code
            </Label>
            <div className="max-w-[883px] w-full">
              <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              <span className="text-[#DB3700]">*</span> Country
            </Label>
            <div className="max-w-[883px] w-full">
              <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              <span className="text-[#DB3700]">*</span> State
            </Label>
            <div className="max-w-[883px] w-full">
              <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              DNI
            </Label>
            <div className="max-w-[883px] w-full">
              <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Phone
            </Label>
            <div className="max-w-[883px] w-full">
              <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Mobile phone
            </Label>
            <div className="max-w-[883px] w-full">
              <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Logo
            </Label>
            <div className="max-w-[883px] w-full">
              <div className="flex">
                <Input
                  className="bg-[#F9F9F9] w-full font-Poppins text-[14px] font-[400] leading-[normal] tracking-[0.28px] border-[#00000033]"
                  placeholder="Choose file(s)"
                  type="file"
                />
                <Button className="rounded-ss-none rounded-es-none px-[24px] font-Poppins text-[16px] font-[400] leading-[normal] tracking-[0.32px]">
                  Browse
                </Button>
              </div>
              <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#566166B2] pt-[5px]">
                Upload a brand logo drom your computer.
              </p>
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Meta title
            </Label>
            <div className="max-w-[883px] w-full">
              <div className="max-w-[883px] w-full flex gap-[10px]">
                <Textarea className="bg-[#F9F9F9] w-full font-Poppins text-[14px] font-[400] leading-[normal] tracking-[0.28px] border-[#00000033]" />
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
          </div>

          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Meta description
            </Label>
            <div className="max-w-[883px] w-full">
              <div className="max-w-[883px] w-full flex gap-[10px]">
                <Textarea className="bg-[#F9F9F9] w-full font-Poppins text-[14px] font-[400] leading-[normal] tracking-[0.28px] border-[#00000033]" />
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
          </div>

          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Meta keywords
            </Label>
            <div className="max-w-[883px] w-full">
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
              <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#566166B2] pt-[5px]">
                To add tags, click in the field, write something, and then press
                the “Enter” key. <br /> {"invalid characters:<>={}"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Enabled
            </Label>
            <div className="max-w-[883px] flex gap-[10px] w-full items-center">
              <Switch />
              <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#566166B2] pt-[5px]">
                Yes
              </p>
            </div>
          </div>

          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]"></Label>
            <div className="max-w-[883px] w-full">
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
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default BrandsPage;
