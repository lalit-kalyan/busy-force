import React, { useEffect, useState } from "react";
import "./treasury.css";
import { privateRequest } from "../../requestMethods";
import Moment from "react-moment";

function Treasury() {
  const [treasury, getTreasury] = useState(null);

  const everyMonthIncome = async () => {
    try {
       await privateRequest.post("/treasury");
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    everyMonthIncome();
    const getTreasuryData = async () => {
      try {
        const res = await privateRequest.get("/treasury/all");
        getTreasury(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getTreasuryData();
  }, [treasury]);

  return (
    <div className="treasury">
      <div className="treasury-l">
        <div className="treasury-title">MEMBERS DETAILS</div>
        <table>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Current Date</th>

              <th>Member</th>
              <th>Total Income</th>
            </tr>
          </thead>
          <tbody>
            {treasury?.map((t, i) => (
              <tr key={t._id}>
                <td>{i + 1}</td>
                <td>
                  <Moment format="YYYY-MM">{t.activeMonth}</Moment>
                </td>
                <td>{t.activeNo}</td>
                <td>{t.totalIncome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Treasury;
