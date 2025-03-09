import React, { useState } from "react";

function Dropdown({ options, selectedOption, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            {/* Botón del desplegable */}
            <button
                type="button"
                className="flex items-center justify-between w-48 px-4 py-2 rounded-lg font-bold text-lg bg-[#C8E6C9] text-[#2E7D32] hover:bg-[#A5D6A7] focus:outline-none"
                onClick={toggleDropdown}
            >
                {selectedOption || "Selecciona"}
                {/* Flecha personalizada con TailwindCSS */}
                <span
                    className={`ml-2 w-0 h-0 border-x-4 border-x-transparent border-b-[6px] border-b-[#2E7D32] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                ></span>
            </button>

            {/* Opciones del desplegable */}
            {isOpen && (
                <div className="absolute mt-2 w-full rounded-lg shadow-lg bg-white border border-gray-200 z-10">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;