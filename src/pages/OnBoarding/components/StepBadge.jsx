import React from "react";

export default function StepBadge({ num }) {
  return (
    <div className="w-6 h-6 flex-none rounded-full bg-[#e8f0fe] text-[#1a73e8] flex items-center justify-center text-[11px] font-black mt-1">
      {num}
    </div>
  );
}