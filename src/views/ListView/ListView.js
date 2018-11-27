import React from 'react';
import SearchView from './SearchView/SearchView'
// import FoundTestsView from './FoundTestsView/FoundTestsView'

class ListView extends React.Component {

    state = {
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

                <div>
                    {this.state.numberOfQuestionsInTest}
                    {this.state.categoryFilter}
                    {this.state.searchText}
                </div>
            </div>
        )
    }
}

export default ListView