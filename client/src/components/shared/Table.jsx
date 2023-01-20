import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import AddForm from "./AddForm";

export default function Table({
  tableData,
  defaultValues,
  createData,
  deleteData,
}) {
  if (tableData.length === 0) <div>Data Not Loaded!</div>;
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const bindCreateData = bindActionCreators(createData, dispatch);
  return (
    <>
      {showForm ? (
        <AddForm
          defaultValues={defaultValues}
          createData={bindCreateData}
          setShowForm={setShowForm}
        />
      ) : (
        <>
          <button
            type="button"
            className="btn btn-primary btn-md float-end"
            onClick={() => setShowForm(true)}
          >
            <span className="fa fa-plus"></span> Create New
          </button>
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
                      <button
                        className="btn btn-danger"
                        onClick={() => dispatch(deleteData(row["_id"]))}
                      >
                        <span className="fa fa-trash"></span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}
