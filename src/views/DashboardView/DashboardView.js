import React from 'react';
import Button from './Button'
import Paper from 'material-ui/Paper'
import { Grid, Row, Col } from 'react-flexbox-grid'

class DashboardView extends React.Component {
    state = {
        viewportWidth: window.innerWidth
    }

    render() {
        return (
            <Paper>
                <Grid>
                    <Row middle="xs" center='xs'>
                        <Col lg={4}>
                            <Button
                                label={'list'}
                            />
                        </Col>
                        <Col lg={4}>
                            <Button
                                label={'favourite'}
                            />
                        </Col>
                        <Col lg={4}>
                            <Button
                                label={'add'}
                            />
                        </Col>
                    </Row>
                    <Row middle="xs" center='xs'>
                        <Col lg={6}>
                            <Row middle="xs" center='xs'>
                            </Row>
                        </Col>
                        <Col lg={6}>
                            <Row middle="xs" center='xs'>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </Paper>

        )
    }
}

export default DashboardView
