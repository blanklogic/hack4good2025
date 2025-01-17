import axios from "axios";
import { useEffect, useState } from "react";
import "../index.css";
import VouchersAdminTable from "./VouchersAdminTable";

const VouchersAdmin = () => {
  const [vouchers, setVouchers] = useState([]);

  useEffect(() => {
    const fetchVouchers = async () => {
      // dummy data
      const mockData = [
        { id: 1, name: "John Doe", amount: 50, status: "Pending" },
        { id: 2, name: "Jane Smith", amount: 75, status: "Approved" },
      ];
      setVouchers(mockData);
    };

    fetchVouchers();
  }, []);

  return (
    <section className="ml-96 pl-24">
      <header className="text-center mt-10">
        <h1 className="text-5xl font-bold">Voucher Requests</h1>
      </header>

      <main className="flex justify-center gap-4 mt-14">
        <VouchersAdminTable tableData={vouchers} />
      </main>
    </section>
  );
};

export default VouchersAdmin;
