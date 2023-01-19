import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDisplayProfile } from "../../actions";
import Breadcrumb from "../shared/Breadcrumb";

export default function Profile() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(setDisplayProfile(true)), [dispatch]);
  return (
    <div className="content-wrapper" style={{ marginLeft: "0px" }}>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Profile</h1>
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
    </div>
  );
}
