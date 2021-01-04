import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faTrello,
    faGithub,
    faPython,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'

library.add(faTrello, faGithub, faPython, faTwitter)
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
                        <FontAwesomeIcon
                            icon={['fab', 'github']}
                            className="fa-2x"
                        />
                    </a>
                    <a
                        href="https://pypi.org/project/nujo/"
                        title="pypi project"
                    >
                        <FontAwesomeIcon
                            icon={['fab', 'python']}
                            className="fa-2x"
                        />
                    </a>
                    <a
                        href="https://trello.com/b/fObyuiWt/nujo-develop"
                        title="trello"
                    >
                        <FontAwesomeIcon
                            icon={['fab', 'trello']}
                            className="fa-2x"
                        />
                    </a>
                    <a href="https://twitter.com" title="twitter">
                        <FontAwesomeIcon
                            icon={['fab', 'twitter']}
                            className="fa-2x"
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
