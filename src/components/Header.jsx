import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "/metroavila.svg";
import Menu from "../assets/menu-hamburguesa.png";
import { NavBar } from "./NavBar";
import Button from "./Button";

export const Header = () => {
    const navigate = useNavigate(); 

    const handleLoginClick = (route) => {
        navigate(route); 
    };

    return (
        <header className="sticky top-0 z-50 flex h-[76px] bg-[#C5D098] shadow-xl">
            <div className="pl-[32px] pt-2 place-content-center">
                <a href="#">
                    <img src={logo} alt="MetroAvila Logo" className="lg:w-[150px] lg:h-[51px] w-[80px] h-[41px]"/>
                </a>   
            </div>
            <div className="flex place-content-center shadow-xl lg:hidden order-first items-center bg-[#889E19] w-[100px] h-[76px]">
                <img className="w-[40px] h-[40px]" src={Menu} alt="Menu" />
            </div>
            <div className="flex">
                <NavBar className="hidden lg:flex 
            w-[350px] place-content-around text-[16px] 
            items-center font-semibold text-[#1E1E1E]"/>
            </div> 
            <div className="flex ml-auto space-x-4 items-center mr-32">
            <Button
                divClassName=""
                className='bg-[#889E19] hover:bg-[#6E7D14] text-[#F2F5E5] cursor-pointer font-bold h-10 py-2 px-4 rounded-lg hidden lg:flex'
                onClick={() => handleLoginClick("/signup")}
                text="Registrarse"
                type=""
                    />
            <Button
                divClassName=""
                className='bg-[#889E19] hover:bg-[#6E7D14] text-[#F2F5E5] cursor-pointer font-bold h-10 py-2 px-4 rounded-lg hidden lg:flex'
                onClick={() => handleLoginClick("/login")}
                text="Iniciar Sesión"
                type=""
                    />
               
            </div>
            
        </header>
    );
}