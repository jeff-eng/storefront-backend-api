import * as dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './handlers/products-handler';


dotenv.config();

const app = express();

const {
    PORT
} = process.env;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello world');
});

productRoutes(app);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

export default app;