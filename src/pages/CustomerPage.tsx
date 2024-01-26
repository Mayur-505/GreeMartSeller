import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import searchIcon from "@/assets/Icons/searchIcon.svg";
import CustomersTable from "@/components/Tables/CustomersTable";
import AddCustomerDialog from "@/components/Dialogs/AddCustomerDialog";

const CustomerPage = () => {
  const invoices = [
    {
      id: "371F",
      joiningdate: "Dec 29, 2023",
      name: "AI-Amin",
      email: "ma735167@gamil.com",
      status: "Active",
    },
    {
      id: "0901",
      joiningdate: "Dec 25, 2023",
      name: "Karan chavan",
      email: "karanchavan21@gmail.com",
      status: "Passive",
    },
    {
      id: "371F",
      joiningdate: "Dec 29, 2023",
      name: "AI-Amin",
      email: "ma735167@gamil.com",
      status: "Active",
    },
    {
      id: "0901",
      joiningdate: "Dec 25, 2023",
      name: "Karan chavan",
      email: "karanchavan21@gmail.com",
      status: "Passive",
    },
    {
      id: "371F",
      joiningdate: "Dec 29, 2023",
      name: "AI-Amin",
      email: "ma735167@gamil.com",
      status: "Active",
    },
    {
      id: "0901",
      joiningdate: "Dec 25, 2023",
      name: "Karan chavan",
      email: "karanchavan21@gmail.com",
      status: "Passive",
    },
    {
      id: "371F",
      joiningdate: "Dec 29, 2023",
      name: "AI-Amin",
      email: "ma735167@gamil.com",
      status: "Active",
    },
    {
      id: "0901",
      joiningdate: "Dec 25, 2023",
      name: "Karan chavan",
      email: "karanchavan21@gmail.com",
      status: "Passive",
    },
    {
      id: "371F",
      joiningdate: "Dec 29, 2023",
      name: "AI-Amin",
      email: "ma735167@gamil.com",
      status: "Active",
    },
  ];
  return (
    <div className="py-[50px] pl-[40px] pr-[80px] h-[calc(100vh-98px)] overflow-y-auto">
      <div className="shadow-boxdropshadow pt-[25px] pb-[45px] rounded-[10px]">
        <div className="px-[50px] border-b-[1px] border-solid border-[#C0C0C0] pb-[19px]">
          <div className="flex justify-between items-center">
            <h2 className="font-Poppins font-[600] text-[22px] text-[#454D4A] tracking-[0.24px] leading-[normal]">
              Customers
            </h2>
            <AddCustomerDialog />
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
        </div>
        <div className="px-[50px] mt-[15px]">
          <CustomersTable invoices={invoices} />
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;
