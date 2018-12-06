import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import AddFavouriteView from './views/AddFavouriteView/AddFavouriteView'
import AddTestsView from './views/AddTestsView/AddTestsView'
import AddQuestionView from './views/AddQuestionsView/AddQuestionView'
import FavouriteTestsListView from './views/FavouriteTestsListView/FavouriteTestsListView'
import ListView from './views/ListView/ListView'
import Navigation from './Navigation/Navigation'
import MenuItem from './Navigation/MenuItem'
import DashboardView from './views/DashboardView/DashboardView'
import TestView from './views/TestView/TestView'

class App extends Component {

  state = {
    isDrawerOpen: false
  }

  toggleDrawer = () => this.setState({ isDrawerOpen: !this.state.isDrawerOpen })

  handleClose = () => this.setState({ isDrawerOpen: false });

  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Navigation
              toggleDrawer={this.toggleDrawer}
              isDrawerOpen={this.state.isDrawerOpen}
              title="#testYourself-App">
              <MenuItem
                handleClose={this.handleClose}
                to="/dashboard"
                text="Home"
              />
              <MenuItem
                handleClose={this.handleClose}
                to="/list"
                text="List"
              />
              <MenuItem
                handleClose={this.handleClose}
                to="/favourite-tests-list"
                text="Favourite tests"
              />
              <MenuItem
                handleClose={this.handleClose}
                to="/add-tests"
                text="Add tests"
              />
              <MenuItem
                handleClose={this.handleClose}
                to="/add-questions"
                text="Add questions"
              />
              {/* <MenuItem
                handleClose={this.handleClose}
                to="/add-favourite"
                text="Add favourite"
              />  */}
            </Navigation>
            <Route path="/" exact component={DashboardView} />
            <Route path="/dashboard" component={DashboardView} />
            <Route path="/list" component={ListView} />
            <Route path="/favourite-tests-list" component={FavouriteTestsListView} />
            <Route path="/add-tests" component={AddTestsView} />
            <Route path="/add-questions" component={AddQuestionView} />
            <Route path="/add-favourite" component={AddFavouriteView} />
            <Route path="/test-view/:id" component={TestView} />
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App;