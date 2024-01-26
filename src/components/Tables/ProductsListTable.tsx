import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import deleteIcon from "@/assets/Icons/reddeleteIcon.svg";
import penIcon from "@/assets/Icons/bluePen.svg";
import { Checkbox } from "../ui/checkbox";

interface ProductObj {
  name: string;
  model: string;
  image: string;
}

interface InvoicesObject {
  idcode?: string;
  product?: ProductObj;
  category?: string;
  pieces?: string;
  prices?: string;
  stotus?: string;
}

const ProductsListTable = (props: { invoices: InvoicesObject[] }) => {
  return (
    <Table className="border-[1px] border-solid boredr-[#00000026]">
      <TableHeader>
        <TableRow className="bg-primary hover:bg-primary">
          <TableHead className="font-Poppins font-[500] text-[20px] flex items-center text-[#FFF] tracking-[0.592px] leading-[normal]">
            <Checkbox className="h-[21px] w-[21px] border-[#FFF] mr-[20px]" />
            ID Code
          </TableHead>
          <TableHead className="font-Poppins font-[500] text-[20px] text-[#FFF] tracking-[0.592px] leading-[normal]">
            Product Name
          </TableHead>
          <TableHead className="font-Poppins font-[500] text-[20px] text-[#FFF] tracking-[0.592px] leading-[normal]">
            Category
          </TableHead>
          <TableHead className="font-Poppins font-[500] text-[20px] text-[#FFF] tracking-[0.592px] leading-[normal]">
            Pieces
          </TableHead>
          <TableHead className="font-Poppins font-[500] text-[20px] text-[#FFF] tracking-[0.592px] leading-[normal]">
            Prices
          </TableHead>
          <TableHead className="font-Poppins font-[500] text-[20px] text-[#FFF] tracking-[0.592px] leading-[normal]">
            Stotus
          </TableHead>
          <TableHead className="font-Poppins font-[500] text-[20px] text-[#FFF] tracking-[0.592px] leading-[normal]">
            Action
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props?.invoices?.map((invoice) => (
          <TableRow key={invoice.idcode}>
            <TableCell className="font-Poppins flex items-center font-[500] text-[16px] py-[6px] text-[#000000B2] tracking-[0.592px] leading-[normal]">
              <Checkbox className="h-[21px] w-[21px] mr-[20px]" />
              {invoice.idcode}
            </TableCell>
            <TableCell className="font-Poppins font-[500] text-[16px] py-[6px] text-[#17AEC9] tracking-[0.592px] leading-[normal]">
              <div className="flex gap-[15px]">
                <div className="border-[1px] border-solid border-[#BBCDD2] max-w-[48px] w-full h-[47px] flex items-center justify-center">
                  <img src={invoice?.product?.image} alt="image" />
                </div>
                <div>
                  <p>{invoice.product?.name}</p>
                  <p className="text-[13px] text-[#00000066]">
                    {invoice.product?.model}
                  </p>
                </div>
              </div>
            </TableCell>
            <TableCell className="font-Poppins font-[500] text-[16px] py-[6px] text-[#000000B2] tracking-[0.592px] leading-[normal]">
              {invoice.category}
            </TableCell>
            <TableCell className="font-Poppins font-[500] text-[16px] py-[6px] text-[#000000B2] tracking-[0.592px] leading-[normal]">
              {invoice.pieces}
            </TableCell>
            <TableCell className="font-Poppins font-[500] text-[16px] py-[6px] text-[#000000B2] tracking-[0.592px] leading-[normal]">
              {invoice.prices}
            </TableCell>
            <TableCell className="font-Poppins font-[500] text-[16px] py-[6px] tracking-[0.464px] leading-[23px]">
              <p
                className={`py-[6px] px-[15px] ${
                  invoice.stotus === "Deliverd"
                    ? "bg-[#5BB3ED40] text-[#5BB3ED]"
                    : invoice.stotus === "Panding"
                    ? "bg-[#FCBD2240] text-[#5BB3ED]"
                    : "bg-[#FC222240] text-[#FF2D2D]"
                } w-fit rounded-[5px]`}
              >
                {invoice.stotus}
              </p>
            </TableCell>
            <TableCell className="font-Poppins font-[500] text-[18px] py-[6px] text-[#000000B2] tracking-[0.592px] flex gap-[10px] leading-[normal]">
              <button className="h-[62px]">
                <img src={penIcon} alt="penIcon" />
              </button>
              <button className="h-[62px]">
                <img src={deleteIcon} alt="deleteIcon" />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductsListTable;
