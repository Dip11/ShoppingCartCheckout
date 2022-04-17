import express from 'express';
const routes = require("./src/routes/index.routes");


const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


// Routes
routes(app);

app.listen(3000, () => {
    console.log("Start on port 3000.")
})

