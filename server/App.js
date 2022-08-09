import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import mongoose from 'mongoose'
import router from "./Routes/TodoRoute";
import UserRoute from "./Routes/UserRoute";
const app = express()


app.use(cors())
app.use(bodyParser.json())
app.use('/', router)
app.use('/', UserRoute)


mongoose.connect('mongodb://localhost:27017/Todo-App')
    .then(() => {
        console.log('connected db')
    })
    .catch(() => {
        console.log('Not connected ')
    })



app.listen(4000, () => {
    console.log('App Running 4000')
})