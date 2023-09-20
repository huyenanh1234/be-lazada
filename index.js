import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routers from "./routes/index.js";
dotenv.config();
mongoose.connect(process.env.ATLAS_URI, {autoIndex: true})
    .then(() => console.log('Connected!'));

const app = express(); // instan của express

app.use(cors());// vấn đề bảo mật: cho phép nhưng ip nào được quyền truy cập vào server của m. rỗng là cho phép tất cả
app.use(express.json()); //quét form json: nhận các api mà body có content type là json
app.use(bodyParser.urlencoded({extended: true})) //hai mildelware mà detect gửi lên
app.use(express.static('storage/users'))
// Load routes
routers(app); // function call -> đầu vào là app để khai báo các routs

const PORT = process.env.PORT || 5050;
app.listen(PORT,()=>{
    console.log("Server is running port " + PORT);
});


