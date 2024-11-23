import { useGate, useUnit } from 'effector-react'
import React from 'react'

import * as model from './model'
import { PageFadeLayout } from '../../shared/layouts/PageFadeLayout'
import { AnimatePresence } from 'framer-motion'

export const BlogPage: React.FC = () => {
    useGate(model.BlogPageGate)
    const [isLoading, total, list] = useUnit([model.$isLoading, model.$total, model.$posts])

    const renderItem = (item: any) => (
        <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
        </div>
    )

    return (
        <AnimatePresence mode='wait'>
            {isLoading ? (
                <PageFadeLayout key={1}>
                    <p>Loading...</p>
                </PageFadeLayout>
            ) : (
                <PageFadeLayout key={2}>
                    <p>{total}</p>
                    <span>{isLoading ? 'loading' : 'loaded'}</span>
                    {list.map(renderItem)}
                </PageFadeLayout>
            )}
        </AnimatePresence>
    )
}
