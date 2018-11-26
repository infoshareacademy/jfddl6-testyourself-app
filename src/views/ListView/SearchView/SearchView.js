import React from 'react'

import { Row, Col } from 'react-flexbox-grid';

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Slider from 'material-ui/Slider'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const style = {
    margin: 20,
    padding: 20,
    textAlign: 'center'
}

class SearchView extends React.Component {

    state = {
        maxValue: 5,
        value: 3,

    }

    render() {
        return (
            <Paper
                style={style}
            >
                <Row>
                    <Col xs={12}>
                        <TextField
                            hintText="Search"
                            onChange={this.props.onSearchTextChangeHandler}
                        />
                    </Col>
                </Row>


                <Row>
                    <Col xs={12} sm={3} md={2} lg={1} >
                        <h1>
                            {this.props.numberOfAnswers || 0}
                        </h1>
                    </Col>
                    <Col xs={6} sm={6} md={8} lg={10} >
                        <Slider
                            step={1}
                            max={this.state.maxValue}
                            value={this.state.maxValue}
                            onChange={this.props.onSearchSliderValueChangeHandler}
                        />

                    </Col>
                    <Col xs={6} sm={3} md={2} lg={1} >
                        <h1>
                            {this.props.numberOfAnswers || 0}
                        </h1>

                    </Col>

                </Row>

                <Row>
                    <Col xs={12}>
                        <SelectField
                            floatingLabelText="Categories"
                            value={1}
                            onChange={this.props.onSearchSelectFieldValueChangeHandler}
                        >
                            <MenuItem
                                value={1}
                                primaryText="Category"
                            />

                        </SelectField>
                    </Col>
                </Row>

            </Paper >
        )
    }
}
export default SearchView