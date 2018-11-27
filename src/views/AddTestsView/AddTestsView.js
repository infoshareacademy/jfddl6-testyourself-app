import React from 'react'
import Paper from "material-ui/Paper"
import { Grid, Row, Col } from "react-flexbox-grid"
import SelectField from "material-ui/SelectField"
import RaisedButton from "material-ui/RaisedButton"
import TextField from "material-ui/TextField"
import MenuItem from "material-ui/MenuItem"



//const headlines = ["Category", "Difficulty", "Type", "Question", "Correct Answer", "Incorrect Answer"]
const category = ["Science Computers", "Animals", "Geography", "Mythology",]
const difficulty = ["easy", "medium", "hard"]
const type = ["multiple", "open"]

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

const initialState = {
    value: "",
    category: "",
    difficulty: "",
    type: "",
    question: "",
    answer: ""

}

class AddTestView extends React.Component {

    constructor(props) {
        super(props)
        this.state = initialState
    }


    categoryChange = (event) => this.setState({ category: event.target.value })
    difficultyChange = (event) => this.setState({ difficulty: event.target.value })
    typeChange = (event) => this.setState({ type: event.target.value })


    render() {
        return (
            <Paper
                style={style.paper}>
                <Grid fluid>
                    <Row
                        center="sm">
                        <Col lg={8}
                        />
                        <h1>
                            Add Test
                        </h1>
                    </Row>
                    <div>

                        <Row center="sm">
                            <Col lg={8}>
                                <SelectField
                                    multiple={true}
                                    hintText="Category"
                                    value={this.state.value}
                                    onChange={this.categoryChange}
                                    fullWidth={true}
                                >
                                    {category.map(category => (
                                        <MenuItem
                                            key={category}
                                            insetChildren={true}
                                            value={category}
                                            primaryText={category}
                                            styles={style.button}
                                        />
                                    ))}
                                </SelectField>
                            </Col>
                        </Row>
                        <Row center="sm">
                            <Col lg={8}>
                                <SelectField
                                    multiple={true}
                                    hintText="Difficulty"
                                    value={this.state.value}
                                    onChange={this.difficultyChange}
                                    fullWidth={true}
                                >
                                    {difficulty.map(difficulty => (
                                        <MenuItem
                                            key={difficulty}
                                            insetChildren={true}
                                            value={difficulty}
                                            primaryText={difficulty}
                                            styles={style.button}
                                        />
                                    ))}
                                </SelectField>
                            </Col>
                        </Row>
                        <Row center="sm">
                            <Col lg={8}>
                                <SelectField
                                    multiple={true}
                                    hintText="Type"
                                    value={this.state.value}
                                    onChange={this.typeChange}
                                    fullWidth={true}
                                >
                                    {type.map(type => (
                                        <MenuItem
                                            key={type}
                                            insetChildren={true}
                                            value={type}
                                            primaryText={type}
                                            styles={style.button}
                                        />
                                    ))}
                                </SelectField>
                            </Col>
                        </Row>
                        <Row center="sm">
                            <Col lg={8}
                            />
                            <TextField
                                hintText="Question"
                                fullWidth={true}
                            />
                        </Row>
                        <Row center="sm">
                            <Col lg={8} />
                            <TextField
                                hintText="Correct Answer"
                                fullWidth={true}
                            />
                        </Row>
                        <Row center="sm">
                            <Col lg={8}
                            />
                            <TextField
                                hintText="Incorrect Answer"
                                fullWidth={true}
                            />
                        </Row><Row center="sm">
                            <Col lg={8}
                            />
                            <TextField
                                hintText="Incorrect Answer"
                                fullWidth={true}
                            />
                        </Row><Row center="sm">
                            <Col lg={8}
                            />
                            <TextField
                                hintText="Incorrect Answer"
                                fullWidth={true}
                            />
                        </Row>
                        <Row center="sm">
                            <RaisedButton
                                label="Save"
                                primary={true}
                                fullWidth={true}
                                style={style.button}
                            />
                        </Row>
                    </div>
                </Grid>
            </Paper>
        )
    }
}
export default AddTestView