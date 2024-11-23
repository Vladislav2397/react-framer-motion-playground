import React from "react";
import { PageFullscreenModalLayout } from "../../../shared/layouts/PageFullscreenModalLayout"
import { Link } from "react-router-dom";

export const ContactsPage: React.FC = () => {
    return (
        <PageFullscreenModalLayout>
            <h1>Contacts</h1>
            <Link to={'..'}>to back</Link>
        </PageFullscreenModalLayout>
    )
}