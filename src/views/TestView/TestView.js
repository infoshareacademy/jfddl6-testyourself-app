import React from 'react';
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import { database } from '../../firebase'
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
    },
    image:{
        width:'70vw',
    }
}

class TestView extends React.Component {
    constructor(props) {
        super()
        this.state.id = props.match.params.id
        console.log(props.match.params.id)

    }
    state = {
        id: '',
        favorite: null,
        test: {}

    }

    componentDidMount() {
        database.ref(`/tests/${this.state.id}`).once(
            'value',
            snapshot => {
                console.log('this.state.id', this.state.id)
                console.log('favorite from db', snapshot.val().favorite)
                this.setState({ test: snapshot.val() })
                console.log('test state from snap', this.state.test)
                console.log('test type', typeof (this.state.test))
                return this.setState({ favorite: snapshot.val().favorite })
            }

        )
    }

    componentWillUnmount() {
        database.ref(`/tests/${this.state.id}`).off()
    }

    onClickHandler = () => {
        if (this.state.favorite === false) {
            this.setState({ favorite: true })
            console.log('test', this.state.id)
            console.log('www', this.state.test.favorite)

        }

        else
            console.log('not favorite')
    }

    render() {
        return (

            <Paper
                style={style.paper}
            >     
                <img 
                src={this.state.test.img}
                style={style.image}
                />
                <h1>{`Test name: ${this.state.test.description}`}</h1>
                <h2>{`Category: ${this.state.test.category}`}</h2>
                <h2>{`Number of questions: `}</h2>
                <h2>{`Difficulty: `}</h2>
                <h3>{`Description: `}</h3>

                <RaisedButton
                    label={"Add to favourite"}
                    primary={true}
                    style={style.button}
                    fullWidth={true}
                    onClick={this.onClickHandler}
                />
            </Paper>)
    }
}



export default TestView