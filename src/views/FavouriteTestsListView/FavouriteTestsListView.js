import React from 'react';

import Avatar from 'material-ui/Avatar';
import FavoriteIconChecked from 'material-ui/svg-icons/action/favorite';
import { List, ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import placeholder from '../../images/default.jpg'
import Paper from 'material-ui/Paper'

import {auth,database } from '../../firebase'

const style = {
    paper: {
        margin: 20,
        padding: 20
    },
    link: {
        textDecoration: "none"
    }
}

class FavouriteTestsListView extends React.Component {
    state = {
        tests: []
    }

    removeFromFavouriteListHandler = (test) => {
        database.ref(`/users/${auth.currentUser.uid}/tests/${test.id}`).update({
            favorite: !test.favorite
        })
        this.loadData()
    }

    loadData = () => {
        database.ref(`/users/${auth.currentUser.uid}/tests`).on(
            'value',
            snapshot => {
                if (!snapshot.val()) {
                    this.setState({ tests: [] })
                    return
                }
                const allTestsArray = Object.entries(snapshot.val())
                const testList = allTestsArray.map(([id, values]) => {
                    values.id = id
                    return values
                })
                this.setState({ tests: testList })
            }
        )
    }

    onClickListItemHandler = (test) => {
        this.props.history.push(`/test-view/${test.id}`)
    }

    componentWillMount() {
        this.loadData()
    }
    
    componentWillUnmount() {
        database.ref(`/users/${auth.currentUser.uid}/tests`).off()
    }

    render() {
        return (
            <Paper
                style={style.paper}
            >
                <List>
                    < Subheader > Favourite Tests</Subheader>
                    {
                        this.state.tests &&
                        this.state.tests.map &&
                        this.state.tests
                            .filter((test) => (test.favorite === true))
                            .map(test => (
                                <ListItem
                                    key={test.id}
                                    onClick={() => this.onClickListItemHandler(test)}
                                    primaryText={test.description}
                                    leftAvatar={<Avatar src={test.img || placeholder} />}
                                    rightIconButton={
                                        <IconButton >
                                            <FavoriteIconChecked onClick={() => this.removeFromFavouriteListHandler(test)} />
                                        </IconButton>
                                    }
                                />
                            ))
                    }
                </List >
            </Paper>
        )
    }

}

export default FavouriteTestsListView