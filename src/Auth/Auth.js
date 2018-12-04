import React from 'react'

import { auth, googleProvider } from './../firebase'

import LoginForm from './LoginForm'

class Auth extends React.Component {

    state = {
        email: '',
        password: '',
        isUserLoggedIn: false
    }

    render() {
        return (
            <div>
                <LoginForm>

                </LoginForm>
            </div>
        )
    }
}

export default Auth