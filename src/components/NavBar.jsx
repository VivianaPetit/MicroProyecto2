import React from "react";
import Lupa from "../assets/search-icon.png";
import Menu from "../assets/menu-hamburguesa.png";

export const NavBar = ({estilo}) => {
    return (
        <>
        <div className="ml-5 flex items-center">
            <img className = "h-6 cursor-pointer lg:m-2 ml-auto" src={Lupa} alt="Buscar" />
        </div>
        <ul className="hidden lg:flex 
            w-[350px] place-content-around text-[20px] 
            items-center font-semibold text-[#1E1E1E]">
            <li>
                <a href="#">Destinos</a>
            </li>
            <li>
                <a href="#">Reservas</a>
            </li>
            <li>
                <a href="#">Galería</a>
            </li>
            <li>
                <a href="#">Foro</a>
            </li>
        </ul>
        <div className="flex m-5 lg:hidden order-first items-center">
            <img className="w-[30px] h-[30px]" src={Menu} alt="Menu" />
        </div>
        </>
    )
}