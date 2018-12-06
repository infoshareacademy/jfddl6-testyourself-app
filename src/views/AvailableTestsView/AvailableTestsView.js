import React from 'react'
import Paper from "material-ui/Paper"
import SelectField from "material-ui/SelectField"
import RaisedButton from "material-ui/RaisedButton"
import TextField from "material-ui/TextField"
import MenuItem from "material-ui/MenuItem"
import Snackbar from 'material-ui/Snackbar';

const style = {
    paper: {
        margin: 20,
        padding: 20
    },
    button: {
        marginTop: 20
    },
    item: {
        float: "center"
    },

}

class AvailableTestView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value:0,
            selectedFieldValue: 0,
            chosenCategoryFilter: 0,
            categoryFilters: ['Any', "Science: Computers", "Animals", "Geography", "Mythology"],
            chosenLevel: 0,
            levelFilters: ['Easy', 'Medium', 'Hard'],
            newQuestion: {
                category: '',
                correct_answer: '',
                difficulty: '',
                incorrect_answers: {
                },
                question: '',
                type: 'multiple'
            }
        }
    }
    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    handleCategoryChange = (event, index, value) => {
        this.setState({
            chosenCategoryFilter: value,
            newQuestion: {
                ...this.state.newQuestion,
                category: this.state.categoryFilters[this.state.chosenCategoryFilter]
            }
        })
    }
    handleLevelChange = (event, index, value) => {
        this.setState({
            chosenLevel: value,
            newQuestion: {
                ...this.state.newQuestion,
                difficulty: this.state.levelFilters[this.state.chosenLevel]
            }
        })
    }

    render() {
        return (
            <Paper
                style={style.paper}>
                <h2>
                    Add a question to our database
                        </h2>
                <SelectField
                    floatingLabelText="Choose category"
                    value={this.state.chosenCategoryFilter + 1}
                    onChange={this.handleCategoryChange}
                >
                    {this.state.categoryFilters.map((category, index) => (
                        <MenuItem
                            key={index}
                            value={index + 1}
                            primaryText={category}
                        />
                    ))}
                </SelectField>
                <br />
                <SelectField
                    floatingLabelText="Difficulty"
                    value={this.state.chosenLevel}
                    onChange={this.handleLevelChange}
                >
                    {this.state.levelFilters.map((level, index) => (
                        <MenuItem
                            key={index}
                            value={index + 1}
                            primaryText={level}
                        />
                    ))}
                </SelectField>
                <TextField
                    floatingLabelText="Incorrect answer"
                    fullWidth={true}
                    onChange={() => { }}
                />
                <TextField
                    floatingLabelText="Incorrect answer"
                    fullWidth={true}
                    onChange={() => { }}
                />
                <TextField
                    floatingLabelText="Incorrect answer"
                    fullWidth={true}
                    onChange={() => { }}
                />
                <TextField
                    floatingLabelText="Correct answer"
                    fullWidth={true}
                    onChange={() => { }}
                />
                <RaisedButton
                    label="Save question"
                    primary={true}
                    fullWidth={true}
                    style={style.button}
                    onClick={() => { }}
                />
                <Snackbar
                    open={this.state.open}
                    message="Your question has been added to the database"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </Paper>
        )
    }
}
export default AvailableTestView