import React from 'react'

import AppBar from './AppBar.js'

import SideBar from './Sidebar.js'

class Navigation extends React.Component {
    state = {
        isDrawerOpen: false
    }

    toggleDrawer = () => this.setState({ isDrawerOpen: !this.state.isDrawerOpen })

    handleClose = () => this.setState({ open: false });

    render() {
        return (
            <div>
                <AppBar
                    title={this.props.title}
                    onLeftIconButtonClick={this.toggleDrawer}
                />
                <SideBar
                    docked={false}
                    width={200}
                    open={this.state.isDrawerOpen}
                    onRequestChange={this.toggleDrawer}
                >
                    {this.props.children}
                </SideBar>
            </div>
        )
    }
}

export default Navigation