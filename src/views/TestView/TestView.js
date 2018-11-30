import React from 'react';
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
// import {database} from '../../firebase'
const style = {
    paper: {
        margin: 20,
        padding: 20,
        height: "100%"
    },
    button: {
        position: 'fixed',
        left: 0,
        padding: 3,
        bottom: 0
    }
}

class TestView extends React.Component {
    constructor(props) {
        super()
        this.state.id = props.match.params.id
        this.state.test = {}

    }
    
   

    componentDidMount() {
      database.ref(`/tests/${this.state.id}`).on(
            'value',
            snapshot=>
        )
   }

    onClickHandler = () => {

    }

    render() { 
        
        return (
       
        <Paper
            style={style.paper}
        >
            <RaisedButton
                label={"Add to favourite"}
                primary={true}
                style={style.button}
                fullWidth={true}
                onClick={() => this.onClickHandler}
            />
        </Paper>)
    }
}
// console.log(props.match.params.id)


export default TestView