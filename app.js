//Require Express and Cors
import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import indexRoutes from './routes/index'
import usersRoutes from "./routes/users";
import authGuard from "./middleware/authGuard";
const app = express();

//Mongo
const url = 'mongodb://127.0.0.1:27017/nodeDb'


mongoose.Promise = global.Promise;
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection

db.once('open', _ => {
    console.log('Database connected:', url)
})

db.on('error', err => {
    console.error('connection error:', err)
})

app.use(authGuard.authGuard)
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.json());
app.use(indexRoutes)
app.use(usersRoutes)

export { app };
