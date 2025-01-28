import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AboutPage from './Pages/AboutPage.jsx'
import HomePage from './Pages/HomePage.jsx'
import Page404 from './Pages/404page.jsx'
import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route,} from 'react-router-dom'
import './index.css'
import CardDetails from './Pages/CardDetails.jsx'
import RecipeInfo from './Components/RecipeInfo.jsx'
import Ingridients from './Components/Ingridients.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path = "/" element = {<App />} errorElement = {<Page404 />} >
  <Route path = "/" element = {<HomePage />} />
  <Route path = "About" element = {<AboutPage />} />
  <Route path = "/Recipe/:id" element = {<CardDetails />} > 
  <Route path = "/Recipe/:id/instructions" element={<RecipeInfo />} />
  <Route path = "/Recipe/:id/ingridients" element = {<Ingridients />} />
  </Route>
  </Route>
  
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router = {router} />) 