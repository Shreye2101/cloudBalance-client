import React from "react";

export const TableHead = ({ columns }) => (
  <thead className="bg-[#0047AB] text-white">
    <tr>
      {columns.map((col) => (
        <th key={col} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider border-r border-blue-400 last:border-0">
          <div className="flex items-center gap-2">
            {col}
            <span className="text-[10px] opacity-70">▼</span>
          </div>
        </th>
      ))}
    </tr>
  </thead>
);