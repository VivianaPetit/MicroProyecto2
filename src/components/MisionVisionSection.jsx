import React from 'react';
import avila from "../assets/avila.jpg";

const MissionVisionSection = () => {
  return (
    <div className='flex m-8 flex-col lg:flex-row items-center lg:items-start gap-8 p-4'>
      <div className='lg:w-1/2'
        data-aos="zoom-in" 
        data-aos-duration="700"
        data-aos-once="true"
        >
        <img className='w-auto h-auto object-cover rounded-lg' 
          src={avila} 
          alt="Paisasjes del Avila"/>
      </div>
      <div className='relative text-2xl'>
          <div className='w-[600px] items-center'>
            <h2 className='lg:text-[42px] md:text-[32px] text-[28px] font-extrabold mb-5 text-[#889e19] text-center'> NUESTRA MISIÓN</h2>
            <p className='lg:text-[16px] md:text-[15px] text-[13px] text-[#333] text-center pl-17 pr-17'>Fomentar la conexión entre los estudiantes de la Universidad Metropolitana y la riqueza natural del Parque Nacional El Ávila, promoviendo 
              actividades recreativas, educativas y sostenibles que fortalezcan la comunidad estudiantil y el respeto por el medio ambiente. </p>
          </div>
          <div className='w-[600px] items-center mt-10'>
            <h2 className='lg:text-[42px] sm:text-[32px] text-[28px] font-extrabold mb-5 text-[#889e19] text-center'> NUESTRA VISIÓN</h2>
            <p className='lg:text-[16px] md:text-[15px] text-[13px] text-[#333] text-center pl-16 pr-16'>Ser la principal plataforma estudiantil que inspire a la comunidad unimetana a explorar, 
              valorar y proteger los tesoros naturales de Venezuela, fortaleciendo el vínculo entre educación, naturaleza y sostenibilidad. </p>
          </div>
          <div className="w-full max-w-[1200px] mx-auto mt-10 p-4">
          {/* Título */}
          <h2 className="text-[42px] font-extrabold mb-8 text-[#889e19] text-center uppercase">
            ¿QUÉ BUSCAMOS?
          </h2>

          {/* Lista de objetivos */}
          <ul className="space-y-4 text-[#333] text-lg text-center list-none pl-0">
            <li className="font-semibold">Promover la participación estudiantil.</li>
            <li className="font-semibold">Impulsar el turismo responsable.</li>
            <li className="font-semibold">Fomentar la educación ambiental.</li>
            <li className="font-semibold">Fortalecer el bienestar estudiantil.</li>
            <li className="font-semibold">Crear comunidad entre los estudiantes.</li>
            <li className="font-semibold">Incentivar la actividad física.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionSection;