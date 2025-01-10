import Layout from './Componants/Layout/Layout'
import Home from './Componants/Home/Home'
import About from './Componants/About/About'
import PortFolio from './Componants/PortFolio/PortFolio'
import Contact from './Componants/Contact/Contact'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

export default function App() {

  let Routes = createBrowserRouter([
    {path: '' ,element: <Layout/> ,children: [
      {path: '' ,element: <Home/>},
      {path: 'home' ,element: <Home/>},
      {path: 'about' ,element: <About/>},
      {path: 'portfolio' ,element: <PortFolio/>},
      {path: 'contact' ,element: <Contact/>},
    ]}
  ])
  return (
    <>
      <RouterProvider router={Routes}/>

    </>
  )
}
