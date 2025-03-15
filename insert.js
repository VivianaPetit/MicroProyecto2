const data = [
    { nombre: "Paseo por Antenas Ávila", descripcion: "Disfruta de una caminata panorámica con vistas espectaculares desde las Antenas.", destino: "/destinos/Antenas Ávila", dificultad: "Media", disponible: true, duracion: 4, fecha: "2025-04-10T08:00:00.000Z", cupos: 20, requiereEquipo: false, requierePermisos: false, tipoActividad: "/tipoActividad/abc123" },
    { nombre: "Sendero a la Cruz de los Palmeros (Cachimbo)", descripcion: "Ruta desafiante a la emblemática Cruz de los Palmeros por Cachimbo.", destino: "/destinos/Cruz de los Palmeros (vía Cachimbo)", dificultad: "Alta", disponible: false, duracion: 5, fecha: "2025-05-15T07:30:00.000Z", cupos: 0, requiereEquipo: true, requierePermisos: true, tipoActividad: "/tipoActividad/def456" },
    { nombre: "Excursión a Sabas Nieves", descripcion: "Una caminata relajante por uno de los senderos más populares del Ávila.", destino: "/destinos/Sabas Nieves", dificultad: "Baja", disponible: true, duracion: 2, fecha: "2025-03-20T06:00:00.000Z", cupos: 10, requiereEquipo: false, requierePermisos: false, tipoActividad: "/tipoActividad/ghi789" },
    { nombre: "Ruta al Pico Naiguatá", descripcion: "La cumbre más alta del Ávila espera a los aventureros que se atrevan a desafiarla.", destino: "/destinos/Pico Naiguatá", dificultad: "Alta", disponible: true, duracion: 8, fecha: "2025-06-12T05:00:00.000Z", cupos: 5, requiereEquipo: true, requierePermisos: true, tipoActividad: "/tipoActividad/jkl012" },
    { nombre: "Recorrido por Piedra del Indio", descripcion: "Una travesía hacia la legendaria Piedra del Indio, un lugar lleno de historia.", destino: "/destinos/Piedra del Indio", dificultad: "Media", disponible: false, duracion: 3, fecha: "2025-07-08T09:00:00.000Z", cupos: 0, requiereEquipo: false, requierePermisos: false, tipoActividad: "/tipoActividad/mno345" },
    { nombre: "Trekking a Humboldt", descripcion: "Sube hasta el emblemático Hotel Humboldt en un recorrido lleno de historia y paisajes.", destino: "/destinos/Humboldt", dificultad: "Alta", disponible: true, duracion: 4, fecha: "2025-08-22T07:00:00.000Z", cupos: 15, requiereEquipo: false, requierePermisos: true, tipoActividad: "/tipoActividad/pqr678" },
    { nombre: "Exploración en El Banquito", descripcion: "Un recorrido corto pero encantador por El Banquito, ideal para principiantes.", destino: "/destinos/El Banquito", dificultad: "Baja", disponible: false, duracion: 2, fecha: "2025-09-10T10:00:00.000Z", cupos: 0, requiereEquipo: false, requierePermisos: false, tipoActividad: "/tipoActividad/stu901" },
    { nombre: "Subida a la Cruz de los Palmeros (Sabas Nieves)", descripcion: "Vive la tradición de los Palmeros en esta desafiante ruta desde Sabas Nieves.", destino: "/destinos/Cruz de los Palmeros (vía Sabas Nieves)", dificultad: "Alta", disponible: true, duracion: 5, fecha: "2025-10-05T06:30:00.000Z", cupos: 8, requiereEquipo: true, requierePermisos: true, tipoActividad: "/tipoActividad/vwx234" }
];

// Código para insertar en Firestore
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "./src/credenciales.js"; // Asegúrate de importar la configuración de Firebase

const insertData = async () => {
    try {
        const activitiesRef = collection(db, "actividades"); // Cambia "actividades" si tu colección tiene otro nombre
        const promises = data.map(activity => addDoc(activitiesRef, activity));

        await Promise.all(promises);
        console.log("Datos insertados correctamente.");
    } catch (error) {
        console.error("Error al insertar datos:", error);
    }
};

insertData();
