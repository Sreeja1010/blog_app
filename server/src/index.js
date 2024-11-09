const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./db/connect");
const { blogRouter } = require("./routes/blogRouter");

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173", "https://blog-app-zeta-five-51.vercel.app"],
    credentials: true
}))

app.use('/api/v1/blogs', blogRouter)

try{
    connectDB(process.env.MONGO_URI);
}catch(e){
    console.log(e);
}

app.listen(process.env.PORT, ()=>{
    console.log("Server running on port "+ process.env.PORT)
})