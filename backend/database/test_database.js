const database = require('./database')


async function test_database_queries() {
    const user = await database.executeQuery(`INSERT INTO public."user" (id, email) VALUES ('67686784', 'test_email@gmail.com') `)
        // const user = await database.executeQuery(`SELECT id, email FROM public."user";`)
    console.log(user)
    return true
}

test_database_queries()