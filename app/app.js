const express = require('express')
const { getConnection } = require('./db')

const app = express()

app.get('/', async (req, res) => {
    const connection = await getConnection()
    const [rows, fields] = await connection.query('SELECT name FROM people')

    const response = ['<h1>Full Cycle Rocks!</h1>']
    for (const person of rows) {
        response.push(`<p>${person.name}</p>`)
    }

    connection.end()
    res.send(response.join('\n'))
})

module.exports = {
    app
}