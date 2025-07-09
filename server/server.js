import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';

/** Load environment variables first */
config();

/** import connection file */
import connect from './database/conn.js';

const app = express()

/** app middlewares */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());


/** appliation port */
const port = process.env.PORT || 8080;


/** routes */
app.use('/api', router) /** apis */


app.get('/', (req, res) => {
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
})


/** start server and try to connect to database */
const startServer = async () => {
    try {
        await connect();
        console.log(`Server connected to http://localhost:${port} with database`);
    } catch (error) {
        console.log("Database connection failed, but server will run with mock data");
        console.log(`Server connected to http://localhost:${port} (no database)`);
    }
    
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

startServer();