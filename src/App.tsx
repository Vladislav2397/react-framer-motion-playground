import React from 'react'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage/AboutPage'
import { AnimatePresence } from 'framer-motion'
import { ContactsPage } from './pages/AboutPage/ContactsPage/ContactsPage'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
          </ul>
        </nav>
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  )
}

const AnimatedRoutes = () => {
  const location = useLocation()

  console.log('location', location)

  const [firstRouteKey, secondRouteKey] = location.pathname.split('/').slice(1)

  return (
    <AnimatePresence mode='wait'>
        <Routes location={location} key={firstRouteKey}>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />}>
                <Route path='/about/contacts' element={<ContactsPage />} key={secondRouteKey}/>
            </Route>
        </Routes>
    </AnimatePresence>
  )
}

export default App
