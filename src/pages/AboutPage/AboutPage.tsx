import React from "react"
import { PageFadeLayout } from "../../shared/layouts/PageFadeLayout"
import { Link } from "react-router-dom"
import { AnimatedOutlet } from "../../shared/lib/router/AnimatedOutlet"

export const AboutPage: React.FC = () => {
    return (
        <PageFadeLayout>
            <h1>AboutPage</h1>
            <Link to={'/about/contacts'}>Contacts</Link>
            <AnimatedOutlet />
        </PageFadeLayout>
    )
}
