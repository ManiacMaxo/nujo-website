import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faTrello,
    faGithub,
    faPython,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons'

library.add(faTrello, faGithub, faPython, faTwitter)

export const Footer = () => {
    return (
        <footer className="global-footer bg-dark py-5 text-center">
            <div className="container grid grid-3">
                <div>
                    <h1>nujo</h1>
                    <p id="copyright">
                        Copyright &copy; {new Date().getFullYear()}
                    </p>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="/index.html">Home</a>
                        </li>
                        <li>
                            <a href="/features.html">Features</a>
                        </li>
                        <li>
                            <a href="/docs.html">Docs</a>
                        </li>
                    </ul>
                </nav>
                <div className="social">
                    <a href="https://github.com/VIVelev/nujo" title="github">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                    <a
                        href="https://pypi.org/project/nujo/"
                        title="pypi project"
                    >
                        <FontAwesomeIcon icon={['fab', 'python']} />
                    </a>
                    <a
                        href="https://trello.com/b/fObyuiWt/nujo-develop"
                        title="trello"
                    >
                        <FontAwesomeIcon icon={['fab', 'trello']} />
                    </a>
                    <a href="https://twitter.com" title="twitter">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
