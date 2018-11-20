import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AddFavourite from './views/AddFavourite/AddFavourite'
import AddTests from './views/AddTests/AddTests'
import AvailableTests from './views/AvailableTests/AvailableTests'
import FavouriteTestsList from './views/FavouriteTestsList/FavouriteTestsList'
import FoundTests from './views/FoundTests/FoundTests'
import Search from './views/Search/Search'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/add-favourite" component={AddFavourite} />
          <Route path="/add-tests" component={AddTests} />
          <Route path="/available-tests" component={AvailableTests} />
          <Route path="/favourite-tests-list" component={FavouriteTestsList} />
          <Route path="/found-tests" component={FoundTests} />
          <Route path="/search" component={Search} />
        </div>
      </Router>
    );
  }
}

export default App;
