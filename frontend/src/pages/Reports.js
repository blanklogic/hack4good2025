import React from "react";
import "../index.css";
import GenerateReportButton from "../components/GenerateReportButton";

const Reports = () => {
  return (
    <div className="mt-14 ml-96 pl-24">
      <div className="ml-12">
        <h1 className="text-5xl font-bold mb-8">Reports</h1>
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
          <p className="text-gray-700 text-lg mb-6">
            Generate detailed reports on product requests and inventory. 
            Click the button below to download the latest report as an Excel file.
          </p>
          <div className="flex justify-center">
            <GenerateReportButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
