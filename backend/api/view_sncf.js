const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");
const serializer_sncf = require("./serializer_sncf");


const app = express();

app.use(express.json());
app.use(cors());

app.get("/outfit", (req, res) => {
    const tops = ["Black", "White", "Orange", "Navy"];
    const jeans = ["Grey", "Dark Grey", "Black", "Navy"];
    const shoes = ["White", "Grey", "Black"];

    res.json({
        top: _.sample(tops),
        jeans: _.sample(jeans),
        shoes: _.sample(shoes)
    });
});

app.post("/definetrip", async(req, res) => {
    const body = req.body;

    if (!body || !serializer_sncf.serilizer_definetrip(body)) {
        return res.sendStatus(400);
    }

    const sncf_response = await serializer_sncf.serializer_output_definetrip(body.body)

    res.status(201).json({
        sncf_response: sncf_response
    });
});

app.post("/setuser", async(req, res) => {
    const id = uuid();
    const body = req.body;

    if (!body) {
        return res.sendStatus(400);
    }

    // post in db

    res.status(201).json({
        body: body
    });
});

app.listen(3001, () => console.log("API Server is running..."));