//Require Express and Cors
import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import indexRoutes from './routes/index'
import usersRoutes from "./routes/users";
import authGuard from "./middleware/authGuard";

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

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

app.use(cors(corsOptions))
app.use(authGuard.authGuard)
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.json());
app.use(indexRoutes)
app.use(usersRoutes)

export { app };
