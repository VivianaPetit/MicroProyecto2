import React from "react";

function SocialAuthButton({ image, altText }) {
  return (
    <button
      className="flex justify-center items-center bg-[#889E19] rounded-md border border-gray-300 border-solid cursor-pointer h-[76px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] w-[285px] max-md:w-full"
      aria-label={`Sign in with ${altText}`}
    >
      <img src={image} className="w-11 h-11" alt={altText} />
    </button>
  );
}

export default SocialAuthButton;