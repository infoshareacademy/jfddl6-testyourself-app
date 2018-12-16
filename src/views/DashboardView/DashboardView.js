import React from 'react';
import Button from './Button'
import Paper from 'material-ui/Paper'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'
import PieChart from './PieChart'
import BarChart from './BarChart'
import { database } from '../../firebase'

const style = {
    paper: {
        margin: 10,
        padding: 10
    }
}


class DashboardView extends React.Component {
    state = {
        viewportWidth: window.innerWidth,
        dataTimeStamps: []
    }

    componentDidMount() {
        database.ref(`/usersLogins/loginsLogs`).once(
            'value',
            snapshot => {
                this.setState({ dataTimeStamps: Object.values(snapshot.val()).map(el => Object.values(el)[0]) })
                // console.log(this.state.dataTimeStamps)
            }
        )
        window.addEventListener(
            'resize',
            this.resizeListener

        )

        this.numberOfUsersPerDay()
    }

    getDay = () => {
        console.log('dataaaa', this.state.dataTimeStamps)

        const todaysMidnight = this.todayMidnightTimeStamp()
        return {
            day0: todaysMidnight,
            day1: todaysMidnight - 24 * 60 * 60 * 1000,
            day2: todaysMidnight - 2 * 24 * 60 * 60 * 1000,
            day3: todaysMidnight - 3 * 24 * 60 * 60 * 1000,
            day4: todaysMidnight - 4 * 24 * 60 * 60 * 1000,
            day5: todaysMidnight - 5 * 24 * 60 * 60 * 1000,
            day6: todaysMidnight - 6 * 24 * 60 * 60 * 1000
        }
    }

    numberOfUsersPerDay = () => {
        console.log('day0', this.getDay().day0)
        console.log('data', this.state.dataTimeStamps)
        // console.log('aaa',this.state.dataTimeStamps && this.state.dataTimeStamps.filter(timestamp => timestamp >= this.getDay(this.todayMidnightTimeStamp()).day0))


        // return {
        //     day0: this.state.dataTimeStamps && this.state.dataTimeStamps.filter(timestamp => timestamp >= this.getDay().day0).length,

        //     day1: this.state.dataTimeStamps && this.state.dataTimeStamps.filter(timestamp => timestamp >= midnightTimestamp.day1 && timestamp < midnightTimestamp.day0).length,
        //     day2: this.state.dataTimeStamps && this.state.dataTimeStamps.filter(timestamp => timestamp >= midnightTimestamp.day2 && timestamp < midnightTimestamp.day1).length,
        //     day3: this.state.dataTimeStamps && this.state.dataTimeStamps.filter(timestamp => timestamp >= midnightTimestamp.day3 && timestamp < midnightTimestamp.day2).length,
        //     day4: this.state.dataTimeStamps && this.state.dataTimeStamps.filter(timestamp => timestamp >= midnightTimestamp.day4 && timestamp < midnightTimestamp.day3).length,
        //     day5: this.state.dataTimeStamps && this.state.dataTimeStamps.filter(timestamp => timestamp >= midnightTimestamp.day5 && timestamp < midnightTimestamp.day4).length,
        //     day6: this.state.dataTimeStamps && this.state.dataTimeStamps.filter(timestamp => timestamp >= midnightTimestamp.day6 && timestamp < midnightTimestamp.day5).length
        // }
    }


    todayMidnightTimeStamp = () => {
        const now = new Date()
        return now.getTime()
            - now.getHours() * 60 * 60 * 1000
            - now.getMinutes() * 60 * 1000
            - now.getSeconds() * 1000
            - now.getMilliseconds()
        // console.log(todayMidnightTimestmap)
    }


    resizeListener = () => {
        // console.log(window.innerWidth)
        this.setState({
            viewportWidth: window.innerWidth
        })
    }

    render() {
        console.log('dupa',this.state.dataTimeStamps)
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
