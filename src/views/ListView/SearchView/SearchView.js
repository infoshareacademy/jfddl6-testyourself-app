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
        maxValue: this.props.value || 2,
        value: 1,

    }

    onSearchTextInputHandler = (event, value) => {

    }

    componentDidMount() {

        fetch(`https://test-yourself-95f1a.firebaseio.com/tests.json`)
            .then(response => response.json())
            .then(data => console.log(data))
    }

    render() {
        return (
            <Paper
                style={style}
            >
                <TextField
                    hintText="Search"
                    style={{ width: '100%' }}
                    onChange={this.onSearch}
                />

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
                            onChange={this.handleChange}
                        >
                            <MenuItem
                                value={1}
                                primaryText="Category"
                            />

                        </SelectField>
                    </Col>
                </Row>

                <Row>
                    {
                    }
                </Row>

            </Paper >
        )
    }
}
export default SearchView