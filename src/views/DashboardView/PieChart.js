import React from 'react'
import { PieChart, Pie, Tooltip } from "recharts"

import { database } from '../../firebase'
import mapObjectToArray, { randomColor } from './utils';

class Chart extends React.Component {

    state = {
        categories: []
    }

    componentDidMount() {
        database.ref(`/questions`).on(
            'value',
            snapshot => {
                if (!snapshot.val()) {
                    return
                }

                const questionsObjects = mapObjectToArray(snapshot.val())

                const questionsCategories = questionsObjects.map((question, i, array) => {
                    const questionEntriesArray = Object.entries(question)
                    return questionEntriesArray[0][1]
                })

                const categoriesNames = [...new Set(questionsCategories)]
                // const numberOfCategories = categoriesNames.length
                const categoriesArray = []

                categoriesNames.forEach((categoryName) => {
                    let counter = 0
                    questionsCategories.forEach((category) => {
                        if (categoryName === category) counter++
                    })

                    categoriesArray.push({
                        value: counter,
                        name: categoryName,
                        fill: randomColor()
                    })
                })

                this.setState({ categories: categoriesArray })
            }
        )
    }

    render() {
        return (
            <div>
                <h3
                    style={{ textAlign: 'center' }}
                >
                    Tests categories
               </h3>
                <PieChart width={
                    this.props.viewportWidth <= 992 ?
                        this.props.viewportWidth / 1.5
                        :
                        this.props.viewportWidth / 2.5
                }
                    height={500}>
                    <Pie
                        data={this.state.categories}
                        dataKey="value"
                        nameKey="name" />
                    <Tooltip />
                </PieChart>
            </div>
        )
    }
}
export default Chart


