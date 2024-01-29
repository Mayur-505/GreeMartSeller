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

interface InvoicesObject {
  id?: string;
  joiningdate?: string;
  name?: string;
  email?: string;
  status?: string;
}

const CustomersTable = (props: { invoices: InvoicesObject[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-primary hover:bg-primary">
          <TableHead className="font-Poppins font-[600] uppercase text-[18px] text-[#FFF] tracking-[0.592px] leading-[normal]">
            ID
          </TableHead>
          <TableHead className="font-Poppins font-[600] uppercase text-[18px] text-[#FFF] tracking-[0.592px] leading-[normal]">
            Joining Date
          </TableHead>
          <TableHead className="font-Poppins font-[600] uppercase text-[18px] text-[#FFF] tracking-[0.592px] leading-[normal]">
            NAME
          </TableHead>
          <TableHead className="font-Poppins font-[500] uppercase text-[18px] text-[#FFF] tracking-[0.592px] leading-[normal]">
            EMAIL
          </TableHead>
          <TableHead className="font-Poppins font-[600] uppercase text-[18px] text-[#FFF] tracking-[0.592px] leading-[normal]">
            Status
          </TableHead>
          <TableHead className="font-Poppins font-[600] uppercase text-[18px] text-[#FFF] tracking-[0.592px] leading-[normal]">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props?.invoices?.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-Poppins font-[500] text-[18px] py-[6px] text-[#00000080] tracking-[0.592px] leading-[normal]">
              {invoice.id}
            </TableCell>
            <TableCell className="font-Poppins font-[500] text-[18px] py-[6px] text-[#00000080] tracking-[0.592px] leading-[normal]">
              {invoice.joiningdate}
            </TableCell>
            <TableCell className="font-Poppins font-[500] text-[18px] py-[6px] text-[#00000080] tracking-[0.592px] leading-[normal]">
              {invoice.name}
            </TableCell>
            <TableCell className="font-Poppins font-[500] text-[18px] py-[6px] text-[#00000080] tracking-[0.592px] leading-[normal]">
              {invoice.email}
            </TableCell>
            <TableCell className="font-Poppins font-[500] text-[18px] py-[6px] tracking-[0.592px] leading-[normal]">
              <p
                className={`py-[3px] px-[16px] text-[#000000B2] rounded-[5px] ${
                  invoice.status === "Active"
                    ? "bg-[#F4F3D1]"
                    : invoice.status === "Passive"
                    ? "bg-[#E7D1F4]"
                    : "bg-[#FC222240]"
                } w-fit rounded-[5px]`}
              >
                {invoice.status}
              </p>
            </TableCell>
            <TableCell className="font-Poppins font-[500] text-[18px] py-[6px] text-[#00000080] tracking-[0.592px] flex gap-[10px] leading-[normal]">
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

export default CustomersTable;
