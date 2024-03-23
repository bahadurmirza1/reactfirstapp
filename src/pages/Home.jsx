import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'

export default function Home({products}) {
  return (
    <>
    <Header/>
    <Body products={products}/>
    <Footer/>
    </>
  )
}
