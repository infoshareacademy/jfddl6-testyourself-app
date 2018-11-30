import React from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

import { database } from '../../firebase'

const style = {
    paper: {
        margin: 20,
        padding: 20,
        heigth: "100%"
    },
    button: {
        position: 'fixed',
        left: 0,
        padding: 3,
        bottom: 0
    }
}

class TestView extends React.Component {

    constructor() {
        super()

    }

    render() {
        console.log(this.props.match.params.id)
        return (
            < Paper
                style={style.paper}
            >
                <h1>{`Name: `}</h1>
                <h2>{`Category: `}</h2>
                <h2>{`Number of questions: `}</h2>
                <h2>{`Difficulty: `}</h2>
                <h3>{`Description: `}</h3>

                <RaisedButton
                    label={"Add to favourite"}
                    primary={true}
                    style={style.button}
                    fullWidth={true}
                    onClick={() => { }}
                />

            </Paper >
        )
    }
}

export default TestView