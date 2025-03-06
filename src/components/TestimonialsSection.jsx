import React from "react";
import { TestimonialCard } from "./TestimonialCard";

export const TestimonialsSection = () => {
  return (
    <section className="flex flex-col items-center m-8 gap-8 p-4"
      data-aos="fade-up" 
      data-aos-duration="1500"
      data-aos-once="true">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <TestimonialCard
         
          name="Pedro González"
          career="Ingeniería Civil"
          date="27-08-2024"
          testimonial="Este sitio me ayudó a organizar mi primera excursión a El Ávila. Todo está súper claro y bien planificado. ¡Una experiencia inolvidable con mis amigos de la universidad!"
          className="max-w-[600px]"
        />
        <TestimonialCard
         
          name="Valentina Herrera"
          career="Psicología"
          date="03-11-2024"
          testimonial="Las excursiones son increíbles y educativas. Conocí más sobre el parque mientras disfrutaba de la naturaleza con mis compañeros. ¡Muy recomendado!"
          className="max-w-[600px]"
        />
      </div>
      <div className="flex justify-center">
        <TestimonialCard
         
          name="Sofía Muñoz"
          career="Economía"
          date="24-10-2024"
          testimonial="Excelente plataforma para explorar El Ávila de forma segura y responsable. Todo está bien organizado, y la experiencia es fantástica. ¡Me encantó!"
          className="max-w-[600px]"
        />
      </div>
      <h2 className="text-[42px] font-extrabold text-[#889e19] text-center">¡EXPLOREMOS EL ÁVILA CON <span className="text-[#FF7E00]">METROÁVILA</span>!</h2>
    </section>
  );
};

export default TestimonialsSection;
