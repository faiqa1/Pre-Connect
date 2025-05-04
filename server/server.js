const express = require("express")
const cors = require("cors");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middlewares/errorHandler");

require('dotenv').config();

connectDb();
const app = express()

const port = process.env.PORT || 8080
app.use(cors());
app.use(express.json()); 
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/profile", require("./routes/profileRoutes"));
app.use("/api/static-data", require("./routes/staticDataRoutes"));
app.use(errorHandler)



app.listen(port,()=>{
console.log(`listening at port ${port}`)
})