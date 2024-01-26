import { Input } from "../ui/input";
import searchIcon from "@/assets/Icons/search_icon.svg";
import bellIcon from "@/assets/Icons/bell_Icon.svg";
import profileImg from "@/assets/Images/profile_image.svg";

function Header() {
  return (
    <div className="relative w-full flex items-center h-[98px] bg-[#FFF] justify-between pt-[18px] pb-[25px] px-[20px] 2xl:pl-[50px] 2xl:pr-[87px] shadow-bottomshadow">
      <div>
        <h2 className="text-[#000] font-Poppins text-nowrap text-[17px] 2xl:text-[20px] font-[500] leading-[normal] tracking-[0.32px]">
          Hello Rahul Khan
        </h2>
        <p className="text-[#000] 2xl:block hidden font-Poppins text-[15px] font-[400] leading-[normal] tracking-[0.24px]">
          Here’s what’s happening today.
        </p>
      </div>
      <div className="max-w-[733px] w-full relative mx-[20px]">
        <Input
          type="email"
          placeholder="Search"
          className="focus-visible:ring-offset-[none] rounded-[10px] shadow-inputshadow placeholder:text-[14px] text-[14px] font-Roboto placeholder:font-Roboto placeholder:font-[400] placeholder:text-[#000] text-[#000] font-[400]"
        />
        <img
          src={searchIcon}
          alt="searchIcon"
          className="absolute right-[15px] max-w-[16px] w-full top-[11px]"
        />
      </div>
      <div className="flex items-center gap-[15px] 2xl:gap-[30px]">
        <div className="relative">
          <p className="w-[11px] absolute top-[-3px] right-[-1px] h-[11px] rounded-[3px] bg-[#F00] text-[8px] font-Roboto text-[#FFF] font-[400] tracking-[0.128px] flex items-center justify-center">
            2
          </p>
          <img src={bellIcon} alt="bellIcon" className="min-w-[24px] w-full" />
        </div>
        <div className="h-[48px] max-w-[48px] min-w-[30px] w-full rounded-[12px]">
          <img src={profileImg} alt="profileImg" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}

export default Header;
