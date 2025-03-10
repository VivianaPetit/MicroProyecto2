import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/metroavila.svg";
import Menu from "../assets/menu-hamburguesa.png";
import { NavBar } from "./NavBar";
import Button from "./Button";
import lupa from "../assets/search-icon.png";
import cruz from "../assets/cruz-icon.png";

export const Header = () => {
    const navigate = useNavigate(); 
    const [isSearchVisible, setSearchVisible] = useState(false);

    const toggleSearch = () => {
        setSearchVisible(!isSearchVisible);
    };
    
    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            const query = event.target.value;
            console.log('Buscar:', query); // Lógica de búsqueda aquí
        }
    };

    return (
        <header className="sticky top-0 z-50 flex h-[76px] bg-[#F2F5E5] border-t-1 border-[#3333333c] shadow-xl">
            <div className="pl-6 pt-2 place-content-center max-md:pr-6">
                <a href="/">
                    <img src={logo} alt="MetroAvila Logo" className="lg:w-[150px] lg:h-[51px] w-[80px] h-[41px]"/>
                </a>   
            </div>

            <div className={`flex place-content-center shadow-xl lg:hidden order-first items-center bg-[#889E19] w-[100px] h-[76px] ${
                        isSearchVisible ? "hidden" : ""}`}>
                <img className="w-[40px] h-[40px]" src={Menu} alt="Menu" />
            </div>

            <div className="flex items-center">
                <div className="flex lg:ml-2">
                    <img src={isSearchVisible ? cruz : lupa} alt="Búsqueda" className="w-6 h-6 cursor-pointer mr-2" onClick={toggleSearch} />
                    <input
                        type="text"
                        placeholder="Buscar..."
                        onKeyDown={handleSearch}
                        className={`outline-none  px-3 py-1 transition-all duration-300 ${
                        isSearchVisible ? "opacity-100 w-[200px]" : "opacity-0 w-0 hidden"}`}
                    />
                </div> 
                
                <div >
                    <NavBar className={`hidden lg:flex w-[350px] place-content-around text-[16px] font-semibold text-[#1E1E1E] transition-all duration-300 ${
                        isSearchVisible ? "opacity-0 translate-y-[-20px] pointer-events-none" : "opacity-100 translate-y-0"}`}/>
                </div>
            </div> 

            <div className="flex ml-auto space-x-4 items-center mr-32">
                <Button
                    divClassName=""
                    className='bg-[#889E19] hover:bg-[#6E7D14] border border-gray-300 text-[#F2F5E5] cursor-pointer font-bold h-10 py-2 px-4 rounded-lg hidden lg:flex transition-all duration-300'
                    onClick={() => navigate("/signup")}
                    text="Registrarse"
                    type=""
                />
                <Button
                    divClassName=""
                    className='bg-[#889E19] hover:bg-[#6E7D14] border border-gray-300 text-[#F2F5E5] cursor-pointer font-bold h-10 py-2 px-4 rounded-lg hidden lg:flex transition-all duration-300'
                    onClick={() => navigate("/login")}
                    text="Iniciar Sesión"
                    type=""
                />
            </div>
        </header>
    );
};
