import React from "react";

export const Empty = ({ setShowForm }) => {
  return (
    <section className="content" style={{ textAlign: "center" }}>
      <div className="error-content">
        <h3>
          <i
            className="fas fa-exclamation-triangle text-warning"
            style={{ fontSize: "50px" }}
          ></i>
          Oops! No Data Available!
        </h3>
      </div>
      <br />

      <button
        type="button"
        className="btn btn-default btn-sm float-end"
        onClick={() => setShowForm(true)}
      >
        <span className="fa fa-plus"></span> Create New
      </button>
    </section>
  );
};
