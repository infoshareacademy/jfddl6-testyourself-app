import React from 'react'

import SearchView from './SearchView/SearchView'
import MyList from './MyList'

import { database } from '../../firebase'
import { connect } from 'react-redux'

import { loadDataAsyncAction } from '../../state/test'

class ListView extends React.Component {
    state = {
        isFavoriteTest: false,
        searchText: '',
        searchedNumberOfQuestionsInTest: 3,
        maxSearchedNumberOfQuestionsInTest: 5,
        chosenCategoryFilter: 0,
        categoryFilters: ['Any', "Science Computers", "Animals", "Geography", "Mythology"]
    }

    onSearchTextChangeHandler = (event) => { this.setState({ searchText: event.target.value }) }
    onSearchSliderValueChangeHandler = (event, value) => { this.setState({ searchedNumberOfQuestionsInTest: value }) }
    onSearchSelectFieldValueChangeHandler = (event, index, value) => { this.setState({ chosenCategoryFilter: parseInt(value, 10) - 1 }) }

    onClickDeleteTestHandler = (test) => {
        database.ref(`/tests/${test.id}`).remove()
    }

    onFavoriteChangeHandler = (test) => {
        database.ref(`/tests/${test.id}`).update({
            favorite: !test.favorite
        })
        this.props._loadDataAsyncAction()
    }

    onClickListItemHandler = (test) => {
        this.props.history.push(`/test-view/${test.id}`)
    }

    componentDidMount() {
        this.props._loadDataAsyncAction()
    }

    componentWillUnmount() {
        database.ref(`/tests`).off()
    }

    render() {
        return (
            <div>
                <SearchView
                    searchedNumberOfQuestionsInTest={this.state.searchedNumberOfQuestionsInTest}
                    maxSearchedNumberOfQuestionsInTest={this.state.maxSearchedNumberOfQuestionsInTest}
                    onSearchTextChangeHandler={this.onSearchTextChangeHandler}
                    onSearchSliderValueChangeHandler={this.onSearchSliderValueChangeHandler}
                    onSearchSelectFieldValueChangeHandler={this.onSearchSelectFieldValueChangeHandler}
                    categoryFilters={this.state.categoryFilters}
                    chosenCategoryFilter={this.state.chosenCategoryFilter}
                />
                <MyList
                    searchText={this.state.searchText}
                    tests={this.props._tests}
                    onClickListItemHandler={this.onClickListItemHandler}
                    toggleFavorite={this.onFavoriteChangeHandler}
                    chosenCategoryFilter={this.state.chosenCategoryFilter}
                    categoryFilters={this.state.categoryFilters}
                    searchedNumberOfQuestionsInTest={this.state.searchedNumberOfQuestionsInTest}
                    onClickDeleteTestHandler={this.onClickDeleteTestHandler}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    _tests: state.test.tests
})

const mapDispatchToProps = (dispatch) => ({
    _loadDataAsyncAction: () => dispatch(loadDataAsyncAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListView)