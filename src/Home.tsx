import React from 'react'
import './scss/Home.scss'

interface Props {}

export const Home: React.FC<Props> = () => {
    return (
        <main>
            <section className='showcase bg-primary'>
                <div className='container grid'>
                    <div className='showcase-text'>
                        <h1>Easy model building</h1>
                        <p>
                            Build and train ML models easily using intuitive
                            high-level APIs with eager execution, which makes
                            for immediate model iteration and easy debugging.
                        </p>
                        <a
                            href='/features.html'
                            className='btn btn-outline'
                            title='features'
                        >
                            Read More
                        </a>
                    </div>

                    <div className='showcase-form card'>
                        <h2>Request a Demo</h2>
                        <form>
                            <div className='form-control'>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='Name'
                                    required
                                />
                            </div>
                            <div className='form-control'>
                                <input
                                    type='text'
                                    name='company'
                                    placeholder='Company Name'
                                    required
                                />
                            </div>
                            <div className='form-control'>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    required
                                />
                            </div>
                            <button
                                type='submit'
                                className='btn btn-primary'
                                title='Send'
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section className='stats'>
                <div className='container'>
                    <h3 className='stats-heading text-center my-1'>
                        A Reverse-mode Automatic Differentiation library for
                        Neural Networks
                    </h3>

                    <div className='grid grid-3 text-center my-4'>
                        <article>
                            <i className='fas fa-server fa-3x'></i>
                            {/* <h3 className="counter" data-target="10349405"></h3> */}
                            <h3>10,349,405</h3>
                            <p className='text-secondary'>Deployments</p>
                        </article>
                        <article>
                            <i className='fas fa-upload fa-3x'></i>
                            <h3>
                                {/* <div className="counter" data-target="902"></div> */}
                                902 TB
                            </h3>
                            <p className='text-secondary'>Published</p>
                        </article>
                        <article>
                            <i className='fas fa-project-diagram fa-3x'></i>
                            {/* <h3 className="counter" data-target="2205669"></h3> */}
                            <h3>2,205,669</h3>
                            <p className='text-secondary'>Projects</p>
                        </article>
                    </div>
                </div>
            </section>
            <section className='cli'>
                <div className='container grid'>
                    <code>
                        <header>
                            <div className='mac-buttons'>
                                <button
                                    id='redCloseButton'
                                    title='do not click'
                                ></button>
                                <div></div>
                                <div></div>
                            </div>
                            <i
                                className='theme fas fa-sun'
                                title='change theme'
                            ></i>
                        </header>
                        <p>
                            <span className='comment'>
                                Requires the latest pip
                            </span>
                            <span className='command'>
                                pip install --upgrade pip
                            </span>
                            <br />
                            <span className='comment'>
                                Current stable release
                            </span>
                            <span className='command'>pip install nujo</span>
                        </p>
                    </code>
                    <article className='card'>
                        <h3>Easy to use, cross platform CLI</h3>
                    </article>
                    <article className='card'>
                        <h3>Spin up a model in seconds</h3>
                    </article>
                </div>
            </section>

            <section className='cloud bg-primary my-2 py-3'>
                <div className='container grid'>
                    <div className='text-center'>
                        <h2 className='lg'>Advanced model training</h2>
                        <p className='lead my-1'>
                            Upload your model to the Cloud and train easily
                            without powerful computational tools
                        </p>
                        <a
                            href='features.html'
                            className='btn btn-dark'
                            title='features'
                        >
                            Read More
                        </a>
                    </div>
                    <img src='/img/cloud.png' alt='' />
                </div>
            </section>

            <section className='logos my-1'>
                <h2 className='md text-center'>Used tools</h2>
                <div className='container flex'>
                    <article className='card'>
                        <h4>python</h4>
                        <img src='/img/python.svg' alt='python' />
                    </article>
                    <article className='card'>
                        <h4>numpy</h4>
                        <img src='/img/numpy.svg' alt='numpy' />
                    </article>
                    <article className='card'>
                        <h4>pdoc3</h4>
                        <img src='/img/pdoc.png' alt='pdoc3' />
                    </article>
                </div>
            </section>
        </main>
    )
}
