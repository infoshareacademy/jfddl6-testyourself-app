import React from 'react'
import { Link } from 'react-router-dom'
import MuiMenuItem from 'material-ui/MenuItem'

const MenuItem = (props) => (
    <Link
        style={{
            textDecoration: 'none'
        }}
        to={props.to}>
        <MuiMenuItem
            onClick={props.handleClose}
        >
            {props.text}
        </MuiMenuItem>
    </Link>
)

export default MenuItem