import React from "react"
import { motion } from 'motion/react'

export const AboutPage: React.FC = () => {
    return (
        <motion.div transition={{ duration: 1 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h1>AboutPage</h1>
        </motion.div>
    )
}