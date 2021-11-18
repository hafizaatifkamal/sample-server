const express = require('express');
const mongoose = require("mongoose");


app = express();
PORT = process.env.PORT || 5000;

const router = require("./routes/index");
app.use(router);
app.use(express.json());

const db = mongoose.connection;

app.get("/", (req, res) => res.send("Hello there! ....This is the homepage...."));

app.listen(PORT, () => {

    try {
        mongoose.connect("mongodb://localhost:27017/sample_db");

        db.on("error", () => console.log(`Database connection error`));

        db.once("open", function() {
            console.log("Sample Database connected!!");
        });

    } catch (error) {
        console.log(`Something went wrong! ${error}`);
    }

    console.log(`Express server listening on ${PORT} port!`);
});