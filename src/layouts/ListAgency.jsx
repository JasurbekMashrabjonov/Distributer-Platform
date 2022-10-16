import React from "react";

function ListAgency() {
  return (
    <>
      <div className="list-agency ">
        <div className="table2__header">
          <h2 className="table2__title">Agentlar KPI</h2>
        </div>
        <table className="table2">
          <tbody>
            <tr className="table2__tr">
              <th className="table2__th">No</th>
              <th className="table2__th">Nomi</th>
              <th className="table2__th">Raqam</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListAgency;
