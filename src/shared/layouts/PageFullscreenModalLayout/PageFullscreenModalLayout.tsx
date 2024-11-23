import React from "react"
import { motion } from 'framer-motion'
import styles from './PageFullscreenModalLayout.module.scss'

export type PageFullscreenModalLayoutProps = {
    onBackdropClick?: () => void
}

export const PageFullscreenModalLayout: React.FC<
    React.PropsWithChildren<PageFullscreenModalLayoutProps>
> = ({ children, onBackdropClick }) => {
    return (
        <motion.div
            className={styles.root}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onBackdropClick}>
            <motion.div
                className={styles.box}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, translateY: '100%' }}
                animate={{ opacity: 1, translateY: '0' }}
                exit={{ opacity: 0, translateY: '100%' }}
                onClick={e => {e.stopPropagation()}}>
                {children}
            </motion.div>
        </motion.div>
    )
}