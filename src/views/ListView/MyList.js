import React from 'react'

import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import { data } from './tempData'

class MyList extends React.Component {

    render() {
        return (
                <List>
                    <Subheader>Available Test</Subheader>
                    {data.map(test =>
                        (<ListItem
                            primaryText={test.category}
                            leftAvatar={<Avatar src="" />}
                        />)
                    )}
                </List>

        )
    }
}

export default MyList