import React from 'react';
import avila from "../assets/avila.jpg";

const MisionVisionSection = () => {
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
      <div className='relative text-2xl lg:w-[600px] w-[560px]'>
          <div className='items-center'>
            <h2 className='lg:text-[42px] md:text-[32px] text-[28px] font-extrabold mb-5 text-[#889e19] text-center'> NUESTRA MISIÓN</h2>
            <p className='lg:text-[16px] md:text-[15px] text-[14px] text-center pl-17 pr-17'>Fomentar la conexión entre los estudiantes de la Universidad Metropolitana y la riqueza natural del Parque Nacional El Ávila, promoviendo 
              actividades recreativas, educativas y sostenibles que fortalezcan la comunidad estudiantil y el respeto por el medio ambiente. </p>
          </div>
          <div className='items-center mt-10'>
            <h2 className='lg:text-[42px] sm:text-[32px] text-[28px] font-extrabold mb-5 text-[#889e19] text-center'> NUESTRA VISIÓN</h2>
            <p className='lg:text-[16px] md:text-[15px] text-[14px] text-center pl-16 pr-16'>Ser la principal plataforma estudiantil que inspire a la comunidad unimetana a explorar, 
              valorar y proteger los tesoros naturales de Venezuela, fortaleciendo el vínculo entre educación, naturaleza y sostenibilidad. </p>
          </div>
          <div className='lg:w-[600px] w-[560px] items-center mt-10'>
            <h2 className="lg:text-[42px] sm:text-[32px] text-[28px] font-extrabold mb-5 text-[#889e19] text-center">
              ¿QUÉ BUSCAMOS?
            </h2>
            <div className='flex justify-center relative text-center lg:text-[16px] md:text-[14px] text-[12px]'
            data-aos="fade-right" 
            data-aos-duration="800"
            data-aos-once="true"> 
              <div className='relative'>
                <div className='bg-[rgba(197,208,152,0.6)] p-2 m-3 place-content-center rounded-[30px] 
                  lg:w-[286px] lg:h-[68px] md:w-[246px] md:h-[58px] w-[216px] h-[45px]'>Promover la participación estudiantil.</div>
                <div className='bg-[rgba(197,208,152,0.6)] p-2 m-3 place-content-center rounded-[30px] 
                  lg:w-[286px] lg:h-[68px] md:w-[246px] md:h-[58px] w-[216px] h-[45px]'>Impulsar el turismo responsable.</div>
                <div className='bg-[rgba(197,208,152,0.6)] p-2 m-3 place-content-center rounded-[30px] 
                  lg:w-[286px] lg:h-[68px] md:w-[246px] md:h-[58px] w-[216px] h-[45px]'>Crear comunidad entre los estudiantes.</div>
              </div>
              <div className='relative'>
                <div className='bg-[rgba(197,208,152,0.6)] p-2 m-3 place-content-center rounded-[30px] 
                  lg:w-[286px] lg:h-[68px] md:w-[246px] md:h-[58px] w-[216px] h-[45px]'>Fomentar la educación ambiental.</div>
                <div className='bg-[rgba(197,208,152,0.6)] p-2 m-3 place-content-center rounded-[30px] 
                  lg:w-[286px] lg:h-[68px] md:w-[246px] md:h-[58px] w-[216px] h-[45px]'>Fortalecer el bienestar estudiantil.</div>
                <div className='bg-[rgba(197,208,152,0.6)] p-2 m-3 place-content-center rounded-[30px] 
                  lg:w-[286px] lg:h-[68px] md:w-[246px] md:h-[58px] w-[216px] h-[45px]'>Incentivar la actividad física.</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default MisionVisionSection;