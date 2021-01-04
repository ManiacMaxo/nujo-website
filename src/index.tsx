import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './scss/index.scss'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const Home = React.lazy(() => import('./Home/Home'))
const About = React.lazy(() => import('./About/About'))
const Docs = React.lazy(() => import('./Docs/Docs'))

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Suspense fallback="loading...">
                        <Home />
                    </Suspense>
                </Route>
                <Route exact path="/about">
                    <Suspense fallback="loading...">
                        <About />
                    </Suspense>
                </Route>
                <Route exact path="/docs">
                    <Suspense fallback="loading...">
                        <Docs />
                    </Suspense>
                </Route>
                <Route path="/" render={() => <div>404</div>}></Route>
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
