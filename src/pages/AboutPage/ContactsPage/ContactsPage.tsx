import React from "react"
import { PageFullscreenModalLayout } from "../../../shared/layouts/PageFullscreenModalLayout"
import { routes } from "../../../shared/lib/router"
import { Link } from "atomic-router-react"
import { useUnit } from "effector-react"

export const ContactsPage: React.FC = () => {
    const [close] = useUnit([routes.about.open])

    return (
        <PageFullscreenModalLayout onBackdropClick={close}>
            <h1>Contacts</h1>
            <Link to={routes.about}>to back</Link>
        </PageFullscreenModalLayout>
    )
}
