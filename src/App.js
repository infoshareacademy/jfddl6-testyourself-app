import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AddFavouriteView from './views/AddFavouriteView/AddFavouriteView'
import AddTestsView from './views/AddTestsView/AddTestsView'
import AvailableTestsView from './views/AvailableTestsView/AvailableTestsView'
import FavouriteTestsListView from './views/FavouriteTestsListView/FavouriteTestsListView'
import FoundTestsView from './views/ListView/FoundTestsView/FoundTestsView'
import ListView from './views/ListView/ListView'
import Navigation from './Navigation/Navigation'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route path="/add-favourite" component={AddFavouriteView} />
          <Route path="/add-tests" component={AddTestsView} />
          <Route path="/available-tests" component={AvailableTestsView} />
          <Route path="/favourite-tests-list" component={FavouriteTestsListView} />
          <Route path="/found-tests" component={FoundTestsView} />
          <Route path="/list" component={ListView} />
        </div>
      </Router>
    );
  }
}

export default App;
