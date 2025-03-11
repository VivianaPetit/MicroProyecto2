import React, { useState } from "react";
import SocialAuthButton from "../components/SocialAuthButton";
import FormInput from "../components/FormInput";
import Button from "../components/Button.jsx";
import Dropdown from "../components/Dropdown";
import divider from "../assets/divider.png";
import google from "../assets/google.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import { useNavigate } from 'react-router-dom';
import { app } from "../credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import banner2 from "../assets/campus.jpg";

const auth = getAuth(app);

function SignupPage() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [carnet, setCarnet] = useState('');
    const [carrera, setCarrera] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const [errors, setErrors] = useState({
        name: "",
        carnet: "",
        carrera: "",
        email: "",
        password: "",
        userType: "",
    });

    const userOptions = ["Estudiante", "Guía"];

    const handleGoogleSignup = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            console.log("Autenticación con Google exitosa");
            navigate("/");
        } catch (error) {
            console.error("Error al autenticar con Google:", error.message);
        }
    };

    const handleFacebookSignup = async () => {
        const provider = new FacebookAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            console.log("Autenticación con Facebook exitosa");
            navigate("/");
        } catch (error) {
            console.error("Error al autenticar con Facebook:", error.message);
        }
    };

    const handleInstagramSignup = () => {
        console.log("Instagram no está soportado directamente por Firebase.");
    };

    const validateForm = () => {
        const newErrors = {
            name: "",
            carnet: "",
            carrera: "",
            email: "",
            password: "",
            userType: "",
        };

        let isValid = true;

        // Validación del nombre
        if (!name.trim()) {
            newErrors.name = "El nombre es obligatorio.";
            isValid = false;
        } else if (name.trim().length < 2) {
            newErrors.name = "El nombre debe tener al menos 2 caracteres.";
            isValid = false;
        }

        // Validación del número de carnet
        if (!carnet.trim()) {
            newErrors.carnet = "El número de carnet es obligatorio.";
            isValid = false;
        } else if (isNaN(carnet)) {
            newErrors.carnet = "El número de carnet debe ser un número válido.";
            isValid = false;
        }

        // Validación de la carrera
        if (!carrera.trim()) {
            newErrors.carrera = "La carrera es obligatoria.";
            isValid = false;
        }

        // Validación del email
        if (!email.trim()) {
            newErrors.email = "El email es obligatorio.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "El email no es válido.";
            isValid = false;
        }

        // Validación de la contraseña
        if (!password.trim()) {
            newErrors.password = "La contraseña es obligatoria.";
            isValid = false;
        } else if (password.trim().length < 6) {
            newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
            isValid = false;
        }

        // Validación del tipo de usuario
        if (!userType) {
            newErrors.userType = "Debes seleccionar un tipo de usuario.";
            isValid = false;
        }

        // Actualiza el estado de errores
        setErrors(newErrors);
        return isValid;
    };

    async function handleSignup(e) {
        e.preventDefault();

        // Validar el formulario
        if (!validateForm()) {
            return; // Detener el registro si hay errores
        }

        try {
            // Registra al usuario con Firebase Authentication
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("Usuario registrado con éxito");
            console.log("Tipo de usuario:", userType);
            navigate("/"); // Redirige al usuario después del registro
        } catch (error) {
            console.error("Error al registrar el usuario:", error.message);
        }
    }

    return (
        <div className="flex min-h-screen bg-right-top" style={{ backgroundImage: `url(${banner2})` }}>
            <form onSubmit={handleSignup} className="w-full max-w-md flex flex-col items-center justify-center p-6 bg-[#F2F5E5] mx-auto rounded-lg shadow-lg">
                <h1 className="text-2xl lg:text-4xl font-extrabold mb-1 text-[#889e19]">Registro</h1>
                <h2 className="text-lg lg:text-xl text-black mb-4">Regístrate con:</h2>

                <div className="flex justify-center gap-4 mb-8 flex-wrap">
                    <SocialAuthButton image={google} altText="Google" onClick={handleGoogleSignup} />
                    <SocialAuthButton image={instagram} altText="Instagram" onClick={handleInstagramSignup} />
                    <SocialAuthButton image={facebook} altText="Facebook" onClick={handleFacebookSignup} />
                </div>

                <img src={divider} alt="Separador" className="mb-5 w-full" />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}

                <div className="flex flex-col w-full gap-4 mb-5">
                    <div>
                        <label className="text-lg font-black text-[#889E19] mb-2">Nombre</label>
                        <FormInput
                            label="Nombre"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            texto="Ingresa tu nombre"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                        <label className="text-lg font-black text-[#889E19] mb-2">Número de Carnet</label>
                        <FormInput
                            label="Carnet"
                            type="text"
                            value={carnet}
                            onChange={(e) => setCarnet(e.target.value)}
                            texto="Ingresa tu carnet"
                        />
                        {errors.carnet && <p className="text-red-500 text-sm mt-1">{errors.carnet}</p>}
                    </div>
                </div>

                <div className="w-full mb-5">
                    <label className="text-lg font-black text-[#889E19] mb-2">Carrera</label>
                    <FormInput
                        label="Carrera"
                        type="text"
                        value={carrera}
                        onChange={(e) => setCarrera(e.target.value)}
                        texto="Ingresa tu carrera"
                    />
                    {errors.carrera && <p className="text-red-500 text-sm mt-1">{errors.carrera}</p>}
                </div>

                <div className="w-full mb-5">
                    <label className="text-lg font-black text-[#889E19] mb-2">Email</label>
                    <FormInput
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        texto="Ingresa tu correo unimet"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div className="w-full mb-5">
                    <label className="text-lg font-black text-[#889E19] mb-2">Contraseña</label>
                    <FormInput
                        label="Contraseña"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        texto="Ingresa tu contraseña"
                    />
   
                </div>

                <div className="w-full mb-5">
                    <label className="text-lg font-black text-[#889E19] mb-2">¿Eres Estudiante o Guía?</label>
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <Dropdown
                                options={userOptions}
                                selectedOption={userType}
                                onSelect={(option) => setUserType(option)}
                            />
                            {errors.userType && <p className="text-red-500 text-sm mt-1">{errors.userType}</p>}
                        </div>
                        <div className="flex-1">
                            <Button
                                className="bg-[#889e19] hover:bg-[#6E7D14] text-white font-extrabold rounded-3xl border border-gray-300 
                                            w-full transition-all duration-300"
                                text="Registrarse"
                                type="submit"
                            />
                        </div>
                        </div>
            </div>

            {/* Enlace para iniciar sesión */}
            <p className="lg:text-[16px] md:text-[15px] text-[14px] text-black">
                ¿Ya tienes una cuenta?
                <button
                    onClick={() => navigate("/login")}
                    className="font-bold text-[#FF7E00] hover:text-[#ff5100] cursor-pointer ml-2"
                    aria-label="Inicia Sesión"
                >
                    Inicia Sesión
                </button>
            </p>
        </form>
    </div>
);
}

export default SignupPage;