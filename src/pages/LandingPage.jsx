import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import MissionVisionSection from "../components/MisionVisionSection"

export const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Contenido principal (puede crecer para ocupar el espacio restante) */}
      <main className="flex-grow">
        {/* Aquí va el contenido de tu landing page */}
        <MissionVisionSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
