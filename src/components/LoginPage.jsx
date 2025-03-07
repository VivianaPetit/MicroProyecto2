"use client";
import React from "react";
import SocialAuthButton from "./SocialAuthButton";
import Divider from "./Divider";
import FormInput from "./FormInput";
import LoginButtons from "./LoginButtons";
import google from "../assets/google.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";


function LoginPage() {
    return (
      <div className='flex flex-col m-8 lg:flex-row items-center lg:items-start gap-8 p-4'>
        <aside className="shrink-0 bg-lime-600 h-[940px] w-[246px] max-md:mb-10 max-md:w-full max-md:h-[200px]" />
        <section className="relative text-2xl lg:w-[600px] w-[560px]"
          data-aos="fade-up" 
          data-aos-duration="1500"
          data-aos-once="true">
          <h1 className="lg:text-[42px] md:text-[32px] text-[28px] font-extrabold mb-5 text-[#889e19] text-center">Inicio de Sesión</h1>
          <h2 className="lg:text-[24px] md:text-[20px] text-[18px] text-center text-black mb-8">Inicia sesión con:</h2>
          <div className="flex justify-center gap-14 mb-8 max-md:flex-col max-md:gap-5 max-md:items-center">
            <SocialAuthButton image={google} altText="Google" />
            <SocialAuthButton image={instagram} altText="Instagram" />
            <SocialAuthButton image={facebook} altText="Facebook" />
          </div>
          <Divider text="ó" />
          <FormInput label="Email" type="email" value="tucorreo@correo.unimet.edu.ve" />
          <FormInput label="Contraseña" type="password" value="• • • • • • • •" />
          <LoginButtons />
        </section>
      </div>
    );
  }
  
  export default LoginPage;
  
