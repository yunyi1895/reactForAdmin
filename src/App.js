import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
//import Home from '@/pages/home/home.js'

class AppContainer extends Component {
  render () {
    const {children} = this.props
    return (
        <div className="root-wrap" >
           {children}
      </div>
    )
  }
}

export default withRouter(connect()(AppContainer))
