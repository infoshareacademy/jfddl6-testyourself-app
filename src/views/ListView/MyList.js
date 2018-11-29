import React from 'react'

import Avatar from 'material-ui/Avatar';
import FavoriteIconUnchecked from 'material-ui/svg-icons/action/favorite-border';
import FavoriteIconChecked from 'material-ui/svg-icons/action/favorite';
import { List, ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import placeholder from '../../images/atom.svg'
import Paper from 'material-ui/Paper'
import { unifyString } from './utils'
import { Link } from 'react-router-dom'

const style = {
    margin: 20,
    padding: 20
}


const MyList = (props) => (


    <Paper
        style={style}
    >
        <List>

            < Subheader > Available Tests</Subheader>
            {
                props.tests &&
                props.tests.map &&
                props.tests
                    .filter((test) => (
                        unifyString(test.description)
                            .includes(unifyString(props.searchText))
                    ))
                    .filter((test) => (
                        (props.chosenCategoryFilter === 0) ?
                            true :
                            unifyString(test.category) === unifyString(props.categoryFilters[props.chosenCategoryFilter])
                    ))
                    .filter((test) => (
                        props.searchedNumberOfQuestionsInTest <= Object.keys(test.questions).length
                    ))
                    .map(test => (
                        //podmienic linka do detailed test info karola
                        <Link to='/dashboard'>
                            <ListItem
                                key={test.id}
                                primaryText={test.description}
                                leftAvatar={<Avatar src={test.img || placeholder} />}
                                onClick={props.onClickListItemHandler}
                                rightIconButton={
                                    <IconButton>
                                        {test.favorite ?
                                            <FavoriteIconChecked onClick={() => props.toggleFavorite(test)} />
                                            :
                                            <FavoriteIconUnchecked onClick={() => props.toggleFavorite(test)} />
                                        }
                                    </IconButton>
                                }
                            />
                        </Link>

                    ))
            }
        </List >
    </Paper>

)

export default MyList

