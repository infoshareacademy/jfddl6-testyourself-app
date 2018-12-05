import React from 'react'
import MuiAppBar from 'material-ui/AppBar'

const AppBar = (props) => (
    <MuiAppBar
        title={props.title}
        onLeftIconButtonClick={props.toggleDrawer}
    >
        {props.children}
    </MuiAppBar>
)

export default AppBar