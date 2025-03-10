import React, { useState } from "react";
import SocialAuthButton from "../components/SocialAuthButton";
import Divider from "../components/Divider";
import FormInput from "../components/FormInput";
import Button from "../components/Button.jsx";
import google from "../assets/google.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import { useNavigate } from 'react-router-dom';
import { app } from "../credenciales";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const validateForm = () => {
        const newErrors = {
            email: "",
            password: "",
        };
        let isValid = true;

        if (!email.trim()) {
            newErrors.email = "El email es obligatorio.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "El email no es válido.";
            isValid = false;
        }

        if (!password.trim()) {
            newErrors.password = "La contraseña es obligatoria.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    async function handleLogin(e) {
        e.preventDefault();
        if (!validateForm()) return;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (error) {
            console.error("Error al iniciar sesión:", error.message);
        }
    }

    return (
        <div className="flex min-h-screen" style={{ backgroundColor: '#F2F5E5' }}> 
            <form onSubmit={handleLogin} className="w-3/4 flex flex-col items-start justify-center p-6 bg-white ml-auto">
                <h1 className="lg:text-[42px] md:text-[32px] text-[28px] font-extrabold mb-5 text-[#889e19]">Inicio de Sesión</h1>
                <h2 className="lg:text-[24px] md:text-[20px] text-[18px] text-black mb-8">Inicia sesión con:</h2>
                <div className="flex justify-center gap-14 mb-8 w-full max-md:flex-col max-md:gap-5 max-md:items-center">
                    <SocialAuthButton image={google} altText="Google" />
                    <SocialAuthButton image={instagram} altText="Instagram" />
                    <SocialAuthButton image={facebook} altText="Facebook" />
                </div>
                <Divider text="ó" />
                <div className="w-full mb-5">
                    <div className="text-3xl font-black text-[#889E19] mb-2">Email</div>
                    <FormInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} texto="Ingresa tu correo unimet"/>
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div className="w-full mb-5">
                    <div className="text-3xl font-black text-[#889E19] mb-2">Contraseña</div>
                    <FormInput label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} texto="Ingresa tu contraseña" />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>
                <Button divClassName="flex items-center text-center w-full mt-10" 
                        className="bg-[#889e19] hover:bg-[#6E7D14] text-white cursor-pointer font-extrabold rounded-3xl w-full lg:h-[68px] md:h-[58px] h-[45px]"
                        text="Iniciar Sesión"
                        type="submit"/>
                <p className="mt-5 lg:text-[16px] md:text-[15px] text-[14px] text-black">
                    ¿Aún no tienes cuenta? 
                    <a href="/signup" className="font-bold text-[#FF7E00] hover:text-[#FF7E00]/80 cursor-pointer ml-2" aria-label="Registrate">
                        Registrate
                    </a>     
                </p>
            </form>
        </div>
    );
}

export default LoginPage;
