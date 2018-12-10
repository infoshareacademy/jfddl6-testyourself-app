import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import AddFavouriteView from './../views/AddFavouriteView/AddFavouriteView'
import AddTestsView from './../views/AddTestsView/AddTestsView'
import AddQuestionView from './../views/AddQuestionsView/AddQuestionView'
import FavouriteTestsListView from './../views/FavouriteTestsListView/FavouriteTestsListView'
import ListView from './../views/ListView/ListView'
import Navigation from './Navigation'
import MenuItem from './MenuItem'
import DashboardView from './../views/DashboardView/DashboardView'
import TestView from './../views/TestView/TestView'

class Router extends React.Component {

    state = {
        isDrawerOpen: false
    }

    toggleDrawer = () => this.setState({ isDrawerOpen: !this.state.isDrawerOpen })

    handleClose = () => this.setState({ isDrawerOpen: false })

    render() {

        return (
            <BrowserRouter>
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
                            text="Compose test"
                        />
                        <MenuItem
                            handleClose={this.handleClose}
                            to="/add-questions"
                            text="Add questions"
                        />

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
            </BrowserRouter>
        )
    }
}

export default Router