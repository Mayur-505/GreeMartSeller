import progressArrow from "@/assets/Icons/progress_arrow..svg";
import weeklyBalance from "@/assets/Images/weeklyBalance.svg";
import totalProduct from "@/assets/Images/totalProduct.svg";
import todaySells from "@/assets/Images/todaySells.svg";
import todayvisitors from "@/assets/Images/todayvisitors.svg";
import fiveStarImg from "@/assets/Images/five_starImg.svg";
import BarChart from "@/components/charts/BarChart";
import PieChart from "@/components/charts/PieChart";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import RecentOrderTable from "@/components/Tables/RecentOrderTable";

const Dashboard = () => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 7,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#64B5F6" : "#308fe8",
    },
  }));

  const BorderLinearProgress1 = styled(LinearProgress)(({ theme }) => ({
    height: 7,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#BEFF96" : "#308fe8",
    },
  }));

  const BorderLinearProgress2 = styled(LinearProgress)(({ theme }) => ({
    height: 7,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#FEDBCF80" : "#308fe8",
    },
  }));

  const BorderLinearProgress3 = styled(LinearProgress)(({ theme }) => ({
    height: 7,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#FCBD22" : "#308fe8",
    },
  }));

  const invoices = [
    {
      product: "Redmi 11 Pro",
      orderid: "#320420",
      location: "210 Canada",
      amount: "$320",
      status: "Deliverd",
    },
    {
      product: "Redmi 11 Pro",
      orderid: "#320420",
      location: "210 Canada",
      amount: "$320",
      status: "Panding",
    },
    {
      product: "Redmi 11 Pro",
      orderid: "#320420",
      location: "210 Canada",
      amount: "$320",
      status: "Canceled",
    },
    {
      product: "Redmi 11 Pro",
      orderid: "#320420",
      location: "210 Canada",
      amount: "$320",
      status: "Deliverd",
    },
    {
      product: "Redmi 11 Pro",
      orderid: "#320420",
      location: "210 Canada",
      amount: "$320",
      status: "Deliverd",
    },
  ];

  return (
    <div className="py-[35px] pl-[40px] pr-[80px] h-[calc(100vh-98px)] overflow-y-auto">
      <div className="flex justify-between">
        <div className="flex items-center justify-between max-w-[314px] w-full px-[30px] pt-[18px] pb-[24px] rounded-[10px] shadow-dashbordcard">
          <div>
            <h3 className="font-Poppins text-[#000000B2] text-[16px] font-[400] tracking-[0.256px] leading-[normal]">
              Weekly Balance
            </h3>
            <span className="font-Poppins text-primary text-[18px] pt-[3px] font-[500] tracking-[0.54px] leading-[normal]">
              $154,001
            </span>
            <div className="flex gap-[5px] items-center mt-[11px]">
              <img src={progressArrow} alt="progressArrow" />
              <p className="font-Poppins  text-[#000000B2] text-[14px] font-[500] tracking-[0.3px] leading-[normal]">
                <span className="text-primary">+60%</span> this week
              </p>
            </div>
          </div>
          <div className="h-[45px] w-[45px] rounded-full flex items-center justify-center border-[1px] border-solid border-[#00000026]">
            <img
              src={weeklyBalance}
              alt="weeklyBalance"
              className="max-w-[32px]"
            />
          </div>
        </div>
        <div className="flex items-center justify-between max-w-[314px] w-full px-[30px] pt-[18px] pb-[24px] rounded-[10px] shadow-dashbordcard">
          <div>
            <h3 className="font-Poppins text-[#000000B2] text-[16px] font-[400] tracking-[0.256px] leading-[normal]">
              Total Product
            </h3>
            <span className="font-Poppins text-primary text-[18px] pt-[3px] font-[500] tracking-[0.54px] leading-[normal]">
              352,000
            </span>
            <div className="flex gap-[5px] items-center mt-[11px]">
              <img src={progressArrow} alt="progressArrow" />
              <p className="font-Poppins  text-[#000000B2] text-[14px] font-[500] tracking-[0.3px] leading-[normal]">
                <span className="text-primary">+60%</span> this week
              </p>
            </div>
          </div>
          <div className="h-[45px] w-[45px] rounded-full flex items-center justify-center border-[1px] border-solid border-[#00000026]">
            <img
              src={totalProduct}
              alt="totalProduct"
              className="max-w-[28px]"
            />
          </div>
        </div>
        <div className="flex items-center justify-between max-w-[314px] w-full px-[30px] pt-[18px] pb-[24px] rounded-[10px] shadow-dashbordcard">
          <div>
            <h3 className="font-Poppins text-[#000000B2] text-[16px] font-[400] tracking-[0.256px] leading-[normal]">
              Today’s Sells
            </h3>
            <span className="font-Poppins text-primary text-[18px] pt-[3px] font-[500] tracking-[0.54px] leading-[normal]">
              $150,000
            </span>
            <div className="flex gap-[5px] items-center mt-[11px]">
              <img src={progressArrow} alt="progressArrow" />
              <p className="font-Poppins  text-[#000000B2] text-[14px] font-[500] tracking-[0.3px] leading-[normal]">
                <span className="text-primary">+60%</span> this week
              </p>
            </div>
          </div>
          <div className="h-[45px] w-[45px] rounded-full flex items-center justify-center border-[1px] border-solid border-[#00000026]">
            <img src={todaySells} alt="todaySells" className="max-w-[28px]" />
          </div>
        </div>
        <div className="flex items-center justify-between max-w-[314px] w-full px-[30px] pt-[18px] pb-[24px] rounded-[10px] shadow-dashbordcard">
          <div>
            <h3 className="font-Poppins text-[#000000B2] text-[16px] font-[400] tracking-[0.256px] leading-[normal]">
              Today’s visitors
            </h3>
            <span className="font-Poppins text-primary text-[18px] pt-[3px] font-[500] tracking-[0.54px] leading-[normal]">
              $150,000
            </span>
            <div className="flex gap-[5px] items-center mt-[11px]">
              <img src={progressArrow} alt="progressArrow" />
              <p className="font-Poppins  text-[#000000B2] text-[14px] font-[500] tracking-[0.3px] leading-[normal]">
                <span className="text-primary">+60%</span> this week
              </p>
            </div>
          </div>
          <div className="h-[45px] w-[45px] rounded-full flex items-center justify-center border-[1px] border-solid border-[#00000026]">
            <img
              src={todayvisitors}
              alt="todayvisitors"
              className="max-w-[28px]"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-[40px] mt-[40px]">
        <div className="flex gap-[32px] w-full">
          <div className="max-w-[735px] rounded-[15px] w-full px-[30px] py-[20px] shadow-boxdropshadow">
            <div className="pb-[30px]">
              <h2 className="font-Poppins text-[20px] text-[#323232] font-[600] leading-[normal] tracking-[0.5px]">
                Sells Datils
              </h2>
              <p className="font-Poppins text-[17px] text-[#00000080] font-[500] leading-[normal] tracking-[0.5px]">
                Total Earning of the Month
              </p>
            </div>
            <BarChart />
          </div>
          <div className="max-w-[304px] w-full shadow-boxdropshadow rounded-[15px] py-[20px]">
            <h2 className="font-Poppins px-[30px] text-[20px] text-[#000] font-[500] leading-[normal] mb-[40px]">
              Order Status
            </h2>
            <PieChart
              data={[48, 22, 30]}
              color={["#8ECEF8", "#FF9D7C", "#F6F0E4"]}
            />
            <div className="px-[30px] flex flex-col gap-[17px] mt-[35px]">
              <p className="flex gap-[17px] items-center font-Poppins font-[400] text-[18px] leading-[normal] text-[#000]">
                <span className="h-[17px] w-[17px] bg-[#8ECEF8]"></span>
                Delivered 70%
              </p>
              <p className="flex gap-[17px] items-center font-Poppins font-[400] text-[18px] leading-[normal] text-[#000]">
                <span className="h-[17px] w-[17px] bg-[#F6F0E4]"></span>Panding
                20%
              </p>
              <p className="flex gap-[17px] items-center font-Poppins font-[400] text-[18px] leading-[normal] text-[#000]">
                <span className="h-[17px] w-[17px] bg-[#FF9D7C]"></span>Cancel
                10%
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[304px] w-full px-[30px] py-[20px] shadow-boxdropshadow rounded-[15px]">
          <h2 className="font-Poppins text-[20px] text-[#000] font-[500] leading-[normal] mb-[25px]">
            Delivery Progress
          </h2>
          <PieChart
            data={[40, 20, 15, 25]}
            color={["#FCBD22", "#FEDBCF80", "#BEFF96", "#5BB3ED"]}
          />
          <div className="flex flex-col gap-[15px] mt-[20px]">
            <div>
              <div className="flex justify-between items-center mb-[5px]">
                <h3 className="font-Poppins text-[15px] text-[#000] font-[300] leading-[normal]">
                  Electronics
                </h3>
                <p className="font-Poppins text-[15px] text-[#000] font-[300] leading-[normal]">
                  70%
                </p>
              </div>
              <BorderLinearProgress variant="determinate" value={70} />
            </div>
            <div>
              <div className="flex justify-between items-center mb-[5px]">
                <h3 className="font-Poppins text-[15px] text-[#000] font-[300] leading-[normal]">
                  Mobile Phone
                </h3>
                <p className="font-Poppins text-[15px] text-[#000] font-[300] leading-[normal]">
                  60%
                </p>
              </div>
              <BorderLinearProgress1 variant="determinate" value={60} />
            </div>
            <div>
              <div className="flex justify-between items-center mb-[5px]">
                <h3 className="font-Poppins text-[15px] text-[#000] font-[300] leading-[normal]">
                  Laptop
                </h3>
                <p className="font-Poppins text-[15px] text-[#000] font-[300] leading-[normal]">
                  50%
                </p>
              </div>
              <BorderLinearProgress2 variant="determinate" value={50} />
            </div>
            <div>
              <div className="flex justify-between items-center mb-[5px]">
                <h3 className="font-Poppins text-[15px] text-[#000] font-[300] leading-[normal]">
                  Other
                </h3>
                <p className="font-Poppins text-[15px] text-[#000] font-[300] leading-[normal]">
                  80%
                </p>
              </div>
              <BorderLinearProgress3 variant="determinate" value={80} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[40px] mt-[40px]">
        <div className="max-w-[1073px] w-full shadow-boxdropshadow px-[30px] py-[20px] rounded-[15px]">
          <div className="pb-[20px]">
            <h2 className="font-Poppins text-[20px] text-[#323232] font-[600] leading-[normal] tracking-[0.5px]">
              Recent Order
            </h2>
          </div>
          <div>
            <RecentOrderTable invoices={invoices} />
          </div>
        </div>
        <div className="max-w-[304px] w-full shadow-boxdropshadow px-[30px] py-[20px] rounded-[15px]">
          <div>
            <h2 className="font-Poppins text-[20px] text-[#323232] font-[600] leading-[normal] tracking-[0.5px]">
              Customer Reviews
            </h2>
            <p className="font-Poppins text-[16px] text-[#00000080] font-[500] leading-[normal] tracking-[0.5px]">
              Overall 1K Customer Reviews
            </p>
            <div className="flex justify-end pt-[3px]">
              <img src={fiveStarImg} alt="fiveStarImg" className="" />
            </div>
          </div>
          <div className="flex flex-col gap-[20px] mt-[20px]">
            <div>
              <div className="flex justify-between items-center mb-[5px]">
                <h3 className="font-Poppins text-[15px] text-[#000] font-[300] leading-[normal]">
                  Mobile Phone
                </h3>
                <p className="font-Poppins text-[15px] text-[#000] font-[300] leading-[normal]">
                  60%
                </p>
              </div>
              <BorderLinearProgress1 variant="determinate" value={60} />
            </div>
            <div>
              <div className="flex justify-between items-center mb-[5px]">
                <h3 className="font-Poppins text-[15px] text-[#000] font-[300] leading-[normal]">
                  Laptop
                </h3>
                <p className="font-Poppins text-[15px] text-[#000] font-[300] leading-[normal]">
                  50%
                </p>
              </div>
              <BorderLinearProgress2 variant="determinate" value={50} />
            </div>
            <div>
              <div className="flex justify-between items-center mb-[5px]">
                <h3 className="font-Poppins text-[15px] text-[#000] font-[300] leading-[normal]">
                  Other
                </h3>
                <p className="font-Poppins text-[15px] text-[#000] font-[300] leading-[normal]">
                  30%
                </p>
              </div>
              <BorderLinearProgress3 variant="determinate" value={30} />
            </div>
            <div>
              <div className="flex justify-between items-center mb-[5px]">
                <h3 className="font-Poppins text-[15px] text-[#000] font-[300] leading-[normal]">
                  Electronics
                </h3>
                <p className="font-Poppins text-[15px] text-[#000] font-[300] leading-[normal]">
                  80%
                </p>
              </div>
              <BorderLinearProgress variant="determinate" value={80} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
