import React from "react";

export const TestimonialCard = ({
  image,
  name,
  career,
  date,
  testimonial,
  className = "",
}) => {
  return (
    <div className={`flex flex-col m-8 lg:flex-row items-center lg:items-start gap-8 p-4 ${className}`} data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
      <div className="lg:w-1/2 flex flex-col items-center">
        <img className="w-40 h-40 object-cover rounded-full" src={image} alt={name} />
        <h3 className="text-[20px] font-extrabold text-black text-center mt-4">{name}</h3>
        <p className="text-[14px] text-black text-center">{career}</p>
        <time className="block text-[14px] text-black text-center">{date}</time>
      </div>
      <div className="relative text-2xl lg:w-[600px] w-[560px] flex items-center justify-center" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
        <blockquote className="mt-10 text-center text-black lg:text-[18px] md:text-[16px] text-[14px]">
          {testimonial}
        </blockquote>
      </div>
    </div>
  );
};

export default TestimonialCard;