const axios = require('axios');

async function test_setUser() {
    const res = await axios.post('http://localhost:3001/setuser', {
            firstName: "ernest",
            lastName: "choppin",
            email: "ernest.choppin.de.janvry@hotmail.com",
            password: "password",
            permissionLevel: 1,
            age: "23",
            dateOfBirth: "1999-01-02",
            tgvmaxNumber: "29090125515984649",
        });
    console.log(res.data)
}

test_setUser()

async function test_definetrip() {

    const res = await axios.post('http://localhost:3001/definetrip', {

            date: "2022-10-15T11:01:16.879Z",
            origin_id: "CITY_FR_6455259",
            origin_label: "Paris",
            destination_id: "RESARAIL_STA_FRABA",
            destination_label: "Dijon Ville",
            user_id: "1934893434",

    });
    console.log(res.data)
}

test_definetrip()