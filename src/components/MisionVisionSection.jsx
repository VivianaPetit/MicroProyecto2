import React from 'react';
import avila from "../assets/avila.jpg";

const MissionVisionSection = () => {
  return (
    <section className='flex '>
      <div className='flex m-8 mr-auto ml-0'>
        <img className='w-[857px] h-[806px] rounded-full opacity-32 shadow-2xs' src={avila} alt="Paisasjes del Avila"/>
      </div>
      <div className='relative'>
          <div className='w-[700px] flex-col items-center mt-10 mr-10'>
            <h2 className='text-[42px] font-extrabold mb-5 text-[#889e19] text-center'> NUESTRA MISIÓN</h2>
            <p className='text-[16px] font-semibold text-center pl-12 pr-12'>Fomentar la conexión entre los estudiantes de la Universidad Metropolitana y la riqueza natural del Parque Nacional El Ávila, promoviendo 
              actividades recreativas, educativas y sostenibles que fortalezcan la comunidad estudiantil y el respeto por el medio ambiente. </p>
          </div>
          <div className='w-[700px] flex-col items-center mt-10 mr-10'>
            <h2 className='text-[42px] font-extrabold mb-5 text-[#889e19] text-center'> NUESTRA VISIÓN</h2>
            <p className='text-[16px] font-semibold text-center pl-12 pr-12 '>Ser la principal plataforma estudiantil que inspire a la comunidad unimetana a explorar, 
              valorar y proteger los tesoros naturales de Venezuela, fortaleciendo el vínculo entre educación, naturaleza y sostenibilidad. </p>
          </div>
      </div>
     
    </section>
  );
};

export default MissionVisionSection;