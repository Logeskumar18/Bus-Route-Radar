import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();

const port = 3000 || process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>" + port)
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})