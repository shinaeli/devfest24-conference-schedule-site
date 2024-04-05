import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import GuestsList from './GuestsList'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <GuestsList />
        <Footer />
    </div>
  )
}

export default Home