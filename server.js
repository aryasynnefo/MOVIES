import express from "express";
import dotenv from "dotenv";
import router from "./router.js";
import cors from "cors";
import connect from "./conn.js";
const app=express();
dotenv.config();
app.use(cors());
app.use(express.json({ limit: "10000kb", extended: true }));
app.use('/api',router); 
connect().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server generated");
    })
}).catch((error)=>{
    console.log(error);
})