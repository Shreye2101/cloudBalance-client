import React from 'react';
import StepBadge from './components/StepBadge';
import cur1 from '../../assets/CUR1.png'; 
import cur2 from '../../assets/CUR2.png';
import cur3 from '../../assets/CUR3.png';

export default function CreateUserReport({ onBack, onSubmit }) {
  const reportName = "ck-tuner-275595855473-hourly-cur";
  const pathPrefix = "275595855473";

  return (
    <div className="space-y-12 animate-fadeIn">

      <div className="flex gap-4">
        <StepBadge num={1} />
        <p className="text-[15px] text-gray-700 pt-1">
          Go to <a href="#" className="text-blue-600 underline font-medium">Cost and Usage Reports</a> in the Billing Dashboard and click on <b>Create report</b>.
        </p>
      </div>

      <div className="flex gap-4">
        <StepBadge num={2} />
        <div className="flex-1">
          <p className="text-[15px] text-gray-700 mb-4 pt-1">
            Name the report as shown below and select the <b>Include resource IDs</b> checkbox -
          </p>
          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded p-2 pl-4 max-w-sm mb-4">
            <span className="text-sm font-medium text-gray-700 flex-1">{reportName}</span>
            <button onClick={() => navigator.clipboard.writeText(reportName)} className="text-blue-500 font-bold p-1">Copy</button>
          </div>
          <img src={cur1} alt="Report details" className="border rounded shadow-sm max-w-full" />
        </div>
      </div>

      <div className="flex gap-4">
        <StepBadge num={3} />
        <div className="flex-1">
          <p className="text-[15px] text-gray-700 mb-4 pt-1">
            In <b>Configure S3 Bucket</b>, provide the name of the S3 bucket that was created. Click on <b>Save</b>.
          </p>
          <img src={cur2} alt="S3 Configuration" className="border rounded shadow-sm max-w-full" />
        </div>
      </div>

      <div className="flex gap-4">
        <StepBadge num={4} />
        <div className="flex-1 text-[15px] text-gray-700">
          <p className="mb-4 pt-1">In the <b>Delivery options</b> section, enter the below-mentioned Report path prefix -</p>
          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded p-2 pl-4 max-w-sm mb-4">
            <span className="text-sm font-medium text-gray-700 flex-1">{pathPrefix}</span>
            <button onClick={() => navigator.clipboard.writeText(pathPrefix)} className="text-blue-500 font-bold p-1">Copy</button>
          </div>
          <p className="mb-4">Ensure <b>Time granularity: Hourly</b> and <b>Amazon Athena</b> are selected.</p>
          <img src={cur3} alt="Data Integration" className="border rounded shadow-sm max-w-full" />
        </div>
      </div>

      <div className="flex gap-4 pb-10">
        <StepBadge num={5} />
        <p className="text-[15px] text-gray-700 pt-1 leading-relaxed">
          Click on <b>Next</b>. Now, review the configuration of the Cost and Usage Report. Once satisfied, click on <b>Create Report</b>.
        </p>
      </div>

      <div className="mt-16 pt-8 border-t flex justify-between items-center">
        <button className="px-6 py-2 border border-gray-300 rounded text-gray-600 font-medium">Cancel</button>
        <div className="flex gap-3">
          <button 
            onClick={onBack}
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded font-semibold text-sm hover:bg-blue-50 transition-all"
          >
            Back - Setup CUR Replication
          </button>
          <button 
            onClick={onSubmit}
            className="px-8 py-2 bg-[#2b3a67] text-white rounded font-semibold text-sm hover:bg-[#1a2544] transition-all shadow-md"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}