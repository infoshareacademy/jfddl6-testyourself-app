import React, { Component } from 'react'

import Router from './Navigation/Router'

class App extends Component {

  state = {
    isDrawerOpen: false
  }

  toggleDrawer = () => this.setState({ isDrawerOpen: !this.state.isDrawerOpen })

  handleClose = () => this.setState({ isDrawerOpen: false });

  render() {
    return (
      <Router/>
      )
  }
}

export default App