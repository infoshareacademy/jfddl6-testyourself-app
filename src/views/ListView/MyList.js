import React from 'react'

import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import { data } from './tempData'

const MyList = (props) => (
 

    <List>
        {
            <div>
                {console.log(props.tests)}

                < Subheader > Available Tests</Subheader>

            </div>



        }



    </List >


)

export default MyList


// props.tests.map(test =>
//     (<ListItem
//         primaryText={test.category}
//         leftAvatar={<Avatar src="" />}
//     />))