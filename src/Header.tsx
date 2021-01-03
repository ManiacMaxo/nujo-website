import { NavLink } from 'react-router-dom'
import React from 'react'

interface Props {}

export const Header: React.FC<Props> = () => {
    return (
        <header className='global-header'>
            <nav className='container flex'>
                <h1 className='logo'>nujo</h1>
                <ul>
                    <li>
                        <NavLink exact to='/' activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' activeClassName='active'>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/docs' activeClassName='active'>
                            Docs
                        </NavLink>
                    </li>
                    <li>
                        <a href='https://github.com/VIVelev/nujo'>GitHub</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
