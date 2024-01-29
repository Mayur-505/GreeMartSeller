import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import circlePlus from "@/assets/Icons/circleplus.svg";
import shoesImage from "@/assets/Images/shoesImage.svg";
import qustionMartIcon from "@/assets/Icons/qustionMartIcon.svg";
import UdgarIcon from "@/assets/Icons/UdgarIcon.svg";
import blockUdgarIcon from "@/assets/Icons/blockUdgarIcon.svg";
import ColorIcon from "@/assets/Icons/color.svg";
import FileIcon from "@/assets/Icons/file.svg";
import FolderIcon from "@/assets/Icons/folder.svg";
import cancellIcon from "@/assets/Icons/cancellIcon.svg";
import searchIcon from "@/assets/Icons/searchIcon.svg";
import querIcon from "@/assets/Icons/querIcon.svg";
import texIcon from "@/assets/Icons/texIcon.svg";
import { useEffect, useRef, useState } from "react";
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
import { ChromePicker } from "react-color";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AttributesPage = () => {
  const [open, setOpen] = useState(false);
  const [tabs, setTabs] = useState("Attributes");
  const [save, setSave] = useState(false);
  const [feature, setFeature] = useState(false);
  const [value, setValue] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [showPicker, setShowPicker] = useState(false);
  const divRef = useRef(null);

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setShowPicker(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

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
      defaultValue="Attributes"
      className="w-full pt-[32px] pl-[40px] pr-[60px] h-[calc(100vh-98px)] overflow-y-auto"
    >
      <TabsList className="w-full bg-transparent p-0 justify-start">
        <TabsTrigger
          value="Attributes"
          onClick={() => setTabs("Attributes")}
          className={`rounded-none border-t-[3px] border-solid border-transparent px-[20px] py-[15px] font-Poppins w-fit text-[17px] leading-[normal] font-[500] tracking-[0.17px] ${
            tabs == "Attributes" && "border-t-[3px] border-[#17AEC9]"
          }`}
        >
          Attributes
        </TabsTrigger>
        <TabsTrigger
          value="Features"
          onClick={() => setTabs("Features")}
          className={`rounded-none border-t-[3px] border-solid border-transparent px-[20px] py-[15px] font-Poppins w-fit text-[17px] leading-[normal] font-[500] tracking-[0.17px] ${
            tabs == "Features" && "border-t-[3px] border-[#17AEC9]"
          }`}
        >
          Features
        </TabsTrigger>
      </TabsList>
      {!save && (
        <TabsContent
          value="Attributes"
          className="bg-[#FFF] mt-[7px] relative z-10 pb-[100px]"
        >
          <div className="py-[7px] pl-[20px] font-medium text-[18px] font-Poppins text-[#000000CC] flex items-center gap-[10px] bg-[#FAFBFC] border-[1px] border-solid border-[#0000001A]">
            <img src={blockUdgarIcon} alt="blockUdgarIcon" />
            Values
          </div>
          <div>
            <div className="flex gap-[30px] mt-[30px]">
              <Label className="block w-[400px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
                <span className="text-[#DB3700]">*</span> Attribute group
              </Label>
              <div className="max-w-[293px] w-full flex gap-[10px]">
                <Select>
                  <SelectTrigger id="Color">
                    <SelectValue placeholder="Color" />
                  </SelectTrigger>
                  <SelectContent
                    position="popper"
                    className="!focus-visible:ring-offset-[none] max-w-[84px] placeholder:text-[14px] placeholder:font-Poppins placeholder:font-[400] placeholder:text-[#A2A2A2] border-[#00000066]"
                  >
                    <SelectItem value="select value">Select Value</SelectItem>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex gap-[30px] mt-[40px]">
              <Label className="block w-[400px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
                <span className="text-[#DB3700]">*</span> Value
              </Label>
              <div className="max-w-[641px] w-full flex gap-[10px]">
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
                <span className="text-[#DB3700]">*</span> Color
              </Label>
              <div className="max-w-[402px] w-full flex relative">
                <Input
                  className="bg-[#F9F9F9] w-full border-[#00000033]"
                  value={color}
                  readOnly
                />
                <img
                  src={ColorIcon}
                  alt="ColorIcon"
                  className="absolute right-0"
                  onClick={togglePicker}
                />
                {showPicker && (
                  <div
                    style={{
                      position: "absolute",
                      zIndex: "2",
                      right: "0",
                      top: "42px",
                    }}
                    ref={divRef}
                  >
                    <ChromePicker color={color} onChange={handleColorChange} />
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-[30px] mt-[30px]">
              <Label className="block w-[400px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
                Texture
              </Label>
              <div className="max-w-[402px] w-full flex relative">
                <Input
                  className="bg-[#EEE] pl-[50px] w-full border-[#00000033]"
                  type="file"
                />
                <img src={FileIcon} alt="ColorIcon" className="absolute" />
                <div className="flex items-center absolute right-0 rounded-[5px] bg-[#F5F8F9] border border-[#00000033] py-[7px] px-[13px]">
                  <img src={FolderIcon} alt="FolderIcon" className="mr-[5px]" />
                  <span className="text-[#000000B2] font-Poppins font-medium">
                    Add file
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-[30px] mt-[30px]">
              <Label className="block w-[400px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
                Current texture
              </Label>
              <div className="max-w-[402px] w-full flex items-center">
                <span className="text-[#00000080] block mt-[7px] font-Poppins text-[14px] font-normal">
                  None
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-[20px] mt-[100px] mx-[40px] justify-between">
            <Button
              variant={"outline"}
              className="text-[17px] text-[#00000066] px-[15px] py-[8px] h-auto tracking-[0.34px] leading-[normal] font-Poppins font-[500]"
            >
              Cancel
            </Button>
            <div>
              <Button
                className="text-[17px] mr-[10px] text-[#FFF] px-[15px] py-[8px] h-auto tracking-[0.34px] leading-[normal] font-Poppins font-[500]"
                onClick={() => setSave(true)}
              >
                Save then add another value
              </Button>
              <Button className="text-[17px] text-[#FFF] px-[15px] py-[8px] h-auto tracking-[0.34px] leading-[normal] font-Poppins font-[500]">
                Save
              </Button>
            </div>
          </div>
        </TabsContent>
      )}
      {save && (
        <TabsContent
          value="Attributes"
          className="bg-[#FFF] mt-[7px] relative z-10 pb-[100px]"
        >
          <div className="py-[7px] pl-[20px] flex items-center font-medium text-[18px] font-Poppins text-[#000000CC] gap-[10px] bg-[#FAFBFC] border-[1px] border-solid border-[#0000001A]">
            <img src={blockUdgarIcon} alt="blockUdgarIcon" />
            Attributes
          </div>
          <div>
            <div className="flex gap-[30px] mt-[40px]">
              <Label className="block w-[400px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
                <span className="text-[#DB3700]">*</span> Name
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
                <span className="text-[#DB3700]">*</span> Public name
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
                <span className="text-[#DB3700]">*</span> Attribute type
              </Label>
              <div className="max-w-[261px] w-full flex gap-[10px]">
                <Select>
                  <SelectTrigger id="Drop-down-list">
                    <SelectValue placeholder="Drop-down list" />
                  </SelectTrigger>
                  <SelectContent
                    position="popper"
                    className="!focus-visible:ring-offset-[none] max-w-[84px] placeholder:text-[14px] placeholder:font-Poppins placeholder:font-[400] placeholder:text-[#A2A2A2] border-[#00000066]"
                  >
                    <SelectItem value="select value">Select Value</SelectItem>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                  </SelectContent>
                </Select>
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
      )}
      {!feature && (
        <TabsContent
          value="Features"
          className="bg-[#FFF] mt-[7px] relative z-10 pb-[100px]"
        >
          <div className="py-[7px] pl-[20px] font-medium text-[18px] font-Poppins text-[#000000CC] flex items-center gap-[10px] bg-[#FAFBFC] border-[1px] border-solid border-[#0000001A]">
            <img src={blockUdgarIcon} alt="blockUdgarIcon" />
            Feature value
          </div>
          <div>
            <div className="flex gap-[30px] mt-[40px]">
              <Label className="block w-[400px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
                <span className="text-[#DB3700]">*</span> Feature
              </Label>
              <div className="max-w-[293px] w-full flex gap-[10px]">
                <Select>
                  <SelectTrigger id="Composition">
                    <SelectValue placeholder="Composition" />
                  </SelectTrigger>
                  <SelectContent
                    position="popper"
                    className="!focus-visible:ring-offset-[none] max-w-[84px] placeholder:text-[14px] placeholder:font-Poppins placeholder:font-[400] placeholder:text-[#A2A2A2] border-[#00000066]"
                  >
                    <SelectItem value="select value">Select Value</SelectItem>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex gap-[30px] mt-[40px]">
              <Label className="block w-[400px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
                <span className="text-[#DB3700]">*</span> Value
              </Label>
              <div className="max-w-[641px] w-full flex gap-[10px]">
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
          <div className="flex gap-[20px] mt-[100px] mx-[40px] justify-between">
            <Button
              variant={"outline"}
              className="text-[17px] text-[#00000066] px-[15px] py-[8px] h-auto tracking-[0.34px] leading-[normal] font-Poppins font-[500]"
            >
              Cancel
            </Button>
            <div>
              <Button
                className="text-[17px] mr-[10px] text-[#FFF] px-[15px] py-[8px] h-auto tracking-[0.34px] leading-[normal] font-Poppins font-[500]"
                onClick={() => setFeature(true)}
              >
                Save then add another value
              </Button>
              <Button className="text-[17px] text-[#FFF] px-[15px] py-[8px] h-auto tracking-[0.34px] leading-[normal] font-Poppins font-[500]">
                Save
              </Button>
            </div>
          </div>
        </TabsContent>
      )}
      {feature && (
        <TabsContent
          value="Features"
          className="bg-[#FFF] mt-[7px] relative z-10 pb-[100px]"
        >
          <div className="py-[7px] font-medium text-[18px] font-Poppins text-[#000000CC] pl-[20px] flex items-center gap-[10px] bg-[#FAFBFC] border-[1px] border-solid border-[#0000001A]">
            <img src={blockUdgarIcon} alt="blockUdgarIcon" />
            Features
          </div>
          <div>
            <div className="flex gap-[30px] mt-[40px]">
              <Label className="block w-[400px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
                <span className="text-[#DB3700]">*</span> Name
              </Label>
              <div className="max-w-[641px] w-full flex gap-[10px]">
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
      )}
    </Tabs>
  );
};

export default AttributesPage;
