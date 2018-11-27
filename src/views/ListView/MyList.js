import React from 'react'

import Avatar from 'material-ui/Avatar';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';
import { List, ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import placeholder from '../../images/atom.svg'
import Paper from 'material-ui/Paper'
import { unifyString } from './utils'

const style = {
    margin: 20,
    padding: 20
}
const MyList = (props) => (
    <Paper
        style={style}
    >
        <List>
            {console.log('aaa',props.tests)}
            < Subheader > Available Tests</Subheader>
            {
                props.tests &&
                props.tests.map &&
                props.tests
                .filter((test)=>(
                    unifyString(test.description)
                    .includes(unifyString(props.searchText))
                ))
                    .map(test => (
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
                    ))
            }
        </List >
    </Paper>

)

export default MyList

