import './scss/Docs.scss'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
library.add(faInfo)

interface Props {}

export const Docs: React.FC<Props> = () => {
    return (
        <main>
            <section className="heading bg-primary py-3">
                <div className="container grid">
                    <div>
                        <h1 className="xl">Docs</h1>
                        <p className="lead">
                            Find out how to use the <i>nujo</i> library
                        </p>
                    </div>
                    <img src="/img/docs.svg" alt="" />
                </div>
            </section>
            <section className="main my-4">
                <div className="container grid">
                    <aside className="card bg-light py-3">
                        <h3 className="my-2">Essentials</h3>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">Introduction</a>
                                </li>
                                <li>
                                    <a href="#">Installation</a>
                                </li>
                                <li>
                                    <a href="#">Starting up</a>
                                </li>
                            </ul>
                        </nav>
                        <h3 className="my-2">Resources</h3>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">Something</a>
                                </li>
                                <li>
                                    <a href="#">Datasets</a>
                                </li>
                                <li>
                                    <a href="#">Something else</a>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                    <div className="card">
                        <h2>Introduction</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Molestiae, nam quod itaque velit iusto fuga
                            saepe sit animi facere dolor perferendis repellat
                            consequatur, cumque laborum alias quis. Praesentium,
                            debitis dolor.
                        </p>
                        <div className="alert alert-success">
                            <FontAwesomeIcon icon="info" />
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Nostrum, voluptatem.
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Obcaecati accusamus architecto porro esse
                            atque? Quis facilis vitae at ipsa saepe!
                        </p>
                        <a href="#" className="btn btn-primary">
                            Install <i>nujo</i>
                        </a>
                        <h3>Requirements</h3>
                        <ul>
                            <li>MacOS, Windows 10, Linux</li>
                            <li>Python 3.6 or higher</li>
                            <li>
                                <a
                                    href="https://python-poetry.org/"
                                    className="text-link"
                                >
                                    Poetry
                                </a>
                                python environment
                            </li>
                        </ul>

                        <h3>Install</h3>
                        <p>Mac (Homebrew)</p>
                        <pre>
                            <code className="command">
                                brew install python3
                            </code>
                        </pre>
                        <p>Python</p>
                        <pre>
                            <code className="command">pip3 install nujo</code>
                        </pre>
                        <p>Anaconda</p>
                        <pre>
                            <code className="command">conda install nujo</code>
                        </pre>
                    </div>
                </div>
            </section>
        </main>
    )
}
