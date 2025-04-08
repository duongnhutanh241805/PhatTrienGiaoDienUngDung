import React from "react";
import "./DataTable.css";
import file from "../../img/File text 1.png";
import In from "../../img/Download.png";
import Out from "../../img/Move up.png";
const DataTable = () => {
  const customers = [
    {
      name: "TiTi",
      company: "App",
      value: "$359",
      date: "10/08/2023",
      status: "New",
    },
    {
      name: "ZiZi",
      company: "SmoozeShift",
      value: "$747",
      date: "24/07/2023",
      status: "New",
    },
    {
      name: "UiUi",
      company: "Telecom",
      value: "$564",
      date: "08/08/2023",
      status: "In-progress",
    },
    {
      name: "AiAi",
      company: "Corporation",
      value: "$541",
      date: "31/08/2023",
      status: "In-progress",
    },
  ];

  return (
    <div>
      <section className="report">
        <p
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
        </p>
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Company</th>
              <th>Order Value</th>
              <th>Order Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c, i) => (
              <tr key={i}>
                <td>{c.name}</td>
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
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default DataTable;
