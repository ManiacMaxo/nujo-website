import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

const Home = React.lazy(() => import('./Home'))
const About = React.lazy(() => import('./About'))
const Docs = React.lazy(() => import('./Docs'))

const App = () => {
    return (
        <Suspense fallback="loading...">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/docs">
                    <Docs />
                </Route>
                <Route path="/">
                    <div>404</div>
                </Route>
            </Switch>
        </Suspense>
    )
}

export default App
