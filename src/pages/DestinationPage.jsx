import React from "react";
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Destination } from "../components/Destination.jsx";

function DestinationPage() {
  
    const destinos = [
        {
            nombre: 'Sabas Nieves',
            calificacion: 4.7,
            dificultad: 'Moderada',
            tiempo: '~1h 55min',
            foto: 'src/assets/sabasnieves.JPG'
        },
        {
            nombre: 'Pico Naiguatá',
            calificacion: 4.2,
            dificultad: 'Difícil',
            tiempo: '~9h 21min',
            foto: 'src/assets/piconaiguata.jpg'
        },
        {
            nombre: 'Humboldt',
            calificacion: 4.7,
            dificultad: 'Difícil',
            tiempo: '~3h 14min',
            foto: 'src/assets/humboldt.png'
        },
        {
            nombre: 'Cruz de los Palmeros (vía Cachimbo)',
            calificacion: 4.6,
            dificultad: 'Difícil',
            tiempo: '~7h 30min',
            foto: 'src/assets/cruzdelospalmeros1.jpg'
        },
        {
            nombre: 'El Banquito',
            calificacion: 4.6,
            dificultad: 'Difícil',
            tiempo: '~10h 40min',
            foto: 'src/assets/elbanquito.webp'
        },
        {
            nombre: 'Antenas Ávila',
            calificacion: 4.7,
            dificultad: 'Difícil',
            tiempo: '~2h 25min',
            foto: 'src/assets/antenas.jpg'
        },
        {
            nombre: 'Piedra del Indio',
            calificacion: 4.5,
            dificultad: 'Difícil',
            tiempo: '~2h 38min',
            foto: 'src/assets/piedradelindio.png'
        },
        {
            nombre: 'Cruz de los Palmeros (vía Sabas Nieves)',
            calificacion: 4.9,
            dificultad: 'Difícil',
            tiempo: '~4h 12min',
            foto: 'src/assets/cruzdelospalmeros.jpg'
        },
    ];

  return (
   
    <div className="bg-[#F2F5E5] min-h-screen">
      <Header />

      <main className="p-8"       
      data-aos="fade-up" 
      data-aos-duration="1500"
      data-aos-once="true">
        <h1 className="text-3xl text-[#889e19] font-bold mb-6">Destinos Turísticos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinos.map((destino) => (
              <Destination destino={destino}/>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default DestinationPage;
