import React from "react"
import { PageFadeLayout } from "../../shared/layouts/PageFadeLayout"
import { AnimatePresence, motion } from "framer-motion"

import * as model from './model'
import { useUnit } from "effector-react"

export const HomePage: React.FC = () => {
    // return (
    //     <>
    //         <h1>HomePage</h1>
    //         <Content />
    //     </>
    // )
    return (
        <PageFadeLayout>
            <h1>HomePage</h1>
            <Content />
        </PageFadeLayout>
    )
}

const Content = () => {
    // const [flag] = useUnit([model.$flag])
    const [toggle] = useUnit([model.toggled])

    return (
        <>
            <button onClick={toggle}>toggle</button>
            <AnimatePresence mode='wait'>
                <Item1 key={1} />
                {/* {!flag && <Item2 key={2} />} */}
            </AnimatePresence>
        </>
    )
}

const Item1 = () => {
    const [flag] = useUnit([model.$flag])
    if (!flag) return null
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            1
        </motion.div>
    )
}
const Item2 = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            2
        </motion.div>
    )
}
