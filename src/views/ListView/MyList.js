import React from 'react'

import Checkbox from 'material-ui/Checkbox';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { List, ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';


const MyList = (props) => (

    <List>

        {console.log(props.tests)}
        < Subheader > Available Tests</Subheader>

        {props.tests.map(test => (
            <ListItem
                key={test.id}
                primaryText={test.description}
                leftCheckbox={<Checkbox />}
                rightIconButton={
                    <IconButton>
                        <DeleteIcon onClick={() => alert('removeClicked')} />
                    </IconButton>
                }
            />
        ))}

    </List >
)

export default MyList

