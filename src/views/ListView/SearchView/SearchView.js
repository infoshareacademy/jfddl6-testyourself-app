import React from 'react';

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
        maxValue: this.props.value || 2
    }

    render() {
        return (
            <Paper
                style={style}
            >
                <TextField
                    hintText="Search"
                    style={{ width: '100%' }}
                />
                <div>

                    <Slider
                        step={1}
                        max={this.state.maxValue}
                        value={this.state.maxValue}
                    />

                </div>
            </Paper>
        )
    }
}
export default SearchView