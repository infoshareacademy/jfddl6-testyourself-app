import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import AddFavouriteView from './views/AddFavouriteView/AddFavouriteView'
import AddTestsView from './views/AddTestsView/AddTestsView'
import AvailableTestsView from './views/AvailableTestsView/AvailableTestsView'
import FavouriteTestsListView from './views/FavouriteTestsListView/FavouriteTestsListView'
import ListView from './views/ListView/ListView'
import Navigation from './Navigation/Navigation'
import MenuItem from './Navigation/MenuItem'
import DashboardView from './views/DashboardView/DashboardView'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Navigation
            title="#testYourself-App">
              <MenuItem
                to="/dashboard"
                text="Home"
              />
              <MenuItem
                to="/list"
                text="List"
              />
              <MenuItem
                to="/favourite-tests-list"
                text="Favourite tests"
              />
              <MenuItem
                to="/add-tests"
                text="Add tests"
              />
              <MenuItem
                to="/available-tests"
                text="Available tests"
              />
              <MenuItem
                to="/add-favourite"
                text="Add favourite"
              />
            </Navigation>
            <Route path="/dashboard" component={DashboardView} />
            <Route path="/list" component={ListView} />
            <Route path="/favourite-tests-list" component={FavouriteTestsListView} />
            <Route path="/add-tests" component={AddTestsView} />
            <Route path="/available-tests" component={AvailableTestsView} />
            <Route path="/add-favourite" component={AddFavouriteView} />
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App;