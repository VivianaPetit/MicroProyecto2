import React from "react";
import SocialAuthButton from "../components/SocialAuthButton";
import Divider from "../components/Divider";
import FormInput from "../components/FormInput";
import LoginButtons from "../components/LoginButtons";
import google from "../assets/google.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";

function LoginPage() {
    return (
        <div className="flex min-h-screen" style={{ backgroundColor: '#F2F5E5' }}> {/* Establecer el fondo aquí */}
            {/* Contenedor del formulario a la derecha */}
            <div className="flex-grow flex flex-col items-start justify-center p-6 bg-white">
                <h1 className="lg:text-[42px] md:text-[32px] text-[28px] font-extrabold mb-5 text-[#889e19]">Inicio de Sesión</h1>
                <h2 className="lg:text-[24px] md:text-[20px] text-[18px] text-black mb-8">Inicia sesión con:</h2>
                <div className="flex justify-center gap-14 mb-8 max-md:flex-col max-md:gap-5 max-md:items-center">
                    <SocialAuthButton image={google} altText="Google" />
                    <SocialAuthButton image={instagram} altText="Instagram" />
                    <SocialAuthButton image={facebook} altText="Facebook" />
                </div>
                <Divider text="ó" />
                <FormInput label="Email" type="email" value="tucorreo@correo.unimet.edu.ve" />
                <FormInput label="Contraseña" type="password" value="• • • • • • • •" />
                <LoginButtons />
            </div>
        </div>
    );
}

export default LoginPage;