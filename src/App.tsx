import React from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatedOutlet } from './shared/lib/router/AnimatedOutlet'
import { Header } from './widgets/Header/Header'

const App: React.FC = () => {
  const location = useLocation()

  const key = location.pathname.slice(1).split('/')[0]

  return (
    <div>
      <Header />
      <AnimatedOutlet keyValue={key} />
    </div>
  )
}

export default App
