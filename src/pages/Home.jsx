import React from 'react'
import SliderCompenent from '../components/home/SliderCompenent'
import Sorting from '../components/home/Sorting'
import Category from '../components/home/Category'
import Product from '../components/home/Product'


const Home = () => {
  return (
    <div>

       <SliderCompenent/>
       <Sorting/>
       <div className='flex'>
        <Category/>
        <Product/>

       </div>
    </div>
  )
}

export default Home