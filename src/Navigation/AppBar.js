import React from 'react'
import { connect } from 'react-redux'
import MuiAppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

import {
    logOutAsyncAction
} from '../state/auth'

const AppBar = (props) => (
    <MuiAppBar
        title={props.title}
        onLeftIconButtonClick={props.toggleDrawer}
        iconElementRight={<FlatButton
            label="Logout"
            onClick={props.logOut}
        />}
    >
        {props.children}
    </MuiAppBar>
)

const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logOutAsyncAction())
})

export default connect(
    null,
    mapDispatchToProps
)(AppBar)