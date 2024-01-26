import LogoImage from "@/assets/Icons/logo.svg";
import SearchIcon from "@/assets/Icons/Search.svg";
import profileImage from "@/assets/Icons/Profileonemen.svg";
import MyCarxdIcon from "@/assets/Icons/MyCard.svg";
import wishListIcon from "@/assets/Icons/WishListHeart.svg";
import cancelIcon from "@/assets/Icons/cancelIcon.svg";
import DeleteIcon from "@/assets/Icons/DeleteIcon.svg";
import headphone from "@/assets/Images/headphone.png";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  return (
    <div className="shadow-headshadow">
      <div className="lg:custom_container section_padding">
        <div className="flex items-center justify-between py-[14px]">
          <div className="w-full max-w-[167px]">
            <Link to={"/"}>
              <img
                src={LogoImage}
                alt="LogoImage"
                className="w-full cursor-pointer"
              />
            </Link>
          </div>
          <div className="hidden w-full max-w-[733px] px-[30px] sm:block lg:px-0">
            <div className="relative w-full">
              <Input
                placeholder="Search"
                className="focus-visible:ring-border-transparent w-full rounded-[10px] py-[12px] pl-[24px] pr-[35px] shadow-inputShadow placeholder:font-Poppins placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[normal] placeholder:text-secondary focus-visible:ring-offset-0"
              />
              <img
                src={SearchIcon}
                alt="SearchIcon"
                className="absolute right-[15px] top-[12px] cursor-pointer"
              />
            </div>
          </div>
          <div>
            <Link to="/settings/my-profile">
              <button>
                <img
                  src={profileImage}
                  alt="profileImage"
                  className="mx-auto h-full max-h-[20px] w-full max-w-[20px]"
                />
                <p className="pt-[4px] font-Poppins text-[10px] font-[400] leading-[normal] text-secondary sm:text-[12px]">
                  Profile
                </p>
              </button>
            </Link>
            <Popover open={isOpen1} onOpenChange={() => setIsOpen1(!isOpen1)}>
              <PopoverTrigger asChild>
                <button className="pl-[15px]">
                  <img
                    src={wishListIcon}
                    alt="wishListIcon"
                    className="mx-auto h-full max-h-[20px] w-full max-w-[20px]"
                  />
                  <p className="pt-[4px] font-Poppins text-[10px] font-[400] leading-[normal] text-secondary sm:text-[12px]">
                    Wishlist
                  </p>
                </button>
              </PopoverTrigger>
              <PopoverContent className="h-full w-[300px] max-w-[745px] overflow-y-auto rounded-none p-0 md:w-[419px]">
                <div className="flex justify-between border-b-[1px] border-solid border-[#E4E4E4] px-[15px] py-[10px] sm:py-[20px] md:px-[35px]">
                  <div className="flex gap-[10px]">
                    <img src={wishListIcon} alt="wishListIcon" />
                    <p className="font-Poppins text-[16px] font-[600] leading-[normal] text-[#8B96A5] md:text-[19px]">
                      4 Items
                    </p>
                  </div>
                  <img
                    src={cancelIcon}
                    alt="cancelIcon"
                    onClick={() => setIsOpen1(!isOpen1)}
                  />
                </div>
                <div className="border-b-[1px] border-solid border-b-[#E4E4E4] px-[15px] pb-[20px] sm:px-[35px] sm:pb-[43px]">
                  <div className="flex gap-[20px] border-b-[1px] border-solid border-[#E4E4E4] py-[20px]">
                    <div className="h-99px flex w-[99px] items-center justify-center border-[1px] border-solid border-[#E4E4E4]">
                      <img
                        src={headphone}
                        alt="headphone"
                        className="h-full max-h-[80px] w-full max-w-[80px]"
                      />
                    </div>
                    <div className="flex w-full items-start justify-between">
                      <div>
                        <h3 className="font-Poppins text-[16px] font-[500] leading-[normal] text-primary_text">
                          JBL Tour One
                        </h3>
                        <p className="pb-[10px] pt-[5px] font-Poppins text-[14px] font-[500] leading-[19px] text-secondary_text">
                          1 x $750.50
                        </p>
                        <img src={DeleteIcon} alt="DeleteIcon" />
                      </div>
                      <img
                        src={cancelIcon}
                        alt="cancelIcon"
                        className="w-full max-w-[10px]"
                      />
                    </div>
                  </div>
                  <div className="flex gap-[20px] border-b-[1px] border-solid border-[#E4E4E4] py-[20px]">
                    <div className="h-99px flex w-[99px] items-center justify-center border-[1px] border-solid border-[#E4E4E4]">
                      <img
                        src={headphone}
                        alt="headphone"
                        className="h-full max-h-[80px] w-full max-w-[80px]"
                      />
                    </div>
                    <div className="flex w-full items-start justify-between">
                      <div>
                        <h3 className="font-Poppins text-[16px] font-[500] leading-[normal] text-primary_text">
                          JBL Tour One
                        </h3>
                        <p className="pb-[10px] pt-[5px] font-Poppins text-[14px] font-[500] leading-[19px] text-secondary_text">
                          1 x $750.50
                        </p>
                        <img src={DeleteIcon} alt="DeleteIcon" />
                      </div>
                      <img
                        src={cancelIcon}
                        alt="cancelIcon"
                        className="w-full max-w-[10px]"
                      />
                    </div>
                  </div>
                  <div className="flex gap-[20px] border-b-[1px] border-solid border-[#E4E4E4] py-[20px]">
                    <div className="h-99px flex w-[99px] items-center justify-center border-[1px] border-solid border-[#E4E4E4]">
                      <img
                        src={headphone}
                        alt="headphone"
                        className="h-full max-h-[80px] w-full max-w-[80px]"
                      />
                    </div>
                    <div className="flex w-full items-start justify-between">
                      <div>
                        <h3 className="font-Poppins text-[16px] font-[500] leading-[normal] text-primary_text">
                          JBL Tour One
                        </h3>
                        <p className="pb-[10px] pt-[5px] font-Poppins text-[14px] font-[500] leading-[19px] text-secondary_text">
                          1 x $750.50
                        </p>
                        <img src={DeleteIcon} alt="DeleteIcon" />
                      </div>
                      <img
                        src={cancelIcon}
                        alt="cancelIcon"
                        className="w-full max-w-[10px]"
                      />
                    </div>
                  </div>
                  <div className="flex gap-[20px] border-b-[1px] border-solid border-[#E4E4E4] py-[20px]">
                    <div className="h-99px flex w-[99px] items-center justify-center border-[1px] border-solid border-[#E4E4E4]">
                      <img
                        src={headphone}
                        alt="headphone"
                        className="h-full max-h-[80px] w-full max-w-[80px]"
                      />
                    </div>
                    <div className="flex w-full items-start justify-between">
                      <div>
                        <h3 className="font-Poppins text-[16px] font-[500] leading-[normal] text-primary_text">
                          JBL Tour One
                        </h3>
                        <p className="pb-[10px] pt-[5px] font-Poppins text-[14px] font-[500] leading-[19px] text-secondary_text">
                          1 x $750.50
                        </p>
                        <img src={DeleteIcon} alt="DeleteIcon" />
                      </div>
                      <img
                        src={cancelIcon}
                        alt="cancelIcon"
                        className="w-full max-w-[10px]"
                      />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Popover open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
              <PopoverTrigger asChild>
                <button className="pl-[15px]">
                  <img
                    src={MyCarxdIcon}
                    alt="MyCarxdIcon"
                    className="mx-auto h-full max-h-[20px] w-full max-w-[20px]"
                  />
                  <p className="text-nowrap pt-[4px] font-Poppins text-[10px] font-[400] leading-[normal] text-secondary sm:text-[12px]">
                    My cart
                  </p>
                </button>
              </PopoverTrigger>
              <PopoverContent className="max-h-[745px] w-[300px] overflow-y-auto rounded-none p-0 md:w-[419px]">
                <div className="flex justify-between border-b-[1px] border-solid border-[#E4E4E4] px-[15px] py-[10px] md:px-[35px] md:py-[20px]">
                  <div className="flex gap-[13px]">
                    <img src={MyCarxdIcon} alt="MyCarxdIcon" />
                    <p className="font-Poppins text-[16px] font-[600] leading-[normal] text-[#8B96A5] md:text-[19px]">
                      4 Items
                    </p>
                  </div>
                  <img
                    src={cancelIcon}
                    alt="cancelIcon"
                    onClick={() => setIsOpen(!isOpen)}
                  />
                </div>
                <div className="flex flex-col gap-[20px] border-b-[1px] border-solid border-b-[#E4E4E4] px-[15px] pb-[20px] pt-[15px] md:px-[35px] md:pb-[40px] md:pt-[30px]">
                  <div className="flex gap-[20px]">
                    <div className="h-99px flex w-[99px] items-center justify-center border-[1px] border-solid border-[#E4E4E4]">
                      <img
                        src={headphone}
                        alt="headphone"
                        className="h-full max-h-[80px] w-full max-w-[80px]"
                      />
                    </div>
                    <div>
                      <h3 className="font-Poppins text-[16px] font-[500] leading-[normal] text-primary_text">
                        JBL Tour One
                      </h3>
                      <p className="pb-[10px] pt-[5px] font-Poppins text-[14px] font-[500] leading-[19px] text-secondary_text">
                        1 x $750.50
                      </p>
                      <img src={DeleteIcon} alt="DeleteIcon" />
                    </div>
                  </div>
                  <div className="flex gap-[20px]">
                    <div className="h-99px flex w-[99px] items-center justify-center border-[1px] border-solid border-[#E4E4E4]">
                      <img
                        src={headphone}
                        alt="headphone"
                        className="h-full max-h-[80px] w-full max-w-[80px]"
                      />
                    </div>
                    <div>
                      <h3 className="font-Poppins text-[16px] font-[500] leading-[normal] text-primary_text">
                        JBL Tour One
                      </h3>
                      <p className="pb-[10px] pt-[5px] font-Poppins text-[14px] font-[500] leading-[19px] text-secondary_text">
                        1 x $750.50
                      </p>
                      <img src={DeleteIcon} alt="DeleteIcon" />
                    </div>
                  </div>
                  <div className="flex gap-[20px]">
                    <div className="h-99px flex w-[99px] items-center justify-center border-[1px] border-solid border-[#E4E4E4]">
                      <img
                        src={headphone}
                        alt="headphone"
                        className="h-full max-h-[80px] w-full max-w-[80px]"
                      />
                    </div>
                    <div>
                      <h3 className="font-Poppins text-[16px] font-[500] leading-[normal] text-primary_text">
                        JBL Tour One
                      </h3>
                      <p className="pb-[10px] pt-[5px] font-Poppins text-[14px] font-[500] leading-[19px] text-secondary_text">
                        1 x $750.50
                      </p>
                      <img src={DeleteIcon} alt="DeleteIcon" />
                    </div>
                  </div>
                  <div className="flex gap-[20px] ">
                    <div className="h-99px flex w-[99px] items-center justify-center border-[1px] border-solid border-[#E4E4E4]">
                      <img
                        src={headphone}
                        alt="headphone"
                        className="h-full max-h-[80px] w-full max-w-[80px]"
                      />
                    </div>
                    <div>
                      <h3 className="font-Poppins text-[16px] font-[500] leading-[normal] text-primary_text">
                        JBL Tour One
                      </h3>
                      <p className="pb-[10px] pt-[5px] font-Poppins text-[14px] font-[500] leading-[19px] text-secondary_text">
                        1 x $750.50
                      </p>
                      <img src={DeleteIcon} alt="DeleteIcon" />
                    </div>
                  </div>
                </div>
                <div className="px-[15px] pb-[25px] md:px-[35px] md:pb-[51px]">
                  <div className="flex items-center justify-between pt-[21px]">
                    <p>Total</p>
                    <p>$2445.5</p>
                  </div>
                  <div className="flex items-center justify-between pt-[18px]">
                    <Button
                      className="w-full max-w-[125px] rounded-[3px] py-[7px] font-Poppins text-[14px] font-[400] leading-[normal] text-secondary"
                      variant={"outline"}
                    >
                      View cart
                    </Button>
                    <Button
                      className="w-full max-w-[125px] rounded-[3px] py-[7px] font-Poppins text-[14px] font-[400] leading-[normal] text-[#FFF]"
                      variant={"secondary"}
                    >
                      Checkout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
