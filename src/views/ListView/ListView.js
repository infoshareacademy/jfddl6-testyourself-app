import React from 'react';
import SearchView from './SearchView/SearchView'

import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { data } from './tempData'
import Test from './../../Test'

class ListView extends React.Component {
    state = {

    }
    render() {
        return (
            <div>
                <SearchView />
                <div>
                    <List>

                        <Subheader>Available Test</Subheader>

                        {data.map(test =>
                            (<ListItem
                                primaryText={test.category}
                                leftAvatar={<Avatar src="" />}
                            />)
                        )}

                    </List>
                </div>
            </div>
        )
    }
}
export default ListView