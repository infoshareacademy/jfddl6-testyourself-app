import React from 'react';
import SearchView from './SearchView/SearchView'

import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Test from './../../Test.js'
// import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
// import FoundTestsView from './FoundTestsView/FoundTestsView'

class ListView extends React.Component {
    state={

    }

    render() {
        return (
            <div>
                <SearchView />
                <div>
                    <List>
                        <Subheader>Available Test</Subheader>
                        <ListItem
                            primaryText="test1"
                            leftAvatar={<Avatar src="." />}

                        />
                        <ListItem
                            primaryText="test2"
                            leftAvatar={<Avatar src="" />}

                        />
                        <ListItem
                            primaryText="test3"
                            leftAvatar={<Avatar src="" />}

                        />
                        <ListItem
                            primaryText="test4"
                            leftAvatar={<Avatar src="" />}

                        />
                        <ListItem
                            primaryText="test5"
                            leftAvatar={<Avatar src="" />}

                        />
                    </List>
                </div>
            </div>

        )
    }


}
export default ListView