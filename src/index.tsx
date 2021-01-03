import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import { Home } from './Home'
import { About } from './About'
import { Docs } from './Docs'
import { Header } from './Header'
import { Footer } from './Footer'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/docs' component={Docs} />
                <Route path='/' render={() => <div>404</div>} />
            </Switch>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>,
    document.querySelector('#root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
