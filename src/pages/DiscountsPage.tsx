import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import blockUdgarIcon from "@/assets/Icons/blockUdgarIcon.svg";
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
        className="w-full mt-[32px] pl-[40px] pr-[60px]"
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
              className="bg-[#FFF] relative z-10 border-[1px] border-[#00000033] border-solid"
            ></TabsContent>
            <TabsContent
              value="CONDITIONS"
              className="bg-[#FFF] relative z-10 border-[1px] border-[#00000033] border-solid"
            ></TabsContent>
            <TabsContent
              value="ACTIONS"
              className="bg-[#FFF]  relative z-10 border-[1px] border-[#00000033] border-solid"
            ></TabsContent>
          </Tabs>
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
        </TabsContent>
        <TabsContent
          value="address"
          className="bg-[#FFF] mt-[7px] relative z-10 pb-[30px]"
        ></TabsContent>
      </Tabs>
    </>
  );
};

export default DiscountsPage;
