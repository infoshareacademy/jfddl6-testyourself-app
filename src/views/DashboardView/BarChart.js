import React from 'react'
import { BarChart, Tooltip, Legend, CartesianGrid, XAxis, YAxis, Bar } from 'recharts'

const data = [
    {
        time: "Today",
        users: 50,
    },
    {
        time: "Yesterday",
        users: 27,
    },
    {
        time: "2 days ago",
        users: 89,
    },
    {
        time: "3 days ago",
        users: 280,
    },
    {
        time: "4 days ago",
        users: 280,
    },
    {
        time: "5 days ago",
        users: 280,
    },
    {
        time: "6 days ago",
        users: 280,
    }
]




const Chart = (props) => (


    <div>
        <BarChart
            width={props.viewportWidth <= 992 ?
                props.viewportWidth / 1.5
                :
                props.viewportWidth / 2.5
            }
            height={300} data={data}>
            <XAxis dataKey="time" stroke="#8884d8" />
            <YAxis />
            <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
            <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar type="monotone" dataKey="users" fill="#8884d8" />
        </BarChart>
    </div>
);
export default Chart