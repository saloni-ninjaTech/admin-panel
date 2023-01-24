import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout, setDisplayProfile } from "../../actions";
import Breadcrumb from "../shared/Breadcrumb";
import UserImg from "../../_assets/img/UserImg.jpg";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profileUser } = useSelector((state) => state.userReducer);
  useEffect(() => {
    if (localStorage.getItem("profile")) {
      const id = JSON.parse(localStorage.getItem("profile")).data._id;
      dispatch(getUser(id));
      dispatch(setDisplayProfile(true));
    }
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
                    {profileUser.name}
                  </h3>
                  <p className="text-muted text-center">Software Engineer</p>
                  <ul className="list-group list-group-unbordered mb-3">
                    <li className="list-group-item">
                      <b>Contact Number:</b>{" "}
                      <a className="float-right">{profileUser.phone}</a>
                    </li>
                    <li className="list-group-item">
                      <b>Email:</b>{" "}
                      <a className="float-right">{profileUser.email}</a>
                    </li>
                  </ul>
                  <button className="btn btn-primary btn-block">
                    <b>Change Password</b>
                  </button>
                  <button
                    className="btn btn-danger btn-block"
                    type="button"
                    onClick={() => {
                      dispatch(logout());
                      navigate("/");
                    }}
                  >
                    <b>Logout</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </div>
    </div>
  );
}
