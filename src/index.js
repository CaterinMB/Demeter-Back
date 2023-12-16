import app from './app.js'
import { sequelize } from './db/dataBase.js'
import { port } from './config.js'

async function main() {
    try{
        await sequelize.sync({force: false})
        app.listen(port);
        console.log('Server on port ', port);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();