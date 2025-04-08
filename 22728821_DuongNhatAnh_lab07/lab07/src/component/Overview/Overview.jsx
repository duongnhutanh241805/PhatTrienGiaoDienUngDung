import React from "react";
import "./Overview.css";
import li1 from "../../img/Squares four 1.png";
import shop from "../../img/Button 1509.png";
import dolar from "../../img/Button 1529.png";
import person from "../../img/Button 1530.png";
const Overview = () => {
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
              <p>$92,405</p>
            </div>
            <img src={shop} />
          </div>

          <div className="card profit">
            <div className="noidung">
              <h3>Profit</h3>
              <p>$32,218</p>
            </div>
            <img src={dolar} />
          </div>

          <div className="card customers">
            <div className="noidung">
              <h3>New Customers</h3>
              <p>298</p>
            </div>
            <img src={person} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
