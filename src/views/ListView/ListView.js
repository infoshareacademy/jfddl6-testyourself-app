import React from 'react';
import SearchView from './SearchView/SearchView'



import { data } from './tempData'
import MyList from './MyList'
import Test from './../../Test'

class ListView extends React.Component {
    state =(fetch())


       
    componentDidMount() {

        // database.ref().on('value', snapshot => {
        //   this.setState({usercount: snapshot.val()});
        // });
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