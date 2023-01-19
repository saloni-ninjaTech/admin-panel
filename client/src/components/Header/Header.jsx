import React from "react";

import AdminLOGO from "../../_assets/img/AdminLTELogo.png";

export default function Header() {
  return (
    <div>
      <nav
        className="main-header navbar navbar-expand navbar-dark"
        style={{ marginLeft: "unset" }}
      >
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="brand-link">
              <img
                src={AdminLOGO}
                alt="AdminLTE Logo"
                className="brand-image img-circle elevation-3"
                style={{ opacity: ".8" }}
              />
              <span className="brand-text font-weight-strong text-light">
                Admin Panel
              </span>
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">
              Cart
            </a>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Notifications Dropdown Menu */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="far fa-user" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
