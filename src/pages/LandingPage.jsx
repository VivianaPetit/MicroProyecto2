import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import MisionVisionSection from "../components/MisionVisionSection"
import { TestimonialsSection } from "../components/TestimonialsSection"

 
export const LandingPage = () => {

  return (
      <div>
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <main className="flex-grow overflow-hidden">
        <MisionVisionSection />
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
