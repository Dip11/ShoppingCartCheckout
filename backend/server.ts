import express from 'express';

const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


// Routes
app.use('/', function(req, res){
     return res.send("Home")
});

app.listen(3000, () => {
    console.log("Start on port 3000.")
})

