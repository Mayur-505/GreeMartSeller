import greeMart_logo from "@/assets/Images/greemart_logo.svg";
import dashbordLeftIcon from "@/assets/Icons/dashbord_leftIcon.svg";
import categoryLeftIcon from "@/assets/Icons/category_leftIcon.svg";
import productslistLeftIcon from "@/assets/Icons/productslist_leftIcon.svg";
import accountLeftIcon from "@/assets/Icons/account_leftIcon.svg";
import settingsLeftIcon from "@/assets/Icons/settings_leftIcon.svg";
import customersLeftIcon from "@/assets/Icons/customers_leftIcon.svg";
import orderlistLeftIcon from "@/assets/Icons/orderlist_leftIcon.svg";
import logoutLeftIcon from "@/assets/Icons/logout_leftIcon.svg";
import helpLeftIcon from "@/assets/Icons/help_leftIcon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import ComanDropdwon from "../Dropdwons/ComanDropdwon";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="max-w-[347px] relative z-10 h-full w-full shadow-saidbarshadow lg:block hidden bg-[#FFF]">
      <div className="pl-[56px] pt-[19px] h-[98px] pb-[27px] shadow-bottomshadow">
        <img
          src={greeMart_logo}
          alt="greeMart_logo"
          className="max-w-[165px] w-full"
        />
      </div>
      <div className="pt-[35px] overflow-y-auto flex flex-col justify-between  h-[calc(100%-98px)]">
        <ul className="px-[20px] flex flex-col gap-[10px]">
          <li
            className={`rounded-[10px] font-Inter text-[18px] font-normal leading-[normal] tracking-[0.288px] ${
              activeTab === 0 &&
              "bg-[#17AEC91A] border-r-[10px] text-primary !font-[600] border-primary"
            }`}
            onClick={() => setActiveTab(0)}
          >
            <Link
              to="/dashboard"
              className="flex items-center gap-[15px] pl-[35px] py-[22px]"
            >
              <img src={dashbordLeftIcon} alt="dashbordLeftIcon" />
              <span className="text-[18px] font-Inter">Dashboard</span>
            </Link>
          </li>
          <li
            className={` font-Inter text-[18px] font-normal leading-[normal] tracking-[0.288px]`}
            onClick={() => setActiveTab(1)}
          >
            <ComanDropdwon
              name="Catalog"
              icon={<img src={categoryLeftIcon} alt="categoryLeftIcon" />}
              mapdata={[
                "Category",
                "Attributes & Features",
                "Brands & Suppliers",
                "Discounts",
              ]}
              cssclss={
                activeTab === 1 &&
                "bg-[#17AEC91A] rounded-[10px] border-r-[10px] text-primary !font-[600] border-primary"
              }
            />
          </li>
          <li
            className={`rounded-[10px] font-Inter text-[18px] font-normal leading-[normal] tracking-[0.288px] ${
              activeTab === 2 &&
              "bg-[#17AEC91A] border-r-[10px] text-primary !font-[600] border-primary"
            }`}
            onClick={() => setActiveTab(2)}
          >
            <Link
              to="/productslist"
              className="flex items-center gap-[15px] pl-[35px] py-[22px]"
            >
              <img src={productslistLeftIcon} alt="productslistLeftIcon" />
              <span>Products list</span>
            </Link>
          </li>
          <li
            className={`rounded-[10px] font-Inter text-[18px] font-normal leading-[normal] tracking-[0.288px] ${
              activeTab === 3 &&
              "bg-[#17AEC91A] border-r-[10px] text-primary !font-[600] border-primary"
            }`}
            onClick={() => setActiveTab(3)}
          >
            <Link
              to="/orderlist"
              className="flex items-center gap-[15px] pl-[35px] py-[22px]"
            >
              <img src={orderlistLeftIcon} alt="orderlistLeftIcon" />
              <span>Order list</span>
            </Link>
          </li>
          <li
            className={`rounded-[10px] font-Inter text-[18px] font-normal leading-[normal] tracking-[0.288px] ${
              activeTab === 4 &&
              "bg-[#17AEC91A] border-r-[10px] text-primary !font-[600] border-primary"
            }`}
            onClick={() => setActiveTab(4)}
          >
            <Link
              to="/customer"
              className="flex items-center gap-[15px] pl-[35px] py-[22px]"
            >
              <img src={customersLeftIcon} alt="customersLeftIcon" />
              <span>Customers</span>
            </Link>
          </li>
          <li
            className={`rounded-[10px] font-Inter text-[18px] font-normal leading-[normal] tracking-[0.288px] ${
              activeTab === 5 &&
              "bg-[#17AEC91A] border-r-[10px] text-primary !font-[600] border-primary"
            }`}
            onClick={() => setActiveTab(5)}
          >
            <Link
              to="/account"
              className="flex items-center gap-[15px] pl-[35px] py-[22px]"
            >
              <img src={accountLeftIcon} alt="accountLeftIcon" />
              <span>Account</span>
            </Link>
          </li>
          <li
            className={`rounded-[10px] font-Inter text-[18px] font-normal leading-[normal] tracking-[0.288px] ${
              activeTab === 6 &&
              "bg-[#17AEC91A] border-r-[10px] text-primary !font-[600] border-primary"
            }`}
            onClick={() => setActiveTab(6)}
          >
            <Link
              to="/setting"
              className="flex items-center gap-[15px] pl-[35px] py-[22px]"
            >
              <img src={settingsLeftIcon} alt="settingsLeftIcon" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
        <ul className="border-t-[1px] px-[20px] border-solid border-[#00000026] mt-[10px]">
          <li className="font-Inter text-[18px] font-normal leading-[normal] tracking-[0.288px]">
            <Link
              to=""
              className="flex items-center gap-[15px] pl-[35px] py-[22px]"
            >
              <img src={helpLeftIcon} alt="helpLeftIcon" />
              <span>Help</span>
            </Link>
          </li>
          <li className="font-Inter text-[18px] font-normal leading-[normal] tracking-[0.288px]">
            <Link
              to=""
              className="flex items-center gap-[15px] pl-[35px] py-[22px]"
            >
              <img src={logoutLeftIcon} alt="logoutLeftIcon" />
              <span>Log out</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
