import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayDashboard } from "../../actions";
import Breadcrumb from "../shared/Breadcrumb";
import Table from "../shared/Table";

export default function Dashboard() {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.productReducer);

  useEffect(() => dispatch(setDisplayDashboard(true)), [dispatch]);
  return (
    <div className="content-wrapper" style={{ marginLeft: "0px" }}>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Dashboard</h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <Breadcrumb />
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      <Table tableData={products} />
    </div>
  );
}
