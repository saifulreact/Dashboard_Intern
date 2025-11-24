import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import LayoutOne from "./layouts/LayoutOne"
import Home from "./pages/Home/Home"
import Product from "./pages/product/Product"

function App() {
  const myroute=createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutOne/>}>
        <Route index element={<Home/>}/>
        <Route path="product" element={<Product/>}/>
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
