import React from 'react';
import Button from './Button'
import Paper from 'material-ui/Paper'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'
import PieChart from './PieChart'
import BarChart from './BarChart'
import {database} from '../../firebase'

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

    componentDidMount() {
        database.ref(`/usersLogins/loginsLogs`).on(
            'value',
            snapshot=>{
                console.log(snapshot.val())
                console.log('logs',Object.values(snapshot.val()))}
        )
           

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
