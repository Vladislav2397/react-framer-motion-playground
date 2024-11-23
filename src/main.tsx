import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './pages/pages.ts'

import './shared/styles/global.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
