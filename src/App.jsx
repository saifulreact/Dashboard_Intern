import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import LayoutOne from "./layouts/LayoutOne"
import Home from "./pages/Home/Home"
import Product from "./pages/product/Product"
import Dashboard from "./pages/dashboard/Dashboard"
import ProductDetails from "./pages/productdetails/ProductDetails"
import Orderpage from "./pages/order/Orderpage"
import Payment from "./pages/payment/Payment"
import Client from "./pages/clientpage/Client"
import Tranjextion from "./pages/tranjection/Tranjextion"
import Header from "./components/header/Header"

function App() {
  const myroute=createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutOne/>}>
        <Route index element={<Home/>}/>
        <Route path="product" element={<Product/>}/>
        <Route path="order" element={<Orderpage/>}/>
        <Route path="payment" element={<Payment/>}/>
        <Route path="client" element={<Client/>}/>
        <Route path="tranjection" element={<Tranjextion/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/productdetails" element={<ProductDetails/>}/>
        <Route path="seller" element={<Header/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <>
     <RouterProvider router={myroute}/>
    </>
  )
}

export default App
