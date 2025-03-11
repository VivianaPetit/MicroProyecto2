import React from "react";


export const NavBar = ({className}) => {

    
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