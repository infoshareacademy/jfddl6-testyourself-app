import React from 'react';
import SearchView from './SearchView/SearchView'
// import FoundTestsView from './FoundTestsView/FoundTestsView'

class ListView extends React.Component {

    state = {
        tests: null,
        searchText: '',
        numberOfQuestionsInTest: 3,
        categoryFilter: 'Any'
    }

    onSearchTextChangeHandler = (event) => { this.setState({ searchText: event.target.value }) }

    onSearchSliderValueChangeHandler = (event, value) => { this.setState({ numberOfQuestionsInTest: value }) }

    onSearchSelectFieldValueChangeHandler = (event) => { this.setState({ categoryFilter: event.target.value }) }

    componentDidMount() {

        fetch(`https://test-yourself-95f1a.firebaseio.com/tests.json`)
            .then(response => response.json())
            .then(data => this.setState({ tests: data }))
    }

    render() {
        return (
            <div>
                <SearchView
                    numberOfQuestionsInTest={this.state.numberOfQuestionsInTest}
                    onSearchTextChangeHandler={this.onSearchTextChangeHandler}
                    onSearchSliderValueChangeHandler={this.onSearchSliderValueChangeHandler}
                    onSearchSelectFieldValueChangeHandler={this.onSearchSelectFieldValueChangeHandler}
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