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

    render() {
        return (
            <Paper
                style={style}
            >
                <Row>
                    <Col xs={12}>
                        <TextField
                            floatingLabelText="Search"
                            onChange={this.props.onSearchTextChangeHandler}
                        />
                    </Col>
                </Row>


                <Row>
                    {/* <Col xs={12} sm={3} md={2} lg={1} >
                        <h1>
                            {this.props.numberOfAnswers || 0}
                        </h1>
                    </Col> */}
                    <Col xs={12} sm={9} md={10} lg={11} >
                        <Slider
                            step={1}
                            max={this.props.maxSearchedNumberOfQuestionsInTest}
                            value={this.props.searchedNumberOfQuestionsInTest}
                            onChange={this.props.onSearchSliderValueChangeHandler}
                        />

                    </Col>
                    <Col xs={12} sm={3} md={2} lg={1} >
                        <h1>
                            {this.props.searchedNumberOfQuestionsInTest || 0}
                        </h1>
                    </Col>

                </Row>

                <Row>
                    <Col xs={12}>
                        <SelectField
                            floatingLabelText="Categories"
                            value={this.props.chosenCategoryFilter + 1}
                            onChange={this.props.onSearchSelectFieldValueChangeHandler}
                        >
                            {/* {console.log(this.props.chosenCategoryFilter + 1)} */}
                            {this.props.categoryFilters.map((filter, index) => (
                                <MenuItem
                                    key={index}
                                    value={index + 1}
                                    primaryText={filter}
                                />
                            ))}

                        </SelectField>
                    </Col>
                </Row>

            </Paper >
        )
    }
}
export default SearchView