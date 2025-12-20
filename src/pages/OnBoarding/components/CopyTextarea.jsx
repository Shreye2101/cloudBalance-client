import React from 'react';
export default function CopyTextarea({ value }) {
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(value);
    alert('Copied ');
  };

  return (
    <div className="relative">
      <textarea
        readOnly
        value={value}
        className="w-full h-64 p-4 text-sm font-mono border rounded-md bg-gray-50 resize-none"

      />
      <button
        onClick={copyToClipboard}
        className="absolute top-3 right-3 text-xs px-3 py-1 rounded bg-white border hover:bg-gray-100"
      >
        Copy
      </button>
    </div>
  );
}
