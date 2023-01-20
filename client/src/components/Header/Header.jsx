import React from "react";

import AdminLOGO from "../../_assets/img/AdminLTELogo.png";
import { Link } from "react-router-dom";

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
            <Link to="/" className="brand-link">
              <img
                src={AdminLOGO}
                alt="AdminLTE Logo"
                className="brand-image img-circle elevation-3"
                style={{ opacity: ".8" }}
              />
              <span className="brand-text font-weight-strong text-light">
                Admin Panel
              </span>
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/categories" className="nav-link">
              Categories
            </Link>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Notifications Dropdown Menu */}
          <li className="nav-item dropdown">
            <Link className="nav-link" data-toggle="dropdown" to="/profile">
              <i className="far fa-user" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
