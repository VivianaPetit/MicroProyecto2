import React from 'react';
import avila from "../assets/avila.jpg";
import Goal from './Goal';
import mision from '../assets/mision-icon.png';
import vision from '../assets/vision-icon.png';
import { useNavigate } from 'react-router-dom';

const MisionVisionSection = () => {
  const navigate  = useNavigate();

  return (
    <section className="relative">
      {/* Imagen de fondo con texto y botón */}
      <div className="w-full h-[400px] md:h-[500px] bg-cover bg-center relative" 
        style={{ backgroundImage: `url(${avila})` }}
        data-aos="fade-up" 
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-[#F2F5E5] text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-md">MetroÁvila</h1>
          <button onClick={() => navigate("/destinos")} className="mt-4 px-6 py-3 bg-[#889e19] text-white text-lg font-semibold rounded-full 
            transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Explorar
          </button>
        </div>
      </div>

      {/* Sección Misión y Visión */}
      <div className='flex flex-col lg:flex-row items-center justify-center text-2xl max-w-[1200px] mx-auto gap-8 p-6'
        data-aos="fade-up" 
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <div className="flex flex-col items-center text-center max-w-[90%] md:max-w-[600px]">
          <div className='flex justify-center mb-6'>
            <img src={mision} alt="Misión"/>
          </div>
          <h2 className='text-[28px] md:text-[32px] font-extrabold mb-4 text-[#889e19]'>NUESTRA MISIÓN</h2>
          <p className='text-[14px] md:text-[16px] leading-relaxed'>
            Fomentar la conexión entre los estudiantes de la Universidad Metropolitana y la riqueza natural del Parque Nacional El Ávila, promoviendo 
            actividades recreativas, educativas y sostenibles que fortalezcan la comunidad estudiantil y el respeto por el medio ambiente.
          </p>
        </div>

        <div className="flex flex-col items-center text-center max-w-[90%] md:max-w-[600px]">
          <div className='flex justify-center mb-6'>
            <img src={vision} alt="Visión"/>
          </div>
          <h2 className='text-[28px] md:text-[32px] font-extrabold mb-4 text-[#889e19]'>NUESTRA VISIÓN</h2>
          <p className='text-[14px] md:text-[16px] leading-relaxed'>
            Ser la principal plataforma estudiantil que inspire a la comunidad unimetana a explorar, valorar y proteger los tesoros naturales de Venezuela, 
            fortaleciendo el vínculo entre educación, naturaleza y sostenibilidad.
          </p>
        </div>
      </div>

      {/* Sección "¿Qué buscamos?" */}
      <div className='w-full bg-[#889e19] text-[#F2F5E5] px-6 md:px-12 py-10 text-center'>
        <h2 className="text-[28px] md:text-[32px] font-extrabold mb-6">
          ¿QUÉ BUSCAMOS?
        </h2>
        <p className='text-[14px] md:text-[18px] leading-relaxed max-w-[800px] mx-auto'>
          Queremos fomentar la participación en actividades al aire libre, ofrecer rutas bien planificadas y construir una comunidad activa de amantes de la naturaleza.
        </p>

        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
          data-aos="fade-right" 
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <Goal text="Promover la participación en actividades al aire libre."/>
          <Goal text="Formar una comunidad de amantes de la naturaleza."/>
          <Goal text="Motivar a explorar la belleza natural del Parque Nacional El Ávila."/>
          <Goal text="Fortalecer el bienestar estudiantil."/>
          <Goal text="Impulsar el turismo responsable."/>
          <Goal text="Fomentar la educación ambiental."/>
        </div>
      </div>
    </section>
  );
};

export default MisionVisionSection;
