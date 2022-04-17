import express from 'express';
import 'dotenv/config';
import cors from 'cors';
const routes = require("./src/routes/index.routes");


const app: express.Express = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


// Routes
routes(app);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Start on port ${port}.`);
})

