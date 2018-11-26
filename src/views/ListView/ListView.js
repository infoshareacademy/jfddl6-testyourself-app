import React from 'react';
import SearchView from './SearchView/SearchView'



import { data } from './tempData'
import MyList from './MyList'
import Test from './../../Test'

class ListView extends React.Component {
    state = {

    }
    render() {
        return (
            <div>
                <SearchView />
                <MyList/>
            </div>
        )
    }
}
export default ListView