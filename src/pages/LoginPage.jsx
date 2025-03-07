import React from "react";
import SocialAuthButton from "../components/SocialAuthButton";
import Divider from "../components/Divider";
import FormInput from "../components/FormInput";
import Button from "../components/Button.jsx";
import google from "../assets/google.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import { useState } from "react";
import { app } from "../credenciales"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom';


const auth = getAuth(app);

function LoginPage() {
    const navigate = useNavigate(); 
    
    const handleLoginClick = (route) => {
        navigate(route); 
    };
    
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    async function autFuncion(e) {
        e.preventDefault();
        console.log(email,password)
       await signInWithEmailAndPassword(auth, email, password)
    }

    return (
        <div className="flex min-h-screen" style={{ backgroundColor: '#F2F5E5' }}> 
            {/* Contenedor del formulario a la derecha */}
            <form onSubmit={autFuncion} className="flex-grow flex flex-col items-start justify-center p-6 bg-white">
                <h1 className="lg:text-[42px] md:text-[32px] text-[28px] font-extrabold mb-5 text-[#889e19]">Inicio de Sesión</h1>
                <h2 className="lg:text-[24px] md:text-[20px] text-[18px] text-black mb-8">Inicia sesión con:</h2>
                <div className="flex justify-center gap-14 mb-8 max-md:flex-col max-md:gap-5 max-md:items-center">
                    <SocialAuthButton image={google} altText="Google" />
                    <SocialAuthButton image={instagram} altText="Instagram" />
                    <SocialAuthButton image={facebook} altText="Facebook" />
                </div>
                <Divider text="ó" />
                <div className="mb-5 text-3xl font-black text-[#889E19]">
                    Email 
                </div>
                <FormInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} texto="Ingresa tu correo unimet"/>
                <div className="mb-5 text-3xl font-black text-[#889E19]">
                    Contraseña 
                </div>
                <FormInput label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} texto="Ingresa tu contraseña" />
                <div className="flex space-x-8">
                    <Button divClassName="flex items-center text-center mt-10" 
                            className="bg-[#889e19] hover:bg-[#6E7D14] text-white cursor-pointer font-extrabold rounded-3xl lg:w-[286px] lg:h-[68px] md:w-[246px] md:h-[58px] w-[216px] h-[45px]"
                            text="Iniciar Sesión"
                            onClick={() => handleLoginClick("/")}
                            type="submit"/>
                    <Button divClassName="flex items-center text-center mt-10" 
                            className="bg-[#889e19] hover:bg-[#6E7D14] text-white cursor-pointer font-extrabold rounded-3xl lg:w-[286px] lg:h-[68px] md:w-[246px] md:h-[58px] w-[216px] h-[45px]"
                            text="Inicar como Administrador"
                            onClick={undefined}
                            type="submit"/>
                </div>
                <p className="mt-5 ml-45 lg:text-[16px] md:text-[15px] text-[14px] text-black">
                    ¿Aún no tienes cuenta? 
                    <a href="/signup" className="font-bold text-[#FF7E00] hover:text-[#FF7E00]/80 cursor-pointer ml-2" aria-label="Registrate">
                        Registrate
                    </a>     
                </p>
            </form>
        </div>
    );
}

export default LoginPage