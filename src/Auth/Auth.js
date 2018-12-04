import React from 'react'

import { auth, googleProvider } from './../firebase'

import LoginForm from './LoginForm'

class Auth extends React.Component {

    state = {
        email: '',
        password: '',
        isUserLoggedIn: true
    }

    render() {
        return (
            <div>
                {
                    this.state.isUserLoggedIn
                        ?
                        this.props.children
                        :
                        <LoginForm>

                        </LoginForm>
                }
            </div>
        )
    }
}

export default Auth