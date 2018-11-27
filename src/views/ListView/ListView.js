import React from 'react';
import SearchView from './SearchView/SearchView'


import MyList from './MyList'

class ListView extends React.Component {
    state = {
        isFavoriteTest:false,
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

    onFavoriteChangeHandler =()=>{
        //add db favorite update 
        console.log('klinkniete')}
    

    componentWillMount() {

        fetch(`https://test-yourself-95f1a.firebaseio.com/tests.json`)
            .then(response => response.json())
            .then(data => {
                if (!data) {
                    this.setState({ tests: [] })
                    return
                }
                const testsArray = Object.entries(data)
                console.log('testArray', testsArray)
                const testList = testsArray.map(([id, values]) => {
                    values.id = id //nowa wlasciwosc id w obiekcie testy 
                    return values
                })
                this.setState({ tests: testList })
                console.log('testList', testList)
            })
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
                    toggleFavorite={this.onFavoriteChangeHandler}
                />
            </div>
        )
    }
}
export default ListView