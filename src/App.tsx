import React from 'react'
import { createHistoryRouter } from 'atomic-router';
import { createRouteView, RouterProvider, useRouter } from 'atomic-router-react'
import { createBrowserHistory } from 'history';

import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'

import { Header } from './widgets/Header/Header'

import { routes } from './shared/lib/router/index.ts'
import './shared/styles/global.scss'
import { AnimatePresence } from 'framer-motion'
import { useUnit } from 'effector-react'
import { createRoutesView } from './shared/lib/router/createRoutesView.tsx';
// import { PageFadeLayout } from './shared/layouts/PageFadeLayout'

const router = createHistoryRouter({
  routes: [
    { path: '/', route: routes.home },
    { path: '/about/contacts', route: [routes.about, routes.contacts] },
    { path: '/about', route: routes.about },
  ],
})
const history = createBrowserHistory();

router.setHistory(history)

const Routes = createRoutesView({
  routes: [
    { route: routes.home, view: HomePage, key: 'home' },
    { route: routes.about, view: AboutPage, key: 'about' },
  ],
})
// const HomeRoute = createRouteView({
//   route: routes.home,
//   view: HomePage,
// })
// const AboutRoute = createRouteView({
//   route: routes.about,
//   view: AboutPage,
// })

export const App: React.FC = () => {
  return (
    <AnimatePresence>
      <RouterProvider router={router}>
        <AppRoutes />
      </RouterProvider>
    </AnimatePresence>
  )
}

const AppRoutes = () => {
  const router = useRouter()
  const [path] = useUnit([router.$path])

  const [firstArg] = path.slice(1).split('/')

  return (
    <>
      <Header />
      <AnimatePresence mode='wait'>
        <Routes routeKey={firstArg} />
      </AnimatePresence>
    </>
  )
}

// const Routes = () => {
//   const { $path } = useRouter()
//   const [ path ] = useUnit([$path])
  
//   return (
//       <PageFadeLayout key={path}>
//           <HomeRoute key={'/'} />
//           <AboutRoute key={'/about'} />
//       </PageFadeLayout>
//   )
// }
