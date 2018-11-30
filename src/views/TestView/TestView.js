import React from 'react';
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

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

const TestView = (props) => (


    <Paper
        style={style.paper}
    >
        <RaisedButton
            label={"Add to favourite"}
            primary={true}
            style={style.button}
            fullWidth={true}
            onClick={() => { }}
        />

    </Paper>
)

export default TestView