import React, { useContext } from 'react';
import StepBadge from './components/StepBadge';
import step5 from './assets/step5.png'; 
import onboarding2 from './assets/onboarding2.png'; 
import onboarding1 from './assets/onboarding1.png'; 
import OnBoardingContext from './context/OnBoardingContext';

const AddPolicies = () => {
  const {onBack,onNext} = useContext(OnBoardingContext)
  return (
    <div className="space-y-12 animate-fadeIn">

      <div className="flex gap-4">
        <StepBadge num={1} />
        <div className="flex-1">
          <p className="text-[15px] text-gray-700 mb-4 pt-1">
            Go to the <a href="#" className="text-blue-600 underline font-medium">CK-Tuner-Role</a>
          </p>
          <div className="bg-[#f4f7f9] p-4 rounded border border-gray-200 inline-block">
            <img src={step5} alt="AWS IAM Summary" className="rounded shadow-sm max-w-full" />
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <StepBadge num={2} />
        <div className="flex-1">
          <p className="text-[15px] text-gray-700 mb-4 pt-1">
            In Permission policies, click on <b>Add permissions {'>'} Attach Policy</b>
          </p>
          <div className="bg-[#f4f7f9] p-4 rounded border border-gray-200">
            <img src={onboarding2} alt="Add Permissions Menu" className="rounded shadow-sm max-w-full" />
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <StepBadge num={3} />
        <div className="flex-1">
          <p className="text-[15px] text-gray-700 mb-4 pt-1 leading-relaxed">
            Filter by Type {'>'} Customer managed then search for 
            <b> cktuner-CostAuditPolicy, cktuner-SecAuditPolicy, cktuner-TunerReadEssentials </b> 
            and select them.
          </p>
          <div className="bg-[#f4f7f9] p-4 rounded border border-gray-200">
            <img src={onboarding1} alt="Filter Results" className="rounded shadow-sm max-w-full" />
          </div>
        </div>
      </div>

      <div className="flex gap-4 pb-10">
        <StepBadge num={4} />
        <div className="flex-1 pt-1">
          <p className="text-[15px] text-gray-700 font-medium">
            Now, click on <b>Add permissions</b>
          </p>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t flex justify-between items-center">
        <button className="px-6 py-2 border border-gray-300 rounded text-gray-600 font-medium hover:bg-gray-50">
          Cancel
        </button>
        <div className="flex gap-3">
          <button 
            onClick={onBack}
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded font-semibold text-sm hover:bg-blue-50 transition-all"
          >
            Back - Create An IAM Role
          </button>
          <button 
            onClick={onNext}
            className="px-8 py-2 bg-[#2b3a67] text-white rounded font-semibold text-sm hover:bg-[#1a2544] transition-all"
          >
            Next - Setup CUR Replication
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPolicies;