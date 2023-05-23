import React from 'react'
import { useEffect } from 'react'
import Banner from '../components/Banner'
import Lifestyle from '../components/Lifestyle'
import Shopping from '../components/Shopping'
import Food from '../components/Food'
import Sport from '../components/Sport'
import Footer from '../components/Footer'

const Home = () => {
  useEffect(() => {
    document.title = "DantoNews";
  }, []);
  return (
    <>
     <Banner/>
     <Lifestyle/>
     <Shopping/>
     <Food/>
     <Sport/>
     <Footer/>
    </>
  )
}

export default Home
