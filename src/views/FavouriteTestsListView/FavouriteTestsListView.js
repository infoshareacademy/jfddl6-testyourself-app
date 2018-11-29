import React from 'react';

import Avatar from 'material-ui/Avatar';
import FavoriteIconChecked from 'material-ui/svg-icons/action/favorite';
import { List, ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import placeholder from '../../images/atom.svg'
import Paper from 'material-ui/Paper'
import { Link } from 'react-router-dom'

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
        fetch(
            `https://test-yourself-95f1a.firebaseio.com/tests/${test.id}.json`,
            {
                method: 'PATCH',
                body: JSON.stringify({ favorite: !test.favorite })
            }
        ).then(() => { this.loadData() })
    }

    loadData = () => {
        fetch(`https://test-yourself-95f1a.firebaseio.com/tests.json`)
            .then(response => response.json())
            .then(data => {
                if (!data) {
                    this.setState({ tests: [] })
                    return
                }
                const allTestsArray = Object.entries(data)
                const testList = allTestsArray.map(([id, values]) => {
                    values.id = id //nowa wlasciwosc id w obiekcie testy 
                    return values
                })
                this.setState({ tests: testList })
            })
    }

    componentWillMount() {
        this.loadData()
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

                                //podmienic linka do detailed test info karola !!!!!!!!!!!
                                <Link to='/dashboard' style={style.link}>
                                <ListItem
                                    key={test.id}
                                    
                                    primaryText={test.description}
                                    leftAvatar={<Avatar src={test.img || placeholder} />}
                                    rightIconButton={
                                        <IconButton>
                                            <FavoriteIconChecked onClick={() => this.removeFromFavouriteListHandler(test)} />
                                        </IconButton>
                                    }
                                /></Link>
                            ))
                    }
                </List >
            </Paper>
        )
    }

}

export default FavouriteTestsListView