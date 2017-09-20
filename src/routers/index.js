import React from 'react'
import {
  Route,
  Switch,
  HashRouter
} from 'react-router-dom'

import CounterContainer from '@/containers/CounterContainer'
import AppContainer from '@/App.js'
import HomeContainer from '@/pages/home/home.js'
import NoMatchContainer from '@/containers/NoMatchContainer'
import FormContainer from '@/containers/SimpleFormContainer'

import clauseContainer from '@/containers/clauseContainer'


const routes = (
  <HashRouter>
    <AppContainer>
        <HomeContainer>
          <Route path='/counter' component={CounterContainer} />
          <Route path='/form' component={ FormContainer} />
          <Route path='/clause' component={clauseContainer} />
       </HomeContainer>
      </AppContainer>
  </HashRouter>
)

export default routes
      /*<Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path='/counter' component={CounterContainer} />
        <Route path='/form' component={FormContainer} />
        <Route component={NoMatchContainer} />
      </Switch>*/