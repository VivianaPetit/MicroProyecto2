import React, { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Destination } from "../components/Destination.jsx";
import { db } from "../credenciales.js";
import { collection, getDocs } from "firebase/firestore";


function DestinationPage() {


    const [destinos, setDestinos] = useState([]);

    useEffect(() => {
        const fetchDestinos = async () => {
            try {
                const destinosCollection = collection(db, "destinos");
                const destinosSnapshot = await getDocs(destinosCollection);
                const destinosList = destinosSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setDestinos(destinosList);
            } catch (error) {
                console.error("Error fetching destinos: ", error);
            }
        };

        fetchDestinos();
    }, []);

    return (

        <div className="bg-gray-100 min-h-screen">
            <Header />

            <main className="p-8">
                <h1 className="text-2xl font-bold text-gray-700 mb-6">Destinos Turísticos</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinos.map((destino) => (
                        <Destination destino={destino}/>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default DestinationPage;
