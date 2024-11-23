import React from 'react'
import styles from './ArticleRow.module.scss'

export const ArticleRow: React.FC<{ title: string, onClick?: () => void }> = ({ title, onClick }) => {
    return (
        <div className={styles.root} onClick={onClick}>
            <div className={styles.image}></div>
            <div className={styles.content}>
                <h4>{title}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nobis voluptatum nulla doloribus provident quasi autem!</p>
            </div>
        </div>
    )
}