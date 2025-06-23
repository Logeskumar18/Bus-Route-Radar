import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose';

dotenv.config();

const port = 3000 || process.env.PORT;
const MONGO_URL = 'mongodb+srv://loges:loges123@cluster0.lbatjkt.mongodb.net/express'

mongoose.connect(MONGO_URL).then(()=>{
    console.log('Databace Connected');
    
})



const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>" + port)
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})