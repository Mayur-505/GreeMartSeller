import { Label } from "../ui/label";
import { Input } from "../ui/input";
import qustionMartIcon from "@/assets/Icons/qustionMartIcon.svg";
import UdgarIcon from "@/assets/Icons/UdgarIcon.svg";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";
import ReactQuill from "react-quill";

const AddCategories = () => {
  const [value, setValue] = useState("");
  return (
    <div className="h-[calc(100vh-98px)] overflow-y-auto pl-[40px] pt-[40px] pr-[60px]">
      <div className="bg-[#FFF] pb-[40px]">
        <h3 className="bg-[#FAFBFC] px-[20px] py-[6px] border-[1px] border-solid border-[#0000001A] font-Poppins text-[24px] leading-[normal] font-[600] tracking-[0.24px]">
          Categorie
        </h3>
        <div className="mt-[58px]">
          <div className="flex gap-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              *Name
            </Label>
            <div className="max-w-[883px] w-full">
              <Input className="bg-[#F9F9F9] w-full border-[#00000033]" />
              <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#00000080] pt-[5px] border-[#00000033]">
                Invalid characters:{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="flex items-start gap-[10px] justify-end w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Displayed{" "}
              <img
                src={qustionMartIcon}
                alt="qustionMartIcon"
                className="max-w-[17px] mt-[4px]"
              />
            </Label>
            <div className="max-w-[883px] w-full">
              <Button
                variant={"ghost"}
                className="rounded-none text-[#00000033] bg-[#EFEFEF] py-[7px] h-auto"
              >
                NO
              </Button>
              <Button className="rounded-none ml-[10px] py-[7px] h-auto">
                YES
              </Button>
              <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#000000B2] pt-[10px]">
                If you want a category to appear in the menu of your shop, go to{" "}
                <span className="text-primary">Modules Module Manager</span> and{" "}
                <br /> configure your menu module.
              </p>
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Parent category
            </Label>
            <div className="max-w-[883px] w-full">
              <Accordion
                type="single"
                collapsible
                className="w-full border-[1px] bg-[#F9F9F9] border-solid border-[#00000033] rounded-ss-[5px] overflow-hidden"
              >
                <AccordionItem value="item-2" className=" py-[15px] px-[40px]">
                  <AccordionTrigger className="justify-end flex-row-reverse gap-[10px] p-0 font-Poppins text-[15px] font-[500] leading-[normal] tracking-[0.3px]">
                    Expand
                  </AccordionTrigger>
                  <AccordionContent className="px-[23px]">
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-1"
                  className="border-none px-[40px] py-[15px]"
                >
                  <AccordionTrigger className="justify-end flex-row-reverse gap-[10px] p-0 font-Poppins text-[15px] font-[500] leading-[normal] tracking-[0.3px]">
                    <RadioGroup
                      defaultValue="comfortable"
                      className="flex items-center gap-[5px]"
                    >
                      <RadioGroupItem value="comfortable" id="r2" /> Home
                    </RadioGroup>
                  </AccordionTrigger>
                  <AccordionContent className="px-[35px] !pb-0">
                    Home
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
              Category cover image
            </Label>
            <div className="max-w-[883px] w-full">
              <div className="flex">
                <Input
                  className="bg-[#F9F9F9] w-full font-Poppins text-[14px] font-[400] leading-[normal] tracking-[0.28px] border-[#00000033]"
                  placeholder="Choose file(s)"
                />
                <Button className="rounded-ss-none rounded-es-none px-[24px] font-Poppins text-[16px] font-[400] leading-[normal] tracking-[0.32px]">
                  Browse
                </Button>
              </div>
              <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#566166B2] pt-[5px]">
                This is the main image for your category, displayed in the
                category page. The category description will overlap this image
                and appear in its top-left corner.
              </p>
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Category thumbnail
            </Label>
            <div className="max-w-[883px] w-full">
              <div className="flex">
                <Input
                  className="bg-[#F9F9F9] w-full font-Poppins text-[14px] font-[400] leading-[normal] tracking-[0.28px] border-[#00000033]"
                  placeholder="Choose file(s)"
                />
                <Button className="rounded-ss-none rounded-es-none px-[24px] font-Poppins text-[16px] font-[400] leading-[normal] tracking-[0.32px]">
                  Browse
                </Button>
              </div>
              <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#566166B2] pt-[5px]">
                Displays a small image in the parent category’s page. if the
                theme allows it.
              </p>
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Menu thumbnails
            </Label>
            <div className="max-w-[883px] w-full">
              <div className="flex">
                <Input
                  className="bg-[#F9F9F9] w-full font-Poppins text-[14px] font-[400] leading-[normal] tracking-[0.28px] border-[#00000033]"
                  placeholder="Choose file(s)"
                />
                <Button className="rounded-ss-none rounded-es-none px-[24px] font-Poppins text-[16px] font-[400] leading-[normal] tracking-[0.32px]">
                  Browse
                </Button>
              </div>
              <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#566166B2] pt-[5px]">
                The category thumbnail appears in the menu as a small image
                representing the category, if the theme allows it.
              </p>
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              SEO preview
            </Label>
            <div className="max-w-[883px] w-full">
              <Textarea className="bg-[#F9F9F9] w-full font-Poppins text-[14px] font-[400] leading-[normal] tracking-[0.28px] border-[#00000033]" />
              <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#566166B2] pt-[5px]">
                Here is a preview if how your page will appear in search engine
                results.
              </p>
            </div>
          </div>

          <div className="flex gap-[30px] mt-[30px]">
            <Label className="flex items-start gap-[10px] justify-end w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Meta title{" "}
              <img
                src={qustionMartIcon}
                alt="qustionMartIcon"
                className="max-w-[17px] mt-[4px]"
              />
            </Label>
            <div className="max-w-[883px] w-full">
              <Input
                className="bg-[#F9F9F9] w-full font-Poppins text-[14px] font-[400] leading-[normal] tracking-[0.28px] border-[#00000033]"
                placeholder="To have different title from the category name. enter it here. "
              />
              <p className="font-Poppins text-[12px] text-right font-[400] leading-[18px] tracking-[0.24px] text-[#566166B2] pt-[5px]">
                0 OF 70 CHARACTERS used (recommended)
              </p>
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="flex items-start gap-[10px] justify-end w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Meta title{" "}
              <img
                src={qustionMartIcon}
                alt="qustionMartIcon"
                className="max-w-[17px] mt-[4px]"
              />
            </Label>
            <div className="max-w-[883px] w-full">
              <Input
                className="bg-[#F9F9F9] w-full font-Poppins text-[14px] font-[400] leading-[normal] tracking-[0.28px] border-[#00000033]"
                placeholder="To have a different description than your category summary in search results page, write it here."
              />
              <p className="font-Poppins text-[12px] text-right font-[400] leading-[18px] tracking-[0.24px] text-[#566166B2] pt-[5px]">
                0 OF 160 CHARACTERS used (recommended)
              </p>
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              Meta keywords
            </Label>
            <div className="max-w-[883px] w-full">
              <Input
                className="bg-[#F9F9F9] w-full border-[#00000033]"
                placeholder="ADD tag"
              />
              <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#00000080] pt-[5px]">
                To add tags. click in the field, write something, and then press
                the “Enter” kev. Invalid characters:
              </p>
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              *Friendly URL
            </Label>
            <div className="max-w-[883px] w-full">
              <Input
                className="bg-[#F9F9F9] w-full border-[#00000033]"
                placeholder="test"
              />
              <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#00000080] pt-[5px] border-[#00000033]">
                Only letters, numbers, underscore and the minus character are
                allowed.
              </p>
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]">
              *Group access
            </Label>
            <div className="max-w-[883px] w-full">
              <div className="bg-[#F9F9F9]">
                <div className="border-[1px] border-solid border-[#00000033] flex gap-[7px] items-center font-Poppins text-[14px] font-[600] leading-[normal] tracking-[0.28px] text-[#000000B2] px-[20px] py-[10px]">
                  <Checkbox /> Select all
                </div>
                <div className="border-[1px] border-solid border-[#00000033] flex gap-[7px] items-center font-Poppins text-[14px] font-[400] leading-[normal] tracking-[0.28px] text-[#000000B2] px-[20px] py-[10px]">
                  <Checkbox checked /> Visitor
                </div>
                <div className="border-[1px] border-solid border-[#00000033] flex gap-[7px] items-center font-Poppins text-[14px] font-[400] leading-[normal] tracking-[0.28px] text-[#000000B2] px-[20px] py-[10px]">
                  <Checkbox checked /> Select all
                </div>
                <div className="border-[1px] border-solid border-[#00000033] flex gap-[7px] items-center font-Poppins text-[14px] font-[400] leading-[normal] tracking-[0.28px] text-[#000000B2] px-[20px] py-[10px]">
                  <Checkbox checked /> Select all
                </div>
                <div className="border-[1px] border-solid border-[#00000033] flex gap-[7px] items-center font-Poppins text-[14px] font-[400] leading-[normal] tracking-[0.28px] text-[#000000B2] px-[20px] py-[10px]">
                  <Checkbox checked /> Select all
                </div>
              </div>
              <p className="font-Poppins text-[12px] font-[400] leading-[normal] tracking-[0.24px] text-[#00000080] pt-[5px]">
                Mark all of the customer groups which you would like to have
                access to this category.
              </p>
            </div>
          </div>
          <div className="flex gap-[30px] mt-[30px]">
            <Label className="block w-[300px] mt-[7px] text-right font-Poppins text-[17px] font-[400] leading-[normal] tracking-[0.34px]"></Label>
            <div className="max-w-[883px] w-full">
              <div className="border-[3px] rounded-[5px] border-solid border-primary flex items-center gap-[30px]">
                <div className="py-[65px] px-[23px] bg-[#17AEC92E] max-w-[75px]">
                  <img src={UdgarIcon} alt="UdgarIcon" />
                </div>
                <div>
                  <p className="font-Poppins text-[17px] font-[600] leading-[normal] tracking-[0.34px] text-[#000000B2]">
                    You now have three default customer groups.
                  </p>
                  <p className="font-Poppins text-[17px] font-[600] leading-[normal] tracking-[0.34px] text-[#00000080]">
                    <span className="text-[#000000B2]">Visitor</span> - All
                    people without a valid customer account.
                  </p>
                  <p className="font-Poppins text-[17px] font-[600] leading-[normal] tracking-[0.34px] text-[#00000080]">
                    <span className="text-[#000000B2]">Guest</span> - Customer
                    who placed an order with the guest checkout.
                  </p>
                  <p className="font-Poppins text-[17px] font-[600] leading-[normal] tracking-[0.34px] text-[#00000080]">
                    <span className="text-[#000000B2]">Customer</span> - All
                    people who have created an account on this site.
                  </p>
                </div>
              </div>
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
      </div>
    </div>
  );
};

export default AddCategories;
