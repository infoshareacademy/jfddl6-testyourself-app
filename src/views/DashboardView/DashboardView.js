import React from 'react';
import Button from './Button'
import Paper from 'material-ui/Paper'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'
import PieChart from './PieChart'
import BarChart from './BarChart'
import { database } from '../../firebase'
import { mapObjectToArray } from './utils'

const style = {
    paper: {
        margin: 10,
        padding: 10
    }
}

const dbMessagesRef = database.ref('/tests')
console.log(dbMessagesRef)


class DashboardView extends React.Component {
    state = {
        viewportWidth: window.innerWidth,
        tests: []
    }

    componentDidMount() {
        window.addEventListener(
            'resize',
            this.resizeListener
        )

        dbMessagesRef.on(
            'value',
            snapshot => {
                this.setState({
                    tests: mapObjectToArray(snapshot.val())

                })
            }
        )
    }


    resizeListener = () => {
        this.setState({
            viewportWidth: window.innerWidth
        })
    }


    render() {
        return (
            <Paper
                style={style.paper}>
                <Grid>
                    <Row middle="xs" center='xs'>
                        <Col lg={4}>
                            <Link to='./List'>
                                <Button
                                    label={'Go To List'}
                                />
                            </Link>
                        </Col>
                        <Col lg={4}>
                            <Link to='./favourite-tests-list'>
                                <Button
                                    label={'Go To Favourites'}
                                />
                            </Link>
                        </Col>
                        <Col lg={4}>
                            <Link to='/add-tests'>
                                <Button
                                    label={'Add New Test'}
                                />
                            </Link>
                        </Col>
                    </Row>
                    <Row middle="xs" center='xs'>
                        <Col lg={6}>
                            <Row middle="xs" center='xs'>
                                <PieChart
                                    data={[{
                                        value: 25,
                                        name: 'Science Computers',
                                        fill: 'blue'
                                    }]}
                                    viewportWidth={this.state.viewportWidth}
                                />
                            </Row>
                        </Col>
                        <Col lg={6}>
                            <Row middle="xs" center='xs'>
                                <BarChart
                                    viewportWidth={this.state.viewportWidth}
                                />
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </Paper>

        )
    }

    componentWillUnmount() {
        window.removeEventListener(
            'resize',
            this.resizeListener
        )
        dbMessagesRef.off()
    }

}

export default DashboardView
