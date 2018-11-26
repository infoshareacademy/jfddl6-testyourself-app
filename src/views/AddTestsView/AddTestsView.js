import React from 'react'
import Paper from "material-ui/Paper"
import { Grid, Row, Col } from "react-flexbox-grid"
import SelectField from "material-ui/SelectField"
import RaisedButton from "material-ui/RaisedButton"
import TextField from "material-ui/TextField"
import MenuItem from "material-ui/MenuItem"



const categories = ["Select Category", "Select Difficulty", "Select Type", "Question", "Answers", "CorrectAnswer"]

const style = {
    paper: {
        margin: 6,
        padding: 20
    },
    button: {
        marginTop: 20
    },
    item: {
        float: "left"
    }
};


class AddTestView extends Component {

    state = {
        value: null
    }
    handlerChange = (event, index, value) => this.setState({ value: value })

    render() {
        return (
            <Paper
                style={style.paper}>
                <Grid fluid>
                    <Row
                        center="xs">
                        <Col lg={10} />
                        <h1>
                            Add Test
                        </h1>
                    </Row>
                    <div>

                        <Row center="xs">
                            <Col lg={10} />
                            <TextField hintText="Select Category"
                                fullWidth={true} />
                        </Row>
                        <Row center="xs">
                            <Col lg={10} />
                            <TextField hintText="Select Difficulty"
                                fullWidth={true} />
                        </Row>
                        <Row center="xs">
                            <Col lg={10} />
                            <TextField hintText="Select Type"
                                fullWidth={true} />
                        </Row>
                        <Row center="xs">
                            <Col lg={10} />
                            <TextField hintText="Question"
                                fullWidth={true} />
                        </Row>
                        <Row center="xs">
                            <Col lg={10} />
                            <TextField hintText="Answers"
                                fullWidth={true} />
                        </Row>
                        <Row center="xs">
                            <Col lg={10} />
                            <TextField hintText="CorrectAnswer"
                                fullWidth={true} />
                        </Row>
                        <div
                            className="AddTestView__AvailableTestView">
                            <Row center="xs">
                                <Col lg={12}>
                                    <SelectField
                                        multiple={true}
                                        hintText="Choose category"
                                        value={this.state.value}
                                        onChange={this.handlerChange}
                                        fullWidth={true}
                                    >
                                        {categories.map(category => (
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
                        </div>
                        <Row center="xs">
                            <RaisedButton
                                label="Save"
                                primary={true}
                                fullWidth={true}
                                style={style.button}
                            />
                        </Row>
                    </div>
                </Grid>
            </Paper>)
    }
}
export default AddTestView