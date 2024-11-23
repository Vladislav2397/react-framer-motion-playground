import React from 'react'
import { PageFullscreenModalLayout } from '../../shared/layouts/PageFullscreenModalLayout'
import { useNavigate } from 'react-router-dom'

export const ArticlePage: React.FC = () => {
    const navigate = useNavigate()

    return <PageFullscreenModalLayout onBackdropClick={() => navigate('/articles')}>
        <h2>title</h2>
        <p>description</p>
    </PageFullscreenModalLayout>
}