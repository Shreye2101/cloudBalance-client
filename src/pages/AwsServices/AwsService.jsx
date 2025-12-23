import React, { useState } from 'react';
import { EC2_DATA, RDS_DATA, ASG_DATA } from './data/ServiceData';
import EC2Table from './EC2Table';
import RDSTable from './RDSTable';
import ASGTable from './ASGTable';

export default function AWsServices() {
  const [activeTab, setActiveTab] = useState('EC2');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModule, setSelectedModule] = useState('MAV CK-All');

  const tabs = ['EC2', 'RDS', 'ASG'];

  const filterData = (data) => {
    return data.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.resourceId.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Scheduler</h1>
 
        <div className="flex items-center gap-3 bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-sm">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Module</span>
          <select 
            value={selectedModule}
            onChange={(e) => setSelectedModule(e.target.value)}
            className="text-sm font-semibold text-gray-700 outline-none bg-transparent cursor-pointer"
          >
            <option>MAV CK-All</option>
            <option>Production Environment</option>
            <option>Staging Environment</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">

        <div className="flex justify-between items-center border-b border-gray-100 px-6 py-4 bg-white">
          <div className="flex bg-gray-100 p-1 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-1.5 rounded-md text-sm font-bold transition-all ${
                  activeTab === tab 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-72">
            <span className="absolute left-3 top-2.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search by ID or Name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:border-blue-500 outline-none transition-all placeholder:text-gray-300"
            />
          </div>
        </div>


        <div className="overflow-x-auto">
          {activeTab === 'EC2' && <EC2Table data={filterData(EC2_DATA)} />}
          {activeTab === 'RDS' && <RDSTable data={filterData(RDS_DATA)} />}
          {activeTab === 'ASG' && <ASGTable data={filterData(ASG_DATA)} />}
        </div>
      </div>
    </div>
  );
}