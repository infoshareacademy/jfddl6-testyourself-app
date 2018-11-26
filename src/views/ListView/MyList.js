import React from 'react'

import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';


const MyList = (props) => (

    <List>
              
                {console.log(props.tests)}
                < Subheader > Available Tests</Subheader>
    
                {
                    props.tests &&
                    props.tests.map &&
                    props.tests
                        .map(test => (
                            <ListItem
                                // key={}
                                primaryText={props.tests}
                                leftAvatar={<Avatar src="" />}
                            />
                        ))
                }
        
    </List >
)

export default MyList

