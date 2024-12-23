import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './components/About.jsx'
import Dashboard from './components/Dashboard.jsx'
import Blogs from './components/Blogs.jsx'
import Contact from './components/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import Error from './components/Error.jsx'
import Products from './components/Products.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/products',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Products></Products>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/navbar',
        element: <Navbar></Navbar>
      }
    ]
  }

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
