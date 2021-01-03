import './scss/About.scss'
import React from 'react'

interface Props {}

export const About: React.FC<Props> = () => {
    return (
        <main>
            <section className='heading bg-primary py-4'>
                <div className='container grid'>
                    <div>
                        <h1 className='xl'>Features</h1>
                        <p className='lead'>
                            Check out some of the features that separate nujo
                            from the competition
                        </p>
                    </div>
                    <img src='/img/server.svg' alt='' />
                </div>
            </section>

            <section className='sub-heading bg-light py-4'>
                <div className='container grid'>
                    <div>
                        <h2 className='md'>
                            The <i>nujo</i> library
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugit laboriosam labore laudantium quibusdam
                            delectus magni consectetur autem iusto animi,
                            repudiandae, et beatae eveniet tempore sit! Dolor,
                            dolores maiores. Ratione, quibusdam!
                        </p>
                    </div>
                    <img src='/img/ai.svg' alt='' />
                </div>
            </section>

            <section className='main my-2'>
                <div className='container grid grid-3'>
                    <article className='card flex'>
                        <i className='fas fa-server fa-2x'></i>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Alias possimus sit saepe ullam. Quisquam,
                            ipsam quod. Facilis delectus dolor exercitationem.
                        </p>
                    </article>
                </div>
            </section>
        </main>
    )
}
