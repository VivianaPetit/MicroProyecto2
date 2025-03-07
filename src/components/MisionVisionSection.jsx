import React from 'react';
import avila from "../assets/avila.jpg";
import Goal from './Goal';
import mision from '../assets/mision-icon.png';
import vision from '../assets/vision-icon.png';

const MisionVisionSection = () => {
  return (
    <section>

      <div className='w-full h-full bg-cover bg-[url(src/assets/avila.jpg)] lg:bg-cover lg:bg-center'
        data-aos="fade-up" 
        data-aos-duration="1500"
        data-aos-once="true"
        >
        <img className='"w-full h-full lg:opacity-0 opacity-50' 
          src={avila} 
          alt="Paisasjes del Avila"/>
      </div>

      <div className='lg:flex relative text-2xl lg:w-[1200px] w-[560px] m-26 ml-35 items-center lg:items-start gap-8 p-4'
        data-aos="fade-up" 
        data-aos-duration="1500"
        data-aos-once="true">
            <div className='items-center'>
              <div className='flex justify-center mb-10'>
                <img src={mision} alt="Misión"/>
              </div>
              <h2 className='lg:text-[42px] md:text-[32px] text-[28px] font-extrabold mb-5 text-[#889e19] text-center'> NUESTRA MISIÓN</h2>
              <p className='lg:text-[16px] md:text-[15px] text-[14px] text-center pl-15 pr-10'>Fomentar la conexión entre los estudiantes de la Universidad Metropolitana y la riqueza natural del Parque Nacional El Ávila, promoviendo 
                actividades recreativas, educativas y sostenibles que fortalezcan la comunidad estudiantil y el respeto por el medio ambiente. </p>
            </div>
            <div className='items-center mt-6 lg:mt-0'>
              <div className='flex justify-center mb-10'>
                <img src={vision} alt="Visión"/>
              </div>
              <h2 className='lg:text-[42px] sm:text-[32px] text-[28px] font-extrabold mb-5 text-[#889e19] text-center'> NUESTRA VISIÓN</h2>
              <p className='lg:text-[16px] md:text-[15px] text-[14px] text-center pl-8 pr-8 '>Ser la principal plataforma estudiantil que inspire a la comunidad unimetana a explorar, 
                valorar y proteger los tesoros naturales de Venezuela, fortaleciendo el vínculo entre educación, naturaleza y sostenibilidad. </p>
            </div>
      </div>
      

      <div className='lg:w-full h-auto mt-10 bg-[#889e19] text-[#F2F5E5] pl-20 lg:pl-30'>
        <h2 className="lg:text-[42px] sm:text-[32px] text-[28px] font-extrabold pt-10 mb-5">
          ¿QUÉ BUSCAMOS?
        </h2>
        <p className='font-medium text-[16px] md:text-[18px] lg:text-[20px]'>
          Queremos fomentar la participación en actividades al aire libre, 
          ofrecer rutas bien planificadas y construir una 
          comunidad activa de amantes de la naturaleza.
        </p>
        <div className='mt-10 text-center space-y-10 lg:text-[18px] md:text-[16px] text-[14px]'
              data-aos="fade-right" 
              data-aos-duration="1500"
              data-aos-once="true">
          <div className='sm:flex static space-x-25 items-center '> 
            <Goal text="Promover la participación en actividades al aire libre."/>
            <Goal text="Formar una comunidad de amantes de la naturaleza."/>
            <Goal text="Motivar a explorar la belleza natural del Parque Nacional El Ávila."/>
          </div>
          <div className='sm:flex static space-x-25 items-center pb-10'>
            <Goal text="Fortalecer el bienestar esfudiantil."/>
            <Goal text="Impulsar el turismo responsable."/>
            <Goal text="Fomentar la educación ambiental."/>
          </div>
        </div>
      </div>
    </section>

  );
};

export default MisionVisionSection;