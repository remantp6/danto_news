import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Latest from './pages/Latest'
import Authors from './pages/Authors'
import About from './pages/About'
import Contact from './pages/Contact'
import Study from './components/Study'
import People from './components/People'
import News from './components/News'
import Reading from './components/Reading'
import Science from './components/Science'


const App = () => {
  return (
    <>
    <BrowserRouter basename="/danto-news">
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/latest' element={<Latest/>} />
      <Route path='/authors' element={<Authors/>} />
      <Route path='/page/about' element={<About/>} />
      <Route path='/page/contact' element={<Contact/>} />
      <Route path='/banner_content/study' element={<Study/>} />
      <Route path='/banner_content/people' element={<People/>} />
      <Route path='/banner_content/news' element={<News/>} />
      <Route path='/banner_content/reading' element={<Reading/>} />
      <Route path='/banner_content/science' element={<Science/>} />
    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

