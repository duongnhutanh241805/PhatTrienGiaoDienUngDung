import { React, useEffect, useState } from "react";
import "./DataTable.css";

import EditModal from "../EditModal/EditModal";

import file from "../../img/File text 1.png";
import In from "../../img/Download.png";
import Out from "../../img/Move up.png";

import anh1 from "../../img/Avatar (1).png";
import anh2 from "../../img/Avatar (2).png";
import anh3 from "../../img/Avatar (3).png";
import anh4 from "../../img/Avatar (4).png";
import anh5 from "../../img/Avatar (5).png";
import anh6 from "../../img/Avatar 313.png";
import anh7 from "../../img/Avatar.png";
import Create from "../../img/create.png";
const DataTable = () => {
  const nguoimua = [
    {
      name: "TiTi",
      company: "App",
      value: "$359",
      date: "10/08/2023",
      status: "New",
      anh: anh1,
    },
    {
      name: "ZiZi",
      company: "SmoozeShift",
      value: "$747",
      date: "24/07/2023",
      status: "New",
      anh: anh2,
    },
    {
      name: "UiUi",
      company: "Telecom",
      value: "$564",
      date: "08/08/2023",
      status: "In-progress",
      anh: anh3,
    },
    {
      name: "AiAi",
      company: "Corporation",
      value: "$541",
      date: "31/08/2023",
      status: "In-progress",
      anh: anh4,
    },
  ];

  const [customers, setCustomers] = useState([]);

  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("https://67f4f397913986b16fa27eb8.mockapi.io/customers")
      .then((res) => res.json())
      .then((data) => {
        const avatars = [anh1, anh2, anh3, anh4, anh5, anh6, anh7];
        const merged = data.slice(0, 6).map((item, index) => ({
          ...item,
          anh: avatars[index % avatars.length],
        }));
        setCustomers(merged);
      })
      .catch((error) => console.error("Lỗi gọi API:", error));
  }, []);

  const handleCreate = (customer) => {
    setSelectedCustomer(customer);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCustomer(null);
  };

  return (
    <div>
      <section className="report">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              font: "icon",
              fontSize: "20px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={file} style={{ marginRight: "20px" }} />
            Detailed Report
          </div>

          <div className="btn_style">
            <button>
              <img src={In} />
              Import
            </button>
            <button>
              <img src={Out} />
              Export
            </button>
          </div>
        </div>{" "}
        <br />
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Company</th>
              <th>Order Value</th>
              <th>Order Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c, i) => (
              <tr key={i}>
                <td style={{ display: "flex", alignItems: "center" }}>
                  <img src={c.anh} style={{ marginRight: "10px" }} />
                  {c.name}
                </td>
                <td>{c.company}</td>
                <td>{c.value}</td>
                <td>{c.date}</td>
                <td>
                  <span
                    className={`status ${c.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {c.status}
                  </span>
                </td>
                <td>
                  <button className="iconCreate"  onClick={() => handleCreate(c)}>
                    <img src={Create} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {showModal && (
        <EditModal customer={selectedCustomer} onClose={closeModal} />
      )}
    </div>
  );
};

export default DataTable;
