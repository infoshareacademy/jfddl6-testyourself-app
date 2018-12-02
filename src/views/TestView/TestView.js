import React from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

import { database } from '../../firebase'
import mapObjectToArray from './../utils/mapObjectToArray'

const dbRef = database.ref('/tests')

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

    state = {
        testObject: null
    }

    componentDidMount() {
        dbRef.once(
            'value',
            snapshot => {

                const arrayOfTest = mapObjectToArray(snapshot.val())
                arrayOfTest.forEach(test => {
                    for (let key in test) {
                        if (test.hasOwnProperty(key) && test.key === this.props.match.params.id) {
                            const tempTest = Object.create(test)
                            this.setState({ testObject: tempTest })

                        }
                    }

                });

            })
        console.log(this.state.testObject)

    }

    componentWillUnmount() {
        dbRef.off()
    }

    render() {
        // console.log(this.props.match.params.id)
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