import React from 'react'
import { PieChart, Pie, Tooltip } from "recharts";

const data = [
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
        <PieChart width={
            props.viewportWidth <= 992 ?
                props.viewportWidth / 1.5
                :
                props.viewportWidth / 2.5
        }
            height={500}>
            <Pie
                data={props.data || data}
                dataKey="value"
                nameKey="name"
            />
            <Tooltip />
        </PieChart>
    </div>
)

export default Chart

