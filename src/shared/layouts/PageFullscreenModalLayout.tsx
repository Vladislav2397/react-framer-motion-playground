import React from "react"
import { motion } from 'framer-motion'

export const PageFullscreenModalLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <motion.div
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, translateY: '100%' }}
            animate={{ opacity: 1, translateY: '0' }}
            exit={{ opacity: 0, translateY: '100%' }}>
            {children}
        </motion.div>
    )
}