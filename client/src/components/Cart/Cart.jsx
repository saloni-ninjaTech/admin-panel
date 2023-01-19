import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDisplayCart } from "../../actions";
import Breadcrumb from "../shared/Breadcrumb";
import Table from "../shared/Table";

export default function Cart() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(setDisplayCart(true)), [dispatch]);
  return (
    <div className="content-wrapper" style={{ marginLeft: "0px" }}>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Cart</h1>
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
      <Table />
    </div>
  );
}
