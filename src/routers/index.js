import React from 'react'
import {
  Route,
  Switch,
  HashRouter
} from 'react-router-dom'

import AppContainer from '@/App.js'
import HomeContainer from '@/pages/home/home.js'
import clauseContainer from '@/containers/clauseContainer'

const routes = (
  <HashRouter>
    <AppContainer>
        <HomeContainer>
          <Route path='/clause' component={clauseContainer} />
       </HomeContainer>
      </AppContainer>
  </HashRouter>
)

export default routes
