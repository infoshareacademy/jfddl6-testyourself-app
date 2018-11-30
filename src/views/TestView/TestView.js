import React from 'react';
import { Paper, RaisedButton } from 'material-ui';

const style = {
    paper: {
        margin: 20,
        padding: 20
    },
    button:{
        display:'fixed',
        position:'bottom'
    }

}

const TestView = (props) => (
    <Paper
    style={
        style.paper
    }
    
    >
    TestView
    <RaisedButton
    label='Add to favourite'
    primary={true}
    style={style.button}
    />
        
    </Paper>

)

export default TestView