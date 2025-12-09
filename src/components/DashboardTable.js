import React from "react";

export function DashboardTable({ headers, rows, onRowClick }) {
  return (
    <table className="dashboard-table">
      <thead>
        <tr>
          {headers.map((header, idx) => (
            <th key={`${header}-${idx}`}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.length === 0 ? (
          <tr>
            <td colSpan={headers.length} style={{ textAlign: "center" }}>
              No data available.
            </td>
          </tr>
        ) : (
          rows.map((row, i) => (
            <tr
              key={i}
              onClick={onRowClick ? () => onRowClick(row, i) : undefined}
              style={onRowClick ? { cursor: "pointer" } : undefined}
            >
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
