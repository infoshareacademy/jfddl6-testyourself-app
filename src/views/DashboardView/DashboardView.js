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
        dataTimeStamps: ''
    }

    componentDidMount() {
        database.ref(`/usersLogins/loginsLogs`).on(
            'value',
            snapshot => {
                this.setState({ dataTimeStamps: Object.values(snapshot.val()).map(el => Object.values(el)[0]) })
            }
        )
        window.addEventListener(
            'resize',
            this.resizeListener
        )
        database.ref(`/tests`).on(
            'value',
            snapshot => {
                if (!snapshot.val()) {
                    this.setState({ tests: [] })
                    return
                }
                const allTestsArray = Object.entries(snapshot.val())
                const testList = allTestsArray.map(([id, values]) => {
                    values.id = id
                    return values

                })
                
                this.setState({ tests: testList })
            }
        )
        database.ref(`/usersLogins`).on(
            'value',
            snapshot => {
                if (!snapshot.val()) {
                    this.setState({ loginsLog: [] })
                    return
                }
                const allLoginsArray = Object.entries(snapshot.val())
                const loginsData = allLoginsArray.map(([id, values]) => {
                    values.id = id
                    return values

                })
                // console.log(loginsData)
                //const timestamp=
                this.setState({ logins: loginsData })
            }
        )

    }



    resizeListener = () => {
        this.setState({
            viewportWidth: window.innerWidth
        })
    }

    render() {
        const now = new Date()
        const todayMidnightTimestamp = now.getTime()
            - now.getHours() * 60 * 60 * 1000
            - now.getMinutes() * 60 * 1000
            - now.getSeconds() * 1000
            - now.getMilliseconds()

        const loginsData = this.props.loginsData && this.props.loginsData.map(timestamp => timestamp.timestamp)

        const midnightTimestamp = {
            day0: todayMidnightTimestamp,
            day1: todayMidnightTimestamp - 24 * 60 * 60 * 1000,
            day2: todayMidnightTimestamp - 2 * 24 * 60 * 60 * 1000,
            day3: todayMidnightTimestamp - 3 * 24 * 60 * 60 * 1000,
            day4: todayMidnightTimestamp - 4 * 24 * 60 * 60 * 1000,
            day5: todayMidnightTimestamp - 5 * 24 * 60 * 60 * 1000,
            day6: todayMidnightTimestamp - 6 * 24 * 60 * 60 * 1000
        }

        const loginsPerDay = {
            day0: loginsData && loginsData.filter(timestamp => timestamp >= midnightTimestamp.day0).length,
            day1: loginsData && loginsData.filter(timestamp => timestamp >= midnightTimestamp.day1 && timestamp < midnightTimestamp.day0).length,
            day2: loginsData && loginsData.filter(timestamp => timestamp >= midnightTimestamp.day2 && timestamp < midnightTimestamp.day1).length,
            day3: loginsData && loginsData.filter(timestamp => timestamp >= midnightTimestamp.day3 && timestamp < midnightTimestamp.day2).length,
            day4: loginsData && loginsData.filter(timestamp => timestamp >= midnightTimestamp.day4 && timestamp < midnightTimestamp.day3).length,
            day5: loginsData && loginsData.filter(timestamp => timestamp >= midnightTimestamp.day5 && timestamp < midnightTimestamp.day4).length,
            day6: loginsData && loginsData.filter(timestamp => timestamp >= midnightTimestamp.day6 && timestamp < midnightTimestamp.day5).length
        }

        const barData = Object.values(loginsPerDay).map((loginsNumber, index) => ({
            day: 0 - index,
            users: loginsNumber,
            fill: "grey",
            label: false
        }))




        // const testsData = this.props.testList
        // const numberOfTestsScienceComp = testsData.filter(e => e.category === 'Science Computers').length
        // console.log(numberOfTestsScienceComp)
        // const numbersOfTestsAnimals = testsData.filter(e => e.category === 'Animals').length
        // console.log(numbersOfTestsAnimals)
        // const numberOfTestsGeography = testsData.filter(e => e.category === 'Geography').length
        // console.log(numberOfTestsGeography)
        // const numberOfTestsMythology = testsData.filter(e => e.category === 'Mythology').length
        // console.log(numberOfTestsMythology)

        // const pieData = [
        //     {
        //         value: numberOfTestsScienceComp,
        //         name: 'Science Computers',
        //         fill: 'blue'
        //     },
        //     {
        //         value: numbersOfTestsAnimals,
        //         name: 'Animals',
        //         fill: 'red'
        //     },
        //     {
        //         value: numberOfTestsGeography,
        //         name: 'Geography',
        //         fill: 'purple'
        //     },
        //     {
        //         value: numberOfTestsMythology,
        //         name: 'Mythology',
        //         fill: 'green'
        //     },
        // ]

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
                                    // pieChartData={pieData}
                                    viewportWidth={this.state.viewportWidth}
                                />
                            </Row>
                        </Col>
                        <Col lg={6}>
                            <Row middle="xs" center='xs'>
                                <BarChart
                                    barChartData={barData}
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
