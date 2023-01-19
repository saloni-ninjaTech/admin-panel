import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, setDisplayProfile } from "../../actions";
import Breadcrumb from "../shared/Breadcrumb";
import UserImg from "../../_assets/img/UserImg.jpg";

export default function Profile() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);
  useEffect(() => {
    dispatch(setDisplayProfile(true));
    dispatch(getUsers());
  }, [dispatch]);
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
          <div classname="row">
            <div classname="col-md-6">
              {users.map((user) => (
                <div className="card card-primary card-outline">
                  <div className="card-body box-profile">
                    <div className="text-center">
                      <img
                        className="profile-user-img img-fluid img-circle"
                        src={UserImg}
                        alt="User profile"
                      />
                    </div>
                    <h3 className="profile-username text-center">
                      {user.name}
                    </h3>
                    <p className="text-muted text-center">Software Engineer</p>
                    <ul className="list-group list-group-unbordered mb-3">
                      <li className="list-group-item">
                        <b>Contact Number:</b>{" "}
                        <a className="float-right">{user.phone}</a>
                      </li>
                      <li className="list-group-item">
                        <b>Email:</b>{" "}
                        <a className="float-right">{user.email}</a>
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-block">
                      <b>Change Password</b>
                    </button>
                    <button className="btn btn-danger btn-block">
                      <b>Logout</b>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </div>
    </div>
  );
}
