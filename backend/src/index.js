import express from "express";
import dotenv from "dotenv";

dotenv.config();


const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Guys welcome to leetlab🔥")
})

app.listen(process.env.PORT, ()=>{
    console.log("Server running on port 8080");
});