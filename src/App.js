import React from 'react'
import './App.css'

import MapView from './components/MapView'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './components/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/map">
          <MapView />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
