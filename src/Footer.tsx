export const Footer = () => {
    return (
        <footer className='global-footer bg-dark py-5 text-center'>
            <div className='container grid grid-3'>
                <div>
                    <h1>nujo</h1>
                    <p id='copyright'>
                        Copyright &copy; {new Date().getFullYear()}
                    </p>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href='/index.html'>Home</a>
                        </li>
                        <li>
                            <a href='/features.html'>Features</a>
                        </li>
                        <li>
                            <a href='/docs.html'>Docs</a>
                        </li>
                    </ul>
                </nav>
                <div className='social'>
                    <a href='https://github.com/VIVelev/nujo' title='github'>
                        <i className='fab fa-github fa-2x'></i>
                    </a>
                    <a
                        href='https://pypi.org/project/nujo/'
                        title='pypi project'
                    >
                        <i className='fab fa-python fa-2x'></i>
                    </a>
                    <a
                        href='https://trello.com/b/fObyuiWt/nujo-develop'
                        title='trello'
                    >
                        <i className='fab fa-trello fa-2x'></i>
                    </a>
                    <a href='https://twitter.com' title='twitter'>
                        <i className='fab fa-twitter fa-2x'></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}
