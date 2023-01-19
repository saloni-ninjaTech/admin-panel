import React from "react";

export default function Table() {
  return (
    <div className="card-body p-0">
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: 10 }}>#</th>
            <th>Task</th>
            <th>Progress</th>
            <th style={{ width: 40 }}>Label</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>Update software</td>
            <td>
              <div className="progress progress-xs">
                <div
                  className="progress-bar progress-bar-danger"
                  style={{ width: "55%" }}
                />
              </div>
            </td>
            <td>
              <span className="badge bg-danger">55%</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
