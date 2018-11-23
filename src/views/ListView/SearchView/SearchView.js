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
    handleChange = (event, index, value) => this.setState({ value })

    render() {
        return (
            <Paper
                style={style}
            >
                <TextField
                    hintText="Search"
                    style={{ width: '100%' }}
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

                <SelectField
                    floatingLabelText="Frequency"
                    value={'this.state.value'}
                    onChange={this.handleChange}
                    autoWidth={true}
                >
                    <MenuItem value={1} primaryText="Auto width" />
                    <MenuItem value={2} primaryText="Every Night" />
                    <MenuItem value={3} primaryText="Weeknights" />
                    <MenuItem value={4} primaryText="Weekends" />
                    <MenuItem value={5} primaryText="Weekly" />
                </SelectField>

            </Paper >
        )
    }
}
export default SearchView