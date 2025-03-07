import React from "react";

function FormInput({ label, type, value, onChange, texto}) {
  return (
    <div className="mb-9">
      <input
        type={type}
        defaultValue={value}
        className="p-5 w-full text-3xl text-[#889E19] rounded-3xl border-[#889E19] border-solid bg-[#E8EDD1] border-[3px] max-md:p-5" // Cambios aquí
        aria-label={label}
        onChange={onChange}
        placeholder={texto}
        required
      /> 
    </div>
  );
}

export default FormInput;