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
            }
        )
        window.addEventListener(
            'resize',
            this.resizeListener
        )
    }

    getDay = () => {
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
        return {
            day0: this.state.dataTimeStamps && this.state.dataTimeStamps.filter(timestamp => timestamp >= this.getDay().day0).length,
            day1: this.state.dataTimeStamps && this.state.dataTimeStamps.filter(timestamp => timestamp >= this.getDay().day1 && timestamp < this.getDay().day0).length,
            day2: this.state.dataTimeStamps && this.state.dataTimeStamps.filter(timestamp => timestamp >= this.getDay().day2 && timestamp < this.getDay().day1).length,
            day3: this.state.dataTimeStamps && this.state.dataTimeStamps.filter(timestamp => timestamp >= this.getDay().day3 && timestamp < this.getDay().day2).length,
            day4: this.state.dataTimeStamps && this.state.dataTimeStamps.filter(timestamp => timestamp >= this.getDay().day4 && timestamp < this.getDay().day3).length,
            day5: this.state.dataTimeStamps && this.state.dataTimeStamps.filter(timestamp => timestamp >= this.getDay().day5 && timestamp < this.getDay().day4).length,
            day6: this.state.dataTimeStamps && this.state.dataTimeStamps.filter(timestamp => timestamp >= this.getDay().day6 && timestamp < this.getDay().day5).length
        }
    }

    todayMidnightTimeStamp = () => {
        const now = new Date()
        return now.getTime()
            - now.getHours() * 60 * 60 * 1000
            - now.getMinutes() * 60 * 1000
            - now.getSeconds() * 1000
            - now.getMilliseconds()
    }

    resizeListener = () => {
        this.setState({
            viewportWidth: window.innerWidth
        })
    }

    render() {

        const data = [
            {
                time: "Today",
                users: this.numberOfUsersPerDay().day0,
            },
            {
                time: "Yesterday",
                users: this.numberOfUsersPerDay().day1,
            },
            {
                time: "2 days ago",
                users: this.numberOfUsersPerDay().day2,
            },
            {
                time: "3 days ago",
                users: this.numberOfUsersPerDay().day3,
            },
            {
                time: "4 days ago",
                users: this.numberOfUsersPerDay().day4,
            },
            {
                time: "5 days ago",
                users: this.numberOfUsersPerDay().day5,
            },
            {
                time: "6 days ago",
                users: this.numberOfUsersPerDay().day6,
            }
        ]
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
                                    data={data}
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
