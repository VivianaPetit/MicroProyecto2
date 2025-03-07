import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import MisionVisionSection from "../components/MisionVisionSection"
import { TestimonialsSection } from "../components/TestimonialsSection"
import { app } from "../credenciales"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useState } from "react"

const auth = getAuth(app);
 
export const LandingPage = () => {

  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (userConnected) => {
    if (userConnected) {
      // User is signed in.
      setUser(userConnected);
    }
    else {
      // No user is signed in.
      setUser(null);
      }
    }
  );
  
  return (
      <div>
        <div>
          {user ? <h1>¡Hola, {user.displayName}!</h1> : <h1>¡Hola, visitante!</h1>}
        </div>
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <main className="flex-grow">
        <MisionVisionSection />
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
