
import React from 'react'
import Announcement from './Announcement'
import Categories from './Categories'
import Header from './Header'
import Products from './Products'
import Slider from './Slider'

function Home() {
  return (
    <div>
        <Announcement/>
       <Header/>
       <Slider/>
       <Categories/>
       <Products/>
    </div>
  )
}

export default Home
