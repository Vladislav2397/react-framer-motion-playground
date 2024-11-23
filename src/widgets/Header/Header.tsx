import React from "react";
import { Link } from "react-router-dom";

import styles from './Header.module.scss'

export const Header: React.FC = () => {
    return (
        <div className={styles.root}>
            <Link className={styles.link} to={'/'}>Home</Link>
            <Link className={styles.link} to={'/about'}>About</Link>
        </div>
    )
}