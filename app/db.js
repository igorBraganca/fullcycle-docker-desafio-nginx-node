const mysql = require('mysql2/promise')

async function createConnection({ host, port, user, password, database }) {
    try {
        const connection = await mysql.createConnection({ host, port, user, password, database })
        return connection
    } catch (err) {
        if (err.message === `Unknown database '${database}'`) {
            const connection = await mysql.createConnection({ host, port, user, password })
            await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`)
            connection.end()

            return await mysql.createConnection({ host, port, user, password, database })
        }

        throw err
    }
}

async function dbInit(connection) {
    await connection.query('CREATE TABLE IF NOT EXISTS people ( id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY (id));')
    await connection.query('INSERT INTO people (name) VALUES (?)', [`Name ${new Date().toISOString()}`])
}

async function getConnection() {
    const dbConfig = {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '123456',
        database: process.env.DB_NAME || 'nodeDB',
    }

    const connection = await createConnection(dbConfig)
    await dbInit(connection)
    console.log('Connection created')
    return connection
}

module.exports = {
    getConnection
}
