import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import routes from './route'

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                {
                    routes.map((route,i) => {
                        return(
                            <Route key={i} {...route}/>
                        )
                    })
                }
                </Switch>
            </Router>
        )
    }
}
