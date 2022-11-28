import React from 'react'
import Navbar from '../src/components/Navabr'
import Hero from '../src/components/Hero'
import Card from '../src/components/Card'
import data from './data'

const yoyo = data.map(cards => {
  return <Card
  key = {cards.id}
  item = {cards}
        />
})


function App() {
  

  return (
    <div>
    
    <Navbar/>
    <Hero/>
    <section className='cards-list'>
    {yoyo}
    </section>
    
    </div>
  )
}

export default App
