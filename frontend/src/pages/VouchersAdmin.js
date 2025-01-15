import { React, useState } from "react";
import "../index.css";
import VouchersAdminTable from "./VouchersAdminTable";

const VouchersAdmin = () => {
  const [vouchers, setVouchers] = useState([]);

  return (
    <div className="flex justify-center gap-4 mt-14">
      <VouchersAdminTable tableData={vouchers} />
    </div>
  );
};

export default VouchersAdmin;
