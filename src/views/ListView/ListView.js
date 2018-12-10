import React from 'react'

import SearchView from './SearchView/SearchView'
import MyList from './MyList'

import { database } from '../../firebase'

class ListView extends React.Component {
    state = {
        isFavoriteTest: false,
        tests: null,
        searchText: '',
        searchedNumberOfQuestionsInTest: 3,
        maxSearchedNumberOfQuestionsInTest: 5,
        chosenCategoryFilter: 0,
        categoryFilters: ['Any', "Science Computers", "Animals", "Geography", "Mythology"]
    }

    onSearchTextChangeHandler = (event) => { this.setState({ searchText: event.target.value }) }
    onSearchSliderValueChangeHandler = (event, value) => { this.setState({ searchedNumberOfQuestionsInTest: value }) }
    onSearchSelectFieldValueChangeHandler = (event, index, value) => { this.setState({ chosenCategoryFilter: parseInt(value, 10) - 1 }) }

    onFavoriteChangeHandler = (test) => {
        database.ref(`/tests/${test.id}`).update({
            favorite: !test.favorite
        })
        this.loadData()
    }

    onClickListItemHandler = (test) => {
        this.props.history.push(`/test-view/${test.id}`)
    }

    loadData = () => {
        database.ref(`/tests`).on(
            'value',
            snapshot => {
                if (!snapshot.val()) {
                    this.setState({ tests: [] })
                    return
                }
                const testsArray = Object.entries(snapshot.val())
                const testList = testsArray.map(([id, values]) => {
                    values.id = id
                    return values
                })
                this.setState({ tests: testList })
            }
        )
    }

    componentWillMount() {
        this.loadData()
    }

    componentWillUnmount(){
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
                    tests={this.state.tests}
                    onClickListItemHandler={this.onClickListItemHandler}
                    toggleFavorite={this.onFavoriteChangeHandler}
                    chosenCategoryFilter={this.state.chosenCategoryFilter}
                    categoryFilters={this.state.categoryFilters}
                    searchedNumberOfQuestionsInTest={this.state.searchedNumberOfQuestionsInTest}
                />
            </div>
        )
    }
}
export default ListView