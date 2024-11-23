import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

import styles from './ArticlePage.module.scss'

export const ArticlePage: React.FC = () => {
    const navigate = useNavigate()
    const params = useParams<{ articleId: string }>()

    if (!params || !params.articleId) return null

    const id = params.articleId

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.root}
            onClick={() => navigate('..')}>
            <motion.div layoutId={`article-box-${id}`} className={styles.box} onClick={e => {e.stopPropagation()}}>
                <div className={styles.image}>
                    <motion.div className={styles.cover} layoutId={`article-image-${id}`}></motion.div>
                </div>
                <motion.div layoutId={`article-content-${id}`}>
                    <h2>title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatum facilis alias eos illo perspiciatis.</p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}