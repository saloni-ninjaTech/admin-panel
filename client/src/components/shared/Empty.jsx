import React from "react";

export const Empty = ({ setShowForm, showButton }) => {
  return (
    <div className="content-wrapper" style={{ marginLeft: "0px" }}>
      <div className="content-header">
        <div className="container-fluid">
          <section className="content" style={{ textAlign: "center" }}>
            <div className="error-content">
              <h3>
                <i
                  className="fas fa-exclamation-triangle text-warning"
                  style={{ fontSize: "50px" }}
                ></i>
                {showButton
                  ? "Oops! No Data Available!"
                  : "404! Page Not Available"}
              </h3>
            </div>
            <br />
            {showButton && (
              <button
                type="button"
                className="btn btn-default btn-sm float-end"
                onClick={() => setShowForm(true)}
              >
                <span className="fa fa-plus"></span> Create New
              </button>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};
