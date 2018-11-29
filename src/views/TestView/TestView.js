import React from 'react';
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
    paper: {
        margin: 20,
        padding: 20,
        heigth: "100%"
    },
    button: {
        position: 'fixed',
        left: 0,
        padding: 3,
        bottom: 0
    }
}

const TestView = (props) => (
   

    <Paper
        style={style.paper}
    >
    {
        <div>


    {
        
        console.log(props.location.pathname)
        
        
        /* toggleFavorite = (this.test) => {
        fetch(
            `https://test-yourself-95f1a.firebaseio.com/tests/${test.id}.json`,
            {
                method: 'PATCH',
                body: JSON.stringify({ favorite: !test.favorite })
            }
        ).then(() => { this.loadData() })
    }
    

      loadData = () => {
        fetch(`https://test-yourself-95f1a.firebaseio.com/tests.json`)
            .then(response => response.json())
            .then(data => {
                if (!data) {
                    this.setState({ tests: [] })
                    return
                }
                const allTestsArray = Object.entries(data)
                const testList = allTestsArray.map(([id, values]) => {
                    values.id = id //nowa wlasciwosc id w obiekcie testy 
                    return values
                })
                this.setState({ tests: testList })
            })
    } */}


      <RaisedButton
            label={"Add to favourite"}
            primary={true}
            style={style.button}
            fullWidth={true}
            onClick={()=>{}}
        />  </div>
        }
    </Paper>
)

export default TestView