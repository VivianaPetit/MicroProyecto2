import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import MisionVisionSection from "../components/MisionVisionSection"
import { TestimonialsSection } from "../components/TestimonialsSection"

export const LandingPage = () => {
  return (
    <div className="flex flex-col overflow-hidden">
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
