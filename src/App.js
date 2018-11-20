import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AddFavourite from './views/AddFavourite/AddFavourite'
import AddTests from './views/AddTests/AddTests'
import AvailableTests from './views/AvailableTests/AvailableTests'
import FavouriteTestsList from './views/FavouriteTestsList/FavouriteTestsList'
import FoundTests from './views/List/FoundTests/FoundTests'
import List from './views/List/List'
import Navigation from './Navigation/Navigation'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route path="/add-favourite" component={AddFavourite} />
          <Route path="/add-tests" component={AddTests} />
          <Route path="/available-tests" component={AvailableTests} />
          <Route path="/favourite-tests-list" component={FavouriteTestsList} />
          <Route path="/found-tests" component={FoundTests} />
          <Route path="/list" component={List} />
        </div>
      </Router>
    );
  }
}

export default App;
