import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from '../components/layouts/footer/Footer'
import { Header } from '../components/layouts/header/navbar/Header'
import { HomePage } from '../pages/HomePage'
import { Menu } from '../pages/MenuPage'

export const Layout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
      <Footer/>
    </>
  )
}
