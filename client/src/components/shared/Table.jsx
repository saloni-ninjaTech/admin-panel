import React from "react";

export default function Table({ tableData }) {
  if (tableData.length === 0) <div>Data Not Loaded!</div>;
  return (
    <div className="card-body p-0">
      <table className="table">
        <thead>
          <tr>
            {tableData &&
              tableData.length > 0 &&
              Object.keys(tableData[0]).map((key) => {
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
                <button className="btn btn-success">
                  <span className="fa fa-pen"></span>
                </button>
                &nbsp;
                <button className="btn btn-danger">
                  <span className="fa fa-trash"></span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
