import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface InvoicesObject {
  product?: string;
  orderid?: string;
  location?: string;
  amount?: string;
  status?: string;
}

const RecentOrderTable = (props: { invoices: InvoicesObject[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-Poppins font-[500] text-[20px] text-[#000] tracking-[0.592px] leading-[normal]">
            Product
          </TableHead>
          <TableHead className="font-Poppins font-[500] text-[20px] text-[#000] tracking-[0.592px] leading-[normal]">
            Order ID
          </TableHead>
          <TableHead className="font-Poppins font-[500] text-[20px] text-[#000] tracking-[0.592px] leading-[normal]">
            Location
          </TableHead>
          <TableHead className="font-Poppins font-[500] text-[20px] text-[#000] tracking-[0.592px] leading-[normal]">
            Amount
          </TableHead>
          <TableHead className="font-Poppins font-[500] text-[20px] text-[#000] tracking-[0.592px] leading-[normal]">
            Status
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props?.invoices?.map((invoice) => (
          <TableRow key={invoice.orderid}>
            <TableCell className="font-Poppins font-[500] text-[20px] py-[6px] text-[#00000080] tracking-[0.592px] leading-[normal]">
              {invoice.product}
            </TableCell>
            <TableCell className="font-Poppins font-[500] text-[20px] py-[6px] text-[#00000080] tracking-[0.592px] leading-[normal]">
              {invoice.orderid}
            </TableCell>
            <TableCell className="font-Poppins font-[500] text-[20px] py-[6px] text-[#00000080] tracking-[0.592px] leading-[normal]">
              {invoice.location}
            </TableCell>
            <TableCell className="font-Poppins font-[500] text-[20px] py-[6px] text-[#00000080] tracking-[0.592px] leading-[normal]">
              {invoice.amount}
            </TableCell>
            <TableCell className="font-Poppins font-[500] text-[20px] py-[6px] tracking-[0.592px] leading-[normal]">
              <p
                className={`py-[5px] px-[30px] ${
                  invoice.status === "Deliverd"
                    ? "bg-[#5BB3ED40] text-[#5BB3ED]"
                    : invoice.status === "Panding"
                    ? "bg-[#FCBD2240] text-[#5BB3ED]"
                    : "bg-[#FC222240] text-[#FF2D2D]"
                } w-fit rounded-[5px]`}
              >
                {invoice.status}
              </p>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RecentOrderTable;
