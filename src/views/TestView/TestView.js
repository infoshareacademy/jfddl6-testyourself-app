import React from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import { database } from '../../firebase'
import placeholder from '../../images/default.jpg'
const style = {
    paper: {
        margin: 20,
        padding: 20,
        height: "100%",
        textAlign: 'center'
    },
    button: {
        position: 'fixed',
        left: 0,
        padding: 3,
        bottom: 0
    },
    image: {
        width: '70vw',
        maxWidth: '500px'
    },
    textName: {

    },
    text: {

    }
}

class TestView extends React.Component {
    constructor(props) {
        super(props)
        this.state.id = props.match.params.id
    }
    state = {
        id: '',
        favorite: null,
        test: {},
        testArray: [],
        numOfQuestions: 0
    }

    componentDidMount() {
        database.ref(`/tests/${this.state.id}`).on(
            'value',
            snapshot => {
                this.setState({ test: snapshot.val() })
                this.setState({ testArray: Object.values(this.state.test) })
                this.setState({ numOfQuestions: Object.values(this.state.testArray[4]).length })
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
            database.ref(`/tests/${this.state.id}/favorite`).set(
                true
            )
        }
        else {
            this.setState({ favorite: false })
            database.ref(`/tests/${this.state.id}/favorite`).set(
                false
            )
        }
    }

    render() {
        return (

            <Paper
                style={style.paper}
            >

                <h2 style={style.textName}>{`#Test name: ${this.state.test.description}`}</h2>
                <h3 style={style.text}>{`Category: ${this.state.test.category}`}</h3>
                <h3 style={style.text}>{`Number of questions: ${this.state.numOfQuestions}`}</h3>
                {/* <h3 style={style.text}>{`Difficulty: `}</h3> */}
                {/* <h3 style={style.text}>{`Description: `}</h3> */}

                <img
                    src={this.state.test.img || placeholder}
                    style={style.image}
                    alt=''
                />

                <RaisedButton

                    label={this.state.favorite === true ?
                        "Remove from favourite"
                        :
                        "Add to favourite"}
                    primary={true}
                    style={style.button}
                    fullWidth={true}
                    onClick={this.onClickHandler}
                />

            </Paper>)
    }
}



export default TestView