import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/metroavila.svg";
import { NavBar } from "./NavBar";
import Button from "./Button";
import lupa from "../assets/search-icon.png";
import cruz from "../assets/cruz-icon.png";
import Menu from "./Menu";
import profile from "../assets/user-icon.svg";

export const Header = () => {
    const navigate = useNavigate(); 
    const [isSearchVisible, setSearchVisible] = useState(false);

    const toggleSearch = () => setSearchVisible(!isSearchVisible);

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            console.log('Buscar:', event.target.value);
        }
    };

    return (
        <header className="sticky top-0 z-50 flex h-[76px] bg-[#F2F5E5] border-t-1 border-[#3333333c] shadow-xl">
            
            <div className={`flex items-center justify-center bg-[#889E19] lg:hidden ${isSearchVisible ? "hidden" : ""}`}>
                <Menu />
            </div>

            <div className="pl-6 pt-2 m-2">
                <img 
                    src={logo} 
                    alt="MetroAvila Logo" 
                    className="lg:w-[150px] lg:h-[51px] w-[80px] h-[41px] cursor-pointer" 
                    onClick={() => navigate("/")}
                />
            </div>

            <div className="flex items-center">
                <div className="flex lg:ml-2">
                    <img 
                        src={isSearchVisible ? cruz : lupa} 
                        alt="Buscar" 
                        className="w-6 h-6 cursor-pointer mr-2" 
                        onClick={toggleSearch} 
                        aria-label="Toggle search"
                    />
                    <input
                        type="text"
                        placeholder="Buscar..."
                        onKeyDown={handleSearch}
                        className={`outline-none px-3 py-1 transition-all duration-300 ${
                            isSearchVisible ? "opacity-100 w-[200px]" : "opacity-0 w-0 hidden"
                        }`}
                    />
                </div> 

                <div >
                    <NavBar className={`hidden lg:flex w-[350px] place-content-around text-[16px] font-semibold text-[#1E1E1E] transition-all duration-300 ${
                        isSearchVisible ? "opacity-0 translate-y-[-20px] pointer-events-none" : "opacity-100 translate-y-0"}`}/>
                </div>
            </div> 

            <div className="flex ml-auto space-x-6 items-center mr-20">
                <Button
                    className="bg-[#889E19] hover:bg-[#6E7D14] text-[#F2F5E5] cursor-pointer font-bold h-10 py-2 px-4 rounded-lg hidden lg:flex"
                    onClick={() => navigate("/signup")}
                    text="Registrarse"
                />
                <Button
                    className="bg-[#889E19] hover:bg-[#6E7D14] text-[#F2F5E5] cursor-pointer font-bold h-10 py-2 px-4 rounded-lg hidden lg:flex"
                    onClick={() => navigate("/login")}
                    text="Iniciar Sesión"
                />

                <img 
                    onClick={() => navigate("/profile")} 
                    src={profile} alt="Perfil" 
                    className="w-[30px] h-[26px] cursor-pointer" 
                    />
            </div>
        </header>
    );
};
