import React from 'react'
import Paper from "material-ui/Paper"
import { Grid, Row, Col } from "react-flexbox-grid"
import SelectField from "material-ui/SelectField"
import RaisedButton from "material-ui/RaisedButton"
import TextField from "material-ui/TextField"
import MenuItem from "material-ui/MenuItem"
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { unifyString } from '../ListView/utils'
import Checkbox from 'material-ui/Checkbox';
// import MyList from '../ListView/MyList';



//const headlines = ["Category", "Difficulty", "Type", "Question", "Correct Answer", "Incorrect Answer"]
//const category = ["Science Computers", "Animals", "Geography", "Mythology",]
//const difficulty = ["easy", "medium", "hard"]
//const type = ["multiple", "open"]

const style = {
    paper: {
        margin: 6,
        padding: 20
    },
    button: {
        marginTop: 20
    },
    item: {
        float: "center"
    }
}


class AddTestView extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            value: "",
            category: "",
            difficulty: "",
            type: "",
            question: "",
            answer: "",
            questions: [],
            chosenCategoryFilter: 0,
            categoryFilters: ['Any', "Science: Computers", "Animals", "Geography", "Mythology"],
            createdTest: {
                category: "",
                description: "",
                favorite: false,
                img: "",
                questions: {}
            }
        }
    }

    loadData = () => {
        fetch(`https://test-yourself-95f1a.firebaseio.com/questions.json`)
            .then(response => response.json())
            .then(data => {
                if (!data) {
                    this.setState({ questions: [] })
                    return
                }
                const questionsArray = Object.entries(data)
                const questionsList = questionsArray.map(([id, values]) => {
                    values.id = id //nowa wlasciwosc id w obiekcie testy
                    return values
                })
                this.setState({ questions: questionsList })
            })
    }
    componentDidMount() {
        this.loadData()
    }


    handleClick = (event) => {
        if (this.state.name !== '' && this.state.name.length < 30 && this.state.kcal !== '' && this.state.category !== '') {
          this.props.toggleStatement('Product was added successfully!')
          this.postToFirebase()
        }  else {
          this.props.toggleStatement('Something went wrong! Please try again! :)')
        }
      }

    onSearchSelectFieldValueChangeHandler = (event, index, value) => {
        this.setState({
            chosenCategoryFilter: parseInt(value, 10) - 1,
            createdTest: {
                ...this.state.createdTest,
                category: this.state.categoryFilters[this.state.chosenCategoryFilter + 1]
            }
        })

    }


    postToFirebase = () => {
        let product = this.state
        fetch('https://test-yourself-95f1a.firebaseio.com/', {
            method: 'POST',
            body: JSON.stringify(product)
        })
    }
    onTextInputChangeHandler = (event) => {
        this.setState({
            createdTest: {
                ...this.state.createdTest,
                description: event.target.value
            }
        })
    }
    onTextUrlInputChangeHandler = (event) => {
        this.setState({
            createdTest: {
                ...this.state.createdTest,
                img: event.target.value
            }
        })
    }

    handleClick = (event) => {
        this.props.toggleStatement('Something went wrong. Please try again!')
        if (this.state.name !== '') {
            this.props.toggleStatement('Product was added successfully!')
            fetch('https://test-yourself-95f1a.firebaseio.com/', {
            })
        }
        this.reset()
    }
    onCheckBoxSelectionHandler = (id) => {
        const newQuestions = {
            ...this.state.createdTest.questions,
        };
        newQuestions[id] = true
        this.setState({
            createdTest: {
                ...this.state.createdTest,
                questions: newQuestions
            }
        })
    }

    render() {
        return (
            <Paper
                style={style.paper}>
                <Grid fluid>
                    <Row
                        center="sm">
                        <Col lg={8} />
                        <h1>
                            Add Your own Test!
                        </h1>
                    </Row>
                    <div>

                        <Row center="sm">
                            <Col lg={8} />
                            {/*nazwa testu */}
                            <TextField
                                floatingLabelText="Name Your Test"
                                fullWidth={true}
                                onChange={this.onTextInputChangeHandler}
                            />
                        </Row>
                        <Row center="sm">
                            <Col lg={8}>
                                <SelectField
                                    floatingLabelText="Categories"
                                    value={this.state.chosenCategoryFilter + 1}
                                    onChange={this.onSearchSelectFieldValueChangeHandler}
                                >
                                    {/* {console.log(this.state.chosenCategoryFilter + 1)} */}
                                    {this.state.categoryFilters.map((filter, index) => (
                                        <MenuItem
                                            key={index}
                                            value={index + 1}
                                            primaryText={filter}
                                        />
                                    ))}

                                </SelectField>

                            </Col>
                        </Row>
                        <Row center="sm">
                            <Col lg={8} />
                            <TextField
                                floatingLabelText="IMAGE"
                                fullWidth={true}
                                onChange={this.onTextUrlInputChangeHandler}
                            />
                        </Row>

                        <Row center="sm">
                            <Col lg={8} />
                            <List>

                                < Subheader > Available Questions</Subheader>
                                {
                                    this.state.questions &&
                                    this.state.questions.map &&
                                    this.state.questions
                                        .filter((question) => (
                                            (this.state.chosenCategoryFilter === 0) ?
                                                true :
                                                unifyString(question.category) === unifyString(this.state.categoryFilters[this.state.chosenCategoryFilter])
                                        ))
                                        .map(question => (
                                            <ListItem
                                                key={question.id}
                                                primaryText={question.question}
                                                leftCheckbox={<Checkbox
                                                    onClick={() => this.onCheckBoxSelectionHandler(question.id)} />}
                                            //onClick={() => props.onClickListItemHandler(question)}

                                            />
                                        ))
                                }
                            </List >


                        </Row>
                        <Row center="sm">
                            <RaisedButton
                                label="Save"
                                primary={true}
                                fullWidth={true}
                                style={style.button}
                                onClick={this.onClickSaveHandler}
                            />
                        </Row>

                    </div>
                </Grid>
            </Paper>
        )
    }
}
export default AddTestView