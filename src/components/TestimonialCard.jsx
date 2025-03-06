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
      <div className="lg:w-1/2 flex justify-center">
        <img className="w-40 h-40 object-cover rounded-full" src={image} alt={name} />
      </div>
      <div className="relative text-2xl lg:w-[600px] w-[560px]" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
        <h3 className="lg:text-[32px] md:text-[28px] text-[24px] font-extrabold mb-5 text-[#889e19] text-center">{name}</h3>
        <p className="lg:text-[16px] md:text-[15px] text-[14px] text-center">{career}</p>
        <blockquote className="mt-5 text-center text-black lg:text-[18px] md:text-[16px] text-[14px]">
          {testimonial}
        </blockquote>
        <time className="block mt-5 text-center text-[#889e19] lg:text-[16px] md:text-[15px] text-[14px]">
          {date}
        </time>
      </div>
    </div>
  );
};

export default TestimonialCard;