import React from 'react'
import Paper from "material-ui/Paper"

import SelectField from "material-ui/SelectField"
import RaisedButton from "material-ui/RaisedButton"
import TextField from "material-ui/TextField"
import MenuItem from "material-ui/MenuItem"
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { unifyString } from '../ListView/utils'
import Checkbox from 'material-ui/Checkbox';
import Snackbar from 'material-ui/Snackbar';


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
            open: false,
            chosenCategoryFilter: 0,
            isFormFilledCorrectly: false,
            categoryFilters: ['Any', "Science: Computers", "Animals", "Geography", "Mythology"],
            createdTest: {
                category: "Any",
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
                    this.setState({ questions: {} })
                    return
                }
                const questionsArray = Object.entries(data)
                const questionsList = questionsArray.map(([id, values]) => {
                    values.id = id
                    return values
                })
                this.setState({ questions: questionsList })
            })
    }
    componentDidMount() {
        this.loadData()
    }

    onSearchSelectFieldValueChangeHandler = (event, index, value) => {
        this.setState({
            chosenCategoryFilter: value,
            createdTest: {
                ...this.state.createdTest,
                category: this.state.categoryFilters[value]
            }
        })

    }

    onClickSaveHandler = (event) => {
        if (this.state.createdTest.category !== '' &&
            this.state.createdTest.description !== '' &&
            Object.keys(this.state.createdTest.questions).length !== 0
        ) {
            this.setState({ isFormFilledCorrectly: true })
            this.postToFirebase()
            this.setState({
                open: true
            })
        } else {
            this.setState({
                open: true
            })
        }
    }
    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };



    postToFirebase = () => {
        fetch('https://test-yourself-95f1a.firebaseio.com/tests.json', {
            method: 'POST',
            body: JSON.stringify(this.state.createdTest)
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

                <h2>
                    Add Your own Test!
                        </h2>



                <TextField
                    floatingLabelText="Name Your Test"
                    fullWidth={true}
                    onChange={this.onTextInputChangeHandler}
                />

                <SelectField
                    floatingLabelText="Categories"
                    value={this.state.chosenCategoryFilter}
                    onChange={this.onSearchSelectFieldValueChangeHandler}
                >
                    {this.state.categoryFilters.map((filter, index) => (
                        <MenuItem
                            key={index}
                            value={index}
                            primaryText={filter}
                        />
                    ))}

                </SelectField>


                <TextField
                    floatingLabelText="IMAGE"
                    fullWidth={true}
                    onChange={this.onTextUrlInputChangeHandler}
                />

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
                                />
                            ))
                    }
                </List >



                <RaisedButton
                    label="Save"
                    primary={true}
                    fullWidth={true}
                    style={style.button}
                    onClick={this.onClickSaveHandler}
                />

                <Snackbar
                    open={this.state.open}
                    message={this.state.isFormFilledCorrectly ?
                        "Your test has been added to the database" :
                        "Your test hasn't been filled in correctly"
                    }
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}

                />

            </Paper>
        )
    }
}
export default AddTestView