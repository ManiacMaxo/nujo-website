import React from 'react'
import { FaInfo } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Docs.scss'

interface Props {}

const Docs: React.FC<Props> = () => {
    return (
        <main className="docs-page">
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
                                    <Link to="#">Introduction</Link>
                                </li>
                                <li>
                                    <Link to="#">Installation</Link>
                                </li>
                                <li>
                                    <Link to="#">Starting up</Link>
                                </li>
                            </ul>
                        </nav>
                        <h3 className="my-2">Resources</h3>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="#">Something</Link>
                                </li>
                                <li>
                                    <Link to="#">Datasets</Link>
                                </li>
                                <li>
                                    <Link to="#">Something else</Link>
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
                            <FaInfo />
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Nostrum, voluptatem.
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Obcaecati accusamus architecto porro esse
                            atque? Quis facilis vitae at ipsa saepe!
                        </p>
                        <Link to="#" className="btn btn-primary">
                            Install <i>nujo</i>
                        </Link>
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
                                </a>{' '}
                                python environment
                            </li>
                        </ul>

                        <h3>Install</h3>
                        <p>Mac (Homebrew)</p>
                        <p className="command code">brew install python3</p>
                        <p>Python</p>
                        <p className="command code">pip3 install nujo</p>
                        <p>Anaconda</p>
                        <p className="command code">conda install nujo</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Docs
