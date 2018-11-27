import React from 'react';
import SearchView from './SearchView/SearchView'

// import { database } from './../../firebase'
import MyList from './MyList'

class ListView extends React.Component {
    state =
        {
            tests: []
        }

    componentWillMount() {
        fetch(`https://test-yourself-95f1a.firebaseio.com/tests.json`)
            .then(response => response.json())
            .then(data => {
                if (!data) {
                    this.setState({ tests: [] })
                    return
                }
                const testsArray = Object.entries(data)//zamiana na tablice index=1 klucz=0
                console.log('testArray',testsArray)
                const testList = testsArray.map(([id, values]) => {
                    values.id = id //nowa wlasciwosc w obiekcie testy
                    return values
                })
                this.setState({ tests: testList })
                console.log('testList', testList)
            })
    }

    render() {
        return (
            <div>
                <SearchView />
                <MyList
                    tests={this.state.tests}
                />
            </div>
        )
    }
}
export default ListView