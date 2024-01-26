import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import searchIcon from "@/assets/Icons/searchIcon.svg";
import { useNavigate } from "react-router-dom";
import Categories from "@/components/Tables/Categories";

const Categorypage = () => {
  const navigate = useNavigate();
  const invoices = [
    {
      categories: "Bed Linen",
      name: "grocery",
    },
    {
      categories: "Bed Linen",
      name: "Womens",
    },
    {
      categories: "Bed Linen",
      name: "Mens",
    },
    {
      categories: "Bed Linen",
      name: "Mobiles & Accessories",
    },
    {
      categories: "grocery Item",
      name: "grocery",
    },
    {
      categories: "grocery Item",
      name: "Womens",
    },
    {
      categories: "grocery Item",
      name: "Mens",
    },
    {
      categories: "grocery Item",
      name: "Mobiles & Accessories",
    },
    {
      categories: "grocery Item",
      name: "grocery",
    },
    {
      categories: "grocery Item",
      name: "Womens",
    },
    {
      categories: "Bed Linen",
      name: "Mens",
    },
    {
      categories: "Bed Linen",
      name: "Mobiles & Accessories",
    },
  ];
  return (
    <div className="py-[50px] pl-[40px] pr-[80px] h-[calc(100vh-98px)] overflow-y-auto">
      <div className="shadow-boxdropshadow pt-[25px] pb-[45px] rounded-[10px] bg-[#FFF]">
        <div className="px-[50px] border-b-[1px] border-solid border-[#C0C0C0] pb-[19px]">
          <div className="flex justify-between items-center">
            <h2 className="font-Poppins font-[600] text-[22px] text-[#454D4A] tracking-[0.24px] leading-[normal]">
              Categories
            </h2>
            <Button
              className="flex gap-[10px] items-center font-Poppins text-[18px] font-[600] tracking-[0.27px] leading-[normal]"
              onClick={() => navigate("/addcategories")}
            >
              <div className="w-[19px] h-[19px] rounded-full bg-[#FFF] text-[#000] text-[16px] flex items-center justify-center">
                +
              </div>
              Add new category
            </Button>
          </div>
          <div className="flex gap-[36px] items-center pt-[25px]">
            <Button
              variant={"outline"}
              className="border-0 shadow-selectAllshadow rounded-[2px] font-[500] font-Poppins text-[18px] leading-[normal] text-[#000000B2] tracking-[0.36px] border-t-[4px] border-solid border-primary"
            >
              All
            </Button>
            <div className="max-w-[313px] relative">
              <Input
                placeholder="Search"
                className="rounded-[50px] font-Nunito font-[400] text-[17px] leading-[20px] text-[#7E7E7E] shadow-boxdropshadow pl-[48px]"
              />
              <img
                src={searchIcon}
                alt="searchIcon"
                className="absolute top-[12px] left-[23px]"
              />
            </div>
          </div>
        </div>
        <div className="px-[50px] mt-[15px]">
          <Categories invoices={invoices} />
        </div>
      </div>
    </div>
  );
};

export default Categorypage;
