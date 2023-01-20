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
  updateData,
}) {
  if (tableData.length === 0) <div>Data Not Loaded!</div>;
  const [showForm, setShowForm] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const dispatch = useDispatch();
  const bindCreateData = bindActionCreators(createData, dispatch);
  const bindUpdateData = bindActionCreators(updateData, dispatch);

  const handleUpdate = (id, item) => {
    setSelectedItem(item);
    setIsUpdate(true);
    setShowForm(true);
  };

  return (
    <>
      {showForm ? (
        <AddForm
          defaultValues={isUpdate ? selectedItem : defaultValues}
          createData={!isUpdate ? bindCreateData : null}
          setShowForm={setShowForm}
          updateData={isUpdate ? bindUpdateData : null}
          isUpdate={isUpdate}
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
                        return <th key={key}>{key.toUpperCase()}</th>;
                    })}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tableData?.map((row) => (
                  <tr key={row["_id"]}>
                    {Object.keys(row).map((key) => {
                      if (key !== "_id" && key !== "__v" && key !== "image")
                        return <td key={key}>{row[key]}</td>;
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
                      <button
                        className="btn btn-success"
                        onClick={() => handleUpdate(row["_id"], row)}
                      >
                        <span className="fa fa-pen"></span>
                      </button>
                      &nbsp;
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          dispatch(deleteData(row["_id"]));
                          window.location.reload(true);
                        }}
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
