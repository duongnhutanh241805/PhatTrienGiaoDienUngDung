import React from "react";
import "./DataTable.css";
import file from "../../img/File text 1.png";
import In from "../../img/Download.png";
import Out from "../../img/Move up.png";
const DataTable = () => {
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
            {/* Dữ liệu giả mẫu */}
            <tr>
              <td>Elizabeth Lee</td>
              <td>AvatarSystems</td>
              <td>$359</td>
              <td>10/07/2023</td>
              <td>
                <span className="status new">New</span>
              </td>
            </tr>
            <tr>
              <td>Carlos Garcia</td>
              <td>SmoozeShift</td>
              <td>$747</td>
              <td>24/07/2023</td>
              <td>
                <span className="status completed">Completed</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default DataTable;
