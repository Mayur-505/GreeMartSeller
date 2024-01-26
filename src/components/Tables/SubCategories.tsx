import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import deleteIcon from "@/assets/Icons/deleteIcon.svg";
import categoriesImg from "@/assets/Images/categoriesImg.svg";
import penIcon from "@/assets/Icons/penIcon.svg";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface InvoicesObject {
  categories: string;
  name?: string;
}

const SubCategories = (props: { invoices: InvoicesObject[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-primary hover:bg-primary">
          <TableHead className="font-Poppins font-[600] uppercase text-[18px] text-[#FFF] tracking-[0.592px] leading-[normal]">
            Sub Categories Name
          </TableHead>
          <TableHead className="font-Poppins font-[600] uppercase text-[18px] text-[#FFF] tracking-[0.592px] leading-[normal]">
            Categories
          </TableHead>
          <TableHead className="font-Poppins font-[600] uppercase text-[18px] text-[#FFF] tracking-[0.592px] leading-[normal]">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props?.invoices?.map((invoice, index) => (
          <TableRow key={index}>
            <TableCell className="font-Poppins font-[500] text-[18px] py-[12px] text-[#000000B2] tracking-[0.592px] leading-[normal]">
              <img
                src={categoriesImg}
                alt="categoriesImg"
                className="inline-block"
              />{" "}
              {" " + invoice.name}
            </TableCell>
            <TableCell className="font-Poppins font-[500] text-[18px] py-[12px] text-[#000000B2] tracking-[0.592px] leading-[normal]">
              {invoice.categories}
            </TableCell>
            <TableCell className="font-Poppins font-[500] text-[18px] py-[20px] text-[#000000B2] tracking-[0.592px] flex gap-[10px] leading-[normal]">
              <button className="w-[25px] h-[25px] bg-[#F6F6F6] border-[2px] border-solid border-[#00000033] flex items-center justify-center">
                <img src={penIcon} alt="penIcon" />
              </button>
              <button className="w-[25px] h-[25px] bg-[#F6F6F6] border-[2px] border-solid border-[#00000033] flex items-center justify-center">
                <img src={deleteIcon} alt="deleteIcon" />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className="w-full relative">
        <TableRow className="absolute w-fit top-[30px] right-[20px]">
          <Stack>
            <Pagination count={3} variant="outlined" shape="rounded" />
          </Stack>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default SubCategories;
