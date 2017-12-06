import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router'

import Navigation  from './components/Navigation.js'
import Home from './components/Home'
import Movie from './components/Movie'
import Book from './components/Book'
import Network from './components/Network'
import Group from './components/Group'
import Seach from './components/Seach'
import NotFound from './components/NotFound'

class Routes extends Component {
    updateHandle() {
      console.log('每次router变化之后都会触发')
    }
    render() {
        return (
             <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={Navigation}>
                    <IndexRoute component={Home}/>
                    <Route path='home' component={Home}/>
                    <Route path='movie' component={Movie}/>
                    <Route path='book' component={Book}/>
                    <Route path="network" component={Network}/>
                    <Route path="group" component={Group}/>
                    <Route path="seach" component={Seach}/>
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default Routes
