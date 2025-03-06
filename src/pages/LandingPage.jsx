import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import MisionVisionSection from "../components/MisionVisionSection"

export const LandingPage = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <main className="flex-grow lg:m-16">
        <MisionVisionSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
