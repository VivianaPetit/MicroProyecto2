import React from "react";

function FormInput({ label, type, value }) {
  return (
    <div className="mb-9">
      <label className="mb-4 text-4xl font-black text-lime-600">{label}</label>
      <input
        type={type}
        defaultValue={value}
        className="p-9 w-full text-3xl text-lime-600 rounded-3xl border-lime-600 border-solid bg-lime-600 bg-opacity-10 border-[3px] max-md:p-5"
        aria-label={label}
      />
    </div>
  );
}

export default FormInput;
