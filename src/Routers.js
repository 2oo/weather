import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import TopMenu from './TopMenu'
import Weather from './Weather/'
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'

export default props => (
  <Router>
    <div>
      <TopMenu />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:city" component={Weather} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)
