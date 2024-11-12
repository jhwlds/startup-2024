const express = require('express');
const uuid = require('uuid');
const app = express();
const port = 3000;

app.use(express.json());

let users = {};
let scores = [];


const apiRouter = express.Router();
app.use('/api', apiRouter);


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});