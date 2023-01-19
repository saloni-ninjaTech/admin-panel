import React from "react";

export default function Table({ tableData }) {
  console.log("data:", tableData);
  if (tableData.length === 0) <div>Data Loaded!</div>;
  return (
    <div className="card-body p-0">
      <table className="table">
        <thead>
          <tr>
            {tableData &&
              tableData.length > 0 &&
              Object.keys(tableData[0]).map((key) => {
                console.log("key:", key);
                if (key !== "_id" && key !== "__v")
                  return <th>{key.toUpperCase()}</th>;
              })}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((row) => (
            <tr>
              {Object.keys(row).map((key) => {
                if (key !== "_id" && key !== "__v" && key !== "image")
                  return <td>{row[key]}</td>;
                if (key === "image")
                  return (
                    <td>
                      <img
                        src={row[key]}
                        alt="N/A"
                        height="50px"
                        width="50px"
                      ></img>
                    </td>
                  );
              })}

              <td>
                <button className="fa fa-trash"></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
