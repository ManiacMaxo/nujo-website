import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import React from 'react'

interface Props {}

const Header: React.FC<Props> = () => {
    return (
        <header className={styles['global-header']}>
            <nav className={[styles.flex, 'flex', 'container'].join(' ')}>
                <h1 className={styles['logo']}>nujo</h1>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName={styles.active}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName={styles.active}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/docs" activeClassName={styles.active}>
                            Docs
                        </NavLink>
                    </li>
                    <li>
                        <a href="https://github.com/VIVelev/nujo">GitHub</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
