import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/dbConfig.js";
import router from "./Routers/user.router.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

connectDB();

app.get('/',(req,res)=>{
    res.status(200).send("Welcome To Api")
})

app.use('/api/auth',router)

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("Server Started");
});