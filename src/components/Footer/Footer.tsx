import styles from './Footer.module.scss'
import { FaTrello, FaGithub, FaPython, FaTwitter } from 'react-icons/fa'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer
            className={[
                styles['global-footer'],
                'bg-dark',
                'py-5',
                'text-center',
            ].join(' ')}
        >
            <div className="container grid grid-3">
                <div>
                    <h1>nujo</h1>
                    <p>Copyright &copy;{new Date().getFullYear()}</p>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/docs">Docs</Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.social}>
                    <a href="https://github.com/VIVelev/nujo" title="github">
                        <FaGithub size={28} />
                    </a>
                    <a
                        href="https://pypi.org/project/nujo/"
                        title="pypi project"
                    >
                        <FaPython size={28} />
                    </a>
                    <a
                        href="https://trello.com/b/fObyuiWt/nujo-develop"
                        title="trello"
                    >
                        <FaTrello size={28} />
                    </a>
                    <a href="https://twitter.com" title="twitter">
                        <FaTwitter size={28} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
