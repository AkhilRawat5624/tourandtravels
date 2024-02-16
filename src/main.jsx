import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider,Route } from 'react-router-dom'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Layout from './route.jsx'
import Carousel from './components/Carousel.jsx'
import Trips from './Pages/Trips.jsx'
import LoginPage from './Admin/Login.jsx'
import RegisterPage from './Admin/Register.jsx'
import WelcomePage from './Pages/Welcome.jsx'
import AddPage from './Pages/Addrecord.jsx'
import ProductPage from './Pages/Viewproduct.jsx'
import EditPage from './Pages/Edit.jsx'
import ProfilePage from './Pages/Profile.jsx'
import Email from './components/Email.jsx'
import Testimonials from './components/Testimonials.jsx'
import TripsPage from './Pages/Addrecord.jsx'

const router=createBrowserRouter([
  {
    path:'/',
  element:<Layout/>,

    children: [
     
      {
        path:'',
        element:(
        <>
        <Carousel/>
        <h1 className='text-center mt-5'>RECOMMENDED FOR YOU</h1>
        <Trips/>
        <Trips/>
        <Testimonials/>
        <Email/>
        </>),
      
      },
      {
        
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },  
     
      {
        path:"Login",
        element:<LoginPage/>
      },  
      {
        path:"Register",
        element:<RegisterPage/>
      }, 
      {
        path:"welcome",
        element :<WelcomePage/>
      } ,
      {
        path :"add",
        element : <AddPage/>
      },
      {
        path :"product",
        element : <ProductPage/>
      },
      {
        path :"edit/:id",
        element : <EditPage/>
      },
      {
        path : "profile",
        element : <ProfilePage/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)
