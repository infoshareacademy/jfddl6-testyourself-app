import React from 'react';

import Drawer from 'material-ui/Drawer'

const Sidebar = (props) => (
    <Drawer
        docked={props.docked}
        width={props.width}
        open={props.open}
        onRequestChange={props.onRequestChange}
    >
        {props.children}
    </Drawer>
)

export default Sidebar