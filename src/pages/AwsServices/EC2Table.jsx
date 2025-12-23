import React from 'react';
import { TableHead } from './components/ServiceTable';
import { EC2_DATA } from './data/ServiceData';

export default function EC2Table({ data }) {
  const columns = ["Account ID", "Resource ID", "Resource Name", "Region", "Status", "Potential Savings", "Enable Scheduler"];

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <TableHead columns={columns} />
      <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
        {data.map((row) => (
          <tr key={row.resourceId} className="hover:bg-gray-50">
            <td className="px-4 py-3">{row.accountId}</td>
            <td className="px-4 py-3 text-blue-600 cursor-pointer">{row.resourceId}</td>
            <td className="px-4 py-3">{row.name}</td>
            <td className="px-4 py-3">{row.region}</td>
            <td className={`px-4 py-3 font-bold ${row.status === 'RUNNING' ? 'text-green-600' : 'text-red-500'}`}>
              {row.status}
            </td>
            <td className="px-4 py-3">{row.savings}</td>
            <td className="px-4 py-3 text-center">
              <input type="checkbox" className="w-8 h-4 bg-gray-200 rounded-full appearance-none checked:bg-blue-600 cursor-pointer transition-all" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );}