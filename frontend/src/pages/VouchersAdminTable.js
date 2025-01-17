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
            <th className="table-header">Requested User</th>
            <th className="table-header">Amount</th>
            <th className="table-header">Status</th>
            <th className="table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => (
            <tr key={index}>
              <td className="table-data">{index + 1}</td>
              <td className="table-data">{element.name}</td>
              <td className="table-data">${element.amount}</td>
              <td className="table-data">{element.status}</td>
              <td className="buttons-dist">
                <button className="approve-button" onClick={() => handleApprove(element.id)}>
                  Approve
                </button>
                <button className="reject-button" onClick={() => handleReject(element.id)}>
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VouchersAdminTable;
