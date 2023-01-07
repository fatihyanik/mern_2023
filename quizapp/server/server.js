import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';


const app = express();

// App middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

/** Application Port */
const port = process.env.PORT || 8080;

/** Routes */
app.get('/', (req, res) => {
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
})

app.listen(port, () => {
    console.log(`Server connected to http://localhost:${port}`);
})