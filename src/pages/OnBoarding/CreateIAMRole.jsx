import React, { useContext } from 'react';
import CopyTextarea from './components/CopyTextarea';
import StepBadge from './components/StepBadge';
import step5Image from './assets/step5.png'; 
import TRUST_POLICY from './data/TrustPolicy';
import {OnBoardingContext} from './context/OnBoardingContext';

const CreateIAMRole = () =>{
  const {roleArn,setRoleArn,handleNext,isArnValid} = useContext(OnBoardingContext)
  const roleName = 'CK-Tuner-Role-dev2';

  return (
    <div className="space-y-10 animate-fadeIn">
      <div className="flex gap-4">
        <StepBadge num={1} />
        <p className="text-[15px] pt-0.5 text-gray-700">
          Log into AWS account & <a href="#" className="text-blue-600 underline">Create an IAM Role.</a>
        </p>
      </div>

      <div className="flex gap-4">
        <StepBadge num={2} />
        <div className="flex-1">
          <p className="text-[15px] mb-4 text-gray-700 leading-relaxed">
            Select <b>Custom trust policy</b> and replace the content with:
          </p>
          <CopyTextarea value={JSON.stringify(TRUST_POLICY, null, 2)} />
        </div>
      </div>

      <div className="flex gap-4">
        <StepBadge num={4} />
        <div className="flex-1">
          <p className="text-[15px] mb-4 text-gray-700">Enter this <b>Role name</b> and click Create Role:</p>
          <div className="flex items-center justify-between bg-gray-50 border rounded p-3 max-w-sm">
            <span className="text-sm font-medium">{roleName}</span>
            <button 
              onClick={() => navigator.clipboard.writeText(roleName)} 
              className="text-blue-500 font-bold hover:text-blue-700"
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <StepBadge num={5} />
        <div className="flex-1">
          <p className="text-[15px] mb-4 text-gray-700">Copy the <b>Role ARN</b> from the IAM console:</p>
          <img src={step5Image} alt="ARN Reference" className="border rounded shadow-sm max-w-full" />
        </div>
      </div>

      <div className="flex gap-4">
        <StepBadge num={6} />
        <div className="flex-1">
          <p className="text-[15px] font-bold text-gray-800 mb-4">Paste the copied Role ARN below -</p>
          <div className="max-w-md">
            <label className="text-[10px] font-bold text-gray-400 uppercase mb-1 block">
              Enter the IAM Role ARN <span className="text-red-500">*</span>
            </label>
            <input 
              type="text"
              value={roleArn}
              onChange={(e) => setRoleArn(e.target.value)}
              className={`w-full p-2.5 border rounded outline-none transition-all ${
                !isArnValid && roleArn ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
              }`}
              placeholder="arn:aws:iam::..." 
            />
            {!isArnValid && roleArn && (
              <p className="text-red-500 text-[10px] mt-1">Please enter a valid AWS ARN</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t flex justify-between items-center">
        <button className="px-6 py-2 border rounded text-gray-500 hover:bg-gray-50 font-medium">Cancel</button>
        <button 
          onClick={handleNext}
          disabled={!isArnValid}
          className={`px-8 py-2 rounded font-semibold text-sm transition-all ${
            isArnValid ? 'bg-[#2b3a67] text-white hover:bg-[#1a2544]' : 'bg-[#a3b1d1] text-white cursor-not-allowed'
          }`}
        >
          Next - Add Customer Managed Policies
        </button>
      </div>
    </div>
  );
}

export default CreateIAMRole;