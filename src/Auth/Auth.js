import React from 'react'

import { auth, googleProvider } from './../firebase'

import FlatButton from 'material-ui/FlatButton'
import LoginForm from './LoginForm'

class Auth extends React.Component {

    state = {
        email: '',
        password: '',
        isUserLoggedIn: false
    }

    componentDidMount() {
        auth.onAuthStateChanged(
            user => {
                if (user) {
                    this.setState({ isUserLoggedIn: true })
                } else {
                    this.setState({ isUserLoggedIn: false })
                }
            }
        )
    }

    onEmailChangeHandler = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChangeHandler = (event) => {
        this.setState({ password: event.target.value })
    }

    onLogInClick = () => {

    }

    onPasswordChangeHandler = () => {

    }

    render() {
        return (
            <div>
                {
                    this.state.isUserLoggedIn
                        ?
                        this.props.children
                        :
                        <LoginForm
                            email={this.state.email}
                            password={this.state.password}
                            onEmailChangeHandler={this.onEmailChangeHandler}
                            onPasswordChangeHandler={this.onPasswordChangeHandler}
                            onLogInClick={this.onLogInClick}
                            onLogInByGoogleClick={this.onLogInByGoogleClick}
                        />
                }
            </div>
        )
    }
}

export default Auth