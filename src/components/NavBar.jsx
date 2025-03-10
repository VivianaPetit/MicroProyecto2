import React from "react";
import { useNavigate } from "react-router-dom";


export const NavBar = ({className}) => {

    const navigate = useNavigate();
    
    return (
        <>
        <ul className={className}>
            <li>
                <a href="/destinations">Destinos</a>
            </li>
            <li>
                <a href="/reservas">Reservas</a>
            </li>
            <li>
                <a href="/galeria">Galería</a>
            </li>
            <li>
                <a href="/foro">Foro</a>
            </li>
        </ul>
        </>
    )
}