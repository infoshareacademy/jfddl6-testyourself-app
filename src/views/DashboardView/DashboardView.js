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
        numberOfTestsScienceComp: '',
        numberOfTestsGeography: '',
        numberOfTestsMythology: '',
        numbersOfTestsAnimals: '',
        testList: ''
    }

    componentDidMount() {
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
                const numberOfTestsScienceComp = testList.filter(e => e.category === 'Science Computers').length
        console.log(numberOfTestsScienceComp)
                this.setState({ tests: testList })
            }
        )
    }



    resizeListener = () => {
        this.setState({
            viewportWidth: window.innerWidth
        })
    }


    render() {
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
                                    // barChartData={barData}
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






