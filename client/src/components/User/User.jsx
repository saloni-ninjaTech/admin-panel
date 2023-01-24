import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayUser } from "../../actions/sharedAction";
import {
  getUsers,
  updateUsers,
  createUsers,
  deleteUsers,
} from "../../actions/usersAction";
import { DEFAULT_VALUES_USER_FORM } from "../../_helpers/constants";
import Breadcrumb from "../shared/Breadcrumb";
import Table from "../shared/Table";

export default function User() {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(setDisplayUser(true));
  }, [dispatch]);

  return (
    <div className="content-wrapper" style={{ marginLeft: "0px" }}>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Users</h1>
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
      <Table
        tableData={users}
        defaultValues={DEFAULT_VALUES_USER_FORM}
        createData={createUsers}
        deleteData={deleteUsers}
        updateData={updateUsers}
      />
    </div>
  );
}
