import React from "react";

function Table() {
  return (
    <>
      <div className="table">
        <div className="table__head">
          <h1 className="table__title">Bir oylik savdo agentlari bo'yicha</h1>
        </div>
        <table className="table__table">
          <tbody>
            <tr className="table__tr">
              <th className="table__th">No</th>
              <th className="table__th">F.I.SH</th>
              <th className="table__th">Kunlik buyurtma</th>
              <th className="table__th">Summa</th>
              <th className="table__th">Plan</th>
              <th className="table__th">Plan</th>
            </tr>
            <tr className="table__tr">
              <td className="table__td table__tr-num">1</td>
              <td className="table__td"></td>
              <td className="table__td"></td>
              <td className="table__td"></td>
              <td className="table__td"></td>
              <td className="table__td"></td>
            </tr>
            <tr className="table__tr">
              <td className="table__td table__tr-num">2</td>
              <td className="table__td"></td>
              <td className="table__td"></td>
              <td className="table__td"></td>
              <td className="table__td"></td>
              <td className="table__td"></td>
            </tr>
            <tr className="table__tr">
              <td className="table__td table__tr-num">3</td>
              <td className="table__td"></td>
              <td className="table__td"></td>
              <td className="table__td"></td>
              <td className="table__td"></td>
              <td className="table__td"></td>
            </tr>
            <tr className="table__tr">
              <td className="table__td table__tr-num">4</td>
              <td className="table__td"></td>
              <td className="table__td"></td>
              <td className="table__td"></td>
              <td className="table__td"></td>
              <td className="table__td"></td>
            </tr>
            <tr className="table__tr">
              <td className="table__td table__tr-num">Jami:</td>
              <td className="table__td"></td>
              <td className="table__td"></td>
              <td className="table__td"></td>
              <td className="table__td"></td>
              <td className="table__td"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Table;
