import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import * as XLSX from "xlsx";

const GenerateReportButton = () => {
  const { idToken } = useContext(AuthContext);
  const API_URL = "http://localhost:5000/api/admins/generate-report"; // Replace with your API endpoint

  const handleGenerateReport = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to generate report: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Generated Report:", data);

      const productRequestsSheet = XLSX.utils.json_to_sheet(data.productRequests);
      const productInventorySheet = XLSX.utils.json_to_sheet(data.productInventory);

      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, productRequestsSheet, "Product Requests");
      XLSX.utils.book_append_sheet(workbook, productInventorySheet, "Product Inventory");

      const excelData = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
      const blob = new Blob([excelData], { type: "application/octet-stream" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "report.xlsx");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error generating report:", error.message);
    }
  };

  return (
    <button
      onClick={handleGenerateReport}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
    >
      Generate Report
    </button>
  );
};

export default GenerateReportButton;
