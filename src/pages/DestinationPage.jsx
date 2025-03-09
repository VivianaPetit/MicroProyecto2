import React from "react";

function DestinationPage() {
  
    const routes = [
        { nombre: 'Sabas Nieves', calificacion: 4.7, dificultad: 'Moderada', tiempo: '~1h 55min' },
        { nombre: 'Pico Naiguatá', calificacion: 4.2, dificultad: 'Difícil', tiempo: '~9h 21min' },
        { nombre: 'Humboldt', calificacion: 4.7, dificultad: 'Difícil', tiempo: '~3h 14min' },
        { nombre: 'Cruz de los Palmeros (vía Cachimbo)', calificacion: 4.6, dificultad: 'Difícil', tiempo: '~7h 30min' },
        { nombre: 'El Banquito', calificacion: 4.6, dificultad: 'Difícil', tiempo: '~10h 40min' },
        { nombre: 'Antenas Ávila', calificacion: 4.7, dificultad: 'Difícil', tiempo: '~2h 25min' },
        { nombre: 'Piedra del Indio', calificacion: 4.5, dificultad: 'Difícil', tiempo: '~2h 38min' },
        { nombre: 'Cruz de los Palmeros (vía Sabas Nieves)', calificacion: 4.9, dificultad: 'Difícil', tiempo: '~4h 12min' },
    ];

  return (
   
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-green-500 p-4 flex justify-between items-center">
        <img src="logo.png" alt="MetroÁvila" className="h-8" />
        <nav className="flex space-x-4">
          <a href="#destinos" className="text-white">Destinos</a>
          <a href="#reservas" className="text-white">Reservas</a>
          <a href="#galeria" className="text-white">Galería</a>
          <a href="#foro" className="text-white">Foro</a>
        </nav>
        <div className="text-white">Natalia León</div>
      </header>

      <main className="p-8">
        <h1 className="text-2xl font-bold text-gray-700 mb-6">Destinos Turísticos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinos.map((destino, index) => (
            <div key={index} className="bg-white shadow-md rounded p-4">
              <img src={`${destino.nombre.replace(/\s+/g, '-').toLowerCase()}.jpg`} alt={destino.nombre} className="w-full h-32 object-cover rounded" />
              <h2 className="text-lg font-semibold mt-2">{destino.nombre}</h2>
              <p className="text-sm text-gray-600">Calificación: {destino.calificacion}</p>
              <p className="text-sm text-gray-600">Dificultad: {destino.dificultad}</p>
              <p className="text-sm text-gray-600">Tiempo estimado: {destino.tiempo}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-6">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-bold">Explora</h3>
            <ul>
              <li><a href="#about" className="text-gray-400 hover:underline">Sobre Nosotros</a></li>
              <li><a href="#destinos" className="text-gray-400 hover:underline">Destinos</a></li>
              <li><a href="#reservas" className="text-gray-400 hover:underline">Reservas</a></li>
              <li><a href="#galeria" className="text-gray-400 hover:underline">Galería</a></li>
              <li><a href="#foro" className="text-gray-400 hover:underline">Foro</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Contáctanos</h3>
            <p className="text-gray-400">Universidad Metropolitana, Caracas, Venezuela</p>
            <p className="text-gray-400">Tel: +58 212-1234567</p>
            <p className="text-gray-400">Email: info@metroavila.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DestinationPage;
