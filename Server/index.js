import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/mongodb.js';
import busRouter from './routes/busRoutes.js';

dotenv.config();

const port = 3000 || process.env.PORT;


connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>" + port)
});

app.use('/api/bus', busRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})