import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import circlePlus from "@/assets/Icons/circleplus.svg";
import shoesImage from "@/assets/Images/shoesImage.svg";
import qustionMartIcon from "@/assets/Icons/qustionMartIcon.svg";
import UdgarIcon from "@/assets/Icons/UdgarIcon.svg";
import blockUdgarIcon from "@/assets/Icons/blockUdgarIcon.svg";
import cancellIcon from "@/assets/Icons/cancellIcon.svg";
import searchIcon from "@/assets/Icons/searchIcon.svg";
import querIcon from "@/assets/Icons/querIcon.svg";
import texIcon from "@/assets/Icons/texIcon.svg";
import { useState } from "react";
import ReactQuill from "react-quill";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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

const AttributesPage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
    },
  ];
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
      defaultValue="Basicsettings"
      className="w-full mt-[32px] pl-[40px] pr-[60px]"
    >
      <TabsList className="w-full bg-transparent p-0 justify-start">
        <TabsTrigger
          value="Basicsettings"
          className="rounded-none border-t-[3px] border-solid border-transparent px-[20px] py-[15px] font-Poppins w-fit text-[17px]  leading-[normal] font-[500] tracking-[0.17px]"
        >
          Attributes
        </TabsTrigger>
        <TabsTrigger
          value="Quantities"
          className="rounded-none border-t-[3px] border-solid border-transparent px-[20px] py-[15px] font-Poppins w-fit text-[17px]  leading-[normal] font-[500] tracking-[0.17px]"
        >
          Features
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="Basicsettings"
        className="bg-[#FFF] mt-[7px] relative z-10 pb-[100px]"
      >
        <div className="py-[7px] pl-[20px] flex items-center gap-[10px] bg-[#FAFBFC] border-[1px] border-solid border-[#0000001A]">
          <img src={blockUdgarIcon} alt="blockUdgarIcon" />
          Attributes
        </div>
        <div>
          <div className="flex gap-[30px] mt-[40px]">
            <Label className="block w-[400px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              *Name
            </Label>
            <div className="max-w-[450px] w-full flex gap-[10px]">
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
            <Label className="block w-[400px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              *Public name
            </Label>
            <div className="max-w-[450px] w-full flex gap-[10px]">
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
            <Label className="block w-[400px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              *Attribute type
            </Label>
            <div className="max-w-[450px] w-full flex gap-[10px]">
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
        </div>
        <div className="flex gap-[20px] mt-[100px] mr-[40px] justify-end">
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
      </TabsContent>
      <TabsContent
        value="Quantities"
        className="bg-[#FFF] mt-[7px] relative z-10 pb-[100px]"
      >
        <div className="py-[7px] pl-[20px] flex items-center gap-[10px] bg-[#FAFBFC] border-[1px] border-solid border-[#0000001A]">
          <img src={blockUdgarIcon} alt="blockUdgarIcon" />
          Attributes
        </div>
        <div>
          <div className="flex gap-[30px] mt-[40px]">
            <Label className="block w-[400px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              *Name
            </Label>
            <div className="max-w-[450px] w-full flex gap-[10px]">
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
        </div>
        <div className="flex gap-[20px] mt-[100px] mr-[40px] justify-end">
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
      </TabsContent>
    </Tabs>
  );
};

export default AttributesPage;
