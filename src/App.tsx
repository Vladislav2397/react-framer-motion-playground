import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatedOutlet } from './shared/lib/router/AnimatedOutlet'

const App: React.FC = () => {
  const location = useLocation()

  const key = location.pathname.slice(1).split('/')[0]

  return (
    <div>
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
      <AnimatedOutlet keyValue={key} />
    </div>
  )
}

export default App
