import React from 'react'
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { database } from '../../firebase'





const Chart = (props) => {

    const numberOfTestsScienceComp = props.tests.filter(
        test => test.category === 'Science Computers'
    )

    const numbersOfTestsAnimals = props.tests.filter(
        test => test.category === 'Animals'
    )
    const numberOfTestsGeography = props.tests.filter(
        test => test.category === 'Geography'
    )

    const numberOfTestsMythology = props.tests.filter(
        test => test.category === 'Mythology'
    )


    const data = [
        {
            value: numberOfTestsScienceComp.length,
            name: 'Science Computers',
            fill: 'blue'
        },
        {
            value: numbersOfTestsAnimals.length,
            name: 'Animals',
            fill: 'red'
        },
        {
            value: numberOfTestsGeography.length,
            name: 'Geography',
            fill: 'purple'
        },
        {
            value: numberOfTestsMythology.length,
            name: 'Mythology',
            fill: 'green'
        }
        // {
        //     value: 15,
        //     name: 'New-added test',
        //     fill: 'yellow'
        // }
    ]
    const pie_cells = data.map((entry, index) => {
        return (<Cell key={index} fill={entry.color} />)
    });

    return (
        <div>
            <h3>Number test categories in database</h3>
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
                >
                    {pie_cells}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    )
}

export default Chart

