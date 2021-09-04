// const express = require('express');
import * as express from "express";
// import express from "express";
// import * as path from "path";
// import path from "path";
// import {bodyParser} from "body-parser";
// const bodyParser = require("body-parser");
import * as bodyParser from "body-parser";
import CustomerRouter from "./routes/customer.route";
// require('dotenv').config();
// import * as dotenv from "dotenv";
import dotenv from "dotenv";

dotenv.config();
if (process.env.NODE_ENV !== "production") dotenv.config();

// const app = express();
const app = express.default();

const PORT = process.env.PORT || 4000;

// app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: true}));

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "react_seed_client/build")));
//     app.get("*", (req, res) => {
//         res.sendFile(path.join(__dirname, "react_seed_client/build", "index.html"));
//     });
// }

app.get("/", (req, res) => {
    res.send("Hello");
});
const customerRouter = new CustomerRouter();


app.use("/customerlist", (req, res) => customerRouter.customerList(req, res));
// app.use("/customerlist", customerRouter.customerRouter);
// app.use('/customers', require('./routes/customer.route'));

app.use("/create", (req, res) => customerRouter.create(req, res));
app.use("/update", (req, res) => customerRouter.update(req, res));

app.listen(PORT, () => {

    console.log(`listening on port: ${PORT}`);
});
