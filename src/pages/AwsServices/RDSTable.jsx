import React from 'react';
import { TableHead } from './components/ServiceTable';

export default function RDSTable({ data }) {
  const columns = ["Resource ID", "Resource Name", "Engine", "Region", "Status"];

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <TableHead columns={columns} />
      <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
        {data.length > 0 ? (
          data.map((row) => (
            <tr key={row.resourceId} className="hover:bg-gray-50">
              <td className="px-4 py-3 text-blue-600 underline truncate max-w-xs" title={row.resourceId}>
                {row.resourceId}
              </td>
              <td className="px-4 py-3 font-medium">{row.name}</td>
              <td className="px-4 py-3">{row.engine}</td>
              <td className="px-4 py-3">{row.region}</td>
              <td className={`px-4 py-3 font-bold ${row.status === 'RUNNING' ? 'text-green-600' : 'text-red-500'}`}>
                {row.status}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length} className="px-4 py-10 text-center text-gray-400">
              No RDS instances found matching your search.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}