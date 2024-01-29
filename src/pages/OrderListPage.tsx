import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import searchIcon from "@/assets/Icons/searchIcon.svg";
import downLoadIcon from "@/assets/Icons/downLoadIcon.svg";
import OrderListTable from "@/components/Tables/OrderListTable";
import { useEffect, useState } from "react";

const OrderListPage = () => {
  const [showinglist, setShowingList] = useState("All Orders");
  const [invoices, setInvoices] = useState([
    {
      id: "#YU34692",
      customer: "Keegan Wisoky",
      amount: "$101.00",
      method: "Paypal",
      date: "Noc 18,2022",
      name: "AI-Amin",
      email: "ma735167@gamil.com",
      status: "New",
    },
    {
      id: "#YU34692",
      customer: "Agustina Marks",
      amount: "$101.00",
      method: "Paypal",
      date: "Oct 11,2022",
      name: "Karan chavan",
      email: "karanchavan21@gmail.com",
      status: "Cancelied",
    },
    {
      id: "#YU34692",
      customer: "Vivianne Gealach",
      amount: "$101.00",
      method: "Paypal",
      date: "Noc 18,2022",
      name: "AI-Amin",
      email: "ma735167@gamil.com",
      status: "In Progress",
    },
    {
      id: "#YU34692",
      customer: "Christ Reilly",
      amount: "$101.00",
      method: "Paypal",
      date: "Oct 11,2022",
      name: "Karan chavan",
      email: "karanchavan21@gmail.com",
      status: "Completed",
    },
    {
      id: "#YU34692",
      customer: "Frank Kunde",
      amount: "$101.00",
      method: "Paypal",
      date: "Noc 18,2022",
      name: "AI-Amin",
      email: "ma735167@gamil.com",
      status: "New",
    },
    {
      id: "#YU34692",
      customer: "Frank Kunde",
      amount: "$101.00",
      method: "Paypal",
      date: "Oct 11,2022",
      name: "Karan chavan",
      email: "karanchavan21@gmail.com",
      status: "In Progress",
    },
    {
      id: "#YU34692",
      customer: "Tressa Luettgen",
      amount: "$101.00",
      method: "Paypal",
      date: "Noc 18,2022",
      name: "AI-Amin",
      email: "ma735167@gamil.com",
      status: "In Progress",
    },
    {
      id: "#YU34692",
      customer: "Tressa Luettgen",
      amount: "$101.00",
      method: "Paypal",
      date: "Oct 11,2022",
      name: "Karan chavan",
      email: "karanchavan21@gmail.com",
      status: "Cancelied",
    },
    {
      id: "#YU34692",
      customer: "Lonzo Fritsch",
      amount: "$101.00",
      method: "Paypal",
      date: "Noc 18,2022",
      name: "AI-Amin",
      email: "ma735167@gamil.com",
      status: "New",
    },
  ]);
  const [sendindarray, setsendindarray] = useState(invoices);

  useEffect(() => {
    if (showinglist == "All Orders") {
      setsendindarray(invoices);
    } else {
      const filterdata = invoices.filter((item) => item.status == showinglist);
      setsendindarray(filterdata);
    }
  }, [showinglist]);
  return (
    <div className="py-[50px] pl-[40px] pr-[80px] h-[calc(100vh-98px)] overflow-y-auto">
      <div className="shadow-boxdropshadow pt-[25px] pb-[45px] rounded-[10px] bg-[#FFF]">
        <div className="px-[50px] border-b-[1px] border-solid border-[#C0C0C0] pb-[19px]">
          <div className="flex justify-between items-center">
            <h2 className="font-Poppins font-[600] text-[22px] text-[#454D4A] tracking-[0.24px] leading-[normal]">
              Order List
            </h2>
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
                className=" rounded-[50px] shadow-boxdropshadow pl-[48px]"
              />
              <img
                src={searchIcon}
                alt="searchIcon"
                className="absolute top-[12px] left-[23px]"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-[27px]">
            <div className="flex gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <p
                  className={`text-[#4D4D4D] font-Poppins text-[15px] uppercase leading-[normal] font-[500] ${
                    showinglist === "All Orders" && "text-primary"
                  }`}
                >
                  All Orders
                </p>
                <button
                  className={`w-[36px] h-[30px] rounded-[5px] border-[1px] border-solid border-[#4D4D4D] text-[#4D4D4D] font-Poppins text-[14px] font-[500] flex items-center justify-center bg-[#65656517] ${
                    showinglist === "All Orders" &&
                    "bg-[#17AEC917] border-primary text-primary"
                  }`}
                  onClick={() => setShowingList("All Orders")}
                >
                  15
                </button>
              </div>
              <div className="flex items-center gap-[10px]">
                <p
                  className={`text-[#4D4D4D] font-Poppins text-[15px] uppercase leading-[normal] font-[500] ${
                    showinglist === "New" && "text-primary"
                  }`}
                >
                  NEW
                </p>
                <button
                  className={`w-[36px] h-[30px] rounded-[5px] border-[1px] border-solid border-[#4D4D4D] text-[#4D4D4D] font-Poppins text-[14px] font-[500] flex items-center justify-center bg-[#65656517] ${
                    showinglist === "New" &&
                    "bg-[#17AEC917] border-primary text-primary"
                  }`}
                  onClick={() => setShowingList("New")}
                >
                  03
                </button>
              </div>
              <div className="flex items-center gap-[10px]">
                <p
                  className={`text-[#4D4D4D] font-Poppins text-[15px] uppercase leading-[normal] font-[500] ${
                    showinglist === "Cancelied" && "text-primary"
                  }`}
                >
                  CANCELLED
                </p>
                <button
                  className={`w-[36px] h-[30px] rounded-[5px] border-[1px] border-solid border-[#4D4D4D] text-[#4D4D4D] font-Poppins text-[14px] font-[500] flex items-center justify-center bg-[#65656517] ${
                    showinglist === "Cancelied" &&
                    "bg-[#17AEC917] border-primary text-primary"
                  }`}
                  onClick={() => setShowingList("Cancelied")}
                >
                  02
                </button>
              </div>
              <div className="flex items-center gap-[10px]">
                <p
                  className={`text-[#4D4D4D] font-Poppins text-[15px] uppercase leading-[normal] font-[500] ${
                    showinglist === "In Progress" && "text-primary"
                  }`}
                >
                  iN PROGRESS
                </p>
                <button
                  className={`w-[36px] h-[30px] rounded-[5px] border-[1px] border-solid border-[#4D4D4D] text-[#4D4D4D] font-Poppins text-[14px] font-[500] flex items-center justify-center bg-[#65656517] ${
                    showinglist === "In Progress" &&
                    "bg-[#17AEC917] border-primary text-primary"
                  }`}
                  onClick={() => setShowingList("In Progress")}
                >
                  04
                </button>
              </div>
              <div className="flex items-center gap-[10px]">
                <p
                  className={`text-[#4D4D4D] font-Poppins text-[15px] uppercase leading-[normal] font-[500] ${
                    showinglist === "Completed" && "text-primary"
                  }`}
                >
                  COMPLETED
                </p>
                <button
                  className={`w-[36px] h-[30px] rounded-[5px] border-[1px] border-solid border-[#4D4D4D] text-[#4D4D4D] font-Poppins text-[14px] font-[500] flex items-center justify-center bg-[#65656517] ${
                    showinglist === "Completed" &&
                    "bg-[#17AEC917] border-primary text-primary"
                  }`}
                  onClick={() => setShowingList("Completed")}
                >
                  01
                </button>
              </div>
            </div>
            <Button className="flex gap-[10px] text-[#fff] px-[15px] py-[6px] h-auto font-Inter text-[15px] font-[500] leading-[normal] items-center">
              Download All Orders <img src={downLoadIcon} alt="downLoadIcon" />
            </Button>
          </div>
        </div>
        <div className="px-[50px] mt-[15px]">
          <OrderListTable invoices={sendindarray} />
        </div>
      </div>
    </div>
  );
};

export default OrderListPage;
