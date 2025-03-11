import React from "react";

import cruzdelospalmeros from "../assets/cruzdelospalmeros.jpg";
import cruzdelospalmeros1 from "../assets/cruzdelospalmeros1.jpg";
import humboldt from "../assets/humboldt.png";
import piconaiguata from "../assets/piconaiguata.jpg";             //Esto será así momentaneamente
import sabasnieves from "../assets/sabasnieves.jpg";
import piedradelindio from "../assets/piedradelindio.png";
import elbanquito from "../assets/elbanquito.webp"; 
import antenas from "../assets/antenas.jpg";

const imagenes = {
    "Cruz de los Palmeros (vía Sabas Nieves)": cruzdelospalmeros,
    "Cruz de los Palmeros (vía Cachimbo)": cruzdelospalmeros1,
    "Humboldt": humboldt,
    "Pico Naiguatá": piconaiguata,
    "Sabas Nieves": sabasnieves,
    "Piedra del Indio": piedradelindio,
    "El Banquito": elbanquito,
    "Antenas Ávila": antenas,
};

export const Destination = ({destino}) => {
    return [
        <div className="bg-white shadow-md cursor-pointer rounded p-4">
            <img src={imagenes[destino.nombre] || "/default.jpg"} alt={destino.nombre} className="w-full h-32 object-cover rounded" />
            <h2 className="text-lg font-semibold mt-2">{destino.nombre}</h2>
            <p className="text-sm text-gray-600">Calificación: {destino.calificacion}</p>
            <p className="text-sm text-gray-600">Dificultad: {destino.dificultad}</p>
            <p className="text-sm text-gray-600">Tiempo estimado: {destino.tiempo}</p>
        </div>
    ]
}