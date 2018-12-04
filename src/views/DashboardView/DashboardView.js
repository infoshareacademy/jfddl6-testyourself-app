import React from 'react';
import Button from './Button'
import Paper from 'material-ui/Paper'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'
import PieChart from './PieChart'
import BarChart from './BarChart'


const style = {
    paper: {
        margin: 10,
        padding: 10
    }
}



class DashboardView extends React.Component {
    state = {
        viewportWidth: window.innerWidth
    }


    loadFromFirebase = () => {
        fetch('https://test-yourself-95f1a.firebaseio.com/tests.json')
            .then(response => response.json())
            .then(data => {
                if (this.state.tests === data) return
                this.setState({ tests: data })
                console.log(data)
            })

    }
    componentWillMount() {
        this.loadFromFirebase()
    }


    componentDidMount() {
        window.addEventListener(
            'resize',
            this.resizeListener
        )
    }

    resizeListener = () => {
        console.log(window.innerWidth)
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
    }
}

export default DashboardView
