import React from "react";
import { Link } from "react-router-dom"; 

export const NavBar = ({ className }) => {
    return (
        <>
            <ul className={className}>
                <li>
                    <Link to="/destinations">Destinos</Link> 
                </li>
                <li>
                    <Link to="/reservas">Reservas</Link>
                </li>
                <li>
                    <Link to="/galeria">Galería</Link> 
                </li>
                <li>
                    <Link to="/foro">Foro</Link>
                </li>
            </ul>
        </>
    );
};