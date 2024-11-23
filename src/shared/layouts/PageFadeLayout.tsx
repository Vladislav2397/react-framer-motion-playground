import React from "react"
import { motion } from 'framer-motion'

export const PageFadeLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <motion.div
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            {children}
        </motion.div>
    )
}