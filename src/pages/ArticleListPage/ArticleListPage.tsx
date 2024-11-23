import React from "react"
import { ArticleRow } from "./ArticleRow"
import { useNavigate } from "react-router-dom"
import { AnimatedOutlet } from '../../shared/lib/router/AnimatedOutlet'
import { useLocation } from 'react-router-dom'
import { PageFadeLayout } from "../../shared/layouts/PageFadeLayout"

export const ArticleListPage: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const key = location.pathname.slice(1).split('/')[1]

    return (
        <PageFadeLayout>
            <ArticleRow id={1} title={'some article'} onClick={() => navigate('1')} />
            <br/>
            <ArticleRow id={2} title={'some article 2'} onClick={() => navigate('2')} />
            <br/>
            <ArticleRow id={3} title={'some article 3'} onClick={() => navigate('3')} />
            <AnimatedOutlet keyValue={key} />
        </PageFadeLayout>
    )
}
