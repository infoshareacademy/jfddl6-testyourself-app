import React from 'react'

import AppBar from './AppBar.js'

import SideBar from './Sidebar.js'

class Navigation extends React.Component {

    render() {
        return (
            <div>
                <AppBar
                    title={this.props.title}
                    toggleDrawer={this.props.toggleDrawer}
                />
                <SideBar
                    docked={false}
                    width={200}
                    open={this.props.isDrawerOpen}
                    onRequestChange={this.props.toggleDrawer}
                >
                    {this.props.children}
                </SideBar>
            </div>
        )
    }
}

export default Navigation