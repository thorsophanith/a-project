import Delivery from '@/components/Delivery'
import Feature from '@/components/Feature'
import Hero from '@/components/Hero'
import PopularBurger from '@/components/PopularBurger'
import Reservation from '@/components/Reservation'
import Team from '@/components/Team'
import React from 'react'

const Home = () => {
    return (
    <div className='text-2xl'>
    <Hero />
    <Feature />
    <PopularBurger />
    <Delivery />
    <Team />
    <Reservation />
    </div>
    )
}

export default Home