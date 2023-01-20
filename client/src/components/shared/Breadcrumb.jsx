import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Breadcrumb() {
  const { displayDashboard, displayCategories, displayProfile } = useSelector(
    (state) => state.sharedReducer
  );

  return (
    <ol className="breadcrumb float-sm-right">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      {/* TODO: add if loaded condition */}
      {displayDashboard && (
        <li className="breadcrumb-item active">Dashboard</li>
      )}
      {displayCategories && (
        <li className="breadcrumb-item active">Categories</li>
      )}
      {displayProfile && <li className="breadcrumb-item active">Profile</li>}
    </ol>
  );
}
