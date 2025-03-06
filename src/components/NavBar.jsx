import React from "react";


export const NavBar = ({className}) => {
    return (
        <>
        <ul className={className}>
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
        </>
    )
}