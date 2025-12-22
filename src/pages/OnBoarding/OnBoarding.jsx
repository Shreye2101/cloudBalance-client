import React, { useContext } from "react";
import { OnBoardingProvider, OnBoardingContext } from "./context/OnBoardingContext";
import CreateIAMRole from "./CreateIAMRole";
import AddPolicies from "./AddPolicies";
import CreateUserReport from "./CreateUserReport";

export function OnboardingContent() {
 
  const { currentPage } = useContext(OnBoardingContext);

  return (
    <div className="bg-[#f4f7f9] min-h-screen p-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm min-h-[80vh]">
          <div className="p-10 md:p-12">
            
            <div className="mb-10">
              <h1 className="text-xl font-bold text-slate-800">
                {currentPage === 1 && "Create an IAM Role"}
                {currentPage === 2 && "Add Customer Managed Policies"}
                {currentPage === 3 && "Create Cost & Usage Report"}
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                {currentPage === 1 && "Create an IAM Role by following these steps"}
                {currentPage === 2 && "Attach the required permission policies to your newly created role"}
                {currentPage === 3 && "Configure your AWS Billing report by following these steps"}
              </p>
            </div>

            {currentPage === 1 && <CreateIAMRole />}
            {currentPage === 2 && <AddPolicies />}
            {currentPage === 3 && <CreateUserReport />}

          </div>
        </div>

        <div className="mt-4 text-[10px] text-gray-400 ml-2">
          CK AZ 2025 | All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default function Onboarding() {
  return (
    <OnBoardingProvider>
      <OnboardingContent />
    </OnBoardingProvider>
  );
}