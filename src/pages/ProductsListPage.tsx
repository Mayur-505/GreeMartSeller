import ProductsListTable from "@/components/Tables/ProductsListTable";
import crameraImage from "@/assets/Images/cameraImage.svg";
import { Button } from "@/components/ui/button";
import searchIcon from "@/assets/Icons/searchIcon.svg";
import filteringIcon from "@/assets/Icons/filteringIcon.svg";
import MenuIcon from "@/assets/Icons/MenuIcon.svg";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const ProductsListPage = () => {
  const navigate = useNavigate();
  const data = [
    {
      idcode: "#761324",
      product: {
        name: "Nikon AF-S DX Camera",
        model: "Model  2020",
        image: crameraImage,
      },
      category: "Camera",
      pieces: "32",
      prices: "$550",
      stotus: "In Stok",
    },
    {
      idcode: "#761324",
      product: {
        name: "Nikon AF-S DX Camera",
        model: "Model  2020",
        image: crameraImage,
      },
      category: "Camera",
      pieces: "32",
      prices: "$550",
      stotus: "In Stok",
    },
    {
      idcode: "#761324",
      product: {
        name: "Nikon AF-S DX Camera",
        model: "Model  2020",
        image: crameraImage,
      },
      category: "Camera",
      pieces: "32",
      prices: "$550",
      stotus: "In Stok",
    },
    {
      idcode: "#761324",
      product: {
        name: "Nikon AF-S DX Camera",
        model: "Model  2020",
        image: crameraImage,
      },
      category: "Camera",
      pieces: "32",
      prices: "$550",
      stotus: "In Stok",
    },
    {
      idcode: "#761324",
      product: {
        name: "Nikon AF-S DX Camera",
        model: "Model  2020",
        image: crameraImage,
      },
      category: "Camera",
      pieces: "32",
      prices: "$550",
      stotus: "In Stok",
    },
    {
      idcode: "#761324",
      product: {
        name: "Nikon AF-S DX Camera",
        model: "Model  2020",
        image: crameraImage,
      },
      category: "Camera",
      pieces: "32",
      prices: "$550",
      stotus: "Out of Stock",
    },
    {
      idcode: "#761324",
      product: {
        name: "Nikon AF-S DX Camera",
        model: "Model  2020",
        image: crameraImage,
      },
      category: "Camera",
      pieces: "32",
      prices: "$550",
      stotus: "In Stok",
    },
    {
      idcode: "#761324",
      product: {
        name: "Nikon AF-S DX Camera",
        model: "Model  2020",
        image: crameraImage,
      },
      category: "Camera",
      pieces: "32",
      prices: "$550",
      stotus: "In Stok",
    },
    {
      idcode: "#761324",
      product: {
        name: "Nikon AF-S DX Camera",
        model: "Model  2020",
        image: crameraImage,
      },
      category: "Camera",
      pieces: "32",
      prices: "$550",
      stotus: "In Stok",
    },
  ];
  return (
    <div className="py-[50px] pl-[40px] pr-[80px] h-[calc(100vh-98px)] overflow-y-auto">
      <div className="flex justify-between items-center">
        <div className="flex gap-[30px] items-center">
          <h2 className="font-Poppins font-[600] text-[22px] text-[#454D4A] tracking-[0.24px] leading-[normal]">
            Products list
          </h2>
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
        <div className="flex gap-[35px] items-center">
          <div className="flex gap-[15px]">
            <div className="w-[33px] h-[33px] bg-primary rounded-[5px] flex items-center justify-center">
              <img src={filteringIcon} alt="filteringIcon" />
            </div>
            <div className="w-[33px] h-[33px] border-[2px] border-solid border-[#00000080] rounded-[5px] items-center justify-center flex">
              <img src={MenuIcon} alt="MenuIcon" />
            </div>
          </div>
          <Button
            className="flex gap-[10px] items-center font-Poppins text-[18px] font-[600] tracking-[0.27px] leading-[normal]"
            onClick={() => navigate("/addproduct")}
          >
            <div className="w-[19px] h-[19px] rounded-full bg-[#FFF] text-[#000] text-[16px] flex items-center justify-center">
              +
            </div>
            <span className="text-[18px] font-Poppins text-[#fff]">
              Add Products
            </span>
          </Button>
        </div>
      </div>
      <div className="pt-[37px]">
        <ProductsListTable invoices={data} />
      </div>
    </div>
  );
};

export default ProductsListPage;
