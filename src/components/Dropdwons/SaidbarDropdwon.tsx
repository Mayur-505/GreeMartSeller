import { FC, useState, ReactNode, useEffect } from "react";
import dropdownarr from "@/assets/Icons/dropdwonArrow.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ComanDropdwon from "./ComanDropdwon";
import categoryLeftIcon from "@/assets/Icons/category_leftIcon.svg";

interface DropdownFilterProps {
  header: ReactNode;
  items: {
    title: string;
    content: ReactNode;
    checked?: boolean;
  }[];
  showSeeAll?: boolean;
  cssclss?: string;
}

const SaidbarDropdwon: FC<DropdownFilterProps> = ({
  header,
  items,
  showSeeAll = true,
  cssclss,
}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Categorys");
  const loction = useLocation();

  const handelSetRoute = (text: any) => {
    setSelectedCategory(text);
    if (text == "Categorys") {
      navigate("/category");
    }
    if (text == "SubCategory") {
      navigate("/subcategory");
    }
    if (text == "Attributes & Features") {
      navigate("/attributes");
    }
    if (text == "Brands & Suppliers") {
      navigate("/brands");
    }
    if (text == "Discounts") {
      navigate("/discounts");
    }
  };

  useEffect(() => {
    if (
      loction.pathname === "/category" ||
      loction.pathname === "/subcategory" ||
      loction.pathname === "/attributes" ||
      loction.pathname === "/brands" ||
      loction.pathname === "/discounts"
    ) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [loction]);

  console.log("selectedCategory", selectedCategory);

  return (
    <div className="relative mx-auto w-full text-left">
      <div>
        <button
          onClick={() => {
            setOpen(!open),
              navigate("/category"),
              setOpen(!open),
              setSelectedCategory("Categorys");
          }}
          type="button"
          className={`flex w-full cursor-pointer pr-[25px] pl-[35px] py-[22px] items-center justify-between text-left font-Poppins text-[19px] font-medium text-primary_text ${cssclss}`}
        >
          {header}
          <img
            src={dropdownarr}
            className={`transform transition-transform ${
              open ? "rotate-180" : "rotate-0"
            } w-[12px]`}
            alt="dropdown arrow"
          />
        </button>
      </div>

      <div
        className={`transition-max-height overflow-hidden duration-200 ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="mx-auto w-full pl-[66px] pb-[5px]">
          {items.map((item, index) => (
            <div
              key={index}
              className={`block cursor-pointer items-center pt-[25px] text-left font-Inter text-[18px] font-normal leading-[normal] tracking-[0.228px] ${
                item.checked ? "text-primary" : "text-[#505050]"
              }`}
            >
              <li
                onClick={() => handelSetRoute(item.title)}
                className={`${
                  item.title == selectedCategory && "text-primary"
                } list-disc	`}
              >
                {item.content}
              </li>
            </div>
          ))}
          {showSeeAll && (
            <Link
              to="#"
              className="cursor-pointer font-Poppins text-[22px] text-primary"
            >
              {" "}
              See all{" "}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SaidbarDropdwon;
