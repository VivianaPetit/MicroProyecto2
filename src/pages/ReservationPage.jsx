import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import BookingCalendar from '../components/BookingCalendar'

function ReservationPage() {
  return (
    <div className='bg-[#F2F5E5] min-h-screen'>
      <Header />

    <main className="p-8">
        <h1 className='text-3xl text-[#889e19] font-bold mb-6" data-aos="fade-up" data-aos-once="true'>
            Reservar
        </h1>
        <BookingCalendar/>
    </main>

      <Footer />
    </div>
  )
}

export default ReservationPage
