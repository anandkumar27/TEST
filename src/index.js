import dotenv from "dotenv";
import connectDB from "./db/db1.js";
dotenv.config()

import express from "express"

const app = express();
const PORT = 8000;



app.get("/", (req, res) => {
    res.send("File is successfully send by me.")
})

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port, ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("Database connection failed:", error);
    });