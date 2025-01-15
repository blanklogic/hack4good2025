import { React, useState } from "react";
import "../index.css";
import { ToastContainer, toast } from "react-toastify";

const VouchersAdminTable = (props) => {
  let data = props.tableData;
  const [isVisible, setIsVisible] = useState(true);

  let num = 0;
  let notif = "";
  const success = () =>
    toast.success(notif, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const reject = () => toast.error(notif);
  const handleApprove = () => {
    notif = "Voucher Approved!";
    success();
    setIsVisible(false);
  };
  const handleReject = () => {
    notif = "Voucher Rejected!";
    reject();
    setIsVisible(false);
  };

  return (
    <div className="h-full w-auto overflow-y-auto">
      <ToastContainer position="top-right" theme="light" />
      <table>
        <thead>
          <tr>
            <th className="table-header">No.</th>
            <th className="table-header">Voucher Requests</th>
            <th className="table-header">Options</th>
          </tr>
        </thead>
        <tbody>
          <td className="table-data">{num}</td>
          <td className="table-data">{"Food and Beverages"}</td>
          <td className="buttons-dist">
            <button className="approve-button" onClick={() => handleApprove()}>
              Approve
            </button>
            <button className="reject-button" onClick={() => handleReject()}>
              Reject
            </button>
          </td>
        </tbody>
        {/* <tbody>
          {data.map((element, index) => {
            num++;
            return (
              <tr key={index}>
                <td className="table-data">{num}</td>
          <td className="table-data">{element.request}</td>
          <td className="buttons-dist">
            <button className="approve-button">Approve</button>
            <button className="reject-button">Reject</button>
          </td>
              </tr>
            );
          })}
        </tbody> */}
      </table>
    </div>
  );
};

export default VouchersAdminTable;
