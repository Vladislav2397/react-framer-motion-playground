import React from "react";
import { PageFullscreenModalLayout } from "../../../shared/layouts/PageFullscreenModalLayout"
import { Link, useNavigate } from "react-router-dom"

export const ContactsPage: React.FC = () => {
    const navigate = useNavigate()

    return (
        <PageFullscreenModalLayout onBackdropClick={() => {
            navigate('..')
        }}>
            <h1>Contacts</h1>
            <Link to={'..'}>to back</Link>
        </PageFullscreenModalLayout>
    )
}