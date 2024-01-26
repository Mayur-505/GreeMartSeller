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
import penIcon from "@/assets/Icons/penIcon.svg";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";

interface InvoicesObject {
  id: string;
  customer: string;
  amount: string;
  method: string;
  date: string;
  name: string;
  email: string;
  status: string;
}

const OrderListTable = (props: { invoices: InvoicesObject[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-primary hover:bg-primary">
          <TableHead className="font-Poppins font-[600] uppercase text-[18px] text-[#FFF] tracking-[0.592px] leading-[normal]">
            <Checkbox id="terms" className="border-[#FFF] h-[21px] w-[21px]" />
          </TableHead>
          <TableHead className="font-Poppins font-[600] uppercase text-[18px] text-[#FFF] tracking-[0.592px] leading-[normal]">
            Order ID
          </TableHead>
          <TableHead className="font-Poppins font-[600] uppercase text-[18px] text-[#FFF] tracking-[0.592px] leading-[normal]">
            Customer
          </TableHead>
          <TableHead className="font-Poppins font-[600] uppercase text-[18px] text-[#FFF] tracking-[0.592px] leading-[normal]">
            Amount
          </TableHead>
          <TableHead className="font-Poppins font-[500] uppercase text-[18px] text-[#FFF] tracking-[0.592px] leading-[normal]">
            Payment Method
          </TableHead>
          <TableHead className="font-Poppins font-[600] uppercase text-[18px] text-[#FFF] tracking-[0.592px] leading-[normal]">
            Order Date
          </TableHead>
          <TableHead className="font-Poppins font-[600] uppercase text-[18px] text-[#FFF] tracking-[0.592px] leading-[normal]">
            Status
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props?.invoices?.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-Poppins font-[500] text-[18px] py-[6px] text-[#00000080] tracking-[0.592px] leading-[normal]">
              <Checkbox
                id="terms"
                className="border-[#00000033] h-[21px] w-[21px]"
              />
            </TableCell>
            <TableCell className="font-Poppins font-[500] text-[18px] py-[6px] text-[#00000080] tracking-[0.592px] leading-[normal]">
              {invoice.id}
            </TableCell>
            <TableCell className="font-Poppins font-[500] text-[18px] py-[6px] text-[#00000080] tracking-[0.592px] leading-[normal]">
              {invoice.customer}
            </TableCell>
            <TableCell className="font-Poppins font-[500] text-[18px] py-[6px] text-[#00000080] tracking-[0.592px] leading-[normal]">
              {invoice.amount}
            </TableCell>
            <TableCell className="font-Poppins font-[500] text-[18px] py-[6px] text-[#00000080] tracking-[0.592px] leading-[normal]">
              {invoice.method}
            </TableCell>
            <TableCell className="font-Poppins font-[500] text-[18px] py-[6px] text-[#00000080] tracking-[0.592px] flex gap-[10px] leading-[normal]">
              {invoice.date}
            </TableCell>
            <TableCell className="font-Poppins font-[500] text-[18px] py-[6px] tracking-[0.592px] leading-[normal]">
              <p
                className={`py-[3px] px-[16px] text-[#000000B2] ${
                  invoice.status === "New"
                    ? "bg-[#D1DDF4]"
                    : invoice.status === "Cancelied"
                    ? "bg-[#C9221733]"
                    : invoice.status === "In Progress"
                    ? "bg-[#00C2FF33]"
                    : "bg-[#C9C21733]"
                } w-fit rounded-[5px]`}
              >
                {invoice.status}
              </p>
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

export default OrderListTable;
