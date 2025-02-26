const express = require("express")
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middlewares/errorHandler");

require('dotenv').config();

connectDb();
const app = express()

const port = process.env.PORT || 5000
app.use(express.json()); 
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler)



app.listen(port,()=>{
console.log(`listening at port" ${port}`)
})