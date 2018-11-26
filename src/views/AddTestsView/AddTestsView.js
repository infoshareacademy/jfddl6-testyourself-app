import React from 'react'

const categories = ["categories", "question", "answers","correctAnswer",]

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
        return ({})
    }
}
export default AddTestView