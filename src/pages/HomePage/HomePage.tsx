import React from "react"
import { motion } from 'motion/react'

export const HomePage: React.FC = () => {
    return (
        <motion.div transition={{ duration: 1 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h1>HomePage</h1>
        </motion.div>
    )
}