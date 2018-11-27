import React from 'react'

import Avatar from 'material-ui/Avatar';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';
import { List, ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';

import placeholder from '../../images/atom.svg'



const MyList = (props) => (

    <List>

        {console.log(props.tests)}
        < Subheader > Available Tests</Subheader>

        {props.tests.map(test => (
            <ListItem
                key={test.id}
                primaryText={test.description}
                leftAvatar={<Avatar src={test.img || placeholder} />}
                rightIconButton={
                    <IconButton>
                        <FavoriteIcon onClick={() => alert('fav')} />
                    </IconButton>
                }
            />
        ))}

    </List >
)

export default MyList

