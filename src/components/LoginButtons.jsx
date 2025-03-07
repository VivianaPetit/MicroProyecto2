"use client";
import React from "react";

function LoginButtons() {
  return (
    <div className="items-center text-center mt-10"
      data-aos="fade-up" 
      data-aos-duration="1500"
      data-aos-once="true">
      <button
        className="bg-[#889e19] text-white font-extrabold rounded-3xl lg:w-[286px] lg:h-[68px] md:w-[246px] md:h-[58px] w-[216px] h-[45px]"
        aria-label="Iniciar Sesión"
      >
        Iniciar Sesión
      </button>
      <p className="mt-5 lg:text-[16px] md:text-[15px] text-[14px] text-black">
        Aún no tienes cuenta? 
        <a href="#" className="font-bold text-[#FF7E00] ml-2" aria-label="Registrate">
          Registrate
        </a>
      </p>
      <p className="mt-5 lg:text-[16px] md:text-[15px] text-[14px] text-[#889e19]">ó</p>
      <button
        className="bg-[#889e19] text-white font-extrabold rounded-3xl lg:w-[286px] lg:h-[68px] md:w-[246px] md:h-[58px] w-[216px] h-[45px] mt-5"
        aria-label="Iniciar Sesión Como Administrador"
      >
        Iniciar Sesión Como Administrador
      </button>
    </div>
  );
}
export default LoginButtons;