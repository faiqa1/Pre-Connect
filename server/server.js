const express = require("express")
const connectDb = require("./config/dbConnection");

require('dotenv').config();
console.log('MONGO_URI:', process.env.MONGO_URI); // Debugging log

connectDb();
const app = express()

const port = process.env.PORT || 5000
app.use(express.json()); 



app.listen(port,()=>{
console.log(`listening at port" ${port}`)
})