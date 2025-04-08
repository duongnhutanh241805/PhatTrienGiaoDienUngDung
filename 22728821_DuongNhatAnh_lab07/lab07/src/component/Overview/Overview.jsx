import React, { useEffect, useState } from "react";
import "./Overview.css";
import li1 from "../../img/Squares four 1.png";
import shop from "../../img/Button 1509.png";
import dolar from "../../img/Button 1529.png";
import person from "../../img/Button 1530.png";

const Overview = () => {
  const [overview, setOverview] = useState({
    turnover: 0,
    profit: 0,
    newCustomer: 0,
  });

  useEffect(() => {
    fetch("https://67f2bf95ec56ec1a36d4144f.mockapi.io/overview")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setOverview(data[0]);
        }
      })
      .catch((error) => console.error("Loi goi API:", error));
  }, []);

  return (
    <div>
      <section>
        <p
          style={{
            font: "icon",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={li1} style={{ marginRight: "20px" }} />
          <strong>Overview</strong>
        </p>
        <div className="overview">
          <div className="card turnover">
            <div className="noidung">
              <h3>Turnover</h3>
              <p>${overview.turnover.toLocaleString()}</p>
            </div>
            <img src={shop} alt="Turnover" />
          </div>

          <div className="card profit">
            <div className="noidung">
              <h3>Profit</h3>
              <p>${overview.profit.toLocaleString()}</p>
            </div>
            <img src={dolar} alt="Profit" />
          </div>

          <div className="card customers">
            <div className="noidung">
              <h3>New Customers</h3>
              <p>${overview.newCustomer.toLocaleString()}</p>
            </div>
            <img src={person} alt="New Customers" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
