"use client";
import React from "react";

function Button({divClassName,className, text, type} ) {
  return (
    <div className={divClassName}>
      <button
        className={className}
        type={type}
        aria-label="Inicar Sesión"
      >
        {text}
      </button>
    </div>
  );
}
export default Button;