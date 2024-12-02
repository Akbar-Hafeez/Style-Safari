import react from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import CustomerRouter from './Routes/CustomerRouter'


function App() {
  

  return (
    <>
    <Routes>
      <Route exact path='/*' element={<CustomerRouter/>}></Route>
    </Routes>
    {/* <HomePage/>
  /* <Product/> */ }

  {/* <ProductDetails/> */}
  {/* <Cart/> */}
  {/* <Checkout/> */}
  {/* <Order/> */}
 {/* <OrderDetails/> */}
    </>
  )
}

export default App
