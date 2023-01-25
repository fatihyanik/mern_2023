require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn.js")
const cors = require("cors");
const router = require("./Routes/router.js")
const PORT= 6010


app.use(cors());
app.use(express.json());
app.use(router);


app.get("/", (req,res)=>{
    res.status(201).json("Server start")
});

app.listen(PORT, ()=>{
    console.log(`Server start at port no ${PORT}`)
})