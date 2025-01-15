import { React, useState } from "react";
import "../index.css";
import VouchersAdminTable from "./VouchersAdminTable";

const VouchersAdmin = () => {
  const [vouchers, setVouchers] = useState([]);

  return (
    <div>
      <h1 className="flex text-5xl font-bold justify-center mt-10">
        Voucher Requests
      </h1>
      <div className="flex justify-center gap-4 mt-14">
        <VouchersAdminTable tableData={vouchers} />
      </div>
    </div>
  );
};

export default VouchersAdmin;
