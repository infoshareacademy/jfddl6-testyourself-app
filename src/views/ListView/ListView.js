import React from 'react';
import SearchView from './SearchView/SearchView'

import { database } from './../../firebase'
import MyList from './MyList'

class ListView extends React.Component {
    state =
        {
            tests: {}
        }

    componentDidMount() {
        database.ref().child('tests')
            .on('value', snapshot => {
                this.setState({ tests: snapshot.val() })
                // console.log(this.state.tests)
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