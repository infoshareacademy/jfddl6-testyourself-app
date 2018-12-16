import React from 'react'
import { PieChart, Pie, Tooltip } from "recharts";


const pieChartData = [
    {
        value: 25,
        name: 'Science Computers',
        fill: 'blue'
    },
    {
        value: 20,
        name: 'Animals',
        fill: 'red'
    },
    {
        value: 15,
        name: 'Geography',
        fill: 'purple'
    },
    {
        value: 35,
        name: 'Mythology',
        fill: 'green'
    },
    {
        value: 15,
        name: 'New-added test',
        fill: 'yellow'
    }
]

const Chart = (props) => (
    <div>
        <h3
            style={{ textAlign: 'center' }}
        >
            Tests categories
    </h3>
        <PieChart width={
            props.viewportWidth <= 992 ?
                props.viewportWidth / 1.5
                :
                props.viewportWidth / 2.5
        }
            height={500}>
            <Pie
                data={props.pieChartData || pieChartData}
                dataKey="value"
                nameKey="name" />
            <Tooltip />
        </PieChart>
    </div>
);
export default Chart


