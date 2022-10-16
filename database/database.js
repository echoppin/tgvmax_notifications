const { Client } = require('pg');

const client = new Client({
    host: '127.0.0.1',
    user: 'postgres',
    password: 'postgres',
    port: 5432,
});


const connectToDB = async() => {
    try {
        await client.connect(); // gets connection
        return client;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};



const executeQuery = async(querystring) => {
    try {
        await client.connect(); // gets connection
        const response = await client.query(querystring);
        return response;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
}


module.exports = { connectToDB, executeQuery }