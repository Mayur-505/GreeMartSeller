import WificallIcon from "@/assets/Icons/wifiCall.svg";
import InfoIcon from "@/assets/Icons/Info.svg";

const TopBar = () => {
  return (
    <div className="bg-primary">
      <div className="custom_container px-[45px]">
        <div className="flex justify-center py-[6px] sm:justify-between">
          <p className="fon-[600] font-Roboto text-[12px] leading-[normal] text-[#FFF]">
            Free exress intemational delivery + easy retum
          </p>
          <div className="hidden sm:flex">
            <div className="pr-[29px]">
              <p className="flex gap-[13px] font-Roboto text-[12px] font-[600] leading-[normal] text-[#FFF]">
                <img src={WificallIcon} alt="WificallIcon" /> Phone:+(088) 444
                4444
              </p>
            </div>
            <div>
              <p className="flex gap-[13px] font-Roboto text-[12px] font-[600] leading-[normal] text-[#FFF]">
                <img src={InfoIcon} alt="InfoIcon" />
                info@prestashopdemo.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
