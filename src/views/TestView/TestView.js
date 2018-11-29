import React from 'react'
import Paper from 'material-ui/Paper'


class TestView extends React.Component {

    render() {

        return (
            <Paper>
                <h1>
                    <h1>{`Name: `}</h1>
                    <h2>{`Category: `}</h2>
                    <h2>{`Number of questions: `}</h2>
                    <h2>{`Difficulty: `}</h2>
                    <h3>{`Description: `}</h3>
                </h1>
            </Paper>
        )
    }
}

export default TestView