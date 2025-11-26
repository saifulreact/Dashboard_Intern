import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import LayoutOne from "./layouts/LayoutOne"
import Home from "./pages/Home/Home"
import Product from "./pages/product/Product"
import Dashboard from "./pages/dashboard/Dashboard"

function App() {
  const myroute=createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutOne/>}>
        <Route index element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
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
