import React from "react"
import { PageFadeLayout } from "../../shared/layouts/PageFadeLayout"
import { ContactsPage } from "./ContactsPage"
import { routes } from "../../shared/lib/router"
import { createRoutesView } from "../../shared/lib/router/createRoutesView"
import { Link, useRouter } from "atomic-router-react"
import { useUnit } from "effector-react"

const Routes = createRoutesView({
    routes: [
      { route: routes.contacts, view: ContactsPage, key: 'contacts' },
    ],
})

routes.about.$isOpened.watch(state => {
    console.log('about isOpened', state)
})
routes.contacts.$isOpened.watch((state) => {
    console.log('contacts isOpened', state)
})

export const AboutPage: React.FC = () => {
    const router = useRouter()
    const [path] = useUnit([router.$path])

    const [, secondArg] = path.slice(1).split('/')

    return (
        <PageFadeLayout>
            <h1>AboutPage</h1>
            <Link to={routes.contacts}>to contacts</Link>
            <Routes routeKey={secondArg} />
        </PageFadeLayout>
    )
}
