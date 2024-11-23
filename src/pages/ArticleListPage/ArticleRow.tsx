import React from 'react'
import styles from './ArticleRow.module.scss'
import { motion } from 'framer-motion'

export const ArticleRow: React.FC<{ id: number, title: string, onClick?: () => void }> = ({ id, title, onClick }) => {
    return (
        <motion.div layoutId={`article-box-${id}`} className={styles.root} onClick={onClick}>
            <motion.div layoutId={`article-image-${id}`} className={styles.image}></motion.div>
            <motion.div layoutId={`article-content-${id}`} className={styles.content}>
                <h4>{title}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nobis voluptatum nulla doloribus provident quasi autem!</p>
            </motion.div>
        </motion.div>
    )
}