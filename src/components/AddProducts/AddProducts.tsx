import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import circlePlus from "@/assets/Icons/circleplus.svg";
import shoesImage from "@/assets/Images/shoesImage.svg";
import qustionMartIcon from "@/assets/Icons/qustionMartIcon.svg";
import UdgarIcon from "@/assets/Icons/UdgarIcon.svg";
import cancellIcon from "@/assets/Icons/cancellIcon.svg";
import searchIcon from "@/assets/Icons/searchIcon.svg";
import querIcon from "@/assets/Icons/querIcon.svg";
import texIcon from "@/assets/Icons/texIcon.svg";
import { useState } from "react";
import ReactQuill from "react-quill";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Textarea } from "../ui/textarea";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AddProducts = () => {
  const [value, setValue] = useState(
    "Fill in a striking short desciption of the product (displayed on product page and product list as abstract for customers and search engines For detailed informations use the ‘description tob"
  );
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
  return (
    <div className="h-[calc(100vh-98px)] overflow-y-auto">
      <Tabs
        defaultValue="Basicsettings"
        className="w-full mt-[32px] pl-[40px] pr-[60px]"
      >
        <TabsList className="w-full bg-transparent p-0 justify-start">
          <TabsTrigger
            value="Basicsettings"
            className="rounded-none border-t-[3px] border-solid border-transparent px-[20px] py-[15px] font-Poppins w-fit text-[17px]  leading-[normal] font-[500] tracking-[0.17px]"
          >
            Basic settings
          </TabsTrigger>
          <TabsTrigger
            value="Quantities"
            className="rounded-none border-t-[3px] border-solid border-transparent px-[20px] py-[15px] font-Poppins w-fit text-[17px]  leading-[normal] font-[500] tracking-[0.17px]"
          >
            Quantities
          </TabsTrigger>
          <TabsTrigger
            value="Shipping"
            className="rounded-none border-t-[3px] border-solid border-transparent px-[20px] py-[15px] font-Poppins w-fit text-[17px]  leading-[normal] font-[500] tracking-[0.17px]"
          >
            Shipping
          </TabsTrigger>
          <TabsTrigger
            value="Pricing"
            className="rounded-none border-t-[3px] border-solid border-transparent px-[20px] py-[15px] font-Poppins w-fit text-[17px]  leading-[normal] font-[500] tracking-[0.17px]"
          >
            Pricing
          </TabsTrigger>
          <TabsTrigger
            value="SEO"
            className="rounded-none border-t-[3px] border-solid border-transparent px-[20px] py-[15px] font-Poppins w-fit text-[17px]  leading-[normal] font-[500] tracking-[0.17px]"
          >
            SEO
          </TabsTrigger>
          <TabsTrigger
            value="Options"
            className="rounded-none border-t-[3px] border-solid border-transparent px-[20px] py-[15px] font-Poppins w-fit text-[17px]  leading-[normal] font-[500] tracking-[0.17px]"
          >
            Options
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="Basicsettings"
          className="bg-[#FFF] mt-[7px] relative z-10 p-[40px]"
        >
          <div className="flex gap-[50px]">
            <div className="max-w-[925px] w-full">
              <div className="border-[1px] border-solid flex gap-[40px] border-[#0000004D] p-[30px]">
                <label
                  htmlFor="input"
                  className="border-[1px] border-solid border-[#0000004D] max-w-[121px] w-full h-[121px] flex items-center justify-center"
                >
                  <img src={circlePlus} alt="circlePlus" />
                  <input
                    type="file"
                    id="input"
                    className="w-full h-full hidden"
                  />
                </label>
                <div className="border-[1px] border-solid border-[#0000004D] max-w-[121px] w-full h-[121px] flex items-center justify-center">
                  <img src={shoesImage} alt="shoesImage" />
                </div>
              </div>
              <div className="pt-[30px]">
                <Tabs defaultValue="Summary" id="innertable">
                  <TabsList className="w-full bg-transparent p-0 justify-start">
                    <TabsTrigger
                      value="Summary"
                      className="rounded-none border-t-[3px] font-Poppins font-[600] leading-[normal] tracking-[0.17px] text-[17px] text-[#000000B2] border-x-[1px] border-solid border-transparent px-[15px] py-[17px] w-fit"
                    >
                      Summary
                    </TabsTrigger>
                    <TabsTrigger
                      value="Description"
                      className="rounded-none border-t-[3px] font-Poppins font-[600] leading-[normal] tracking-[0.17px] text-[17px] text-[#000000B2] border-x-[1px] border-solid border-transparent px-[20px] py-[15px] w-fit"
                    >
                      Description
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent
                    value="Summary"
                    className="bg-[#FFF] mt-[7px] relative z-10 "
                  >
                    <ReactQuill
                      theme="snow"
                      value={value}
                      onChange={setValue}
                    />
                  </TabsContent>
                  <TabsContent
                    value="Description"
                    className="bg-[#FFF] mt-[7px] relative z-10"
                  >
                    <ReactQuill
                      theme="snow"
                      value={value}
                      onChange={setValue}
                    />
                  </TabsContent>
                </Tabs>
              </div>
              <div className="mt-[53px] flex flex-col gap-[20px]">
                <Button
                  variant={"outline"}
                  className="flex border-primary border-[1.5px] text-primary rounded-none px-[20px] py-[7px] w-fit gap-[10px] items-center font-Poppins text-[17px] font-[500] tracking-[0.27px] leading-[normal]"
                >
                  <div className="w-[19px] h-[19px] rounded-full bg-primary text-[#FFF] text-[16px] flex items-center justify-center">
                    +
                  </div>
                  Add a feature
                </Button>
                <Button
                  variant={"outline"}
                  className="flex border-primary border-[1.5px] text-primary rounded-none px-[20px] py-[7px] w-fit  gap-[10px] items-center font-Poppins text-[17px] font-[500] tracking-[0.27px] leading-[normal]"
                >
                  <div className="w-[19px] h-[19px] rounded-full bg-primary text-[#FFF] text-[16px] flex items-center justify-center">
                    +
                  </div>
                  Add a brand
                </Button>
                {/* <Button
                  variant={"outline"}
                  className="flex border-primary border-[1.5px] text-primary rounded-none px-[20px] py-[7px] w-fit  gap-[10px] items-center font-Poppins text-[17px] font-[500] tracking-[0.27px] leading-[normal]"
                >
                  <div className="w-[19px] h-[19px] rounded-full bg-primary text-[#FFF] text-[16px] flex items-center justify-center">
                    +
                  </div>
                  Add a related product
                </Button> */}
              </div>
            </div>
            <div className="max-w-[383px] w-full">
              <div className="mt-[20px] flex gap-[10px] items-center">
                <h3 className="font-Poppins text-[17px] font-[600] leading-[normal] tracking-[0.25px] text-[#000000B2]">
                  Combinations
                </h3>
                <img src={qustionMartIcon} alt="qustionMartIcon" />
              </div>
              <div className="mt-[10px]">
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label
                      htmlFor="r2"
                      className="font-Poppins text-[15px] font-[500] leading-[normal] tracking-[0.225px] text-[#00000080]"
                    >
                      Simple product
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label
                      htmlFor="r1"
                      className="font-Poppins text-[15px] font-[500] leading-[normal] tracking-[0.225px] text-[#00000080]"
                    >
                      Product With combinations
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="mt-[40px]">
                <div className="mt-[20px] pb-[10px] flex gap-[10px] items-center">
                  <h3 className="font-Poppins text-[17px] font-[600] leading-[normal] tracking-[0.25px] text-[#000000B2]">
                    Reference
                  </h3>
                  <img src={qustionMartIcon} alt="qustionMartIcon" />
                </div>
                <Input className="border-[#0000004D]" />
              </div>
              <div className="mt-[25px]">
                <div className="mt-[20px] pb-[10px] flex gap-[10px] items-center">
                  <h3 className="font-Poppins text-[17px] font-[600] leading-[normal] tracking-[0.25px] text-[#000000B2]">
                    Quantity
                  </h3>
                  <img src={qustionMartIcon} alt="qustionMartIcon" />
                </div>
                <Input className="border-[#0000004D] max-w-[145px]" />
                <p className="font-Poppins flex items-center text-[12px] font-[500] leading-[normal] tracking-[0.24px] text-[#00000080] pt-[5px]">
                  Advanced settings in{" "}
                  <span className="text-primary flex items-center">
                    <img
                      src={querIcon}
                      alt="querIcon"
                      className="px-[5px] inline-block"
                    />
                    Quantities
                  </span>
                </p>
              </div>
              <div className="mt-[40px]">
                <div className="mt-[20px] pb-[10px] flex gap-[10px] items-center">
                  <h3 className="font-Poppins text-[17px] font-[600] leading-[normal] tracking-[0.25px] text-[#000000B2]">
                    Price
                  </h3>
                  <img src={qustionMartIcon} alt="qustionMartIcon" />
                </div>
                <div className="flex gap-[20px]">
                  <div className="w-full">
                    <Label
                      htmlFor=""
                      className="font-Poppins text-[14px] pb-[5px] font-[500] leading-[normal] tracking-[0.21px] text-[#000000B2]"
                    >
                      Tax excluded
                    </Label>
                    <div className="flex items-center border-[1px] border-solid border-[#0000004D] rounded-[5px]">
                      <p className="p-[12px] border-r-[1px] border-solid border-[#0000004D]">
                        <img src={texIcon} alt="texIcon" />
                      </p>
                      <Input
                        className="border-transparent font-Poppins text-[12px] font-[500] leading-[19px] tracking-[0.24px]"
                        placeholder="13,900"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <Label
                      htmlFor=""
                      className="font-Poppins text-[14px] font-[500] pb-[5px] leading-[normal] tracking-[0.21px] text-[#000000B2]"
                    >
                      Tax included
                    </Label>
                    <div className="flex items-center border-[1px] border-solid border-[#0000004D] rounded-[5px]">
                      <p className="p-[12px] border-r-[1px] border-solid border-[#0000004D]">
                        <img src={texIcon} alt="texIcon" />
                      </p>
                      <Input
                        className="border-transparent font-Poppins text-[12px] font-[500] leading-[19px] tracking-[0.24px]"
                        placeholder="16.68"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full mt-[30px]">
                  <Label
                    htmlFor=""
                    className="font-Poppins text-[14px] font-[500] pb-[5px] leading-[normal] tracking-[0.21px] text-[#000000B2]"
                  >
                    Tax rule
                  </Label>
                  <Input
                    className="border-[#0000004D] font-Poppins text-[12px] font-[500] leading-[19px] tracking-[0.24px]"
                    placeholder="FR Taux standard (20%)"
                  />
                  <p className="font-Poppins flex items-center text-[12px] font-[500] leading-[normal] tracking-[0.24px] text-[#00000080] pt-[5px]">
                    Advanced settings in{" "}
                    <span className="text-primary flex items-center">
                      <img
                        src={querIcon}
                        alt="querIcon"
                        className="px-[5px] inline-block"
                      />
                      Pricing
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-[40px]">
                <div className="mt-[20px] pb-[10px] flex gap-[10px] items-center">
                  <h3 className="font-Poppins text-[17px] font-[600] leading-[normal] tracking-[0.25px] text-[#000000B2]">
                    Categories
                  </h3>
                  <img src={qustionMartIcon} alt="qustionMartIcon" />
                </div>
                <div className="rounded-[5px] px-[20px] pb-[44px] pt-[16px] border-[1px] border-solid border-[#0000004D]">
                  <div className="w-full relative">
                    <Input
                      placeholder="Search categories"
                      className="border-[#0000004D] font-[400] text-[12px] font-Poppins h-[32px] rounded-[2px]"
                    />
                    <img
                      src={searchIcon}
                      alt="searchIcon"
                      className="absolute right-[15px] top-[8px]"
                    />
                  </div>
                  <div>
                    <h3 className="font-Poppins mt-[10px] mb-[5px] text-[9px] font-[400] leading-[normal] tracking-[0.18px] uppercase text-[#00000080]">
                      Assdciated categories
                    </h3>
                    <div className="border-[1px] flex flex-wrap gap-[10px] border-solid border-[#0000004D] rounded-[2px] px-[15px] py-[12px]">
                      <p className="bg-primary flex gap-[8px] px-[7px] py-[2px]">
                        <span className="text-[#FFF] font-Poppins text-[10px] leading-[normal] tracking-[0.2px]">
                          Home
                        </span>
                        <img src={cancellIcon} alt="cancellIcon" />
                      </p>
                      <p className="bg-primary flex gap-[8px] px-[7px] py-[2px]">
                        <span className="text-[#FFF] font-Poppins text-[10px] leading-[normal] tracking-[0.2px]">
                          Accessories
                        </span>
                        <img src={cancellIcon} alt="cancellIcon" />
                      </p>
                      <p className="bg-primary flex gap-[8px] px-[7px] py-[2px]">
                        <span className="text-[#FFF] font-Poppins text-[10px] leading-[normal] tracking-[0.2px]">
                          Home Accessories
                        </span>
                        <img src={cancellIcon} alt="cancellIcon" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-[20px] mt-[57px] justify-end">
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
          value="Quantities"
          className="bg-[#FFF] mt-[7px] relative z-10 px-[40px] py-[30px]"
        >
          <div>
            <h3 className="font-Poppins text-[20px] font-[600] leading-[normal] tracking-[0.3px] text-[#000000B2] mb-[10px]">
              Quantities
            </h3>
          </div>
          <div className="flex max-w-[887px] gap-[71px]">
            <div className="w-full">
              <Label
                htmlFor=""
                className="font-Poppins text-[14px] block pb-[5px] font-[500] leading-[normal] tracking-[0.21px] text-[#000000B2]"
              >
                Quantity
              </Label>
              <Input
                className="border-[#0000004D] rounded-[2px] font-Poppins text-[12px] font-[500] leading-[19px] tracking-[0.24px]"
                placeholder="300"
              />
            </div>
            <div className="w-full">
              <Label
                htmlFor=""
                className="font-Poppins flex gap-[10px] text-[14px] items-center pb-[5px] font-[500] leading-[normal] tracking-[0.21px] text-[#000000B2]"
              >
                Minimum Quantity for sale{" "}
                <img src={qustionMartIcon} alt="qustionMartIcon" />
              </Label>
              <Input
                className="border-[#0000004D] rounded-[2px] font-Poppins text-[12px] font-[500] leading-[19px] tracking-[0.24px]"
                placeholder="1"
              />
            </div>
          </div>
          <div className="mt-[30px]">
            <h3 className="font-Poppins text-[17px] font-[600] leading-[normal] tracking-[0.255px] text-[#000000B2] mb-[10px]">
              Stock
            </h3>
            <div className="w-full">
              <Label
                htmlFor=""
                className="font-Poppins text-[14px] block pb-[5px] font-[500] leading-[normal] tracking-[0.21px] text-[#000000B2]"
              >
                Stock location
              </Label>
              <Input className="border-[#0000004D] rounded-[2px] font-Poppins text-[12px] font-[500] leading-[19px] tracking-[0.24px] max-w-[408px]" />
            </div>
            <div className="w-full mt-[10px]">
              <Label
                htmlFor=""
                className="font-Poppins text-[14px] block pb-[5px] font-[500] leading-[normal] tracking-[0.21px] text-[#000000B2]"
              >
                Low stock level
              </Label>
              <Input
                placeholder="Leave empty to disable"
                className="border-[#0000004D] rounded-[2px] font-Poppins text-[12px] font-[500] leading-[19px] tracking-[0.24px] max-w-[408px]"
              />
            </div>
          </div>

          <div className="mt-[30px]">
            <h3 className="font-Poppins text-[20px] font-[600] leading-[normal] tracking-[0.255px] text-[#000000B2] mb-[10px]">
              Availability preferences
            </h3>
            <p className="font-Poppins text-[15px] font-[400] leading-[normal] tracking-[0.255px] text-[#000000B2]">
              Behavior when out of stock
            </p>
            <div className="mt-[15px]">
              <RadioGroup defaultValue="comfortable">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label
                    htmlFor="r2"
                    className="font-Poppins text-[15px] font-[500] leading-[normal] tracking-[0.225px] text-[#00000080]"
                  >
                    Deny orders
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label
                    htmlFor="r1"
                    className="font-Poppins text-[15px] font-[500] leading-[normal] tracking-[0.225px] text-[#00000080]"
                  >
                    Allow orders
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label
                    htmlFor="r1"
                    className="font-Poppins text-[15px] font-[500] leading-[normal] tracking-[0.225px] text-[#00000080]"
                  >
                    Use default behavior (Deny orders)
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="flex mt-[20px] gap-[71px]">
            <div className="w-full">
              <Label
                htmlFor=""
                className="font-Poppins text-[14px] block pb-[5px] font-[500] leading-[normal] tracking-[0.21px] text-[#000000B2]"
              >
                Label when in stock
              </Label>
              <Input className="border-[#0000004D] rounded-[2px] font-Poppins text-[12px] font-[500] leading-[19px] tracking-[0.24px]" />
            </div>
            <div className="w-full">
              <Label
                htmlFor=""
                className="font-Poppins flex gap-[10px] text-[14px] items-center pb-[5px] font-[500] leading-[normal] tracking-[0.21px] text-[#000000B2]"
              >
                Label when in stock(and back order allowed)
              </Label>
              <Input className="border-[#0000004D] rounded-[2px] font-Poppins text-[12px] font-[500] leading-[19px] tracking-[0.24px]" />
            </div>
            <div className="w-full">
              <Label
                htmlFor=""
                className="font-Poppins flex gap-[10px] text-[14px] items-center pb-[5px] font-[500] leading-[normal] tracking-[0.21px] text-[#000000B2]"
              >
                Availability date
              </Label>
              <Input
                className="border-[#0000004D] rounded-[2px] font-Poppins text-[12px] font-[500] leading-[19px] tracking-[0.24px]"
                placeholder="YYYY-MM-DD"
              />
            </div>
          </div>
          <div className="flex gap-[20px] mt-[51px] justify-end">
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
          value="Shipping"
          className="bg-[#FFF] mt-[7px] w-full relative z-10 p-[40px]"
        >
          <div className="mb-[20px]">
            <h3 className="font-Poppins text-[20px] font-[600] leading-[normal] tracking-[0.3px] text-[#000000B2] mb-[5px]">
              Package dimension
            </h3>
            <p className="font-Poppins text-[12px] font-[500] leading-[normal] tracking-[0.18px] text-[#00000080]">
              Charge additional shipping costs based on packet dimensions coverd
              here.
            </p>
          </div>
          <div className="flex gap-[25px]">
            <div className="max-w-[221px] w-full">
              <Label
                htmlFor=""
                className="font-Poppins text-[14px] pb-[5px] font-[500] leading-[normal] tracking-[0.21px] text-[#000000B2] block"
              >
                Width
              </Label>
              <div className="flex items-center border-[1px] border-solid border-[#0000004D] rounded-[1px]">
                <Input
                  className="border-transparent font-Poppins text-[12px] font-[500] leading-[19px] tracking-[0.24px]"
                  placeholder="0"
                />
                <p className="p-[10px] font-Poppins text-[14px] font-[400] leading-[normal] text-[#00000080] tracking-[0.21px] border-l-[1px] border-solid border-[#0000004D]">
                  cm
                </p>
              </div>
            </div>
            <div className="max-w-[221px] w-full">
              <Label
                htmlFor=""
                className="font-Poppins text-[14px] pb-[5px] font-[500] leading-[normal] tracking-[0.21px] text-[#000000B2] block"
              >
                Height
              </Label>
              <div className="flex items-center border-[1px] border-solid border-[#0000004D] rounded-[1px]">
                <Input
                  className="border-transparent font-Poppins text-[12px] font-[500] leading-[19px] tracking-[0.24px]"
                  placeholder="0"
                />
                <p className="p-[10px] font-Poppins text-[14px] font-[400] leading-[normal] text-[#00000080] tracking-[0.21px] border-l-[1px] border-solid border-[#0000004D]">
                  cm
                </p>
              </div>
            </div>
            <div className="max-w-[221px] w-full">
              <Label
                htmlFor=""
                className="font-Poppins text-[14px] pb-[5px] font-[500] leading-[normal] tracking-[0.21px] text-[#000000B2] block"
              >
                depth
              </Label>
              <div className="flex items-center border-[1px] border-solid border-[#0000004D] rounded-[1px]">
                <Input
                  className="border-transparent font-Poppins text-[12px] font-[500] leading-[19px] tracking-[0.24px]"
                  placeholder="0"
                />
                <p className="p-[10px] font-Poppins text-[14px] font-[400] leading-[normal] text-[#00000080] tracking-[0.21px] border-l-[1px] border-solid border-[#0000004D]">
                  cm
                </p>
              </div>
            </div>
            <div className="max-w-[221px] w-full">
              <Label
                htmlFor=""
                className="font-Poppins text-[14px] pb-[5px] font-[500] leading-[normal] tracking-[0.21px] text-[#000000B2] block"
              >
                weight
              </Label>
              <div className="flex items-center border-[1px] border-solid border-[#0000004D] rounded-[1px]">
                <Input
                  className="border-transparent font-Poppins text-[12px] font-[500] leading-[19px] tracking-[0.24px]"
                  placeholder="0"
                />
                <p className="p-[10px] font-Poppins text-[14px] font-[400] leading-[normal] text-[#00000080] tracking-[0.21px] border-l-[1px] border-solid border-[#0000004D]">
                  kg
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[30px]">
            <h3 className="font-Poppins text-[17px] font-[600] flex items-center gap-[10px] leading-[normal] tracking-[0.255px] text-[#000000B2] mb-[10px]">
              Delivery Time
              <img src={qustionMartIcon} alt="qustionMartIcon" />
            </h3>
            <div>
              <RadioGroup defaultValue="comfortable">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label
                    htmlFor="r2"
                    className="font-Poppins text-[15px] font-[500] leading-[normal] tracking-[0.225px] text-[#00000080]"
                  >
                    None
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label
                    htmlFor="r1"
                    className="font-Poppins flex text-[15px] font-[500] leading-[normal] tracking-[0.225px] text-[#00000080]"
                  >
                    Default delivery time{" "}
                    <span className="flex items-center text-primary">
                      <img src={querIcon} alt="querIcon" className="px-[5px]" />
                      edit
                    </span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label
                    htmlFor="r1"
                    className="font-Poppins text-[15px] font-[500] leading-[normal] tracking-[0.225px] text-[#00000080]"
                  >
                    Specific delivery time to this product
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="max-w-[1105px] mt-[30px] w-full flex gap-[25px]">
            <div className="w-full">
              <Label
                htmlFor=""
                className="font-Poppins text-[14px] block pb-[5px] font-[500] leading-[normal] tracking-[0.21px] text-[#000000B2]"
              >
                Delivery time of in-stock product:
              </Label>
              <Input
                type="text"
                placeholder="Delivered within 3-4 days"
                className="border-[#0000004D] rounded-[2px] font-Poppins text-[12px] font-[500] leading-[19px] tracking-[0.24px]"
              />
              <p className="font-Poppins pt-[5px] text-[12px] font-[500] leading-[normal] tracking-[0.24px] text-[#00000080]">
                Leave empty to disable.
              </p>
            </div>
            <div className="w-full">
              <Label
                htmlFor=""
                className="font-Poppins text-[14px] block pb-[5px] font-[500] leading-[normal] tracking-[0.21px] text-[#000000B2]"
              >
                Delivery time of in-stock product with allowed orders:
              </Label>
              <Input
                type="text"
                placeholder="Delivered within 5-47 days"
                className="border-[#0000004D] rounded-[2px] font-Poppins text-[12px] font-[500] leading-[19px] tracking-[0.24px]"
              />
              <p className="font-Poppins pt-[5px] text-[12px] font-[500] leading-[normal] tracking-[0.24px] text-[#00000080]">
                Leave empty to disable.
              </p>
            </div>
          </div>
          <div className="mt-[30px]">
            <h3 className="font-Poppins text-[17px] font-[600] flex items-center gap-[10px] leading-[normal] tracking-[0.255px] text-[#000000B2] mb-[10px]">
              Shipping fees
              <img src={qustionMartIcon} alt="qustionMartIcon" />
            </h3>
            <p className="font-Poppins text-[14px] font-[500] flex items-center gap-[10px] leading-[normal] tracking-[0.21px] text-[#000000B2]">
              Does this product incur additional shipping costs?
            </p>
            <div className="flex items-center border-[1px] border-solid border-[#0000004D] rounded-[1px] max-w-[221px] mt-[7px]">
              <p className="p-[10px] font-Poppins text-[14px] font-[400] leading-[normal] text-[#00000080] tracking-[0.21px] border-r-[1px] border-solid border-[#0000004D]">
                cm
              </p>
              <Input
                className="border-transparent font-Poppins text-[12px] font-[500] leading-[19px] tracking-[0.24px]"
                placeholder="0.000000"
              />
            </div>
          </div>
          <div className="flex gap-[20px] mt-[106px] justify-end">
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
          value="Pricing"
          className="bg-[#FFF] mt-[7px] w-full relative z-10 p-[40px]"
        >
          <div>
            <h3 className="flex items-center gap-[10px] font-Poppins text-[19px] font-[600] leading-[normal] tracking-[0.285px] text-[#000000B2]">
              Retail price
              <img src={qustionMartIcon} alt="qustionMartIcon" />
            </h3>
            <div className="flex justify-between items-center max-w-[1207px] w-full ">
              <div className="flex gap-[25px] mt-[10px]">
                <div className="max-w-[221px]">
                  <Label className="font-Poppins block pb-[5px] text-[14px] font-[500] leading-[normal] tracking-[0.21px] text-[#000000B2]">
                    Price(tax exd.)
                  </Label>
                  <div className="flex items-center border-[1px] border-solid border-[#0000004D] rounded-[1px]">
                    <p className="p-[12px] border-r-[1px] border-solid border-[#0000004D]">
                      <img src={texIcon} alt="texIcon" />
                    </p>
                    <Input
                      className="border-transparent font-Poppins text-[12px] font-[500] leading-[19px] tracking-[0.24px]"
                      placeholder="23.900000"
                    />
                  </div>
                </div>
                <div className="max-w-[221px]">
                  <Label className="font-Poppins block pb-[5px] text-[14px] font-[500] leading-[normal] tracking-[0.21px] text-[#000000B2]">
                    Price(tax incl.)
                  </Label>
                  <div className="flex items-center border-[1px] border-solid border-[#0000004D] rounded-[1px]">
                    <p className="p-[12px] border-r-[1px] border-solid border-[#0000004D]">
                      <img src={texIcon} alt="texIcon" />
                    </p>
                    <Input
                      className="border-transparent font-Poppins text-[12px] font-[500] leading-[19px] tracking-[0.24px]"
                      placeholder="23.9"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-[25px] mt-[10px]">
                <div className="max-w-[221px]">
                  <Label className="font-Poppins pb-[5px] flex items-center gap-[10px] text-[14px] font-[500] leading-[normal] tracking-[0.21px] text-[#000000B2]">
                    Price per unit(tax excl.){" "}
                    <img src={qustionMartIcon} alt="qustionMartIcon" />
                  </Label>
                  <div className="flex items-center border-[1px] border-solid border-[#0000004D] rounded-[1px]">
                    <p className="p-[12px] border-r-[1px] border-solid border-[#0000004D]">
                      <img src={texIcon} alt="texIcon" />
                    </p>
                    <Input
                      className="border-transparent font-Poppins text-[12px] font-[500] leading-[19px] tracking-[0.24px]"
                      placeholder="23.900000"
                    />
                  </div>
                </div>
                <div className="max-w-[221px]">
                  <Label className="font-Poppins block pb-[5px] text-[14px] font-[500] leading-[normal] tracking-[0.21px] text-[#000000B2]">
                    Price(tax incl.)
                  </Label>
                  <div className="flex items-center border-[1px] border-solid border-[#0000004D] rounded-[1px]">
                    <p className="p-[12px] border-r-[1px] border-solid border-[#0000004D]">
                      <img src={texIcon} alt="texIcon" />
                    </p>
                    <Input
                      className="border-transparent font-Poppins text-[12px] font-[500] leading-[19px] tracking-[0.24px]"
                      placeholder="23.9"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[653px] pt-[25px]">
              <Label className="font-Poppins block pb-[5px] text-[14px] font-[500] leading-[normal] tracking-[0.21px] text-[#000000B2]">
                Tax rule
              </Label>
              <div className="flex items-center gap-[30px]">
                <Input
                  className="border-[#0000004D] font-Poppins text-[12px] font-[500] leading-[19px] tracking-[0.24px]"
                  placeholder="23.900000"
                />
                <p className="flex items-center text-nowrap gap-[10px] font-Poppins text-primary font-[500] tracking-[0.225px] leading-[normal] text-[15px]">
                  <img src={querIcon} alt="querIcon" />
                  Manage tax rules
                </p>
              </div>
              <div className="flex items-center gap-[10px] mt-[5px]">
                <Checkbox id="terms" className="border-[#0000004D]" />
                <label
                  htmlFor="terms"
                  className="font-Poppins block text-[12px] font-[500] leading-[normal] tracking-[0.18px] text-[#00000080]"
                >
                  Display the”On sale!” flag on the product page. and on product
                  listings.
                </label>
              </div>
            </div>
            <div className="my-[30px] flex items-center gap-[25px] max-w-[555px] border-[1.5px] border-solid border-primary">
              <div className="py-[13px] px-[12px] max-w-[50px] bg-[#17AEC926] ">
                <img src={UdgarIcon} alt="UdgarIcon" />
              </div>
              <p className="font-Poppins text-[14px] font-[400] leading-[normal] tracking-[0.21px] text-[#00000080]">
                Final retail price:{" "}
                <span className="text-[#000000CC]"> €23.90 tax incl.</span> /
                €23.90 tax exd.{" "}
              </p>
            </div>
            <div>
              <h3 className="flex items-center mb-[10px] gap-[10px] font-Poppins text-[19px] font-[600] leading-[normal] tracking-[0.285px] text-[#000000B2]">
                Cost price
                <img src={qustionMartIcon} alt="qustionMartIcon" />
              </h3>
              <div className="max-w-[221px]">
                <Label className="font-Poppins block pb-[5px] text-[14px] font-[500] leading-[normal] tracking-[0.21px] text-[#000000B2]">
                  Price(tax exd.)
                </Label>
                <div className="flex items-center border-[1px] border-solid border-[#0000004D] rounded-[1px]">
                  <p className="p-[12px] border-r-[1px] border-solid border-[#0000004D]">
                    <img src={texIcon} alt="texIcon" />
                  </p>
                  <Input
                    className="border-transparent font-Poppins text-[12px] font-[500] leading-[19px] tracking-[0.24px]"
                    placeholder="23.900000"
                  />
                </div>
              </div>
            </div>

            <div className="mt-[33px]">
              <h3 className="flex items-center mb-[10px] gap-[10px] font-Poppins text-[19px] font-[600] leading-[normal] tracking-[0.285px] text-[#000000B2]">
                Specific price
                <img src={qustionMartIcon} alt="qustionMartIcon" />
              </h3>
              <Button
                variant={"outline"}
                className="flex border-primary border-[1.5px] text-primary rounded-none px-[20px] py-[7px] w-fit  gap-[10px] items-center font-Poppins text-[17px] font-[500] tracking-[0.27px] leading-[normal]"
              >
                <div className="w-[19px] h-[19px] rounded-full bg-primary text-[#FFF] text-[16px] flex items-center justify-center">
                  +
                </div>
                Add a specific price
              </Button>
            </div>
          </div>
          <div className="flex gap-[20px] mt-[100px] justify-end">
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
          value="SEO"
          className="bg-[#FFF] mt-[7px] w-full relative z-10 p-[40px]"
        >
          <div>
            <h3 className="font-Poppins text-[19px] font-[600] leading-[normal] tracking-[0.285px] text-[#000000B2]">
              Search Engine Optimization
            </h3>
            <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.18px] text-[#00000080]">
              improve your ranking and how your products page will appear in
              search engine results.
            </p>
            <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.18px] text-[#00000080]">
              Here is a preview of your search engine result,play with it!
            </p>
          </div>
          <div className="mt-[20px]">
            <Textarea
              placeholder="23.900000"
              className="border-[#0000004D] rounded-[1px] p-[20px] font-Poppins text-[14px] font-[500] leading-[normal] tracking-[0.21px] text-[#00000080]"
              rows={5}
            />
          </div>
          <div className="max-w-[1106px] w-full mt-[30px]">
            <Label className="font-Poppins pb-[5px] text-[17px] font-[600] leading-[normal] tracking-[0.22px] text-[#000000B2] flex items-center gap-[10px]">
              Meta title
              <img src={qustionMartIcon} alt="qustionMartIcon" />
            </Label>
            <Input
              className="rounded-[2px] border-[#0000004D]"
              placeholder="To have a different title from the product name,enter it here."
            />
            <p className="text-right font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.12px] text-[#00000080] pt-[5px]">
              0 of 70 chatacters used (recommended)
            </p>
          </div>
          <div className="max-w-[1106px] w-full mt-[20px]">
            <Label className="font-Poppins pb-[5px] text-[17px] font-[600] leading-[normal] tracking-[0.22px] text-[#000000B2] flex items-center gap-[10px]">
              Meta description
              <img src={qustionMartIcon} alt="qustionMartIcon" />
            </Label>
            <Input
              className="rounded-[2px] border-[#0000004D]"
              placeholder="To have a different description than your product summary in search results pages,write it here."
            />
            <p className="text-right font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.12px] text-[#00000080] pt-[5px]">
              0 of 70 chatacters used (recommended)
            </p>
          </div>
          <div className="max-w-[1106px] w-full mt-[20px]">
            <Label className="font-Poppins pb-[5px] text-[17px] font-[600] leading-[normal] tracking-[0.22px] text-[#000000B2] flex items-center gap-[10px]">
              Friendly URL
              <img src={qustionMartIcon} alt="qustionMartIcon" />
            </Label>
            <div className="flex gap-[30px] items-center">
              <Input className="rounded-[2px] border-[#0000004D]" />
              <Button
                variant={"outline"}
                className="px-[95px] rounded-[1px] h-auto font-Poppins text-[14px] leading-[normal] font-[500] tracking-[0.21px] text-[#000000B2] border-[#000000B2] py-[8px]"
              >
                Reset URL
              </Button>
            </div>
          </div>
          <div className="mt-[20px] flex items-center gap-[25px] max-w-[1106px] border-[1.5px] border-solid border-primary">
            <div className="py-[13px] px-[12px] max-w-[50px] bg-[#17AEC926] ">
              <img src={UdgarIcon} alt="UdgarIcon" className="max-w-[25px]" />
            </div>
            <p className="font-Poppins text-[14px] font-[400] leading-[normal] tracking-[0.21px] text-[#000000CC]">
              Friendly URLs are currently enabled.{" "}
              <span className="text-[#00000080]">To disable it,</span>{" "}
              <span className="text-primary">SEO and URLs</span>
            </p>
          </div>
          <div className="flex gap-[20px] mt-[100px] justify-end">
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
          value="Options"
          className="bg-[#FFF] mt-[7px] w-full relative z-10 p-[40px]"
        >
          <div>
            <h3 className="font-Poppins text-[19px] font-[600] leading-[normal] tracking-[0.285px] text-[#000000B2] mb-[10px]">
              Visibility
            </h3>
            <p className="font-Poppins text-[12px] font-[500] leading-[normal] tracking-[0.18px] text-[#00000080]">
              Where do you want your product to appear?
            </p>
          </div>
          <div className="mt-[30px]">
            <Input
              type="text"
              placeholder="Everywhere"
              className="font-Poppins text-[14px] font-[500] leading-[normal] tracking-[0.21px] text-[#00000080] rounded-[2px] border-[#0000004D] max-w-[380px]"
            />
            <div className="flex gap-[90px] mt-[10px]">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="font-Poppins text-[14px] font-[500] leading-[normal] tracking-[0.21px] text-[#00000080]"
                >
                  Available for order
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="font-Poppins text-[14px] font-[500] leading-[normal] tracking-[0.21px] text-[#00000080]"
                >
                  Web only (not sold in your retail store)
                </label>
              </div>
            </div>
          </div>
          <div className="mt-[30px]">
            <h3 className="font-Poppins text-[17px] font-[600] leading-[normal] tracking-[0.285px] text-[#000000B2] mb-[10px]">
              Tags
            </h3>
            <div className="py-[10px] font-Poppins px-[20px] font-[500] max-w-[800px] text-[14px] leading-[normal] tracking-[0.21px] text-[#00000080] border-[1px] border-solid border-[#0000004D]">
              Use a comma to create separate tags. E.g,: dress, cotton, party
              dresses.
            </div>
            <div className="my-[30px] flex items-center max-w-[800px] border-[1.5px] border-solid border-primary">
              <div className="py-[13px] px-[12px] max-w-[50px] bg-[#17AEC926] ">
                <img src={UdgarIcon} alt="UdgarIcon" />
              </div>
              <p className="font-Poppins px-[20px] text-[14px] font-[500] leading-[normal] flex justify-between w-full tracking-[0.21px] text-[#00000080]">
                Tags facilitate the product search for customers using the
                search bar.
                <button className="font-Poppins text-[14px] font-[600] leading-[normal] tracking-[0.21px] text-primary">
                  Read more
                </button>
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-Poppins text-[17px] font-[600] leading-[normal] tracking-[0.285px] text-[#000000B2] mb-[10px]">
              Condition & References
            </h3>
            <div className="flex gap-[40px]">
              <div className="max-w-[380px] w-full">
                <Label className="font-Poppins text-[17px] font-[500] leading-[normal] tracking-[0.255px] flex gap-[10px] items-center text-[#000000B2] mb-[5px]">
                  Condition
                  <img src={qustionMartIcon} alt="qustionMartIcon" />
                </Label>
                <Input
                  placeholder="New"
                  className="rounded-[1px] border-[#0000004D]"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="font-Poppins text-[14px] font-[500] leading-[normal] tracking-[0.21px] text-[#00000080]"
                >
                  Display condition on product page
                </label>
              </div>
            </div>
            <div className="flex gap-[40px] mt-[25px]">
              <div className="max-w-[380px] w-full">
                <Label className="font-Poppins text-[17px] font-[500] leading-[normal] tracking-[0.255px] flex gap-[10px] items-center text-[#000000B2] mb-[5px]">
                  ISBN
                  <img src={qustionMartIcon} alt="qustionMartIcon" />
                </Label>
                <Input className="rounded-[1px] border-[#0000004D]" />
              </div>
              <div className="max-w-[380px] w-full">
                <Label className="font-Poppins text-[17px] font-[500] leading-[normal] tracking-[0.255px] flex gap-[10px] items-center text-[#000000B2] mb-[5px]">
                  EAN-13or JAN barcode
                  <img src={qustionMartIcon} alt="qustionMartIcon" />
                </Label>
                <Input className="rounded-[1px] border-[#0000004D]" />
              </div>
            </div>
            <div className="flex gap-[40px] mt-[25px]">
              <div className="max-w-[380px] w-full">
                <Label className="font-Poppins text-[17px] font-[500] leading-[normal] tracking-[0.255px] flex gap-[10px] items-center text-[#000000B2] mb-[5px]">
                  UPC barcode
                  <img src={qustionMartIcon} alt="qustionMartIcon" />
                </Label>
                <Input className="rounded-[1px] border-[#0000004D]" />
              </div>
              <div className="max-w-[380px] w-full">
                <Label className="font-Poppins text-[17px] font-[500] leading-[normal] tracking-[0.255px] flex gap-[10px] items-center text-[#000000B2] mb-[5px]">
                  MPN
                  <img src={qustionMartIcon} alt="qustionMartIcon" />
                </Label>
                <Input className="rounded-[1px] border-[#0000004D]" />
              </div>
            </div>
          </div>
          <div className="mt-[30px]">
            <h3 className="font-Poppins text-[17px] font-[600] leading-[normal] tracking-[0.285px] text-[#000000B2] mb-[10px]">
              Customization
            </h3>
            <p className="font-Poppins text-[12px] font-[500] leading-[normal] tracking-[0.18px] text-[#00000080] pb-[15px]">
              Customers can personalize the product by entering some text or by
              providing custom image files.
            </p>
            <Button
              variant={"outline"}
              className="flex border-primary border-[1.5px] text-primary rounded-none px-[20px] py-[7px] w-fit  gap-[10px] items-center font-Poppins text-[17px] font-[500] tracking-[0.27px] leading-[normal]"
            >
              <div className="w-[19px] h-[19px] rounded-full bg-primary text-[#FFF] text-[16px] flex items-center justify-center">
                +
              </div>
              Add a customization field
            </Button>
          </div>
          <div className="mt-[30px]">
            <h3 className="font-Poppins text-[17px] font-[600] leading-[normal] tracking-[0.285px] text-[#000000B2] mb-[10px]">
              Attached files
            </h3>
            <p className="font-Poppins text-[14px] font-[500] leading-[normal] tracking-[0.21px] text-[#00000080] pb-[10px]">
              Select the files (instructions, documentation, recipes, etc.) your
              customers can directly download on this <br /> product page.{" "}
              <br /> Need to browse all files? Go to{" "}
              <span className="text-primary">File</span>
            </p>
            <p className="font-Poppins text-[12px] font-[500] leading-[normal] tracking-[0.12px] text-[#000000CC] pb-[15px]">
              There is no attachment yet.
            </p>
            <Button
              variant={"outline"}
              className="flex border-primary border-[1.5px] text-primary rounded-none px-[20px] py-[7px] w-fit  gap-[10px] items-center font-Poppins text-[17px] font-[500] tracking-[0.27px] leading-[normal]"
            >
              <div className="w-[19px] h-[19px] rounded-full bg-primary text-[#FFF] text-[16px] flex items-center justify-center">
                +
              </div>
              Attach a new file
            </Button>
          </div>
          <div className="mt-[30px]">
            <h3 className="font-Poppins text-[17px] font-[600] leading-[normal] tracking-[0.285px] text-[#000000B2] mb-[10px]">
              Suppliers
            </h3>
          </div>
          <div className="my-[30px] flex items-center max-w-[800px] border-[1.5px] border-solid border-primary">
            <div className=" px-[12px] py-[35px] max-w-[50px] bg-[#17AEC926] ">
              <img src={UdgarIcon} alt="UdgarIcon" />
            </div>
            <p className="font-Poppins px-[20px] text-[14px] font-[500] leading-[normal] flex justify-between w-full tracking-[0.21px] text-[#00000080]">
              This interface allows you to specify the suppliers of the current
              product and its <br /> combinations, if any. <br /> You can
              specify supplier references according to previously associated
              suppliers.
              <button className="font-Poppins text-[14px] font-[600] leading-[normal] tracking-[0.21px] text-primary">
                Read more
              </button>
            </p>
          </div>
          <Table className="max-w-[800px] w-full">
            <TableHeader>
              <TableRow className="border-primary !border-b-[2px]">
                <TableHead className="font-Poppins text-[14px] font-[600] tracking-[0.21px] text-[#000000B2]">
                  Choose the suppliers associated with this product
                </TableHead>
                <TableHead className="font-Poppins text-[14px] font-[600] tracking-[0.21px] text-[#000000B2]">
                  Default supplier
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="font-Poppins text-[14px] font-[500] leading-[normal] tracking-[0.21px] text-[#00000080]"
                      >
                        Available for order
                      </label>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="terms" />
                      <label
                        htmlFor="terms"
                        className="font-Poppins text-[14px] font-[500] leading-[normal] tracking-[0.21px] text-[#00000080]"
                      >
                        Available for order
                      </label>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex gap-[20px] mt-[100px] justify-end">
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
    </div>
  );
};

export default AddProducts;
