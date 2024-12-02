import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from '../customer/components/pages/HomePage'
import Product from '../customer/components/product/Product'
import Cart from '../customer/components/cart/Cart'
import Navigation from '../customer/components/navigation/Navigation'
import Footer from '../customer/components/footer/Footer'



export default function CustomerRouter() {
  return (
  <div>
    <div>
      <Navigation/>
    </div>
    <Routes>
      {/* <Route exact path='/' element={<HomePage/>}></Route> */}
      <Route exact path='/' element={<Cart/>}></Route>
      <Route exact path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
      <Route exact path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
      
    </Routes>
    <div>
      <Footer/>
    </div>
  </div>
  )
}
