import React from "react";
import "./treasury.css";

function Treasury() {
  return (
    <div className="treasury">
      <div className="treasury-l">
        <div className="treasury-title">MEMBERS DETAILS</div>
        <table>
          <thead >
            <tr>
              <th>Year</th>
              <th>Name Of Active Member</th>
              <th>Month</th>
              <th>Member</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <td>2023</td>
              <td>Kalyan</td>
              <td>Jan</td>
              <td>130</td>
            </tr>
            <tr>
              <td>2023</td>
              <td>mitthu</td>
              <td>Feb</td>
              <td>100</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="treasury-r">
        <div className="treasury-title" style={{ color: "pink" }}>
          INCOME DETAILS
        </div>
        <table>
          <thead className="rightHead">
            <tr>
              <th>Year</th>
              <th>Months</th>
              <th>Growth</th>
              <th>Income by month</th>
            </tr>
          </thead>
          <tbody className="rightBody">
            <tr>
              <td>2023</td>
              <td>Jan</td>
              <td>0</td>
              <td>10000</td>
            </tr>
            <tr>
              <td>2023</td>
              <td>Feb</td>
              <td>30</td>

              <td>13000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Treasury;
