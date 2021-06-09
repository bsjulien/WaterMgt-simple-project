import express from "express";

import bodyParser from "body-parser";

import dotenv from "dotenv";

import cors from "cors";

import router from "./routes/index.js";

const app = express();

dotenv.config();

const port = process.env.PORT || 2021;

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
    console.log(`Our waterco API is now available on port ${port}`)
})

// // Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin','*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type', 'origin');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    }
    else {
        next();
    }
});