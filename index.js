const express = require("express");
const app = express();

//load config env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes
const blogRoutes = require("./routes/blogRoutes");
app.use("/api/v1",blogRoutes);

//start server
app.listen(PORT, ()=>{
    console.log(`Server Started successfully at ${PORT}`);
})

//connect to the DB
const dbConnect = require("./config/database");
dbConnect();

//default route of the application

app.get("/",(req,res)=>{
    res.send(`<h1>This is Home Page for Blog</h1>`);
})