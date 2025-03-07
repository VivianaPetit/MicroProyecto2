import React from "react";

function Divider({ text }) {
  return (
    <div className="flex gap-2 items-center mb-8">
      <div className="flex-1 h-px bg-lime-600" />
      <span className="text-sm text-lime-600">{text}</span>
      <div className="flex-1 h-px bg-lime-600" />
    </div>
  );
}

export default Divider;
