import React from "react";
import logo from "/metroavila.svg";
import { NavBar } from "./NavBar";

export const Header = () => {
    return (
        <header className=" flex h-[96px] bg-[#C5D098] rounded-bl-[8px] rounded-br-[8px]">
            <div className="pl-[32px] pt-2">
                <a href="#">
                    <img src={logo} alt="MetroAvila Logo" className="w-[180px] h-[81px]"/>
                </a>   
            </div>
            <div className="flex">
                <NavBar />
            </div>
            <div className="flex ml-auto space-x-4 items-center mr-32">
                <button className='bg-[#889E19] font-bold h-10 py-2 px-4 rounded-lg hidden lg:flex'>
                    Registrarse
                </button>
                <button className='bg-[#889E19] font-bold h-10 py-2 px-4 rounded-lg hidden lg:flex'>
                    Iniciar Sesión
                </button>
            </div>
        </header>
    );

}
