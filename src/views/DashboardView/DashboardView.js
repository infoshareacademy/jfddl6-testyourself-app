import React from 'react';
import Button from './Button'
import { Grid, Row, Col } from 'react-flexbox-grid'

class DashboardView extends React.Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={4} />
                        <Col xs={4} />
                        <Col xs={4} />
                    </Row>
                    <Row>
                        <Col xs={6} />
                        <Col xs={6} />
                    </Row>
                </Grid>
                <Button
                />
                <Button
                />
                <Button
                />
            </div>
        )
    }
}
export default DashboardView
