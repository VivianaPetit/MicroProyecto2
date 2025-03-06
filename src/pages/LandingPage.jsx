import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import MisionVisionSection from "../components/MisionVisionSection"

export const LandingPage = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <main className="flex-grow">
        <MisionVisionSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
