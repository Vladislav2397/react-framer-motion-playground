import React from "react";

import styles from './Header.module.scss'
import { Link } from "atomic-router-react";
import { routes } from "../../shared/lib/router";

export const Header: React.FC = () => {
    return (
        <div className={styles.root}>
            <Link className={styles.link} to={routes.home}>Home</Link>
            <Link className={styles.link} to={routes.about}>About</Link>
            {/* <Link className={styles.link} to={'/'}>Home</Link>
            <Link className={styles.link} to={'/about'}>About</Link>
            <Link className={styles.link} to={'/articles'}>Articles</Link>
            <Link className={styles.link} to={'/blog'}>Blog</Link> */}
        </div>
    )
}