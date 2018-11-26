import React from 'react';
import SearchView from './SearchView/SearchView'


import { database } from './../../firebase'

import { data } from './tempData'
import MyList from './MyList'
import Test from './../../Test'

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