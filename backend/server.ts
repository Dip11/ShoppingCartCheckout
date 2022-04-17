import express from 'express';
import 'dotenv/config';
const routes = require("./src/routes/index.routes");


const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


// Routes
routes(app);

const port = process.env.PORT || 5000;

app.listen(process.env.port, () => {
    console.log(`Start on port ${port}.`);
})

